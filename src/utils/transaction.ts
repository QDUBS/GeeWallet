import axios from "axios";
import { BASE_URL } from "../constants/endpoints";
import { ITransaction } from "../interfaces/transaction";

export const createTransaction = async (transactionData: ITransaction) => {
  try {
    const response = await axios.post(`${BASE_URL}/transactions`, {
      amount: transactionData.amount,
      description: transactionData.description,
      category: transactionData.category,
      date: transactionData.date,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllTransactions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/transactions`);
    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching transactions:", error);
    throw error;
  }
};

export const getSingleTransaction = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/transactions/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      `An error occurred while fetching transaction with id ${id}:`,
      error
    );
    throw error;
  }
};
