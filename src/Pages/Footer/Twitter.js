import styled from "styled-components";
export const TwitterTimeline = styled.div`
  position: absolute;
  left: ${(props) => (props.position ? props.position : "50%")};
  transform: translateX(-50%) translateY(-105%);
  display: ${(props) => (props.isOpen == "open" ? "block" : "none")};
  width: 50%;
`;
export const Button = styled.button`
  transform: translateX(-50%) translateY(20%);
  position: absolute;
  display: block;
  left: ${(props) => (props.position ? props.position : "50%")};
  background-color: ${(props) => props.color};
  height: min(10vw, 50px);
  width: min(10vw, 50px);
  color: white;
  border: none;
  border-radius: 45px;
  box-shadow: 10px 8px 15px rgba(0, 0, 0, 0.1);
  transition: background-color, box-shadow 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: ${(props) => "10px 8px 15px" + props.color};
  }
`;
