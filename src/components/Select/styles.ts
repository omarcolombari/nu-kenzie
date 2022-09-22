import styled from "styled-components";
import * as SelectPrimitive from "@radix-ui/react-select";

export const SelectTrigger = styled(SelectPrimitive.Trigger)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 128px;
  padding: 11px 16px;

  border: 2px solid ${(props) => props.theme.colors.grey1};
  border-radius: 8px;

  background-color: ${(props) => props.theme.colors.grey1};
  color: ${(props) => props.theme.colors.grey4};
  &:focus {
    color: ${(props) => props.theme.colors.grey5};
  }
`;

export const SelectContent = styled(SelectPrimitive.Content)`
  overflow: hidden;
  background-color: white;
  
  border-radius: 3%;
  width: 128px;
  height: 71px;

  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const StyledViewport = styled(SelectPrimitive.Viewport)`
  padding: 5;
`;

export const StyledItem = styled(SelectPrimitive.Item)`
  color: ${(props) => props.theme.colors.grey5};

  display: flex;
  align-items: center;

  padding: 0 35px 0 25px;
  user-select: none;
  height: 50%;
  font: ${(props) => props.theme.fonts.body};

  &[data-disabled] {
    pointer-events: none;
  }

  &:focus {
    outline: none;
    background-color: ${(props) => props.theme.colors.grey2};
  }
`;
