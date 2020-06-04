import React from "react";
import Address from "./UI";
import {TwitterFollowButton, TwitterMentionButton} from 'react-twitter-embed'

const Footer = () => (
  <Address>
    <br />
    <h4>DSC SASTRA - Powered By Google Developers</h4>
    Sastra Deemed to be University,
    <br />
    Thanjavur,
    <br />
    Tamil Nadu
    <TwitterFollowButton
        screenName={'dsc_sastra'}
      />
    <TwitterMentionButton
      screenName={'dsc_sastra'}
    />
  </Address>
);

export default Footer;
