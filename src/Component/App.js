import React from 'react'
import SignUp from './SignUp'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import LogIn from './LogIn'
import Home from './Home'
import About from './About'

const App = () => {
  return (
    <div>
        <Header/>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/lohin" element={<LogIn/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
    </div>
  )
}

export default App