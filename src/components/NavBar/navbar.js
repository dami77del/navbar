import React from 'react'
import { AppBar, Tabs, Tab, Typography, Toolbar, Button} from '@material-ui/core'


const navbar = () => {
    return (
      <>
      <AppBar color="secondary">
          <Toolbar>
        <Typography> Patobonato</Typography>
        <Tabs>
            <Tab label='Inicio'/>
        </Tabs>
        <Tabs>
            <Tab label='Articulos'/>
        </Tabs>
        <Tabs>
            <Tab label='Archivos Utiles'/>
        </Tabs>
        <Tabs>
            <Tab label='Jose Bonato'/>
        </Tabs>
        <Tabs>
            <Tab label='Contacto'/>
        </Tabs>
        <Tabs>
            <Tab label='Curso'/>
        </Tabs>
        <Button variant='contained' color='secondary'>Profile</Button>
        </Toolbar>
      </AppBar>
      </>
    )
}

export default navbar
