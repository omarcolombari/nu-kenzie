// React
import React from "react";

// Styles
import { Main } from "./styles";

// Components
import { Header } from "@/components/Header";
import { FinancialSection } from "@/components/FinancialSection";
import { Aside } from "@/components/Aside";

export const DashboardPage: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Aside />
        <FinancialSection />
      </Main>
    </>
  );
};
