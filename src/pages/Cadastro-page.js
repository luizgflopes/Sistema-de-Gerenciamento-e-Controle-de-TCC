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
  configuracaopagina: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icone: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    height: theme.spacing(10),
    width: theme.spacing(10),
  },
  formulario: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  entrarbutton: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const [formulario, setformulario] = useState({
    primeironome: null,
    ultimoNome: null,
    email: null,
    senha: null,
  });
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.configuracaopagina}>
        <Avatar className={classes.icone} src={logo}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Criar conta
        </Typography>
        <form className={classes.formulario} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={formulario.primeironome}
                error={!/^[a-zA-Z]*$/.test(formulario.primeironome)}
                autoComplete="fname"
                name="primeironome"
                variant="outlined"
                required
                fullWidth
                id="pnome"
                label="Primeiro Nome"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="unome"
                label="Ultimo nome"
                name="ultimonome"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Endereço de email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="senha"
                label="Senha"
                type="password"
                id="senha"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="csenha"
                label="Confirmar senha"
                type="password"
                id="scenha"
              />
            </Grid>
          </Grid>
          <Button
            type="entrarbutton"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.entrarbutton}
          >
            CriarConta
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                variant="body2"
                onClick={() => {
                  history.push("/");
                }}
              >
                Já tem uma conta? Clique para entrar
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
