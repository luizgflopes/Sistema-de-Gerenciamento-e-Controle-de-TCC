import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/iconetcc.png";
import Container from "@material-ui/core/Container";
import { useHistory, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  full: {
    minWidth: "100%",
  },
  title: {
    textAlign: "center",
  },
  container: {
    paddingTop: "2%",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function DefaultLayoutComponent({ title, children }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography style={{textAlign: "center"}} variant="h2" component="h2">
          {title}
        </Typography>
                </Grid>
        <Grid item xs={12}>
            {children}
        </Grid>
      </Grid>
    </div>
  );
}
