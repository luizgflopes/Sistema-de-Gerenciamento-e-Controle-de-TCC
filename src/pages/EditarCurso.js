import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/iconetcc.png";
import Container from "@material-ui/core/Container";
import { useHistory, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useState } from "react";
import Icon from '@material-ui/core/Icon';
import Tooltip from "@material-ui/core/Tooltip";

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
  botaocancelar: {
    margin: theme.spacing(3),
    width: theme.spacing(20),
    height: theme.spacing(5),
    margintop: theme.spacing(20)
  },
  botaosalvar: {
    margin: theme.spacing(1),
    width: theme.spacing(20),
    height: theme.spacing(5),
    margintop: theme.spacing(20)
  }
}));

export default function EditCourse() {
  const classes = useStyles();
  const [formulario, setformulario] = useState({
    codigocurso: null,
    nomecurso: null,
});

const hostHistory = useHistory();

const cancelButtonClick = () => {
  hostHistory.push("/PesquisarCurso");
};
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.configuracaopagina}>
        <Avatar className={classes.icone} src={logo}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Editar curso
        </Typography>
        <form className={classes.formulario} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                autofocus
                id="nomecurso"
                label="Nome do curso"
                name="nomecurso"
                autoComplete="Nome do curso"
              />
            </Grid>
          </Grid>
          <Tooltip title="Cancelar Edição" interactive>
          <Button
            variant="contained"
            style={{ backgroundColor: 'red', color: 'white' }}
            className={classes.botaocancelar}
            startIcon={<Icon>cancel</Icon>}
            onClick={() => {
              cancelButtonClick();
            }}
            >
            Cancelar
          </Button>
          </Tooltip>
          <Tooltip title="Salvar Alterações" interactive>
          <Button
            type="botaosalvar"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.botaosalvar}
            >
            Salvar
          </Button>
          </Tooltip>
        </form>
      </div>
    </Container>
  );
}
