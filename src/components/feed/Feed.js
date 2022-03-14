import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import FlipMove from "react-flip-move";
import TweetBox from "../tweet-box/TweetBox";
import Post from "../post/Post";
import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      // const data = await getDocs(postsCollectionRef);
      // console.log(data);

      onSnapshot(postsCollectionRef, (snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
    };

    getPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__header-text">Home</h2>
      </div>

      <TweetBox />
      <FlipMove>
        {posts.map((post) => {
          return (
            <Post
              key={post.text}
              avatar={post.avatar}
              name={post.name}
              username={post.username}
              verified={post.verified}
              text={post.text}
              image={post.image}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;
