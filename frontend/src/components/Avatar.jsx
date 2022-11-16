import React from 'react'
import { useState } from 'react'
import Dropdown from './Dropdown'

const Avatar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  return (
    <div className="avatar-dropdown">
      <div className='avatar' onClick={() => setDropdownOpen(state => !state)}>
        <img src="https://media.istockphoto.com/id/477333976/sv/foto/female-portrait-icon-as-avatar-or-profile-picture.jpg?s=1024x1024&w=is&k=20&c=z_ZYz5V5GaW8kkviIDBp4gkaiCRxPCiJkTNsQseeXR4=" alt="" />
      </div>
      {
        dropdownOpen && <Dropdown />
      }
    </div>
  )
}

export default Avatar