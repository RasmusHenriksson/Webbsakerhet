import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import Comment from '../components/Comment'
import Comments from '../components/Comments'

const Home = () => {

  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const getPosts = async () => {
      setLoading(true)
      try {
        
        const res = await fetch('https://localhost:7272/api/Posts')
        if(!res.ok) {
          throw new Error(res.status, res.statusText)
        }
        const data = await res.json()
        setComments(data)
        setLoading(false)

      } catch (err) {
        console.log(err.message)
        setLoading(false)
      }

    }

    getPosts()

  }, [])

  if(loading) {
    return <Loading />
  }

  return (
    <>
      
      < Comments />
      {
        comments.length > 0 ? comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))
        : <div className="nocomments">There are currently no comments, login to write the first comment!</div>
      }
    </>
  )
}

export default Home