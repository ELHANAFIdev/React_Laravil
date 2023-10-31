import React from 'react'
import SignUp from './SignUp'
import { Route, Routes } from 'react-router-dom'
import LogIn from './LogIn'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import Users from '../Users'
import UpdateUser from '../UpdateUser'

const App = () => {
  return (
    <div>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/lohin" element={<LogIn/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/dashboard" element={<Dashboard/>} >
            <Route path="users" element={<Users/>}/>
            <Route path="users/:id" element={<UpdateUser/>}/>
          </Route>
        </Routes>
    </div>
  )
}

export default App