import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 13vh;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${(props) => props.theme.colors.grey1};
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.img`
  height: 19px;
  width: 122px;
`;
