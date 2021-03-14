import React from 'react';
import clsx from 'clsx';

import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Link } from "react-router-dom";

const drawerWidth = 240;

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
    color:theme.palette.text.primary
  },
  content: {
    flexGrow: 1,
    height:'80vh',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <main className={clsx(classes.content)} >
        <div className={classes.drawerHeader} />
        <Container fixed style={{display:'flex', height:'100%', alignItems:'center'}}>
          <Grid container spacing={3}>
            <Grid item  xs={12} sm={6}>
              <h1>DXY vs CRYPTO</h1>
              <p>The dollar is considered strong when it rises in value against other currencies (DXY).
                Crypto-assets are known to be inversley correlated to the performance of the DXY, as inflation fears
                play into weakening the dollar, precious metals and recently Bitcoin, are considered as a safe
                tactic to hedge against inflation. This is one reason Bitcoin has enjoyed an uptrend in recent times,
                although, as investors will seek to cash out in USD, this could cause the DXY to rise while assets such as
                gold and bitcoin will consolidate.
              </p>
            </Grid>
            <Grid item xs={12} sm={6} >
              <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_SjhGcR.json"  
                              background="transparent"  
                              speed="1.2"  
                              style={{margin:'auto',width: '300px', height: '300px'}}  
                              loop autoplay>
              </lottie-player>
            </Grid>
            <Grid item  xs={12} sm={12}>
            <Link to='/Chart' className={classes.link}>
              <Button variant="contained" color="primary" size="large">Chart</Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
    </main>
  );
}

export default Home;
