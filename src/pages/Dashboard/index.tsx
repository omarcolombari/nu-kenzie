// React
import React, { useState } from "react";

// Styles
import { Main } from "./styles";

// Components
import { Header } from "@/components/Header";
import { FinancialSection } from "@/components/FinancialSection";
import { IPropsCard } from "@/components/CardValue";
import { Aside } from "@/components/Aside";

export const DashboardPage: React.FC = () => {
  const [cards, setCards] = useState<IPropsCard[]>([]);
  return (
    <>
      <Header />
      <Main>
        <Aside />
        <FinancialSection cards={cards} />
      </Main>
    </>
  );
};
