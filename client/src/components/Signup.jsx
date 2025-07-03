import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { Google } from '@mui/icons-material';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    remember: false,
  });

  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    let valid = true;
    let newErrors = { name: '', email: '', password: '' };

    if (formData.name.trim().length === 0) {
      newErrors.name = 'Please enter your name.';
      valid = false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Signup submitted:', formData);
      // TODO: Handle actual signup logic here
    }
  };

  const handleGoogleSignup = () => {
    console.log('Google signup clicked');
    // TODO: Google OAuth here
  };

  return (
    <Box sx={{ bgcolor: '#f9fafb', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="xs">
        <Box
          sx={{
            bgcolor: '#ffffff',
            borderRadius: 2,
            boxShadow: 3,
            p: 4,
          }}
        >
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Sign up
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              type="text"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.remember}
                  onChange={handleChange}
                  name="remember"
                  size="small"
                />
              }
              label="Remember me"
              sx={{ mt: 1 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: '#111827',
                color: '#fff',
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: '#1f2937',
                },
              }}
            >
              Sign up
            </Button>
          </form>

          <Typography
            align="center"
            sx={{ mt: 2, fontSize: 14, color: '#6b7280' }}
          >
            Already have an account?{' '}
            <a
              href="/signin"
              style={{ color: '#111827', textDecoration: 'underline' }}
            >
              Sign in
            </a>
          </Typography>

          <Divider sx={{ my: 3 }}>or</Divider>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<Google />}
            onClick={handleGoogleSignup}
            sx={{
              textTransform: 'none',
              bgcolor: '#fff',
              borderColor: '#e5e7eb',
              color: '#111827',
              '&:hover': {
                bgcolor: '#f3f4f6',
              },
            }}
          >
            Sign up with Google
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
