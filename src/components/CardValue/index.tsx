import { ButtonTrash } from "@/components/ButtonTrash";
import React from "react";
import { CardContainer, CardContent, Price, Title, TypeValue } from "./styles";

export interface IPropsCard {
  title: string;
  typeValue: string;
  value: string;
}

export const CardValue: React.FC<IPropsCard> = ({
  title,
  typeValue,
  value,
}) => {
  return (
    <CardContainer>
      <CardContent>
        <Title>{title}</Title>
        <TypeValue>{typeValue}</TypeValue>
      </CardContent>
      <Price>{value}</Price>
      <ButtonTrash />
    </CardContainer>
  );
};
