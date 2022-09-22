import React from "react";
import { HeaderStyled, Logo } from "./styles";
import Logo2Svg from "@/assets/logo-2.svg";
import { Button } from "@/components/Button";

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Logo src={Logo2Svg} alt="Nu Kenzie" />
      <Button typeButton="disable">Inicio</Button>
    </HeaderStyled>
  );
};
