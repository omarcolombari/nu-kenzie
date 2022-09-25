import React, { createContext, useEffect, useState } from "react";
import { TransactionContextType, ITransaction } from "@/types/transactions";
import { compareObjects } from "@/utils/compare-objects";

interface IProps {
  children?: React.ReactNode;
}

export const TransactionContext = createContext<TransactionContextType | null>(
  null
);

export const TransactionProvider: React.FC<IProps> = ({ children }) => {
  const [listTransactions, setListTransactions] = useState<ITransaction[]>(
    JSON.parse(localStorage.getItem("@nuKenzie:transactions") || "[]")
  );

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem(
      "@nuKenzie:transactions",
      JSON.stringify(listTransactions)
    );
  }, [listTransactions]);

  const createTransaction = (data: ITransaction) => {
    setListTransactions([...listTransactions, data]);
  };

  const removeTransaction = (Transaction: ITransaction) => {
    const newList = listTransactions.filter((item) => {
      if (!compareObjects({ firstObject: Transaction, secondObject: item })) {
        return item;
      }
    });
    setListTransactions(newList);
  };

  return (
    <TransactionContext.Provider
      value={{
        createTransaction,
        listTransactions,
        removeTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
