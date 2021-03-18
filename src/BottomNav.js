import React from 'react';

import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    backgroundColor:'#00697a',
    color:'white',
    left: '0',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    '& a': {
      textDecoration:'none',
      color:'white'
    }
    
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
    <div>
    <h5>&copy; <a href="https://www.linkedin.com/in/matthew-hill-28b823132/" target="_blank" rel="noreferrer">MH</a></h5>
    </div>
  </footer>
  );
}

export default Home;
