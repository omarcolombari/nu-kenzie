import React, { useState } from "react";

import { Aside, ContainerValues, Form, Main } from "./styles";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { InputValue } from "@/components/InputValue";
import { Select } from "@/components/Select";
import { Header } from "@/components/Header";
import { FinancialSection } from "@/components/FinancialSection";
import { IPropsCard } from "@/components/CardValue";

export const DashboardPage: React.FC = () => {
  const [cards, setCards] = useState<IPropsCard[]>([]);
  return (
    <>
      <Header />
      <Main>
        <Aside>
          <Form>
            <Input
              helperText="Ex: Compra de roupas"
              label="Descrição"
              placeholder="Digite aqui sua descrição"
              name="description"
            />
            <ContainerValues>
              <InputValue name="value" />
              <Select />
            </ContainerValues>
            <Button style={{ width: "100%" }} typeButton="primary">
              Inserir valor
            </Button>
          </Form>
        </Aside>
        <FinancialSection cards={cards} />
      </Main>
    </>
  );
};
