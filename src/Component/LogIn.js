import React, { useState } from 'react'
import axios from 'axios';

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accept, setAccept] = useState(false);
    const [emailEror, setEmailEror] = useState();
  
  
  // console.log(flag);
  async function submit(e) {
      let flag = true;
      e.preventDefault()
      setAccept(true)
      if(password.length<8 ){
         flag = false;
      }else flag=true;
     try{
       if(flag){
       let res = await axios.post("http://127.0.0.1:8000/api/login",
        { email : email , password : password });
        if(res.status === 200){
          window.localStorage.setItem("email",email);
          window.location.pathname="/"
        }
       }
      
    }catch (err) {
      setEmailEror(err.response.status);
      // console.log(err.response.data.errors.message);
      }
  }
  
  
  
  
    return (
      <div className='parent'>
        <div className='register'>
          <form onSubmit={submit}>           
              {/* input email */}
            <label htmlFor="email">email:</label>
            <input id='email' type='email'
             placeholder='email' value={email}
             onChange={(e)=>setEmail(e.target.value)}
             />
             {accept && emailEror === 422 && <p style={{ color: 'red' }}>Email is already taken</p>}
             
             {/* input password */}
            <label htmlFor="password">password:</label>
            <input id='password' type='password' 
            placeholder='password' value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            />
            {password.length<8 && accept&& <p style={{ color:"red" }}>lenght smmol</p>}
            {/* input repet password */}
            
              {/* button  */}
            <div style={{ textAlign: "center" }}>
              <button type='submit'>Log In</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default LogIn