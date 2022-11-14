import { useState } from 'react'
import CommentsForm from './components/CommentsForm'
import Comments from './components/Comments'
const App = () => {

  const [comments, setComments] = useState([
  {
    id: 1,
    title: 'title1',
    body: 'hehehe',
    imgUrl: 'https://webbtelescope.org/files/live/sites/webb/files/home/news/first-images/gallery/_images/STScI-J-HeroERO-Gallery-Fallback-image-1920x1080.jpg',
  }
])

    return (
    <div className="container">
      <CommentsForm />
      <Comments comments={comments} />
    </div>
  )
}


export default App;
