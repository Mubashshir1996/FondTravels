import { createTheme } from '@mui/material/styles';

const themeHotel = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    height: '20px',
                    border: '0'
                },                
            }
        },
        MuiButton: {
            styleOverrides: {
                endIcon: {
                    marginLeft: '0'
                },
                
            }
        },

        MuiSlider: {
            styleOverrides: {
                root: {
                    color: '#023068'
                },
                
            }
        },
        
        
        
    },
});

export default themeHotel;