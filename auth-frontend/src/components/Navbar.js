import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Navbar = ({ onLogout }) => {
    const history = useHistory();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const logout = () => {
        onLogout();
        history.push('/');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1A73E8' }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 700,
                        color: '#FFFFFF',
                    }}
                >
                    MyApp
                </Typography>
                <Button
                    color="inherit"
                    onClick={logout}
                    startIcon={<LogoutIcon />}
                    sx={{
                        backgroundColor: '#EA4335',
                        fontWeight: 600,
                        '&:hover': {
                            backgroundColor: '#C5221F',
                        },
                    }}
                >
                    {isMobile ? null : 'Logout'}
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
