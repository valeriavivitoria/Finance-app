import api from "./api";

export const fetchTransactions = async () => {
  const response = await api.get("/transactions");
  return response.data;
};

export const fetchBalance = async () => {
  const response = await api.get("/balance");
  return response.data;
};

export const addTransaction = async (payload) => {
  const response = await api.post("/transactions", payload);
  return response.data;
};

export const removeTransaction = async (id) => {
  const response = await api.delete(`/transactions/${id}`);
  return response.data;
};
