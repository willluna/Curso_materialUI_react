import React from 'react';
import Button from '@mui/material/Button'



function App() {
  return (
    <div>
      <Button color="secondary">
        Color
      </Button>

      <Button
      color="primary"
      variant="contained"
      >
        Outlined
      </Button>

      <p>Lorem</p>
      
      <Button
      className='mt-2 mb-4'
      color="secondary"
      variant='contained'
      disableElevation 
      >
        Color
      </Button>
    <br></br>
    <Button
      color="secondary"
      variant='contained'
      href='https://google.com'
      disableElevation
      >
        Google
      </Button>
    
      <Button
      color="secondary"
      variant='contained'
      fullWidth
      >
        fullWidth
      </Button>

      <Button
      color="secondary"
      variant='contained'
      size='small'
      >
        fullWidth
      </Button>

      <Button
      color="secondary"
      variant='contained'
      size='large'
      >
        fullWidth
      </Button>
    </div>
  );
}

export default App;
