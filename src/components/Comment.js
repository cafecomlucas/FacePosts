import React from "react";

import "./Comment.css";

const Comment = ({ author, content }) => (
  <div className="comment">
    <img src={author.avatar} />
    <p>
      <strong>{author.name} </strong> {content}
    </p>
  </div>
);

export default Comment;
