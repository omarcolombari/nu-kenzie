import styled from "styled-components";

export const ButtonTrashStyled = styled.button`
  padding: 6px;
  background-color: ${(props) => props.theme.colors.grey2};
  border-radius: 2.46154px;
  transform: matrix(-1, 0, 0, 1, 0, 0);

  display: flex;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey3};
    color: ${(props) => props.theme.colors.grey1};
  }
`;
