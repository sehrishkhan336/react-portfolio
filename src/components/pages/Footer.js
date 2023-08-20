// Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {

   
    return (
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, height: '85px' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <div>
                <Typography variant="body1" color="inherit" align="center">

                </Typography>
                </div>

            </Toolbar>
        </AppBar>
    );
};

export default Footer;
