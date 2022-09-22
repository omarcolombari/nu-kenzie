import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  SelectContent,
  SelectTrigger,
  StyledItem,
  StyledViewport,
} from "./styles";
import { FaAngleDown } from "react-icons/fa";

export const Select: React.FC = () => {
  return (
    <SelectPrimitive.Root defaultValue="entrada">
      <SelectTrigger>
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon>
          <FaAngleDown size={16} color="#868E96" />
        </SelectPrimitive.Icon>
      </SelectTrigger>

      <SelectPrimitive.Portal>
        <SelectContent>
          <SelectPrimitive.ScrollUpButton />
          <StyledViewport>
            <StyledItem value="entrada">
              <SelectPrimitive.ItemText>Entrada</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator />
            </StyledItem>

            <StyledItem value="despesa">
              <SelectPrimitive.ItemText>Despesa</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator />
            </StyledItem>
          </StyledViewport>
          <SelectPrimitive.ScrollDownButton />
        </SelectContent>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};
