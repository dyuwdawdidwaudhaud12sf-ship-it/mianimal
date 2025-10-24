import * as React from 'react';
import { Grid, Button } from '@mui/material';
function Appgrid() {

    return (
        <Grid container spacing={{xs : 5, sm : 5,md : 7,lg : 7, xl : 8}} sx={{ justifyContent: "center", alignItems: "center" }}>
            <Grid sx={{ width: 1, height: 2 }}>
                <Button variant='contained' sx={{ color: 'blue', backgroundColor: 'red' }} fullWidth>botón rojo</Button>
            </Grid>
            <Grid sx={{ width: 1, height: 2 }}>
                <Button variant='contained' sx={{ color: 'green', backgroundColor: 'white' }} fullWidth>botón blanco</Button>
            </Grid>
            <Grid sx={{ width: 1, height: 2 }}>
                <Button variant='contained' sx={{ color: 'white', backgroundColor: 'blue' }} fullWidth >botón azul</Button>
            </Grid>
            <Grid sx={{ width: 1, height: 2 }}>
                <Button variant='contained' sx={{ color: 'yellow', backgroundColor: 'orange' }} fullWidth >botón naranja</Button>
            </Grid>
            <Grid sx={{ width: 1, height: 2 }}>
                <Button variant='contained' sx={{ color: 'grey', backgroundColor: 'purple' }} fullWidth disabled>boton deshabilitado</Button>
            </Grid>
        </Grid>
    );
}

export default Appgrid      
