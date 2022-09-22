// React
import React, { useContext } from "react";

// Styles
import { Heading, List, SectionContainer, TitleH2, TitleH3 } from "./styles";

// Components
import { Button } from "@/components/Button";
import { CardValue } from "@/components/CardValue";
import { CardEmpty } from "@/components/CardEmpty";

// Types
import { FinanceContextType } from "@/types/finances";

// Context
import { FinanceContext } from "providers/Finances";

export const FinancialSection: React.FC = () => {
  const { finances } = useContext(FinanceContext) as FinanceContextType;

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
        {finances.length ? (
          <List>
            {finances.map(({ description, typeValue, value }) => (
              <CardValue card={{ description, typeValue, value }} />
            ))}
          </List>
        ) : (
          <>
            <TitleH3>Você ainda não possui nenhum lançamento</TitleH3>
            <List>
              <CardEmpty />
              <CardEmpty />
              <CardEmpty />
            </List>
          </>
        )}
      </article>
    </SectionContainer>
  );
};
