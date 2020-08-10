import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 99vw;
  height: 100vh;
`;

const ModalBg = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh !important;
  z-index: 3;
`;
const ModalBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 250px;
  margin: 20vh 15vw;
  height: 500px;
  width: 70vw;
  border-radius: 40px;
  background-color: white;
  box-shadow: 1px 1px 100px rgb(54, 54, 54);
  padding: 30px;
  display: flex;
  z-index: 2;
  justify-content: space-evenly;
  backdrop-filter: blur(5px);
  z-index: 10;
`;

const ModalContent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  padding: 0 7vh;
  overflow: scroll;
`;

const Text = styled.h3`
  color: ${props.yellow ? "var(--yellow)" : ""};
`;
