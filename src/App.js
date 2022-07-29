import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Login from './components/Login';
import ExerciseDetails from './page/ExerciseDetails';



const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Login />
      <Footer />
    </Box>    
  ); 
}

export default App;