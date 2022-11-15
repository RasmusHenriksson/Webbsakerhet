import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <div className="img-container">
          <img src={comment.imgUrl} />
        </div>
        <h2>{comment.title}</h2>
      </div>
      <div className="comment-body">{comment.body}</div>
    </div>
  );
};

export default Comment;
