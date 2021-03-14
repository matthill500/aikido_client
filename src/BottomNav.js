import React from 'react';

import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    '& a': {
      textDecoration:'none',
      color:theme.palette.text.primary
    }
    
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
    <div 
    // className="mui-container mui--text-center"
    >
    <h4>&copy; <a href="https://www.linkedin.com/in/matthew-hill-28b823132/" target="_blank">MH</a></h4>
    </div>
  </footer>
  );
}

export default Home;
