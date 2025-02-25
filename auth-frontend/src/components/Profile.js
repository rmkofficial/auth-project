import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, Grid, Paper } from '@mui/material';
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
                { name, bio, location },
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
            alert('Profile updated successfully!');
        } catch (err) {
            console.error(err.response.data);
            alert('An error occurred while updating the profile.');
        }
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h4" component="h1" gutterBottom>Profile</Typography>
                    <form onSubmit={onSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Name"
                                    name="name"
                                    value={name}
                                    onChange={onChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    name="email"
                                    value={email}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Bio"
                                    name="bio"
                                    value={bio}
                                    onChange={onChange}
                                    fullWidth
                                    margin="normal"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Location"
                                    name="location"
                                    value={location}
                                    onChange={onChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                    Update Profile
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
};

export default Profile;
