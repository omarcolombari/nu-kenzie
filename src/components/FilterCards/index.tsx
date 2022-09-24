// React
import React, { useEffect, useState } from "react";

// Components
import { ListCards } from "@/components/ListCards";

// Types
import { ITransaction } from "@/types/transactions";

// Interface
interface IPropsListCards {
  filter: "todos" | "entradas" | "despesas";
  transactions: ITransaction[];
}

export const FilterCards: React.FC<IPropsListCards> = ({
  filter,
  transactions,
}) => {
  // Aqui está sendo criado estado com as transação que são do tipo entrada
  const [inboundTransactions, setInboundTransactions] = useState<
    ITransaction[]
  >([]);

  // Aqui está sendo criado estados com as transação que são do tipo despesa
  const [expenseTransactions, setExpenseTransactions] = useState<
    ITransaction[]
  >([]);

  /* 
  A cada vez que é adicionado uma nova transação,
  ela é adicionado aos estados criado acima com base
  no seu tipo
  */
  useEffect(() => {
    setInboundTransactions(
      transactions.filter((transaction) => transaction.typeValue === "entrada")
    );
    setExpenseTransactions(
      transactions.filter((transaction) => transaction.typeValue === "despesa")
    );
  }, [transactions]);

  return (
    <>
      {filter === "todos" ? (
        <ListCards transactions={transactions} />
      ) : filter === "entradas" ? (
        <ListCards transactions={inboundTransactions} />
      ) : (
        <ListCards transactions={expenseTransactions} />
      )}
    </>
  );
};
