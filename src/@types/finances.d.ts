import { IUser } from "./users";

export interface IFinance {
  description: string;
  typeValue: string;
  value: number;
}

export type FinanceContextType = {
  listTransactions: IFinance[];
  createFinance: (data: IFinance) => void;
  removeFinance: (finance: IFinance) => void;
};
