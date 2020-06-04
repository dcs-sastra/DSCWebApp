import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Twitter = () => {
  return (
    <section className="twitterContainer"  style={{width:"75%"}} >
      <div className="twitter-embed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="dsc_sastra"
          options={{
            tweetLimit: "5"
          }}
          theme="dark"
        ></TwitterTimelineEmbed>
      </div>
    </section>
  );
};

export default Twitter