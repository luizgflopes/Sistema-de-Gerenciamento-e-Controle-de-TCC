import React from "react"
import api from '../api'
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
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


const sexo = [
  {id: 0, desSexo:"Masculino"},
  {id: 1, desSexo: "Feminino"}
]

export default function CadastroUsuario() {

  const classes = useStyles()

  const [formulario, setformulario] = React.useState({
    codPerfil: '',
    nome: '',
    email: '',
    matricula: '',
    nomCurso: '',
    telefone: '',
    senha: '',
    sexo: null,
    desEndereco: '',
    dataNasc: '',
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

  const handleChange = (event) => {
    console.log(event.target, event.target.value, event.target.name)
    console.log('formulario', formulario)
    
    const name = event.target.name
    setformulario({
      ...formulario,
      [name]: event.target.value,
    })
  }

  function handlePost() {
    api.post('/usuario', formulario).then((response)=>{
      if(response){
        alert("Usuário criado com Sucesso!")
      }
    }).catch(function (err) {
      alert(err + " Acesso Negado")
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
              <TextField
                select
                variant="outlined"
                id="codPerfil"
                name="codPerfil"
                label="Perfil"
                onChange={handleChange}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {listaPerfil.map((perfil) => (
                  <option key={perfil.id} value={perfil.id} name={perfil.nomcuso}>
                  {perfil.perfil}
                </option>
                ))}
              </TextField>
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
              <TextField
                select
                variant="outlined"
                value={formulario.sexo}
                id="sexo"
                name="sexo"
                label="Sexo"
                onChange={handleChange}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {sexo.map((sexo)=> (
                  <option key={sexo.id} value={sexo.id}>
                    {sexo.desSexo}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                variant="outlined"
                id="nomCurso"
                name="nomCurso"
                label="Curso"
                value={formulario.curso}
                fullWidth                
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {listaCursos.map((curso)=> (
                  <option key={curso.id} value={curso.id} name={curso.nomcuso}>
                    {curso.nomcurso}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
                id="telefone"
                label="Telefone"
                name="telefone"
                autoComplete='telefone'
                type="tel"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
                id="dataNasc"
                name="dataNasc"
                type="date"
                label="Data Nascimento"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
                id="desEndereco"
                label="Endereço"
                name="desEndereco"
                autoComplete="desEndereco"
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
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.entrarbutton}
            onClick={handlePost}
          >
            Salvar
          </Button>
        </form>
      </div>
    </Container>
  )
}
