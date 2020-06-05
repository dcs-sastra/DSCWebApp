import React, { useState } from "react";
import Address from "./UI";
import { Button, TwitterTimeline } from "./Twitter";

const Footer = () => {
  const [twitterOpened, setTwitterOpened] = useState(false);
  return (
    <>
      <TwitterTimeline
        isOpen={twitterOpened ? "open" : "closed"}
        position={window.innerWidth > 768 ? "85%" : "50%"}
      >
        <a
          className="twitter-timeline"
          href="https://twitter.com/dsc_sastra?ref_src=twsrc%5Etfw"
          data-height="400"
          data-width="600"
          data-chrome="nofooter noheader"
        >
          Tweets by dsc_sastra
        </a>
      </TwitterTimeline>
      <Button
        onClick={() => {
          setTwitterOpened(!twitterOpened);
        }}
        position={window.innerWidth > 768 ? "95%" : "50%"}
        color={twitterOpened ? "#CA0B00" : "#059ff5"}
      >
        {twitterOpened ? (
          <i class="fa fa-times fa-2x"></i>
        ) : (
          <i className="fa fa-twitter fa-2x" aria-hidden="true" />
        )}
      </Button>
      <Button
        onClick={() => {
          window.location.href =
            "https://www.instagram.com/dsc.sastra.university/";
        }}
        position={window.innerWidth > 768 ? "90%" : "20%"}
        color="#ca37ac"
      >
        <i className="fa fa-instagram fa-2x" aria-hidden="true" />
      </Button>
      <Button
        onClick={() => {
          window.location.href = "https://www.linkedin.com/company/dsc-sastra";
        }}
        position={window.innerWidth > 768 ? "85%" : "80%"}
        color="#0073b0"
      >
        <i className="fa fa-linkedin fa-2x" aria-hidden="true" />
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
    </>
  );
};

export default Footer;
