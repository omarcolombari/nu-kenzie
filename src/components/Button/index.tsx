import React, { ButtonHTMLAttributes } from "react";

interface IPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<IPropsButton> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};
