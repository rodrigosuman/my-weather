import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    left: 0;
  }
  to {
    left: 100%
  }
`;

export const Loading = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 30%;
  background-color: #ffffff30;
  animation: ${animation} 800ms infinite;
`;

export const Container = styled.div`
  position: relative;
  position: relative;
  width: 60%;
  background-color: #c3c3c350;
  height: 60px;
`;
