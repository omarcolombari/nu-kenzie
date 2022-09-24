import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 562px;
  min-height: 459px;
  padding: 20px;
  border-radius: 10px;

  box-shadow: 0px 0px 30px -12px #000000;

  article {
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 400px;
    margin-top: 24px;

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.grey2};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.colorPrimary};
      border-radius: 20px;
    }
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    margin-left: 16px;
  }
`;

export const TitleH2 = styled.h2`
  font: ${(props) => props.theme.fonts.title3};
  color: ${(props) => props.theme.colors.grey5};
`;

export const TitleH3 = styled.h3`
  font: ${(props) => props.theme.fonts.title2};
  color: ${(props) => props.theme.colors.grey4};

  margin-top: 27px;
`;

export const List = styled.ul`
  margin-top: 27px;
  display: grid;
  grid-row-gap: 33.65px;
`;
