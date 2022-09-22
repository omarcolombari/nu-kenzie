import { IUser } from "./users";

export interface IFinance {
  description: string;
  typeValue: string;
  value: number;
}

export type FinanceContextType = {
  finances: IFinance[];
  createFinance: (data: IFinance) => void;
};
