// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const Profile = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: '',
        location: ''
    });

    const { name, email, bio, location } = formData;

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/profile', {
                    headers: { 'x-auth-token': localStorage.getItem('token') }
                });
                setFormData({
                    name: res.data.name || '',
                    email: res.data.email || '',
                    bio: res.data.bio || '',
                    location: res.data.location || ''
                });
            } catch (err) {
                console.error(err.response.data);
            }
        };

        fetchProfile();
    }, []);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.put(
                'http://localhost:5000/api/profile',
                formData,
                {
                    headers: { 'x-auth-token': localStorage.getItem('token') }
                }
            );
            setFormData({
                name: res.data.name || '',
                email: res.data.email || '',
                bio: res.data.bio || '',
                location: res.data.location || ''
            });
        } catch (err) {
            console.error(err.response.data);
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
                        fullWidth
                        margin="normal"
                        disabled
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={email}
                        fullWidth
                        margin="normal"
                        disabled
                    />
                    <TextField
                        label="Bio"
                        name="bio"
                        value={bio}
                        onChange={onChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Location"
                        name="location"
                        value={location}
                        onChange={onChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Update Profile
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Profile;
