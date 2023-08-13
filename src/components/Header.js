import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['About Me', 'Contact', 'Portfolio', 'Resume'];

export default function Header({ currentPage, handlePageChange }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div sx={{ width: 240 }}>
      <Typography variant="h6" align="center" sx={{ my: 2 }}>
        Sehrish Khan
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              selected={currentPage === item}
              onClick={() => handlePageChange(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
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
          <Typography variant="h6" noWrap>
            Sehrish Khan
          </Typography>
          <div style={{ marginLeft: 'auto' }}>
            {navItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                onClick={() => handlePageChange(item)}
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
