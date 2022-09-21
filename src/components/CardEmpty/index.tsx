import React from "react";
import { CardContainer, RectangleContainer, RectangleOne, RectangleTwo } from "./styles";

export const CardEmpty: React.FC = () => {
  return (
    <CardContainer>
      <RectangleContainer>
        <RectangleOne />
        <RectangleTwo />
      </RectangleContainer>
    </CardContainer>
  );
};
