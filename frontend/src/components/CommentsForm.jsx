import { useState } from "react";

const CommentsForm = () => {
  const [error, setError] = useState("error message");

  return (
    <form className="comments-form">
      <div className="input-group">
        <label htmlFor="title">Comments Title</label>
        <input type=" text" id="title" />
      </div>
      <div className="input-group">
        <label htmlFor="comment">Your Comment</label>
        <textarea name="body" id="comment" cols="30" rows="10"></textarea>
      </div>
      <div className="input-group">
        <label htmlFor="title">Image Url</label>
        <input type=" text" id="imgUrl" />
      </div>
      <p className="error-message">{error}</p>
      <button className="button">Submit Comment</button>
    </form>
  );
};

export default CommentsForm;
