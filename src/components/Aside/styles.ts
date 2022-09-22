import styled from "styled-components";

export const AsideContainer = styled.aside`
  width: 363px;
  height: 351px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.colors.white};

  border: 1px solid ${(props) => props.theme.colors.grey1};
  border-radius: 4px;

  box-shadow: 0px 0px 30px -12px #000000;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  width: 85%;
`;

export const ContainerValues = styled.div`
  display: flex;
  justify-content: space-between;
`;
