import axios from 'axios';
import React, { useState } from 'react'

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  // const [emailEror, setEmailEror] = useState("");
  const [emailEror, setEmailEror] = useState();


// console.log(flag);
async function submit(e) {
    let flag = true;
    e.preventDefault()
    setAccept(true)
    if(name.length< 2 || password.length<8 || password !== password ){
       flag = false;
    }else flag=true;
   try{
     if(flag){
     let res = await axios.post("http://127.0.0.1:8000/api/register",
      { name : name , email : email , password : password ,password_confirmation: passwordR,
      });
      if(res.status ===200){
        window.localStorage.setItem("email",email);
        window.location.pathname="/";
      }
     }
    
  }catch (err) {
    // setEmailEror(err.response.data.errors.message);
    setEmailEror(err.response.status);
    // handle error
    // console.log(err.response.data.errors.message);
    }
}




  return (
    <div className='parent'>
      <div className='register'>
        <form onSubmit={submit}>
          {/* input name */}
          <label htmlFor="name">Name:</label>
          <input id='name' type='text'
           placeholder='name' value={name}
           onChange={(e)=>{setName(e.target.value)}}
            />
            {name.length <=2 &&accept&& <p  style={{color:'red'}}>neme is found</p>}
            {/* input email */}
          <label htmlFor="email">email:</label>
          <input id='email' type='email'
           placeholder='email' value={email}
           onChange={(e)=>setEmail(e.target.value)}
           />
           {accept && emailEror === 422 && <p style={{ color: 'red' }}>Email is already taken</p>}
           
           {/* {accept && emailEror == 420 && <p style={{color:'red'}}> emai is aleard been taken</p>} */}
           {/* input password */}
          <label htmlFor="password">password:</label>
          <input id='password' type='password' 
          placeholder='password' value={password} 
          onChange={(e)=>setPassword(e.target.value)}
          />
          {password.length<8 && accept&& <p style={{ color:"red" }}>lenght smmol</p>}
          {/* input repet password */}
          <label htmlFor="repetpassword">Repet password:</label>
          <input id='repetpassword' type='password'
           placeholder='Repet password' value={passwordR}
           onChange={(e)=>setPasswordR(e.target.value)}
            />
            {password !== passwordR && accept && <p style={{color:'red'}}>Passwords do not match</p>}

            {/* button  */}
          <div style={{ textAlign: "center" }}>
            <button type='submit'>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp