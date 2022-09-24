// React
import React, { useContext, useState } from "react";

// Styles
import { Heading, SectionContainer, TitleH2 } from "./styles";

// Components
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CardEmpty } from "@/components/CardEmpty";

// Types
import { TransactionContextType } from "@/types/transactions";

// Context
import { TransactionContext } from "@/providers/Transactions";
import { FilterCards } from "../FilterCards";

export const FinancialSection: React.FC = () => {
  const { listTransactions } = useContext(
    TransactionContext
  ) as TransactionContextType;

  const [filter, setFilter] = useState<"todos" | "entradas" | "despesas">(
    "todos"
  );

  return (
    <SectionContainer>
      <Heading>
        <TitleH2>Resumo financeiro</TitleH2>
        <nav>
          <Button
            isActive={filter === "todos" && true}
            typeButton="disable"
            onClick={() => setFilter("todos")}
          >
            Todos
          </Button>
          <Button
            isActive={filter === "entradas" && true}
            typeButton="disable"
            onClick={() => setFilter("entradas")}
          >
            Entradas
          </Button>
          <Button
            isActive={filter === "despesas" && true}
            typeButton="disable"
            onClick={() => setFilter("despesas")}
          >
            Despesas
          </Button>
        </nav>
      </Heading>
      <article>
        <FilterCards filter={filter} transactions={listTransactions} />
      </article>
    </SectionContainer>
  );
};
