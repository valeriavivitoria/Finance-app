import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import { fetchTransactions, fetchBalance, addTransaction, removeTransaction } from "../services/transactionService";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState({ saldo: 0, receitas: 0, despesas: 0 });
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState("");

  const loadData = async () => {
    setDataLoading(true);
    try {
      const [transactionsData, balanceData] = await Promise.all([fetchTransactions(), fetchBalance()]);
      setTransactions(transactionsData);
      setBalance(balanceData);
    } catch (err) {
      setError(err.response?.data?.error || "Erro ao carregar dados");
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreate = async (payload) => {
    setLoading(true);
    setError("");

    try {
      const transaction = await addTransaction(payload);
      setTransactions((current) => [transaction, ...current]);
      const balanceData = await fetchBalance();
      setBalance(balanceData);
    } catch (err) {
      setError(err.response?.data?.error || "Erro ao salvar transação");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setError("");
    try {
      await removeTransaction(id);
      setTransactions((current) => current.filter((item) => item.id !== id));
      const balanceData = await fetchBalance();
      setBalance(balanceData);
    } catch (err) {
      setError(err.response?.data?.error || "Erro ao excluir transação");
    }
  };

  return (
    <div className="page-container dashboard-page fade-in">
      <Navbar title="Painel" />
      <main className="dashboard-grid">
        <section className="card summary-card">
          <div className="summary-header">
            <div>
              <p className="eyebrow">Visão geral</p>
              <h2>Controle financeiro</h2>
              <p className="summary-copy">Saldo em destaque, receitas e despesas organizadas para uma visão clara do seu fluxo.</p>
            </div>
            <div className="summary-status">
              {dataLoading ? <span className="loader">Carregando dados</span> : <span className="status-badge">Atualizado</span>}
            </div>
          </div>

          <div className="balance-display card-highlight">
            <span>Saldo disponível</span>
            <strong>R$ {Number(balance.saldo).toFixed(2)}</strong>
          </div>

          <div className="summary-grid">
            <div className="summary-box accent">
              <p>Receitas</p>
              <strong className="text-success">R$ {Number(balance.receitas).toFixed(2)}</strong>
            </div>
            <div className="summary-box accent">
              <p>Despesas</p>
              <strong className="text-danger">R$ {Number(balance.despesas).toFixed(2)}</strong>
            </div>
          </div>
        </section>

        <section className="dashboard-left">
          <TransactionForm onSubmit={handleCreate} loading={loading} />
          {error && <p className="form-error">{error}</p>}
        </section>

        <section className="dashboard-right">
          <TransactionList transactions={transactions} onDelete={handleDelete} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
