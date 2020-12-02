import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from "../images/iconetcc.png"
import {
    Link,
    useHistory,
  } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formulario: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  logo: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));
export default function () {
  const classes = useStyles();
  let history = useHistory();

  return (
    <Container className={classes.container} maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.logo} src={logo}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Sistema de gerenciamento de TCC
        </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email,Ra,Nome"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="senha"
          label="Senha"
          type="password"
          id="Senha"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Entrar{" "}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
                Esqueci minha senha
            </Link>
          </Grid>
          <Grid item>
            <Link  variant="body2" onClick={()=>{history.push("/criarconta")}}>
              {"Não tem um conta? Crie uma"}
            </Link>
          </Grid>
        </Grid>
      </form>
      </div>
    </Container>
  );
}