import { useState } from "react";
import DOMPurify from "dompurify";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const Blogg = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate()
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.body || !formData.imgUrl) {
      setError("Please enter all the required fields!");
      return;
    }
    const regex = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|png)/;
    if (!regex.test(formData.imgUrl)) {
      setError("The image you uploaded must be either jpg or png");
      return;
    }
    setError("");

    
    // WHITELIST, title allows only bold and body allows bold and italic text
    const post = {
      title: DOMPurify.sanitize(formData.title, { ALLOWED_TAGS: ['b', 'i'] }),
      body: DOMPurify.sanitize(formData.body, { ALLOWED_TAGS: ['b', 'i'] }),
      imgUrl: DOMPurify.sanitize(formData.imgUrl, { ALLOWED_TAGS: ['b', 'i'] })
    }
    try {
      const token = localStorage.getItem('accessToken')
      
      const res = await fetch('https://localhost:7272/api/Posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${token}`
        }
      })
      if(!res.ok) {
        throw new Error(res.status, res.statusText)
      }
      setError(false)
      navigate('/')
      
    } catch (err) {
      console.log(err.message)
      setError(true)
    }
    
    console.log(post)

  };

  return (
    <form className="comments-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label id="your-title"  >
          Comments Title
        </label>
        <input name="title" type="text" id="title" onChange={handleChange} />
      </div>

      <div className="input-group">
        <label id="your-comment" >
          Your Comment
        </label>
        <textarea name="body" id="comment" cols="30" rows="10" onChange={handleChange}
        ></textarea>

      </div>
      <div className="input-group">
        <label id="your-img" >
          Image Url
        </label>
        <input name="imgUrl" type="text" id="imgUrl" onChange={handleChange} />
      </div>
      <p className="error-message">{error}</p>
      <button className="button">Submit Comment</button>
    </form>
    
  );
};


export default withAuthenticationRequired(Blogg, {
  onRedirecting: () => <Loading />
})
