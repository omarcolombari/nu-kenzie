import { ButtonTrash } from "@/components/ButtonTrash";
import { TransactionContextType, ITransaction } from "@/types/transactions";
import React, { useContext } from "react";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import { CardContainer, CardContent, Price, Title, TypeValue } from "./styles";
import { TransactionContext } from "@/providers/Transactions";

export interface IProps {
  card: ITransaction;
}

export const Card: React.FC<IProps> = ({ card }) => {
  const { removeTransaction } = useContext(
    TransactionContext
  ) as TransactionContextType;

  return (
    <CardContainer typeValue={card.typeValue}>
      <CardContent>
        <Title>{capitalizeFirstLetter(card.description)}</Title>
        <TypeValue>{capitalizeFirstLetter(card.typeValue)}</TypeValue>
      </CardContent>
      <Price>
        {card.value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </Price>
      <ButtonTrash onClick={() => removeTransaction(card)} />
    </CardContainer>
  );
};
