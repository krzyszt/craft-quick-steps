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

const Widget = ({ background, padding = 0, children }) => {
  const classes = useStyles();
  const { connectors: { connect, drag } } = useNode();
  return (
    <Paper ref={ref => connect(drag(ref))} style={{ margin: "5px", minHeight: "100px", background, padding: `${padding}px` }}>
      <h1> I am widget</h1>
      {children}
    </Paper>
  )
}

export { Widget as default, Widget };