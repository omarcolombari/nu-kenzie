import { ButtonTrash } from "@/components/ButtonTrash";
import { FinanceContextType, IFinance } from "@/types/finances";
import React, { useContext } from "react";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import { CardContainer, CardContent, Price, Title, TypeValue } from "./styles";
import { FinanceContext } from "providers/Finances";

export interface IProps {
  card: IFinance;
}

export const CardValue: React.FC<IProps> = ({
  card
}) => {
  const { removeFinance } = useContext(FinanceContext) as FinanceContextType;

  return (
    <CardContainer>
      <CardContent>
        <Title>{capitalizeFirstLetter(card.description)}</Title>
        <TypeValue>{capitalizeFirstLetter(card.typeValue)}</TypeValue>
      </CardContent>
      <Price>
        {card.value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </Price>
      <ButtonTrash onClick={() => removeFinance(card) }/>
    </CardContainer>
  );
};
