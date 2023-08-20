import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
import { FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, height: '65px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        <div>
          <IconButton
            aria-label="LinkedIn"
            color="inherit"
            href="https://www.linkedin.com/in/sehrish-khan-63056416/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn size={30} />
          </IconButton>
          
          <IconButton
            aria-label="GitHub"
            color="inherit"
            href="https://github.com/sehrishkhan336"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub size={30} />
          </IconButton>
          
          <IconButton
            aria-label="Stack Overflow"
            color="inherit"
            href="https://stackoverflow.com/users/21168319/sehrish-khan"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FaStackOverflow size={30} />
          </IconButton>
        </div>

      </Toolbar>
    </AppBar>
  );
};

export default Footer;
