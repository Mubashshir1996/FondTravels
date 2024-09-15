import { createTheme } from '@mui/material/styles';

const paymentTheme = createTheme({
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
                    marginRight: '0',
                },
                asterisk: {
                    display: 'none'
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    top: '-5px'
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: '13px',
                    background: '#000',
                    opacity: '0.8'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: '13px !important',
                    fontWeight: '500 !important'
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
                    width: '100%'
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
        MuiInputBase: {
            styleOverrides: {
                input: {
                    '&:focus': {
                        backgroundColor: 'transparent'
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: '5px'
                }
            }
        },
        MuiStack: {
            styleOverrides: {
                root: {
                    paddingTop: '0px !important'
                }
            }
        }
    },
});

export default paymentTheme;