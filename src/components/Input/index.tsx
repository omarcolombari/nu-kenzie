import React, { InputHTMLAttributes } from "react";
import { Container, HelperText, InputStyled, Label } from "./styles";
import { UseFormRegister } from "react-hook-form";
import { IFormInput } from "@/components/Aside";

interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  helperText: string;
  register: any;
  error: boolean;
}

export const Input: React.FC<IPropsInput> = ({
  name,
  error,
  label,
  helperText,
  register,
  ...rest
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputStyled error={error} {...register(name)} {...rest} />
      <HelperText>{helperText}</HelperText>
    </Container>
  );
};
