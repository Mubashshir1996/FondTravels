import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    padding: '10.5px 0px 10.5px 10px',
                },
                root: {
                    padding: '0',
                    paddingRight: '12px'
                }
            }
        },
        MuiCircularProgress: {
            styleOverrides: {
                root: {
                    color:'#ff3d00'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '0 !important'
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    borderBottom: '#e2e2e2 1px solid',
                    minHeight: '44px'
                }
            }
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    marginLeft: '0',
                    marginRight: '0'
                },
                asterisk: {
                    display: 'none'
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    top: '13px',
                    position: 'absolute',
                    left: '12px', 
                    color: 'rgb(179 179 179)'               
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: '15px !important',
                    fontWeight: '600 !important',
                    color: '#000 !important'
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                root: {
                    position: 'absolute',
                    zIndex: '10000 !important'
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: '0'
                }
            }
        },
        MuiAccordion: {
            expaded: {
                styleOverrides: {
                    root: {
                        margin: '0'
                    }
                }
            },
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    margin: '0'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '100%',
                    minWidth: '0 !important'
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    '&::after': {
                        borderBottom: 'none',
                    },
                    '&::before': {
                        borderBottom: 'none',
                    },
                    '&:hover:not(.Mui-disabled, .Mui-error):before': {
                        borderBottom: 'none',
                    },
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: '0',
                    paddingRight: '8px !important'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    '&:focus': {
                        backgroundColor: 'transparent'
                    }
                }
            }
        },
        MuiInputAdornment:{
            styleOverrides:{
                root:{
                    marginRight: '0'
                }
            }
        },
        MuiStack: {
            styleOverrides: {
                root: {
                    paddingTop: '0px !important',
                    display: 'flex !important'
                }
            }
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    width: '90% !important',    
                    marginLeft: '10px',
                    
                }
            }
        },
    },
});

export default theme;