import React, { useState } from "react";
import { db } from "../firebase";
import { Avatar, Button } from "@mui/material";
import "./TweetBox.css";
import { addDoc, collection } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const postsCollectionRef = collection(db, "posts");

  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(postsCollectionRef, {
      avatar:
        "https://www.celtictraining.com.au/wp-content/uploads/2020/10/default-user-icon-4-200x200.jpg",
      image: tweetImage,
      name: "Manav Bhatt",
      text: tweetMessage,
      username: "manavbhatt",
      verified: true,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://www.celtictraining.com.au/wp-content/uploads/2020/10/default-user-icon-4-200x200.jpg" />
          <input
            placeholder="What's happening?"
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__input-image"
          placeholder="Enter image URL"
          type="text"
          value={tweetImage}
          onChange={(e) => {
            setTweetImage(e.target.value);
          }}
        />
        <Button
          type="submit"
          className="tweetBox__tweet-button"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
