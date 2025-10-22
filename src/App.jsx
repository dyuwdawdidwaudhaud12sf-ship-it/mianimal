import { Height } from '@mui/icons-material';
import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import Appgrid from './Appgrid';

function App() {
  const [counter, setCounter] = useState(0);

  const count = () => {
    setCounter(cont => cont + 1);
  };

  return (
    <Stack direction={{xs : "column" , sm : "column" ,md : "row" ,lg : "row", xl : "row"}} spacing={{xs : 1, sm : 1,md : 3,lg : 3, xl : 5}} sx={{justifyContent: "center",alignItems: 'center',}}>
      <Typography variant='h1'>soy un pato y vivo feliz</Typography>
      <Avatar sx={{width: 400, height: 400}} className="avatar" src="/src/theDUCK.jpg" alt="Pato feliz" />
      <Button sx={{color:'white',backgroundColor:'green'}}variant='contained' size='large' color='primary' type="button" onClick={count}>
        {counter === 0 
          ? "Rascame" 
          : `Me has dado ${counter} rascadita${counter > 1 ? 's' : ''}`}
      </Button>
      <Appgrid/>
    </Stack>
  );
}

export default App
