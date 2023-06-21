import { OrderedList, ListItem, Image } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import React from 'react';
import style from './navbar.module.scss';
import { toast } from 'react-hot-toast';

const Links = ({ isMobile,token , setToken }) => {
  const navigate= useNavigate()



           
const logOutUser=async ()=>{
  const res =await fetch('https://metabnb-api.onrender.com/api/auth/token/logout/',{
    method: 'POST',
    headers:{
      'Content-Type':'application/json',
      Authorization : `Token ${token}`
    }
  })

  // const data=await res.json()
  setToken(null)
  localStorage.removeItem('token')
  navigate(0)
  toast.success('you have succesfully loged out')

}

  console.log(token);
  return (
    <OrderedList
      display={{ base: isMobile ? `flex` : `none`, xl: `flex` }}
      flexDir={isMobile ? `column` : `row`}
      color={isMobile ? `white` : `blackText`}
      alignItems={{ xl: `center` }}
      m={0}
      gap={{ base: 10, xl: 10 }}
      ml={{ xl: 20 }}
    >
      <NavLink
        to={`/`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        <ListItem
          fontWeight={{ base: `thin`, xl: 400 }}
          py={2}
          fontSize={`xl`}
        >
          <Image
            display={{ base: `inline`, xl: `none` }}
            mr={2}
            w="1rem"
            src="https://img.icons8.com/material-outlined/24/FFFFFF/home-page.png"
            alt="home"
          />
          Home
        </ListItem>
      </NavLink>
      <NavLink
        to={`/place-to-stay`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        <ListItem
          fontWeight={{ base: `thin`, xl: 400 }}
          py={2}
          fontSize={`xl`}
        >
          <Image
            display={{ base: `inline`, xl: `none` }}
            mr={2}
            w="1rem"
            src="https://img.icons8.com/metro/26/FFFFFF/place-marker.png"
            alt="home"
          />
          Place to stay
        </ListItem>
      </NavLink>
      <NavLink
        to={`/nfts`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        <ListItem
          fontWeight={{ base: `thin`, xl: 400 }}
          py={2}
          fontSize={`xl`}
        >
          <Image
            display={{ base: `inline`, xl: `none` }}
            mr={2}
            w="1rem"
            src="https://img.icons8.com/external-glyph-wichaiwi/64/FFFFFF/external-nft-non-fungible-token-glyph-wichaiwi-8.png"
            alt="nft"
          />
          NFTs
        </ListItem>
      </NavLink>
      <NavLink
        to={`/community`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        <ListItem
          fontWeight={{ base: `thin`, xl: 400 }}
          py={2}
          fontSize={`xl`}
        >
          <Image
            display={{ base: `inline`, xl: `none` }}
            mr={2}
            w="1rem"
            src="https://img.icons8.com/metro/26/FFFFFF/conference-call.png"
            alt="community"
          />
          Community
        </ListItem>
      </NavLink>
     {token!==null? 
      <NavLink
      onClick={()=>{


logOutUser()
      }}
      className={({ isActive }) => (isActive ? style.active : style.inactive)}
    >
      <ListItem
        fontWeight={{ base: `thin`, xl: 400 }}
        py={2}
        fontSize={`xl`}
      >
       
        LogOut
      </ListItem>
    </NavLink>
   
    
     
     :
       <>
       <NavLink
        to={`/login`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        <ListItem
          fontWeight={{ base: `thin`, xl: 400 }}
          py={2}
          fontSize={`xl`}
        >
         
          Login
        </ListItem>
      </NavLink>
      <NavLink
        to={`/signup`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        <ListItem
          fontWeight={{ base: `thin`, xl: 400 }}
          py={2}
          fontSize={`xl`}
        >
         
          SignUp
        </ListItem>
      </NavLink>
     </>}
    </OrderedList>
  );
};

export default Links;
