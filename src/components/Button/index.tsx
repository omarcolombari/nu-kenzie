import React, { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./styles";

interface IPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton: "primary" | "disable";
  isActive?: boolean;
}

export const Button: React.FC<IPropsButton> = ({
  children,
  ...rest
}) => {
  return (
    <ButtonStyled {...rest}>
      {children}
    </ButtonStyled>
  );
};
