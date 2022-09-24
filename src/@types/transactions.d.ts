import { IUser } from "./users";

export interface ITransaction {
  description: string;
  typeValue: string;
  value: number;
}

export type TransactionContextType = {
  listTransactions: ITransaction[];
  createTransaction: (data: ITransaction) => void;
  removeTransaction: (Transaction: ITransaction) => void;
};
