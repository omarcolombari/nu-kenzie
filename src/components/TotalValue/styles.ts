import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.grey2};
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  height: 94px;
  align-items: center;
  margin-top: 16px;
`;

export const ContainerTitle = styled.div``;

export const Title = styled.h4`
  font: ${(props) => props.theme.fonts.title3};
  color: ${(props) => props.theme.colors.grey5};
`;

export const Span = styled.span`
  font: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.grey4};
`;

export const Balance = styled.strong`
  font: ${(props) => props.theme.fonts.title3};
  color: ${(props) => props.theme.colors.colorPrimary};
`;
