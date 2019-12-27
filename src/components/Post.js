import React from "react";

import "./Post.css";

const Post = ({ post }) => {
  const { author, date, content, comments } = post;

  return (
    <li className="postContainer">
      <div className="postContent">
        <img src={author.avatar} />
        <div className="authorDetails">
          <h2>{author.name}</h2>
          <span>{date}</span>
        </div>
        <p>{content}</p>
      </div>
    </li>
  );
};

export default Post;
