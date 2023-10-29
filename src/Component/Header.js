import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  function handlelogout(){
    window.localStorage.removeItem("email")
    window.location.pathname="/"
  }
  return (
    <div className='container'>
    <nav className='d-flex'>
        <div className='d-flex'>
        <h4><Link to="/">home</Link></h4>
        <h4><Link to="/about">about</Link></h4>
        </div>    
        <div className='d-flex' >
           {!window.localStorage.getItem("email")?(
           <>
            <Link to="/signup" style={{ textAlign: "center" }} className='register-nav'>
            Register
            </Link>
            <Link to="/lohin" style={{ textAlign: "center" }} className='register-nav'>
            Login
            </Link>
            </>
            ) : (
            <div className='register-nav' onClick={handlelogout}>log out</div>
            )}  

            
        </div>
       
    </nav>
    </div>

  )
}

export default Header