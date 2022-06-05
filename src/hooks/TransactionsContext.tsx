/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext, ReactNode, useEffect, useState, useContext,
} from 'react';

import { api } from '../api';

interface ITransactions {
  id: number;
  title: string;
  category: string;
  type: string;
  amount: number;
  createdAt: string;
}

type TransactionInput = Omit<ITransactions, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: ITransactions[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  useEffect(() => {
    api.get('/transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransaction() {
  const context = useContext(TransactionsContext);

  return context;
}
