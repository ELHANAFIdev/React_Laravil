
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Users = () => {

    const [users,setUsers]=useState([]);
    const [ss,setSs]=useState([]);

    useEffect((e)=>{
        fetch("http://127.0.0.1:8000/api/user/show")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[ss])

   async function handDelet(id){
    try{
        const ress=await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
    
     if(ress.status===200){
        setSs((e)=>e +1)
     }}catch{
        console.log('hi')
     }
   }

    

    const showUsers=users.map((e,index)=>{
        return <tr key={index}>
            <td>{index +1}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>
                <Link to={`${e.id}`}>
                <h3 style={{ color:"green",cursor:"pointer"}}>ADD</h3>
                </Link>
                <h3 style={{ color:"red",cursor:"pointer" }} onClick={()=>{handDelet(e.id)}}>DEL</h3>
            </td>
        </tr>
    })
    

   
  return (
    <div style={{ padding:"20px" }}>
        <table >
            <thead>
                <tr>
                <th>id</th>
                <th>user</th>
                <th>email</th>
                <th>action</th>
                </tr>
            </thead>
            <tbody>
              {showUsers}
            </tbody>
        </table>
    </div>
  )
}

export default Users