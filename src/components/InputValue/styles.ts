import styled from "styled-components";

interface IPropsStyleInput {
  error: boolean;
}

export const InputValueStyled = styled.input<IPropsStyleInput>`
  width: 92px;
  height: 22px;
  padding: 11px 16px;

  background-color: ${(props) => props.theme.colors.grey1};
  color: ${(props) => props.theme.colors.grey5};

  border: 2px solid ${(props) => props.theme.colors.grey1};
  border-radius: 8px;

  border-color: ${(props) => props.error && "red"};

  text-align: center;

  ::placeholder {
    color: ${(props) => props.theme.colors.grey3};
  }

  &:focus {
    outline: ${(props) => props.error && "none"};
  }
`;

export const Label = styled.label`
  font: 400 12px "Inter";

  color: ${(props) => props.theme.colors.grey5};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 128px;
  height: 79px;
`;
