import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
  },
  drawerPaper: {
    width: 240,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const navItems = ['Home', 'About', 'Contact'];

export default function Header({ currentPage, handlePageChange }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.drawer}>
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
      <AppBar position="fixed" className={classes.appBar}>
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
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
}
