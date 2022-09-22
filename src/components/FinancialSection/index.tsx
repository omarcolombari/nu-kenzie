import React from "react";

import { Heading, List, SectionContainer, TitleH2, TitleH3 } from "./styles";

import { Button } from "@/components/Button";
import { CardValue, IPropsCard } from "@/components/CardValue";
import { CardEmpty } from "../CardEmpty";

interface IFinancialSectionProps {
  cards: IPropsCard[];
}

export const FinancialSection: React.FC<IFinancialSectionProps> = ({
  cards,
}) => {
  return (
    <SectionContainer>
      <Heading>
        <TitleH2>Resumo financeiro</TitleH2>
        <nav>
          <Button isActive typeButton="disable">
            Todos
          </Button>
          <Button typeButton="disable">Entradas</Button>
          <Button typeButton="disable">Despesas</Button>
        </nav>
      </Heading>
      <article>
        <TitleH3>Você ainda não possui nenhum lançamento</TitleH3>
        {cards.length ? (
          <List>
            {cards.map((card) => (
              <CardValue
                title={card.title}
                typeValue={card.typeValue}
                value={card.value}
              />
            ))}
          </List>
        ) : (
          <List>
            <CardEmpty />
            <CardEmpty />
            <CardEmpty />
          </List>
        )}
      </article>
    </SectionContainer>
  );
};
