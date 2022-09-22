// React
import React from "react";

// Styles
import { AsideContainer, ContainerValues, Form } from "./styles";

// Components
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { InputValue } from "@/components/InputValue";
import { Select } from "@/components/Select";

// Hook Form
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

// Yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Interface
export interface IFormInput {
  description: string;
  value: number;
  typeValue: string;
}

export const Aside: React.FC = () => {
  const [typeValue, setTypeValue] = useState<string>("entrada");

  const schema = yup.object().shape({
    description: yup.string().required("Description is required"),
    value: yup.number().required("Value is required"),
    typeValue: yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    reset();
    data = {
      ...data,
      typeValue,
    };
    console.log(data);
  };

  console.log(errors);

  return (
    <AsideContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          error={!!errors.description}
          helperText="Ex: Compra de roupas"
          label="Descrição"
          placeholder="Digite aqui sua descrição"
          name="description"
        />
        <ContainerValues>
          <InputValue error={!!errors.value} register={register} name="value" />
          <Select setTypeValue={setTypeValue} />
        </ContainerValues>
        <Button type="submit" style={{ width: "100%" }} typeButton="primary">
          Inserir valor
        </Button>
      </Form>
    </AsideContainer>
  );
};
