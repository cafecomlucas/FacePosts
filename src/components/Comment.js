import React from "react";

import "./Comment.css";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <img src={comment.author.avatar} />
      <p>
        <strong>{comment.author.name} </strong> {comment.content}
      </p>
    </div>
  );
};

export default Comment;
