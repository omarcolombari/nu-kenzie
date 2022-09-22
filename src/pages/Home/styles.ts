import styled from "styled-components";

export const Background = styled.main`
  background-color: ${(props) => props.theme.colors.grey5};
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 347px;
  height: 50%;
`;

export const Logo = styled.img`
  width: 122px;
  height: 19x;
`;

export const Title = styled.h2`
  font: ${(props) => props.theme.fonts.title1};
  color: ${(props) => props.theme.colors.white};
`;

export const Span = styled.span`
  font: ${(props) => props.theme.fonts.headline};
  color: ${(props) => props.theme.colors.white};
`;
