import React from 'react'
import { useState } from 'react';
import Comments from '../components/Comments'



const Home = () => {

  
  const [comments] = useState([
    {
      id: 1,
      title: "Titel",
      body: "Här kommer texten",
      imgUrl:
        "https://webbtelescope.org/files/live/sites/webb/files/home/news/first-images/gallery/_images/STScI-J-HeroERO-Gallery-Fallback-image-1920x1080.jpg",
    },
  ]);

  
  
  return (
    <div className="container">
      <Comments comments={comments} />
    </div>
  )
}





export default Home