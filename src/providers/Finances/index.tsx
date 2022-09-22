import React, { createContext, useState } from "react";
import { FinanceContextType, IFinance } from "@/types/finances";

interface IProps {
  children?: React.ReactNode;
}

export const FinanceContext = createContext<FinanceContextType | null>(null);

export const FinanceProvider: React.FC<IProps> = ({ children }) => {
  const [finances, setFinances] = useState<IFinance[]>([]);

  const createFinance = (data: IFinance) => {
    setFinances([...finances, data]);
  };

  return (
    <FinanceContext.Provider
      value={{
        createFinance,
        finances,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
