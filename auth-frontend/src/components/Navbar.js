import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
    const history = useHistory();

    const logout = () => {
        onLogout();
        history.push('/');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    MyApp
                </Typography>
                <Button color="inherit" onClick={logout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
