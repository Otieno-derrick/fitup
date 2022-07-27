import React, {useState} from 'react';
import {Box} from '@mui/material';
import Exercises from './Exercises';
import SearchExercises from './SearchExercises';
import Herosection from './Herosection';


const Home = () => {
  return (
    <div >
      <Box>
        <Herosection />
        <SearchExercises />
        <Exercises />
      </Box>

    </div>
  )
}

export default Home;