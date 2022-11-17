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
      title: "Internship",
      body: "<i> This is the first few weeks of my internship at google and I wish to tell all of you how grateful I am for this opportunity that i am now able to share with you all!",
      imgUrl:
        "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Chrome__logo.max-500x500.png",
    },
    {
      id: 1,
      title: "Todays weather",
      body: "<b> The weather today is outstanding! The sun is shining and the temperature keeps rising.</b> <br> Hope you all have a wonderful day out in the sun!",
      imgUrl:"https://play-lh.googleusercontent.com/pCQw51XRP4UPr-FCYDjvNnEpFa0HDGJjjLDldN3rmw4KkwhqPu0PZXE8EopmAxzH9mQ",
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
