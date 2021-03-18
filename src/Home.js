//imports

import React from 'react';
import clsx from 'clsx';

import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fade from "@material-ui/core/Fade"
import Container from '@material-ui/core/Container';

import { Link } from "react-router-dom";


//styling
const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  link:{
    textDecoration:'none',
    margin: `${theme.spacing(3)}px 0`
    // color:theme.palette.text.primary
  },
  content: {
    textAlign: 'left',
    flexGrow: 1,
    height:'80vh',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: -drawerWidth,
  },
  gridContainer: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column-reverse'
    }
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <main className={clsx(classes.content)} >
        <div className={classes.drawerHeader} />
        <Container fixed style={{display:'flex', height:'100%', alignItems:'center'}} >
          <Grid className={classes.gridContainer} container spacing={3}>
            <Grid item  xs={12} sm={6}>
              <Fade in={true}timeout={1000}>
              <Typography variant="h1">DXY vs BITCOIN</Typography>
              </Fade>
              <Fade in={true} timeout={1500}>

              <Typography variant="body1">The dollar is considered strong when it rises in value against other currencies (DXY).
                Crypto-assets are known to be inversley correlated to the performance of the DXY, as inflation fears
                play into weakening the dollar, precious metals and recently Bitcoin, are considered as a safe
                tactic to hedge against inflation. 
                </Typography>
              </Fade>
              <Button component={Link} to='/Chart' className={classes.link} variant="contained" color="primary" size="large">Chart</Button>

            </Grid>
            <Grid item xs={12} sm={6} style={{display: 'flex'}} >
            <Fade in={true} timeout={2000}>
              <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_SjhGcR.json"  
                              background="transparent"  
                              speed="1.2"  
                              style={{margin:'auto',width: '400px', height: '400px'}}  
                              loop autoplay>
              </lottie-player>
              </Fade>
            </Grid>
            
          </Grid>
        </Container>
    </main>
  );
}

export default Home;
