import React from "react";

import "./Post.css";

import Comment from "./Comment";

const Post = ({ author, date, content, comments }) => (
  <li className="postContainer">
    <div className="postContent">
      <img src={author.avatar} />
      <div className="authorDetails">
        <h2>{author.name}</h2>
        <span>{date}</span>
      </div>
      <p>{content}</p>
    </div>
    {comments.map(comment => {
      return <Comment key={comment.id} {...comment} />;
    })}
  </li>
);

export default Post;
