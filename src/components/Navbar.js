import React from 'react';
import {Link} from "react-router-dom";
import  {Stack} from "@mui/material";
import Logo from '../assets/img/images.png';
// import Home from './Home';

const Navbar = () => {
  return (
    <div>
      <Stack 
        direction={'row'}
        justifyContent='space-around' 
        sx={{ gap: { sm: '123px', xs: '40px' }, 
        mt: { sm: '32px', xs: '20px' }, 
        justifyContent: 'none' }} 
        px="20px"
      >
        <Link to="/">
          <img src={Logo}  alt='' style={{height: "5rem", width: "5rem", margin:"0 20px"}} />
        </Link>
        <Stack 
        alignItems={'flex-end'}
        gap={'40px'}
        fontSize={'24px'}
        direction={'row'}
        
        >
          <Link to='/' style={{textDecoration: 'none', color: 'red', borderBottom: '3px solid red'}}>Home</Link>
          <a href='#exercises' style={{textDecoration: 'none', color: 'red'}}>Exercises</a>

        </Stack>
      </Stack>
    </div>
  )
}

export default Navbar