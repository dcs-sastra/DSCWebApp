import React from "react";
import { Button, SocialButtons } from "./Social";
import styled from "styled-components";
import instagram from "../Logos/instagram.svg";
import twitter from "../Logos/twitter.svg";
import linkedin from "../Logos/linkedin-white.svg";
import { useLocation } from "react-router-dom";

const Address = styled.div`
  padding: 0 0 50px 10%;
  position: relative;
  width: 100%;
  color: grey;
  background-color: #f2f2f2;
  font-size: 20px;
  & > h4 {
    margin-bottom: 0.3vh;
    color: black;
    font-size: 24px;
  }
  & > p {
    font-size: 20px;
    line-height: 1.5em;
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
        ) : (
          <br />
        )}
        <h4>DSC SASTRA - Powered By Google Developers</h4>
        <p>Sastra Deemed to be University,</p>
        <p>Thanjavur, Tamil Nadu</p>
      </Address>
    </>
  );
};

export default Footer;
