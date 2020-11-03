import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Icon from "@material-ui/core/Icon";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

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
  botaosalvar: {
    margin: theme.spacing(1),
    width: theme.spacing(20),
    height: theme.spacing(5),
    margintop: theme.spacing(20),
  },
  botaocancelar: {
    margin: theme.spacing(3),
    width: theme.spacing(20),
    height: theme.spacing(5),
    margintop: theme.spacing(20),
  },
}));

export default function CadastrarTcc() {
  const cursos = [
    "Sistema de Informação",
    "Análise e Desenvolvimento de Sistemas",
    "Ciências da Computação",
  ];
  const orientador = ["Rafaela", "Iremar", "Ruy", "Tarley", "Mônica"];
  const aluno = ["Iago", "Bruno", "Izabela", "Inara", "Matheus"];
  const add = useState({});
  const classes = useStyles();
  const [formulario, setformulario] = useState({
    titulo: null,
    tema: null,
    resumo: null,
    palavraChave: null,
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.configuracaopagina}>
        <Typography component="h1" variant="h5">
          Cadastrar Tcc
        </Typography>
        <form className={classes.formulario}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Autocomplete
                id="curso"
                value={formulario.curso}
                name="curso"
                autoComplete="curso"
                fullWidth
                options={cursos}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Curso"
                    variant="outlined"
                    required
                  />
                )}
              />
            </Grid>

            <Grid item xs={10}>
              <Autocomplete
                id="orientador"
                name="Orientador"
                value={formulario.orientador}
                autoComplete="Orientador"
                fullWidth
                options={orientador}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Orientador"
                    variant="outlined"
                    required
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={formulario.titulo}
                required
                fullWidth
                id="Título"
                label="Título"
                name="Título"
                autoComplete="Título"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                value={formulario.tema}
                fullWidth
                name="Tema"
                label="Tema"
                id="Tema"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="resumo"
                value={formulario.resumo}
                id="filled-multiline-static"
                label="Resumo"
                multiline
                fullWidth
                rows={8}
                color="white"
                variant="filled"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={formulario.palavraChave}
                required
                fullWidth
                name="Palavras Chaves"
                label="Palavras Chaves"
                type="label"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                id="aluno"
                name="Aluno"
                autoComplete="Aluno"
                value={formulario.aluno}
                fullWidth
                options={aluno}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Aluno"
                    variant="outlined"
                    required
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button color="primary" className={classes.add}>
                <Icon style={{ fontSize: 30 }}>add_circle</Icon>
              </Button>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            style={{ backgroundColor: "red", color: "white" }}
            className={classes.botaocancelar}
            startIcon={<Icon>cancel</Icon>}
          >
            Cancelar
          </Button>
          <Button
            type="botaosalvar"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.botaosalvar}
          >
            Salvar
          </Button>
        </form>
      </div>
    </Container>
  );
}
