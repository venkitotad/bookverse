import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../index.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0} // <-- removes Material UI default shadow
      sx={{
        bgcolor: '#F7FBFC',
        boxShadow: 'none', // <-- forces no shadow visually
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={NavLink}
              to={item.path}
              sx={{
                color: '#000',
                textTransform: 'none',
                '&.active': {
                  fontWeight: 'bold',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            component={NavLink}
            to="/signin"
            sx={{ color: 'black', textTransform: 'none' }}
          >
            SignIn
          </Button>
          <Button
            component={NavLink}
            to="/signup"
            sx={{ color: 'black', textTransform: 'none' }}
          >
            SignUp
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
