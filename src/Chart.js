import React from 'react';
import clsx from 'clsx';

import { makeStyles} from '@material-ui/core/styles';

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
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  }
}));

function Chart() {
  const classes = useStyles();
  return (
    <main className={clsx(classes.content)}>
        <div className={classes.drawerHeader} />
          <h1>Chart</h1>
    </main>
  );
}

export default Chart;
