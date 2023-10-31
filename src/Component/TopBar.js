import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className='d-flex container top-bar'>
        <h1>store</h1>
        <Link to="/" className='register-nav' >go to websit</Link>
    </div>
  )
}

export default TopBar