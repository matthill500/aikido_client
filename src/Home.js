import React from 'react';
import clsx from 'clsx';

import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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
              <h2>LOREM IPSUM</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. It will be met with fire and fury like the world has never seen. 
                Does everybody know that pig named Lorem Ipsum? In case you don't read Twitter, 
                the news, or just can't get enough of The Apprentice host's legendary oration, 
                try this Trump lorem ipsum generator on for size. A handcrafted, small-batch, 
                artisinal pour-over version of the classic lorem ipsum generator, Hipster Ipsum 
                will give your mocks that blue collar touch.</p>
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
            <Button variant="contained" color="primary" size="large">Chart</Button>
            </Grid>
          </Grid>
        </Container>
    </main>
  );
}

export default Home;
