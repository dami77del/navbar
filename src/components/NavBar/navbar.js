import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Typography, Toolbar, Button } from '@material-ui/core';

import { GiBoxUnpacking } from 'react-icons/gi';
import { DiGitBranch } from "react-icons/di";
import { FaUser } from "react-icons/fa";
import { AiOutlineContacts } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";

import img  from "../../utils/img/logo.png";


const Navbar = () => {
    const [value, setValue] = useState(0);
    const HandleClikTab = (e, newValue) => {
        setValue(newValue)
    };
    return (
        <>
            <AppBar color="primary">
                <Toolbar>

                    <Typography><img src={img} /></Typography>
                 
                        <Button disableRipple><GiBoxUnpacking/>INICIO</Button>

                        <Button disableRipple><GiBoxUnpacking/>INICIO</Button>

                        <Button  disableRipple><DiGitBranch/> INICIO</Button>

                        <Button disableRipple><FaUser/>INICIO</Button>

                        <Button  disableRipple><AiOutlineContacts/>INICIO</Button>

                        <Button  disableRipple><FiBookOpen/>INICIO</Button>

                
                    <Button disableRipple variant='contained' color='secondary'>Sumate</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;

