import React,{useEffect, useState} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../fetch-staffs/fetchData';
 


export default function SearchExercises() {
  const [exercises, setexercises] = useState([]);
  const [search, setSearch] = useState('');
  const [bodyParts, setbodyParts] = useState([]);


  useEffect(()=>{
    const fetchExerciseData = async () =>{
      const bodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartlist', exerciseOptions);
      setbodyParts(["all", ...bodyParts ]);
    }
    fetchExerciseData();
  },[]);

  const handleSearch = async () => {
     if(search) {
         const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
         const SearchedExercises =exercisesData.filter(
          (exercise) => exercise.name.toLowerCase().includes(search)
          ||exercise.target.toLowerCase().includes(search) 
          ||exercise.eqiupment.toLowerCase().includes(search) 
          ||exercise.bodyPart.toLowerCase().includes(search) 
         );
         setSearch('');
         setexercises(SearchedExercises);
     }
  }


  return (
    <div>
        <Stack 
          alignItems='center'
          justifyContent='center'
          p='20px'
          mt='37px'
        >
            <Typography
              fontWeight='900'
              sx={{
                fontsize: {lg: '44px', xs: '30px'
            }}}
            mb='50px'
            textAlign={'center'}
            >
             Try it yourself:
            </Typography>
            <Box position={'relative'} mb={'720px'}>
                <TextField 
                    sx={{ 
                      input: { 
                      fontWeight: '700', 
                      border: 'none', 
                      borderRadius: '0px' 
                      }, 
                      width: { 
                      lg: '700px', 
                      xs: '350px' 
                      }, 
                      backgroundColor: 'grey', 
                      borderRadius: '40px' 
                    }}
                  type='text'
                  placeholder={'Exercises'}
                  value={search}
                  onChange= {(e) => setSearch(e.target.value.toLowerCase())}
                  height={'76px'}
                /> 
                <Button className="search-btn" 
                sx={{ 
                     bgcolor: '#FF2625', 
                     color: '#fff', 
                     textTransform: 'none', 
                     width: { lg: '173px', xs: '80px' }, 
                     height: '56px', 
                     position: 'absolute', 
                     right: '0px', 
                     fontSize: { lg: '20px', xs: '14px' } 
                   }}
                   onClick={handleSearch}
                  >
                  Search
                </Button>
            </Box> 
            <Box sx={{positon: 'relative', width: '100%', p:'20px'}}>
              <ScrollBar data={bodyParts}/>
            </Box>   
        </Stack>
    </div>
  )
}

 