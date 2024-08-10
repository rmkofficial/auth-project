import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976D2',
        },
        secondary: {
            main: '#34A853',
        },
        error: {
            main: '#EA4335',
        },
        background: {
            default: '#F5F5F5',
        },
        text: {
            primary: '#202124',
        },
    },
    typography: {
        h4: {
            fontWeight: 600,
            color: '#1976D2',
        },
        button: {
            fontWeight: 500,
            textTransform: 'none',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF',
                    '&:hover': {
                        opacity: 0.9,
                    },
                },
                containedPrimary: {
                    backgroundColor: '#1976D2',
                },
                containedSecondary: {
                    backgroundColor: '#34A853',
                },
                containedError: {
                    backgroundColor: '#EA4335',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: '#1976D2',
                },
            },
        },
    },
});

export default theme;
