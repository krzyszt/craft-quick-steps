import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import { useNode } from '@craftjs/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Dashboard = ({ background, padding = 0, children }) => {
  const classes = useStyles();
  const { connectors: { connect, drag } } = useNode();
  return (
    <Paper ref={ref => connect(drag(ref))} style={{ minHeight: "800px", background, padding: `${padding}px` }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {children}
    </Paper>
  )
}

export { Dashboard as default, Dashboard };