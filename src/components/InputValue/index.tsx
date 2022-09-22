import React, { InputHTMLAttributes } from "react";
import { InputValueStyled } from "./styles";

interface IPropsInputValue extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const InputValue: React.FC<IPropsInputValue> = ({ ...rest }) => {
  return <InputValueStyled placeholder="R$ 1000" {...rest} />;
};
