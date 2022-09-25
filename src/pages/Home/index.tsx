import React from "react";
import { Background, Container, Logo, Span, Title } from "./styles";
import IllustrationSvg from "@/assets/illustration.svg";
import LogoSvg from "@/assets/logo.svg";
import { Button } from "@/components/Button";
import { useHistory } from "react-router-dom";

export const HomePage: React.FC = () => {
  const history = useHistory();
  const goDashboard = () => history.push("/dashboard");
  return (
    <Background>
      <Container data-aos-duration="2000" data-aos="fade-right">
        <Logo src={LogoSvg} alt="Nu Kenzie" />
        <Title>Centralize o controle das suas finanças</Title>
        <Span>de forma rápida e segura</Span>
        <Button typeButton="primary" onClick={goDashboard}>
          Iniciar
        </Button>
      </Container>
      <img
        data-aos="fade-left"
        data-aos-duration="2000"
        src={IllustrationSvg}
        alt=""
      />
    </Background>
  );
};
