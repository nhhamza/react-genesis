import { createMuiTheme } from '@material-ui/core';

const backgroundColor = '#5DAB7C';
const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true
    }
  },

  typography: {
    fontFamily: 'Avenir Next LT Pro',
    fontSize: 12
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: 'Avenir Next LT Pro',
        fontWeight: 500,
        fontSize: 18
      }
    },
    MuiCard: {
      root: {
        overflow: 'unset',
        minWidth: '260px'
      }
    },
    MuiCardContent: {
      root: {
        '&:last-child': {
          paddingBottom: 0
        }
      }
    },
    MuiStepLabel: {
      label: {
        color: '#4C3800',
        fontSize: '12px',
        lineHeight: '16px',
        '&$active': {
          color: '#35B990',
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '14px'
        },
        '&$completed': {
          color: '#4C3800'
        }
      }
    },
    MuiButton: {
      root: {
        fontFamily: 'Avenir Next LT Pro',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: '16px',
        height: '48px',
        color: '#4C3800',
        lineHeight: '20px',
        borderRadius: '8px',
        '&:hover': {
          backgroundColor,
          color: '#5DAB7C',
          borderColor: '#5DAB7C'
        }
      },
      outlinedPrimary: {
        color: '#5DAB7C',
        borderColor: '#5DAB7C',
        borderStyle: 'solid',
        borderWidth: 'thin',
        '&:hover': {
          backgroundColor,
          borderColor: backgroundColor,
          color: '#E5CB90'
        }
      },
      containedPrimary: {
        backgroundColor: '#5DAB7C',
        color: '#E5CB90',
        '&:hover': {
          backgroundColor,
          borderColor: backgroundColor,
          color: '#E5CB90'
        }
      },
      containedSecondary: {
        color: '#E5CB90',
        backgroundColor: '#4C3800',
        '&:hover': {
          backgroundColor,
          borderColor: backgroundColor,
          color: '#E5CB90'
        }
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#FFFFFF'
      }
    }
  }
});

export default theme;
