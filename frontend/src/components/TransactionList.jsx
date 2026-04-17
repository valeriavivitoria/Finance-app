const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="card transactions-card fade-in">
      <div className="transactions-header">
        <h2>Transações</h2>
        <p className="small-text">Acompanhe entradas e saídas em tempo real.</p>
      </div>
      {transactions.length === 0 ? (
        <p className="empty-state">Nenhuma transação encontrada</p>
      ) : (
        <ul className="transactions-list">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="transaction-item">
              <div>
                <strong className="transaction-name">{transaction.tipo === "receita" ? "Receita" : "Despesa"}</strong>
                <p>{transaction.descricao || "Sem descrição"}</p>
              </div>
              <div className="transaction-meta">
                <span className={transaction.tipo === "receita" ? "tag green" : "tag red"}>
                  R$ {Number(transaction.valor).toFixed(2)}
                </span>
                <button className="button button-danger" onClick={() => onDelete(transaction.id)}>
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
