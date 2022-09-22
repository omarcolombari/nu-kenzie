import React, { InputHTMLAttributes } from "react";
import { Container, InputValueStyled, Label } from "./styles";

interface IPropsInputValue extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: any;
  error: boolean;
}

export const InputValue: React.FC<IPropsInputValue> = ({
  register,
  name,
  error,
  ...rest
}) => {
  return (
    <Container>
      <Label>Valor</Label>
      <InputValueStyled
        error={error}
        {...register(name)}
        type="number"
        placeholder="R$ 1000"
        {...rest}
      />
    </Container>
  );
};
