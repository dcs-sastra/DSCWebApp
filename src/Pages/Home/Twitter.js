import styled from "styled-components";

export const TwitterFeed = styled.div`
  position: fixed;
  bottom: 7%;
  right: 3%;
`;
export const TwitterTimeline = styled.div`
  display: ${(props) => (props.isOpen == "open" ? "block" : "none")};
`;
export const TwitterButton = styled.button`
  background-color: ${(props) => (props.isOpen == "open" ? "red" : "#059ff5")};
  float: right;
  height: 3.5rem;
  width: 3.5rem;
  color: white;
  border: none;
  border-radius: 45px;
  box-shadow: 10px 8px 15px rgba(0, 0, 0, 0.1);
  transition: background-color, box-shadow 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: ${(props) =>
      props.isOpen == "open"
        ? "10px 8px 15px #ad1703"
        : "10px 8px 15px #033fad"};
    transform: translateY(-7px);
  }
`;
