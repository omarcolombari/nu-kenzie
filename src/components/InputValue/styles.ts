import styled from "styled-components";

export const InputValueStyled = styled.input`
  width: 92px;
  height: 22px;
  padding: 11px 16px;

  background-color: ${(props) => props.theme.colors.grey1};
  color: ${(props) => props.theme.colors.grey5};

  border: 2px solid ${(props) => props.theme.colors.grey1};
  border-radius: 8px;

  text-align: center;

  ::placeholder {
    color: ${(props) => props.theme.colors.grey3};
  }
`;
