import { ButtonTrash } from "@components/ButtonTrash";
import { CardEmpty } from "@components/CardEmpty";
import { CardValue } from "@components/CardValue";
import { Input } from "@components/Input";
import { InputValue } from "@components/InputValue";
import React from "react";

const App: React.FunctionComponent = () => {
  return (
    <Input
      helperText="Helper Text"
      placeholder="Placeholder"
      label="Label"
      name="teste"
    />
  );
};

export default App;
