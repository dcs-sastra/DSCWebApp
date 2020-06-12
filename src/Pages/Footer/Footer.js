import React, { useState } from "react";
import { Button, TwitterTimeline, CloseButton, SocialButtons } from "./Social";
import styled from "styled-components";
import instagram from "../Logos/instagram.svg";
import twitter from "../Logos/twitter.svg";
import linkedin from "../Logos/linkedin-white.svg";
import close from "../Logos/close.svg";
import { useLocation } from "react-router-dom";

const Address = styled.div`
  position: absolute;
  width: 100%;
  color: grey;
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

const Overlay = styled.div`
  position: fixed;
  display: ${(props) => props.overlay};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  cursor: pointer;
`;

const Footer = () => {
  const location = useLocation();
  const [overlayOpen, setOverlayOpen] = useState("none");
  return (
    <>
      <Address>
        {location.pathname != "/about" ? (
          <SocialButtons>
            <Button
              onClick={() => {
                setOverlayOpen("block");
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
      <Overlay overlay={overlayOpen} onClick={() => setOverlayOpen("none")}>
        <TwitterTimeline>
          <a
            className="twitter-timeline"
            href="https://twitter.com/dsc_sastra?ref_src=twsrc%5Etfw"
            data-height="500"
            data-width="1000"
            data-chrome="nofooter"
          >
            Tweets by dsc_sastra
          </a>
        </TwitterTimeline>
        <CloseButton onClick={() => setOverlayOpen("none")}>
          <img src={close} width="20px"></img>
        </CloseButton>
      </Overlay>
    </>
  );
};

export default Footer;
