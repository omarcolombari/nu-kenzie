import React, { InputHTMLAttributes } from "react";
import { Container, HelperText, InputStyled, Label } from "./styles";

interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  helperText: string;
}

export const Input: React.FC<IPropsInput> = ({
  name,
  label,
  helperText,
  ...rest
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputStyled {...rest} />
      <HelperText>{helperText}</HelperText>
    </Container>
  );
};
