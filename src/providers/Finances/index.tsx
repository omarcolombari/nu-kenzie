import React, { createContext, useState } from "react";
import { FinanceContextType, IFinance } from "@/types/finances";
import { compareObjects } from "@/utils/compare-objects";

interface IProps {
  children?: React.ReactNode;
}

export const FinanceContext = createContext<FinanceContextType | null>(null);

export const FinanceProvider: React.FC<IProps> = ({ children }) => {
  const [listTransactions, setListTransactions] = useState<IFinance[]>([]);

  const createFinance = (data: IFinance) => {
    setListTransactions([...listTransactions, data]);
  };

  const removeFinance = (finance: IFinance) => {
    const newList = listTransactions.filter((item) => {
      if (!compareObjects({ firstObject: finance, secondObject: item })) {
        return item;
      }
    });
    setListTransactions(newList);
  };

  return (
    <FinanceContext.Provider
      value={{
        createFinance,
        listTransactions,
        removeFinance,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
