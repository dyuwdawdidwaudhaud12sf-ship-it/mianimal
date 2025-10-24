import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import { useState } from 'react'

function FormRegistro() {
    //constantes donde guardamos nombre y raza
    const [datos, setData] = useState({ nombre: '', raza: '' })
   //aqui se guarda el nombre ingresado en el formulario
    const nombre = (e) => {
        setData({
            ...datos,
            nombre: e.target.value
        })
    }
      //aqui se guarda la raza ingresado en el formulario
    const raza = (e) => {
        setData({
            ...datos,
            raza: e.target.value
        })
    }
    //lo se que hace tras pulsar el boton "registro". este muestra los datos ingresados en el formulario al usuario
    const enviar = (e) => {
        e.preventDefault();
        alert("Mascota registrada:\n" + datos.nombre + "\n" + datos.raza)
    }

    //en el return se encuentra un container donde engloba un grid donde estan los texfields y un boton para enviar los resultados y ademas ejecutar la const enviar
    //paper actua como otro container y fondo del formulario, en box se encuentra los texfields y grids y es necesario para si quiera crear un formulario y ejecutar su submit
    return (
        <Container>
            <Paper elevation={1} square={false} sx={{ textAlign: 'center' }}>
                <Typography variant='h6' color='primary' sx={{ mt: 6, mb: 6 }}>Registra tu mascota</Typography>
                <Box component='form' onSubmit={enviar}>
                    <Grid container spacing={5}>
                        <Grid item={6}>
                            <TextField required label="Nombre" variant="outlined" fullWidth value={datos.nombre} onChange={nombre} />
                        </Grid>

                        <Grid item xs={5}>
                            <TextField label="Raza" variant="outlined" fullWidth value={datos.raza} onChange={raza} />
                        </Grid>

                        <Grid item xs={3}>
                            <Button type="submit" variant='outlined' fullWidth>Registrar</Button>
                        </Grid>
                    </Grid >
                </Box >
            </Paper >
        </Container >
    );
}
export default FormRegistro
