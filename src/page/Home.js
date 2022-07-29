import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchExercises from '../components/SearchExercises';
import HeroSecction from '../components/HeroSecction';
import Exercises from '../components/Exercises ';


const Home = () => {
  // const [exercises, setExercises] = useState([]);
  // const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroSecction />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;