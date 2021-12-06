import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: ". content .";


  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 75% 1fr;
    grid-template-areas: ". content. ";
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 90% 1fr;
    grid-template-areas: ". content. ";
  }

  @media screen and (max-width: 800px) {
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
  padding: 60px 40px;

  @media screen and (max-width: 1100px) {
    row-gap: 50px;
  }
`;

export const HomeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  height: 140px;

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
      margin-top: -30px;
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
