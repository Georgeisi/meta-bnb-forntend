import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
// import { Toast } from '@chakra-ui/react'
import { toast } from 'react-hot-toast';
import axios from 'axios';

const Login = ({ token, setToken }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

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
      //
    //   console.log(error.response.data);
    }
    // console.log(res.data);
  };

  return (
    <div className="mw1240">
      <form
        onSubmit={e => {
          e.preventDefault();
          const formData = {
            password,
            username,
          };
          login(formData);
        }}
        className="d"
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
        <button>Submit</button>
        <p>
          No Account?{' '}
          <span style={{ color: 'purple' }}>
            {' '}
            <Link to={'/signup'}>Sign up</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
