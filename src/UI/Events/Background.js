import styled from "styled-components";

const BackgroundWrapper = styled.div`
  position: fixed;
  z-index: -10;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const LeftImage = styled.img`
  width: 70%;
  height: 100vh;
`;

const RightImage = styled.img`
  width: 70%;
  float: right;
  height: 100vh;
`;

export { BackgroundWrapper, LeftImage, RightImage };
