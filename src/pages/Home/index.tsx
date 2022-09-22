import React from "react";
import { Background, Container, Logo, Span, Title } from "./styles";
import IllustrationSvg from "@/assets/illustration.svg";
import LogoSvg from "@/assets/logo.svg";
import { Button } from "@/components/Button";

export const HomePage: React.FC = () => {
  return (
    <Background>
      <Container>
        <Logo src={LogoSvg} alt="Nu Kenzie" />
        <Title>Centralize o controle das suas finanças</Title>
        <Span>de forma rápida e segura</Span>
        <Button typeButton="primary">Iniciar</Button>
      </Container>
      <img src={IllustrationSvg} alt="" />
    </Background>
  );
};
