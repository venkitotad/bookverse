import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#F7FBFC',           // same as navbar bg
        color: '#000',                // matching text color
        borderTop: '1px solid #e0e0e0',
        py: 2,
        mt: 4,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          textAlign: { xs: 'center', sm: 'left' },
          gap: 1,
        }}
      >
        <Typography variant="body2" fontWeight={500}>
          © {new Date().getFullYear()} YourApp. All rights reserved.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href="#" underline="hover" sx={{ color: '#000', fontSize: '0.9rem' }}>
            Privacy
          </Link>
          <Link href="#" underline="hover" sx={{ color: '#000', fontSize: '0.9rem' }}>
            Terms
          </Link>
          <Link href="#" underline="hover" sx={{ color: '#000', fontSize: '0.9rem' }}>
            Contact
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
