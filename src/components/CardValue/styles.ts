import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors.grey1};
  border-radius: 4px;
  width: 560px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-left: 4px solid ${(props) => props.theme.colors.grey2};
  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 4px 42px -12px rgba(0, 0, 0, 0.25);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 337px;
  height: 68px;
`;

export const Title = styled.h4`
  color: ${(props) => props.theme.colors.grey5};
  font: ${(props) => props.theme.fonts.title3};
`;

export const TypeValue = styled.span`
  color: ${(props) => props.theme.colors.grey4};
  font: ${(props) => props.theme.fonts.body};
`;

export const Price = styled.strong`
  color: ${(props) => props.theme.colors.grey5};
  font: ${(props) => props.theme.fonts.body};
`;
