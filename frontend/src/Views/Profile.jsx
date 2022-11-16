import React from 'react'

const Profile = () => {
  const isAuthenticated = true;
  return (
    <div className="Profile">
      {
        isAuthenticated &&
        <div className='card flex'>
          <div className='image-container'>
            <img src="" alt="namn"></img>
          </div>
          <div className='credentials'>
            <h2>Rasmus</h2>
            <p>emailadress</p>
          </div>
        </div>
      }
    </div>
  )
}

export default Profile