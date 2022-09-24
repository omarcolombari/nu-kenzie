import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-row-gap: 33px;
`;

export const TitleH3 = styled.h3`
  font: ${(props) => props.theme.fonts.title2};
  color: ${(props) => props.theme.colors.grey4};
`;
