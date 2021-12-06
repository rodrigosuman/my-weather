import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: ". content .";

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  grid-template-areas: "content";

  }
`;

export const Wrapper = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 90px;
  padding: 60px 30px;

  @media screen and (max-width: 1100px) {
    row-gap: 50px;
  }
`;

export const HomeHeader = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  @media screen and (max-width: 1100px) {
    justify-content: center;
  }
`;

export const HomeContent = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  img {
    width: 140px;
    height: auto;
    margin-left: -30px;
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    img {
      width: 110px;
      height: auto;
      margin-left: 0px;
    }
  }
`;

export const HomeCardList = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  column-gap: 25px;

  @media screen and (max-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    column-gap: 20px;
    row-gap: 20px;
  }

  @media screen and (max-width: 630px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    column-gap: 20px;
    row-gap: 20px;
  }
`;
