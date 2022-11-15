import { useState } from "react";
import DOMPurify from "dompurify";

const CommentsForm = ({ addComment }) => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    imgUrl: "",
  });

  const handleChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.body || !formData.imgUrl) {
      setError("Please enter all the fields!");
      return;
    }
    setError("");

    // WHITELIST, tillåter endast bold och kursiv text
    const comment = {
      id: Date.now().toString(),
      title: DOMPurify.sanitize(formData.title,{ALLOWED_TAGS: ['b', 'i']}),
      body: DOMPurify.sanitize(formData.body,{ALLOWED_TAGS: ['b', 'i']}),
      imgUrl: DOMPurify.sanitize(formData.imgUrl,{ALLOWED_TAGS: ['b', 'i']}),
    };
    addComment(comment);
    e.target.reset();
  };

  return (
    <form className="comments-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="title">Comments Title</label>
        <input name="title" type=" text" id="title" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label htmlFor="comment">Your Comment</label>
        <textarea
          name="body"
          id="comment"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="input-group">
        <label htmlFor="title">Image Url</label>
        <input name="imgUrl" type=" text" id="imgUrl" onChange={handleChange} />
      </div>
      <p className="error-message">{error}</p>
      <button className="button">Submit Comment</button>
    </form>
  );
};

export default CommentsForm;
