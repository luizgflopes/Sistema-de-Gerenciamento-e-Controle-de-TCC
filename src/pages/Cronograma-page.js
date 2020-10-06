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
import { KeyboardDatePicker } from "@material-ui/pickers";

import MenuItem from "@material-ui/core/MenuItem";
import DefaultLayoutComponent from "../component/DefaultLayoutComponent";
const semestres = [
  {
    value: "1°",
  },
  {
    value: "2°",
  },
  {
    value: "3°",
  },
  {
    value: "4°",
  },
];
const cursos = [
  {
    value: "Sistemas de informação",
  },
  {
    value: "Odontologia",
  },
  {
    value: "Administração",
  },
  {
    value: "Curso da Vasp",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "45%",
    },
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
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
export default function CronogramaPage() {
  const classes = useStyles();
  const [curso, setCurso] = React.useState(cursos[0].value);
  const [semestre, setSemestre] = React.useState(semestres[0].value);
  const [selectedData, setSelectedData] = React.useState(new Date());
  const [selectedDataFinal, setSelectedDataFinal] = React.useState(new Date());
  const buttonStyle = useStylesButton();

  const handleChange = (event) => {
    setCurso(event.target.value);
  };
  return (
    <Container maxWidth="xl">
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
                  value={curso}
                  onChange={handleChange}
                  size="medium"
                  variant="filled"
                  helperText="Por favor selecione um curso"
                >
                  {cursos.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="semestre"
                  select
                  label="Selecione o semestre"
                  value={semestre}
                  onChange={(event) => {
                    event.preventDefault();
                    setSemestre(event.target.value);
                  }}
                  size="medium"
                  variant="filled"
                  helperText="Por favor selecione um semestre"
                >
                  {semestres.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div>
                <TextField
                  id="date"
                  label="Data Inicio"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  value={selectedData}
                  onChange={(event) => {
                    event.preventDefault();
                    setSelectedData(event.target.value);
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="date"
                  label="Data Fim"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  value={selectedDataFinal}
                  onChange={(event) => {
                    event.preventDefault();
                    setSelectedDataFinal(event.target.value);
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
  alignItems="flex-end"
>              <div className={buttonStyle.root}>
              <Button variant="contained" color="secondary">
                Excluir
              </Button>
              <Button variant="contained">Alterar</Button>

              <Button variant="contained" color="primary">
                Adicionar
              </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </DefaultLayoutComponent>
    </Container>
  );
}
