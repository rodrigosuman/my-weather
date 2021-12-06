import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.bgError};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;

  img {
    height: 150px;
    width: 150px;
  }
`;
