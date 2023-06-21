import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const SignUP = ({token,setToken}) => {
    const[username,setUserName]= useState('')
    const[password,setPassword]= useState('')
    const[email,setEmail]= useState('')
const navigate=useNavigate()


const login = async (Incoming) => {
    const res = await fetch("http://127.0.0.1:8000/api/auth/token/login/", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(Incoming),
    });
    const json = await res.json();
    console.log(res);
    console.log(json);
    if(res.status===400){
      if(json.non_field_errors){
        toast.error(json.non_field_errors[0])
      }
      else if(json.email){
        toast.error(json.email[0])
      }else if(json.password){
        toast.error(json.password[0])
      }
     
    }if(res.status===200){
      setToken(json.auth_token)
      toast.success('welcome Nigger')
      localStorage.setItem('token', JSON.stringify(json.auth_token))
      navigate('/')
    }

  };

const loginuser = async (Incoming) => {
    const res = await fetch("http://127.0.0.1:8000/api/auth/users/", {
      method: "POST",
      headers:{
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(Incoming),
    });

    const json = await res.json();
    if(res.status===400){
      // toast.error(json.password[0])
      console.log(json);
      if (json.email){
        toast.error(json.email[0])
        
      }
      else if(json.username){
        toast.error(json.username[0])
        
      }
      else if(json.password){
        toast.error(json.password[0])

      }
    }
    else if(res.status===201){
      toast.success(`Registered Succesfully welcome ${json.username}`)
      // setUser(json)
    //   setTimeout(()=>{
    //     navigate('/dashboard')

    //   },2000)


    
    login({
      username: Incoming.username,
      password: Incoming.password
    })
    }
}

  return (
    <div className='mw1240'>
        <form className='d' onSubmit={(e)=>{
            e.preventDefault()
            const formdata={
                password,
                username,
                email,
            }
            loginuser(formdata)
        }} action="">
            <input onChange={(e)=>{
                setUserName(e.target.value)
            }} placeholder='username' type="text" />
            <input onChange={(e)=>{
                setPassword(e.target.value)

            }} placeholder='password' type="text" />
            <input onChange={(e)=>{
                setEmail(e.target.value)

            }} placeholder='email' type="text" />
            <button>Submit</button>
            <p>Already have an account? <span style={{color:'purple'}}> <Link to={'/login'}>Login</Link></span></p>
        </form>
    </div>
  )
}

export default SignUP