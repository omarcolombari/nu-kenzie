import React, { ButtonHTMLAttributes } from "react";
import { FaTrash } from "react-icons/fa";
import { ButtonTrashStyled } from "./styles";

interface IPropsButtonTrash extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonTrash: React.FC<IPropsButtonTrash> = ({ ...rest }) => {
  return (
    <ButtonTrashStyled {...rest}>
      <FaTrash size={10} />
    </ButtonTrashStyled>
  );
};
