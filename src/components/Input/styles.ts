import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 325px;
  height: 100px;
`;

export const InputStyled = styled.input`
  padding: 13px 16px;

  background-color: ${(props) => props.theme.colors.grey1};
  color: ${(props) => props.theme.colors.grey5};

  border: 2px solid ${(props) => props.theme.colors.grey1};
  border-radius: 8px;

  ::placeholder {
    color: ${(props) => props.theme.colors.grey3};
  }
  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.grey5};
  }
`;

export const Label = styled.label`
  font: 400 12px "Inter";

  color: ${(props) => props.theme.colors.grey5};
`;

export const HelperText = styled.span`
  font: 400 12px "Inter";

  color: ${(props) => props.theme.colors.grey3};
`;
