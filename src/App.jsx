import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Icon, IconButton } from '@mui/material';


function App() {
  return (
    <div>
      <DeleteIcon
      color='primary'
      />
      <Icon>
        room
      </Icon>

      <Button
      variant="contained"
      color="secondary"
      endIcon={<DeleteIcon/>}
      >
        Delete
      </Button>

      <Button
      variant="contained"
      color="secondary"
      endIcon={<Icon>
        room
      </Icon>}
      >
        Delete
      </Button>

      <IconButton 
      aria-label="delete"
      >
        <DeleteIcon
      color='primary'
      />
      </IconButton>
    </div>
  );
}

export default App;
