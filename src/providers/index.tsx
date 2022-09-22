import React from "react";
import { FinanceProvider } from "./Finances";

interface IProps {
  children: React.ReactNode;
}

const Providers: React.FC<IProps> = ({ children }) => {
  return <FinanceProvider>{children}</FinanceProvider>;
};

export default Providers;
