import React from "react"
import api from '../api'
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import MenuItem from "@material-ui/core/MenuItem"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import Autocomplete from '@material-ui/lab/Autocomplete'
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import logo from "../images/iconetcc.png"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"


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
}))


const sexo = ["Masculino", "Feminino", "Outros"]

export default function CadastroUsuario() {

  const classes = useStyles()

  const [formulario, setformulario] = React.useState({
    perfil: '',
    nome: '',
    matricula: '',
    curso: '',
    sexo: '',
    tel: '',
    email: '',
    senha: '',
  })

  const [listaCursos, setlistaCursos] = React.useState([]);
  React.useEffect(() => {
    const getCursos = async () => {
      await api
        .get("/curso")
        .then(function (response) {
          setlistaCursos(response.data);
          console.log(response);
        })
        .catch(function (error) {});
    };

    getCursos();
  }, []);

  const [listaPerfil, setlistaPerfil] = React.useState([]);
  React.useEffect(() => {
    const getPerfil = async () => {
      await api
        .get("/perfil")
        .then(function (response) {
          setlistaPerfil(response.data);
          console.log(response);
        })
        .catch(function (error) {});
    };

    getPerfil();
  }, []);

  const cursos = []
  listaCursos.map((option) => (cursos.push(option.nomcurso)))
  const perfil = []
  listaPerfil.map((option) => (perfil.push(option.perfil)))
  
  const handleChange = (event) => {
    console.log(event.target, event.target.value, event.target.name);
    console.log('formulario', formulario);
    
    const name = event.target.name;
    setformulario({
      ...formulario,
      [name]: event.target.value,
    })
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
                autoComplete={true}
                onChange={handleChange}
                fullWidth
                options={perfil}
                getOptionLabel={(option) => option}
                renderInput={(params) => <TextField {...params} label="Perfil" variant="outlined" required />}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  /* value={formulario.nome} */
                  error={!/^[a-zA-Z]*$/.test(formulario.nome)}
                  autoComplete='nome'
                  name="nome"
                  variant="outlined"
                  required
                  fullWidth
                  onChange={handleChange}
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
                onChange={handleChange}
                id="matricula"
                label="Matricula"
                name="matricula"
                autoComplete='matricula'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                id="sexo"
                name="sexo"
                autoComplete={true}
                onChange={handleChange}
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
                /* value={formulario.curso} */
                autoComplete={true}
                fullWidth
                onChange={handleChange}
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
                onChange={handleChange}
                id="phone1"
                label="Telefone"
                name="phone1"
                autoComplete='phone1'
                type="tel"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
                id="phone2"
                label="Celular"
                name="phone2"
                autoComplete='phone2'
                type="tel"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
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
                onChange={handleChange}
                name="senha"
                label="Senha"
                type="password"
                id="senha"
                autoComplete='senha'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
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
            Salvar
          </Button>
        </form>
      </div>
    </Container>
  )
}
