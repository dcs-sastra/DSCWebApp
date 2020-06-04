import React from "react";
import left from "../../Backgrounds/left.svg";
import right from "../../Backgrounds/right.svg";
import {
  BackgroundWrapper,
  LeftImage,
  RightImage,
} from "../../UI/Events/Background";

const Background = () => {
  return (
    <BackgroundWrapper>
      <div>
        <LeftImage src={left} />
      </div>
      <div>
        <RightImage src={right} />
      </div>
    </BackgroundWrapper>
  );
};

export default Background;
