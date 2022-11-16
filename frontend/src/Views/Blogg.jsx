import React from 'react'
import CommentsForm from '../components/CommentsForm'
import { useState } from 'react';
import Comments from '../components/Comments'



const Blogg = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      title: "Titel",
      body: "Här kommer texten",
      imgUrl:
        "https://webbtelescope.org/files/live/sites/webb/files/home/news/first-images/gallery/_images/STScI-J-HeroERO-Gallery-Fallback-image-1920x1080.jpg",
    },
  ]);

  const addComment = (comment) => {
    setComments(state => [...state, comment])

    
  }

  return (
    <div className="container">
      <CommentsForm addComment={addComment} />
      <Comments comments={comments} />
    </div>
  )
}

export default Blogg