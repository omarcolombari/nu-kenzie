import React, { InputHTMLAttributes } from "react";
import { Container, InputValueStyled, Label } from "./styles";

interface IPropsInputValue extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const InputValue: React.FC<IPropsInputValue> = ({ ...rest }) => {
  return (
    <Container>
      <Label>Valor</Label>
      <InputValueStyled placeholder="R$ 1000" {...rest} />
    </Container>
  );
};
