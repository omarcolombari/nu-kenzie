import { ButtonTrash } from "@components/ButtonTrash";
import { CardValue } from "@components/CardValue";
import { Input } from "@components/Input";
import React from "react";

const App: React.FunctionComponent = () => {
  return (
    <CardValue
      title="Description Value"
      typeValue="Type value"
      value="R$ 0,00"
    />
  );
};

export default App;
