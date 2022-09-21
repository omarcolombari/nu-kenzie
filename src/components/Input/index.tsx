import React, { InputHTMLAttributes } from "react";
import { InputStyled } from "./styles";

interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
}

export const Input: React.FC<IPropsInput> = ({ ...rest }) => {
  return <InputStyled {...rest} />;
};
