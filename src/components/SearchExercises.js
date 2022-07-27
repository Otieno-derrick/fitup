import React,{useEffect, useState} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import Exercises from './Exercises';

 export default function SearchExercises() {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
     if(search) {
    //     const exercisesData = await fetchData();
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
                  onchange= {(e) => setSearch(e.target.value.toLowerCase)}
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
        </Stack>
    </div>
  )
}

