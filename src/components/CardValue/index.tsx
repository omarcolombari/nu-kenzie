import { ButtonTrash } from "@components/ButtonTrash";
import React from "react";
import { CardContainer, CardContent, Price, Title, TypeValue } from "./styles";

interface IPropsCardValue {
  title: string;
  typeValue: string;
  value: string;
}

export const CardValue: React.FC<IPropsCardValue> = ({
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
