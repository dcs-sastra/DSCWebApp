import React from "react";
import { Button, SocialButtons } from "./Social";
import styled from "styled-components";
import instagram from "../Logos/instagram.svg";
import twitter from "../Logos/twitter.svg";
import linkedin from "../Logos/linkedin-white.svg";
import { useLocation } from "react-router-dom";

const Address = styled.div`
  position: absolute;
  width: 100%;
  color: grey;
  margin-top: 40px;
  background-color: #f2f2f2;
  font-size: 20px;
  & > h4 {
    margin-top: 5vh;
    padding: 0 10%;
    color: black;
    font-size: 24px;
  }
  & > p {
    padding: 0 10%;
    margin-bottom: 3vh;
  }
`;

const Footer = () => {
  const location = useLocation();
  return (
    <>
      <Address>
        {location.pathname != "/about" ? (
          <SocialButtons>
            <Button
              onClick={() => {
                window.open("https://twitter.com/dsc_sastra");
              }}
              color="#059ff5"
            >
              <img src={twitter} width="20px"></img>
            </Button>
            <Button
              onClick={() => {
                window.open("https://www.instagram.com/dsc.sastra.university/");
              }}
              color="#ca37ac"
            >
              <img src={instagram} width="20px"></img>
            </Button>
            <Button
              onClick={() => {
                window.open("https://www.linkedin.com/company/dsc-sastra");
              }}
              color="#0073b0"
            >
              <img src={linkedin} width="20px"></img>
            </Button>
          </SocialButtons>
        ) : null}
        <h4>DSC SASTRA - Powered By Google Developers</h4>
        <p>Sastra Deemed to be University, Thanjavur, Tamil Nadu</p>
      </Address>
    </>
  );
};

export default Footer;
