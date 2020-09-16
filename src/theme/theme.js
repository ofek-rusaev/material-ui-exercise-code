import { createMuiTheme } from '@material-ui/core';
import { grey, blueGrey } from '@material-ui/core/colors';


export const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey[700],
            light: blueGrey[200],
            dark: blueGrey[900],
        },
        secondary: {
            main: grey[700],
            light: grey[300],
            dark: grey[900],
        },

        theme: 'dark'
    }
});