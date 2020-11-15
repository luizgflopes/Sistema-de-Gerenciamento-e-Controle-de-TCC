import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
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

const cursos = ["Sistema de Informação", "Análise e Desenvolvimento de Sistemas", "Ciências da Computação"]
const sexo = ["Masculino", "Feminino", "Outros"]
const perfil = ["Orientador/Gestor", "Coordenador", "Aluno"]


export default function CadastroUsuario() {
  const classes = useStyles();
  const history = useHistory();
  const [formulario, setformulario] = useState({
    perfil: null,
    nome: null,
    matricula: null,
    curso: null,
    sexo: null,
    tel: null,
    email: null,
    senha: null,
  });
  const salvarUsuario = () =>{
    axios.put(`http://localhost:3001/usuario/`).then((sucess)=>{
        if(sucess){
          alert("Usuário criado com Sucesso!")
        }
      }
    );
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.configuracaopagina}>
        <Avatar className={classes.icone} src={logo}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastrar Usuário
        </Typography>
        <form className={classes.formulario} >
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <Autocomplete
                id="perfil"
                name="perfil"
                autoComplete="perfil"
                fullWidth
                options={perfil}
                getOptionLabel={(option) => option}
                renderInput={(params) => <TextField {...params} label="Perfil" variant="outlined" required />}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={formulario.nome}
                error={!/^[a-zA-Z]*$/.test(formulario.nome)}
                autoComplete="fname"
                name="nome"
                variant="outlined"
                required
                fullWidth
                id="nome"
                label="Nome "
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="matricula"
                label="Matricula"
                name="matricula"
                autoComplete="matricula"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                id="sexo"
                name="sexo"
                autoComplete="sexo"
                fullWidth
                options={sexo}
                getOptionLabel={(option) => option}
                renderInput={(params) => <TextField {...params} label="Sexo" variant="outlined" required />}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="curso"
                name="curso"
                autoComplete="curso"
                fullWidth
                options={cursos}
                getOptionLabel={(option) => option}
                renderInput={(params) => <TextField {...params} label="Curso" variant="outlined" required />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone1"
                label="Telefone"
                name="phone1"
                autoComplete="Telefone"
                type="tel"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone2"
                label="Celular"
                name="phone2"
                autoComplete="Celular"
                type="tel"
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
            onClick={() => {
              salvarUsuario();
            }}
          >
            Salvar
          </Button>
        </form>
      </div>
    </Container>
  );
}
