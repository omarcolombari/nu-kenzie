import styled from "styled-components";

export const InputStyled = styled.input`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.grey1};
  border: 2px solid ${(props) => props.theme.colors.grey1};
  border-radius: 8px;

  color: ${(props) => props.theme.colors.grey5};

  ::placeholder {
    color: ${(props) => props.theme.colors.grey3};
  }
  &:focus {
    background-color: ${(props) => props.theme.colors.white};
  }
`;
