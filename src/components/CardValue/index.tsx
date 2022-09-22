import { ButtonTrash } from "@/components/ButtonTrash";
import { IFinance } from "@/types/finances";
import React from "react";
import { CardContainer, CardContent, Price, Title, TypeValue } from "./styles";

export interface IProps {
  card: IFinance;
}

export const CardValue: React.FC<IProps> = ({
  card: { description, typeValue, value },
}) => {
  return (
    <CardContainer>
      <CardContent>
        <Title>{description}</Title>
        <TypeValue>{typeValue}</TypeValue>
      </CardContent>
      <Price>{value}</Price>
      <ButtonTrash />
    </CardContainer>
  );
};
