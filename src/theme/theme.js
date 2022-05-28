import {createTheme} from "@mui/material";
import nunitoBlack from '../fonts/Nunito-Black.ttf';
import nunitoBold from '../fonts/Nunito-Bold.ttf';
import nunitoLight from '../fonts/Nunito-Light.ttf';
import nunitoMedium from '../fonts/Nunito-Medium.ttf';
import nunitoRegular from '../fonts/Nunito-Regular.ttf';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Nunito-Black',
            'Nunito-Bold',
            'Nunito-Light',
            'Nunito-Medium',
            'Nunito-Regular'
        ].join(','),
        h1: {
            fontFamily: 'Nunito-Black',
            lineHeight: '80px',
            fontSize: '90px'
        },
        h3: {
            fontSize: 60,
            fontFamily: 'Nunito-Black',
            marginBottom: '2rem',
        },
        h4: {
            fontFamily: 'Nunito-Black',
            marginBottom: '1rem',
            fontWeight: 'bold',
        },
        h5: {
            fontSize: 16,
            fontFamily: 'Nunito-Black',
        },
        h6: {
            color: 'black',
            fontFamily: 'Nunito-Light',
        },
        subtitle1: {
            fontFamily: 'Nunito-Black',
            fontSize: '1.4rem',
            lineHeight: 1,
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                  font-family: 'Nunito-Black';
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                  src: local('Nunito-Black'), local('Nunito-Black'), url(${nunitoBlack}) format('ttf');
                  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
                @font-face {
                  font-family: 'Nunito-Bold';
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                  src: local('Nunito-Bold'), local('Nunito-Bold'), url(${nunitoBold}) format('ttf');
                  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
                @font-face {
                  font-family: 'Nunito-Light';
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                  src: local('Nunito-Light'), local('Nunito-Light'), url(${nunitoLight}) format('ttf');
                  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
                @font-face {
                  font-family: 'Nunito-Medium';
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                  src: local('Nunito-Medium'), local('Nunito-Medium'), url(${nunitoMedium}) format('ttf');
                  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
                @font-face {
                  font-family: 'Nunito-Regular'';
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                  src: local('Nunito-Regular''), local('Nunito-Regular''), url(${nunitoRegular}) format('ttf');
                  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
                a {
                  text-decoration: none;
                  color: inherit;
                }
            `,
        },
    },
});

theme.spacing(10);

export default theme;