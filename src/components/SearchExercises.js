import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
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
                  type={'text'}
                  placeholder={'Exercises'}
                  value={''}
                  onchange= {(e) => {}}
                  height={'76px'}
                /> 
            </Box>    
        </Stack>
    </div>
  )
}

export default SearchExercises 