import { TransactionContextType, ITransaction } from "@/types/transactions";
import { TransactionContext } from "@/providers/Transactions";
import React, { useContext } from "react";
import { Container, ContainerTitle, Title, Span, Balance } from "./styles";

export const TotalValue: React.FC = () => {
  const { listTransactions } = useContext(
    TransactionContext
  ) as TransactionContextType;

  const calculateTotalAmount = (Transactions: ITransaction[]) => {
    const result = Transactions.reduce((a, b) => {
      return b.typeValue === "entrada" ? a + b.value : a - b.value;
    }, 0);

    return result.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <Container>
      <ContainerTitle>
        <Title>Valor total:</Title>
        <Span>O valor se refere ao saldo</Span>
      </ContainerTitle>
      <Balance>{calculateTotalAmount(listTransactions)}</Balance>
    </Container>
  );
};
