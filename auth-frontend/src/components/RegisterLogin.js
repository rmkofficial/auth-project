import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const RegisterLogin = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [isRegister, setIsRegister] = useState(true);
    const history = useHistory();

    const { name, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const url = isRegister
                ? 'http://localhost:5000/api/auth/register'
                : 'http://localhost:5000/api/auth/login';
            const res = await axios.post(url, isRegister ? { name, email, password } : { email, password });

            localStorage.setItem('token', res.data.token);

            onLogin();
            history.push('/profile');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {isRegister ? 'Register' : 'Login'}
                </Typography>
                <form onSubmit={onSubmit}>
                    {isRegister && (
                        <TextField
                            label="Name"
                            name="name"
                            value={name}
                            onChange={onChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                    )}
                    <TextField
                        label="Email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={onChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        {isRegister ? 'Register' : 'Login'}
                    </Button>
                </form>
                <Button
                    fullWidth
                    sx={{
                        mt: 2,
                        color: '#1976D2',
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                        '&:hover': {
                            color: '#125EA2',
                        },
                    }}
                    onClick={() => setIsRegister(!isRegister)}
                >
                    {isRegister ? 'Already have an account? Login' : 'Don’t have an account? Register'}
                </Button>
            </Box>
        </Container>
    );
};

export default RegisterLogin;
