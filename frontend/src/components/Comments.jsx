import React from 'react'
import Comment from './Comment'

const Comments = ({ comments }) => {
  return (
    <>
    <h2 className="sub-title">Comments</h2>
    {
      comments && comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))
    }
    </>
  )
}

export default Comments