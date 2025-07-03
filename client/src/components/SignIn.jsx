import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container, Box, Typography, TextField, Button,
  Divider, Checkbox, FormControlLabel
} from '@mui/material';
import { Google, Facebook } from '@mui/icons-material';
import { useAuth } from '../context/authContext';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    let valid = true;
    let newErrors = { email: '', password: '' };

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }
    if (formData.password.length < 3) {
      newErrors.password = 'Password must be at least 6 characters long.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  
  const {loginUser} = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Sign In:', formData);
        const {email, password} = formData;
        loginUser(email, password);
         navigate("/dashboard"); 
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 2,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: '#fff',
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Sign in
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            margin="normal"
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ mt: 1 }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              background: 'linear-gradient(to right, #1a1a1a, #1a1a1a)',
              color: '#fff',
              '&:hover': {
                background: '#000',
              },
            }}
          >
            Sign in
          </Button>
        </form>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, textDecoration: 'underline', cursor: 'pointer' }}
        >
          Forgot your password?
        </Typography>

        <Divider sx={{ my: 3 }}>or</Divider>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<Google />}
           sx={{
              textTransform: 'none',
              bgcolor: '#fff',
              borderColor: '#e5e7eb',
              color: '#111827',
              '&:hover': {
                bgcolor: '#f3f4f6',
              }}}
        >
          Sign in with Google
        </Button>


        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Don’t have an account?{' '}
          <Button component="a" href="/signup" sx={{ color: '111827', textTransform: 'none', p: 0, minWidth: 0, ":hover":'#f3f4f6' }}>
            Sign up
          </Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignIn;
