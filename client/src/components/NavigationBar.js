import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  const [check, setCheck] = useState(localStorage.getItem('jwt'))

  function handleRemoveCookie() {
    localStorage.removeItem('jwt')
    setCheck('')
  }

  const stylesheet = {
    link: {
      color: 'white',
      fontSize: '20px',
      textDecoration: 'none',
      marginRight: '20px',
    },
  }

  return (
    <div className='container-fluid'>
      <nav className='menu'>
        {check ? (
          <>
            <Link style={stylesheet.link} to='/allrooms'>
              Chat Rooms
            </Link>
            <Link style={stylesheet.link} to='/joinedrooms'>
              Joined Rooms
            </Link>
            <Link style={stylesheet.link} to='/addroom'>
              Add Room
            </Link>
            <Link style={stylesheet.link} to='/login' onClick={handleRemoveCookie}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link style={stylesheet.link} to='../signup'>
              Signup
            </Link>
            <Link style={stylesheet.link} to='../login'>
              Login
            </Link>
          </>
        )}
      </nav>
    </div>
  )
}

export default NavigationBar

<!-- Updated: 2024-04-04T15:03:00.312077 -->

<!-- Updated: 2024-04-14T11:52:00.312077 -->
