import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '70vh', // pushes footer down
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" sx={{ color: '#222831' }}>
        Welcome to YourApp 👋
      </Typography>
    </Box>
  );
};

export default Home;
