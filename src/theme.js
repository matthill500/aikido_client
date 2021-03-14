 import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

 let theme = createMuiTheme({
   palette: {
     primary: {
       main: "#00697a",
     },
     secondary: {
       main: "#98C1FF",
     },
   },
   typography: {
     fontFamily: ["Poppins", "sans-serif"].join(","),
   },
   overrides: {
     MuiTypography: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        h1: {
          fontWeight: 800,
          fontSize: "3rem",
        },
        h2: {
          fontWeight: 500,
          fontSize: "2rem",
        },
        h3: {
          fontSize: "1.6rem",
        },
        body1: {
            color: "#0a0909b0"
        }
     },
   },
 });
 
 theme = responsiveFontSizes(theme);
 
 export default theme;
 