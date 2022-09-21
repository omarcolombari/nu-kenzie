import styled, { css } from "styled-components";

interface IButton {
  typeButton: "primary" | "disable";
  isActive?: boolean;
}

const primaryButton = css`
  background-color: ${(props) => props.theme.colors.colorPrimary};
  padding: 13px 20px;
  border: 1.4px solid ${(props) => props.theme.colors.colorPrimary};

  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    border-color: ${(props) => props.theme.colors.colorPrimary2};
    background-color: ${(props) => props.theme.colors.colorPrimary2};
  }
`;

const disableButton = css<IButton>`
  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.colorPrimary
      : props.theme.colors.grey2};
  border: 1.4px solid
    ${(props) =>
      props.isActive
        ? props.theme.colors.colorPrimary
        : props.theme.colors.grey2};
  padding: 15px;

  font-family: "Nunito";
  font-weight: 600;
  font-size: 14px;
  color: ${(props) =>
    props.isActive ? props.theme.colors.white : props.theme.colors.grey4};

  &:hover {
    border-color: ${(props) => props.theme.colors.grey4};
    background-color: ${(props) => props.theme.colors.grey4};
    color: ${(props) => props.theme.colors.grey1};
  }
`;

export const ButtonStyled = styled.button<IButton>`
  border-radius: 8px;
  ${(props) => props.typeButton === "primary" && primaryButton}
  ${(props) => props.typeButton === "disable" && disableButton}
`;
