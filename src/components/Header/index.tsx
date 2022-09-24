import React from "react";
import { HeaderStyled, Logo } from "./styles";
import Logo2Svg from "@/assets/logo-2.svg";
import { Button } from "@/components/Button";
import { useHistory } from "react-router-dom";

export const Header: React.FC = () => {
  const history = useHistory();
  const goHome = () => history.push("/");

  return (
    <HeaderStyled>
      <Logo src={Logo2Svg} alt="Nu Kenzie" />
      <Button onClick={goHome} typeButton="disable">
        Inicio
      </Button>
    </HeaderStyled>
  );
};
