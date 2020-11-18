import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import DefaultLayoutComponent from "../components/DefaultLayoutComponent";
import { getCursos } from "../services/cursoService";
const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "45%",
    },
  },
  mainroot: {
    display: "flex",
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
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
const useStylesButton = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function CronogramaPage() {
  const classes = useStyles();
  const [Formulario, setFormulario] = useState({
    dtaInicio: new Date().toISOString().slice(0, 10),
    dtaFim: new Date().toISOString().slice(0, 10),
    desSemestre: 1,
    codCursoFaseTcc: 1,
  });
  const buttonStyle = useStylesButton();
  const [listaCursos, setlistaCursos] = useState([]);
  useEffect(() => {
    const getCursos = async () => {
      await axios
        .get("http://localhost:3001/curso")
        .then(function (response) {
          setlistaCursos(response.data);
          console.log(response);
        })
        .catch(function (error) {});
    };

    getCursos();
  }, []);

  const updateForm = (e) => {
    setFormulario({
      ...Formulario,
      [e.target.name]: e.target.value,
    });
    console.log("Formulario", Formulario);
  };
  return (
    <div>
      <CssBaseline />
      <DefaultLayoutComponent title="Cronograma">
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              Semestre Atual: 2020-2
            </Grid>
            <Grid item xs={12}>
              <div>
                <TextField
                  id="curso"
                  select
                  label="Selecione o curso"
                  value={Formulario.codCursoFaseTcc}
                  name="codCursoFaseTcc"
                  onChange={updateForm}
                  size="medium"
                  name="codCursoFaseTcc"
                  variant="filled"
                  helperText="Por favor selecione um curso"
                >
                  {listaCursos.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.nomcurso}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="semestre"
                  label="Selecione o semestre"
                  name="desSemestre"
                  value={Formulario.desSemestre}
                  onChange={updateForm}
                  size="medium"
                  select
                  variant="filled"
                  helperText="Por favor selecione um semestre"
                >
                  <MenuItem key={"1"} value={1}>
                    {"1°"}
                  </MenuItem>
                  <MenuItem key={"2"} value={2}>
                    {"2°"}
                  </MenuItem>
                </TextField>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div>
                <TextField
                  id="date"
                  label="Data Inicio"
                  type="date"
                  name="dtaInicio"
                  defaultValue={Formulario.dtaInicio}
                  className={classes.textField}
                  value={Formulario.dtaInicio}
                  onChange={(event) => {
                    updateForm(event);
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="date"
                  label="Data Fim"
                  type="date"
                  name="dtaFim"
                  defaultValue={Formulario.dtaFim}
                  className={classes.textField}
                  value={Formulario.dtaFim}
                  onChange={(event) => {
                    updateForm(event);
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              xs={11}
            >
              {" "}
              <div className={buttonStyle.root}>
                <Button variant="contained" color="primary">
                  Adicionar
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </DefaultLayoutComponent>
    </div>
  );
}
