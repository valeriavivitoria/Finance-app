import { useState } from "react";

const TransactionForm = ({ onSubmit, loading }) => {
  const [tipo, setTipo] = useState("receita");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ tipo, valor: Number(valor), descricao });
    setValor("");
    setDescricao("");
  };

  return (
    <form className="card form-card fade-in" onSubmit={handleSubmit}>
      <h2>Adicionar transação</h2>
      <fieldset disabled={loading} className="form-fieldset">
      <label>
        Tipo
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="receita">Receita</option>
          <option value="despesa">Despesa</option>
        </select>
      </label>
      <label>
        Valor
        <input
          type="number"
          step="0.01"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="0.00"
          required
        />
      </label>
      <label>
        Descrição
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição opcional"
        />
      </label>
      </fieldset>
      <button className="button button-primary" type="submit" disabled={loading}>
        {loading ? "Salvando..." : "Adicionar"}
      </button>
    </form>
  );
};

export default TransactionForm;
