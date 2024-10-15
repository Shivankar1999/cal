
'use client'
import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { add } from './helper/Add';

function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timer;
    if(error){
       timer   = setTimeout(() =>{
        console.log("Here in setTimeout");
        
            setError('')
           
      },4000)
    }

  
    return () => {
      console.log("Here in setTimeout clean up");
      clearTimeout(timer)
    }
  }, [error])
  

  const handleCalculate = () => {
    try {
      setResult(add(input)); // add is your function here
      setError(null);
    } catch (e) {
      setError(e.message);
      setInput('')
      setResult(null)
      
    }
  };

  return (
    <Container >

 
    <Box sx={{ mt: 5 }}>
      <TextField
        label="Enter numbers"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleCalculate} sx={{ mt: 2 }}>
        Calculate
      </Button>
      {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
      {result !== null && <Typography sx={{ mt: 2 }}>Result: {result}</Typography>}
    </Box>
    </Container>
  );
}

export default Home;
