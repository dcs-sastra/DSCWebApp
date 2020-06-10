import React, { useState } from "react";
import Address from "./UI";
import { Button, TwitterTimeline, CloseButton } from "./Twitter";
import styled from "styled-components";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";
import close from "./close.svg";

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

const Footer = ({links}) => {
  const [overlayOpen, setOverlayOpen] = useState("none");
  return (
    <div>
    {links===true ?(
      <div>
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
      <Button
        onClick={() => {
          setOverlayOpen("block");
          console.log("deepakh");
        }}
        position={window.innerWidth > 768 ? "95%" : "50%"}
        color="#059ff5"
      >
        <img src={twitter} width="20px"></img>
      </Button>

      <Button
        onClick={() => {
          window.open("https://www.instagram.com/dsc.sastra.university/");
        }}
        position={window.innerWidth > 768 ? "90%" : "20%"}
        color="#ca37ac"
      >
        <img src={instagram} width="20px"></img>
      </Button>

      <Button
        onClick={() => {
          window.open("https://www.linkedin.com/company/dsc-sastra");
        }}
        position={window.innerWidth > 768 ? "85%" : "80%"}
        color="#0073b0"
      >
        <img src={linkedin} width="20px"></img>
      </Button>
      <Address>
        <br />
        <h4>DSC SASTRA - Powered By Google Developers</h4>
        Sastra Deemed to be University,
        <br />
        Thanjavur,
        <br />
        Tamil Nadu
      </Address>
      </div>
    ):(
      <Address>
        <br />
        <h4>DSC SASTRA - Powered By Google Developers</h4>
        Sastra Deemed to be University,
        <br />
        Thanjavur,
        <br />
        Tamil Nadu
      </Address>
    )}
  
      
    </div>
  );
};

export default Footer;
