import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      {/* <h2>Widgets</h2> */}
      <div className="widgets__input">
        <SearchIcon className="widgets_search-icon" />
        <input placeholder="Search Twitter" type="text" name="" id="" />
      </div>
      <div className="widgets__widget-container">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1406929277132627969"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.linkedin.com/in/manavbhatt"}
          options={{ text: "#reactjs is awesome", via: "" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
