import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  width: 280px;
  height: 152px;
  padding: 10px 10px 0 10px;
  border-radius: 5px;

  @media screen and (max-width: 1100px) {
    min-width: 100%;
    height: 200px;
  }

  @media screen and (max-width: 500px) {
    font-size: 28px;
    height: 160px;
  }
`;

export const CardHeader = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 50px;
  grid-template-rows: 40px;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
`;
