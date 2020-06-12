import styled from "styled-components";

export const TwitterTimeline = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const SocialButtons = styled.div`
  width: 85%;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

export const Button = styled.button`
  transform: translateY(-50%);
  display: inline-block;
  margin-right: 20px;
  padding-top: 5px;
  background-color: ${(props) => props.color};
  height: 50px;
  width: 50px;
  color: white;
  border: none;
  border-radius: 45px;
  box-shadow: 10px 8px 15px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: ${(props) => "10px 8px 15px" + props.color};
  }
`;

export const CloseButton = styled.button`
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 85%;
  background-color: #ca0b00;
  height: min(10vw, 50px);
  width: min(10vw, 50px);
  color: white;
  border: none;
  border-radius: 45px;
  box-shadow: 7px 4px 15px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: ${(props) => "10px 8px 15px #ca0b00"};
  }
`;
