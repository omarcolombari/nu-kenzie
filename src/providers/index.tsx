import React from "react";
import { TransactionProvider } from "./Transactions";

interface IProps {
  children: React.ReactNode;
}

const Providers: React.FC<IProps> = ({ children }) => {
  return <TransactionProvider>{children}</TransactionProvider>;
};

export default Providers;
