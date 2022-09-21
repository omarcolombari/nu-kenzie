import styled from "styled-components";

export const CardContainer = styled.div`
  width: 560px;
  height: 87px;

  background-color: ${(props) => props.theme.colors.grey1};
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-left: 4px solid ${(props) => props.theme.colors.grey2};
  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 4px 42px -12px rgba(0, 0, 0, 0.25);
  }
`;

export const RectangleContainer = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const RectangleOne = styled.div`
  width: 330px;
  height: 13px;

  background-color: ${(props) => props.theme.colors.grey2};
`;

export const RectangleTwo = styled.div`
  width: 76px;
  height: 13px;

  background-color: ${(props) => props.theme.colors.grey2};
`;
