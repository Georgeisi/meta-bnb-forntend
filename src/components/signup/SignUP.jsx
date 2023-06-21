import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUP = ({ token, setToken }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const login = async Incoming => {
    // const res = await fetch("http://127.0.0.1:8000/api/auth/token/login/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "Application/json",
    //   },
    //   body: JSON.stringify(Incoming),
    // });
    // const json = await res.json();
    // console.log(res);
    // console.log(json);

    try {
      const res = await axios.post(
        `https://metabnb-api.onrender.com/api/auth/token/login/`,
        Incoming
      );

      if (res.status === 200) {
        setToken(res.data.auth_token);
        toast.success('welcome Nigger');
        localStorage.setItem('token', JSON.stringify(res.data.auth_token));
        navigate('/');
      }
    } catch (error) {
      if (error) {
        if (error.response.data.non_field_errors) {
          toast.error(error.response.data.non_field_errors[0]);
        } else if (error.response.data.email) {
          toast.error(error.response.data.email[0]);
        } else if (error.response.data.password) {
          toast.error(error.response.data.password[0]);
        }
      }
    }
    // console.log(res.data);
    

    //
  };

  const loginuser = async Incoming => {
    // const res = await fetch('http://127.0.0.1:8000/api/auth/users/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'Application/json',
    //   },
    //   body: JSON.stringify(Incoming),
    // });
    try {
      const res = await axios.post(
        `https://metabnb-api.onrender.com/api/auth/users/`,
        Incoming
      );
      if (res.status === 201) {
        toast.success(`Registered Succesfully welcome ${res.data.username}`);
        // setUser(json)
        //   setTimeout(()=>{
        //     navigate('/dashboard')

        //   },2000)

        login({
          username: Incoming.username,
          password: Incoming.password,
        });
      }
    } catch (error) {
      if (error) {
        if (error.response.data.non_field_errors) {
          toast.error(error.response.data.non_field_errors[0]);
        } else if (error.response.data.email) {
          toast.error(error.response.data.email[0]);
        } else if (error.response.data.password) {
          toast.error(error.response.data.password[0]);
        }
      }
    }
    // console.log(res);

    // if (res.status === 400) {
    //   // toast.error(json.password[0])
    //   console.log(json);
    //   if (json.email) {
    //     toast.error(json.email[0]);
    //   } else if (json.username) {
    //     toast.error(json.username[0]);
    //   } else if (json.password) {
    //     toast.error(json.password[0]);
    //   }
    // }
  };

  return (
    <div className="mw1240">
      <form
        className="d"
        onSubmit={e => {
          e.preventDefault();
          const formdata = {
            password,
            username,
            email,
          };
          loginuser(formdata);
        }}
        action=""
      >
        <input
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="username"
          type="text"
        />
        <input
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          type="text"
        />
        <input
          onChange={e => {
            setEmail(e.target.value);
          }}
          placeholder="email"
          type="text"
        />
        <button>Submit</button>
        <p>
          Already have an account?{' '}
          <span style={{ color: 'purple' }}>
            {' '}
            <Link to={'/login'}>Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUP;
