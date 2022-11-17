import React from 'react'
import CommentsForm from '../components/CommentsForm'
import { useState } from 'react';
import Comments from '../components/Comments'
import Loading from '../components/Loading';
import { useAuth0, withAuthenticationRequired, } from '@auth0/auth0-react';



const Blogg = () => {
  const { isAuthenticated, isLoading } = useAuth0();
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
  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="container">{isAuthenticated && (
      <CommentsForm addComment={addComment} />
    )}
      <Comments comments={comments} />
    </div>
  )
}

export default withAuthenticationRequired(Blogg, {
  onRedirecting: () => <Loading />
})
