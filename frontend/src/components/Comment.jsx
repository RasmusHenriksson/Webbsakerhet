import React from "react";
import DOMPurify from "dompurify";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <div className="img-container">
          <img src={comment.imgUrl} alt="" />
        </div>
        <h2>{comment.title}</h2>
      </div>
      <div className="comment-body" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.body )}}>
        
      </div>
    </div>
  );
};

export default Comment;
