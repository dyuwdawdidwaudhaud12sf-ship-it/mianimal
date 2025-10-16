import * as React from 'react';
import { Grid, Button } from '@mui/material';
function Appgrid() {

    return (
        <Grid container spacing={5} sx={{ justifyContent: "center", alignItems: "center" }}>
            <Grid sx={{ width: 1, height: 2 }}>
                <Button variant='contained' sx={{ color: 'blue', backgroundColor: 'red' }} fullWidth>le red button</Button>
            </Grid>
            <Grid sx={{ width: 1, height: 2 }}>
                <Button variant='contained' sx={{ color: 'green', backgroundColor: 'white' }} fullWidth>Le white button</Button>
            </Grid>
            <Grid sx={{ width: 1, height: 2 }}>
                <Button variant='contained' sx={{ color: 'white', backgroundColor: 'blue' }} fullWidth >le BLUE button</Button>
            </Grid>
            <Grid sx={{ width: 1, height: 2 }}>
                <Button variant='contained' sx={{ color: 'yellow', backgroundColor: 'orange' }} fullWidth >le orange button</Button>
            </Grid>
            <Grid sx={{ width: 1, height: 2 }}>
                <Button variant='contained' sx={{ color: 'grey', backgroundColor: 'purple' }} fullWidth disabled>Terry</Button>
            </Grid>
        </Grid>
    );
}

export default Appgrid      
