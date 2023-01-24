import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#04385A',
      },
      success: {
        main: "#2CCFBC",
      },
      warning: {
        main: "#F93E6C",
      },
      text: {
        primary: "#464356",
        link: "#2CCFBC",
      },
      introBackground : {
        primary: "#F6F8FA",
        secondary: "#2CCFBC1A",
        regular: "#F93E6C1A",
      },
    },
    typography: {
        fontFamily: "'Inter', 'sans-serif'",
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        h4: {
            fontFamily: "'Inter', 'sans-serif'",
            fontWeight: 700,
        },
        h5: {
            fontFamily: "'Inter', 'sans-serif'",
            fontWeight: 700,
        },
        body1: {
            fontFamily: "'Inter', 'sans-serif'",
            fontWeight: 400,
            fontSize: "0.8rem",
        },
        body2: {
            fontFamily: "'Inter', 'sans-serif'",
            fontWeight: 600,
            fontSize: "0.8rem",
        }
    },
});

export default theme