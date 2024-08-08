import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

function Profile() {
    const [profileData, setProfileData] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const res = await axios.get('http://localhost:5000/api/profile', {
                        headers: {
                            'x-auth-token': token
                        }
                    });
                    setProfileData(res.data);
                } catch (err) {
                    console.error(err.response.data);
                }
            }
        };

        fetchProfile();
    }, []);

    const { name, email } = profileData;

    const onChange = e => setProfileData({ ...profileData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const res = await axios.put('http://localhost:5000/api/profile/update', profileData, {
                    headers: {
                        'x-auth-token': token
                    }
                });
                console.log(res.data);
            } catch (err) {
                console.error(err.response.data);
            }
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>Profile</Typography>
                <form onSubmit={onSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        value={name}
                        onChange={onChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={onChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Update Profile
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

export default Profile;
