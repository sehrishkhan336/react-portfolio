import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['About Me', 'Portfolio','Contact', 'Resume'];

export default function Header({ currentPage, handlePageChange }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div sx={{ width: 240 }}>
      <Typography variant="h1">
        Sehrish Khan
      </Typography>
      <Divider />
      <List>
      {navItems.map((item) => (
        <Button
          key={item}
          color="inherit"
          onClick={() => handlePageChange(item)}
          // Highlight the selected button based on currentPage
          // sx={{
          //   fontWeight: currentPage === item ? 'bold' : 'normal',
          // }}
        >
          {item}
        </Button>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" noWrap style={{ fontFamily: 'fantasy' }}>
            Sehrish Khan
          </Typography>
          <div style={{ marginLeft: 'auto' }}>
            {navItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                onClick={() => handlePageChange(item)}
                // Highlight the selected button based on currentPage
                sx={{
                  fontWeight: currentPage === item ? 'bold' : 'normal',
                  color: currentPage === item ? 'black' : 'inherit',
                }}
             >
                {item}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
}
