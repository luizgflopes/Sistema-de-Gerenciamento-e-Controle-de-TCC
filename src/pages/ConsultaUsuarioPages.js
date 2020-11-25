import React, {useState, useEffect} from "react";
import Container from "@material-ui/core/Container";
import { makeStyles, Grid, TablePagination } from "@material-ui/core/";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";
import Newton from "../images/newton.png";
import Hidden from "@material-ui/core/Hidden";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Tooltip from "@material-ui/core/Tooltip";
import { useHistory } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const axios = require('axios')


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(45),
      height: theme.spacing(10),
      margintop: theme.spacing(20),
    },
  },
  tableRow: {
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: "#0019ffa6",
      "& > .MuiTableCell-root": {
        color: "white"
      }
    }
  },
  botoes: {
    marginRight: "41px",
    marginBottom: "50px",
    marginLeft: "10px",
  },
  containerC: {
    marginTop: "60px",
  },
  containerInput: {
    marginTop: "20px",
  },
  titulo: {
    backgroundColor: "#265891",
    textAlign: "center",
    verticalAlign: "top",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
    display: "flex",
    flexWrap: "wrap",
  },
  logoNewton: {
    height: "53px",
    width: "auto",
  },
  container: {},
  paper: {
    textAlign: "left",
    color: theme.palette.text.secondary,
    flex: "1 0 auto",
    backgroundColor: "#265891",
    boxShadow: "0 0 black",
  },
  paperLista: {
    backgroundColor: "white",
    marginLeft: "-24px",
    width: "104.2%",
    marginTop: "47px",
  },
  paperDireita: {
    marginLeft: "-172px",
    marginTop: "14px",
    fontSize: "24px",
    textAlign: "left",
    color: "white",
    flex: "1 0 auto",
    backgroundColor: "#265891",
    boxShadow: "0 0 black",
  },
  gridPaginacao: {
    alignItems: "center",
    paddingRight: "34%",
  },
  paperTabela: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: "10",
  },
  table: {
    minWidth: 650,
  },
  gridCentral: {
    marginTop: "100px",
    backgroundColor: "gainsboro",
  },
}));


export default function ConsultaUsuarioPages() {
  const classes = useStyles();
  const [Formulario, setFormulario] = useState({
    nome:'',
    email: '',
    matricula: '',
    curso: '',
  });
  
  const [listaUsuario, setListaUsuario] = useState([]);
  const [listaUsuarioBackup, setListaUsuarioBackup] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    axios.get("http://localhost:3001/usuario").then(function (response) {
      console.log('user',response)
      setListaUsuario(response.data)
      setListaUsuarioBackup(response.data)
      })
      .catch(function (error) {
      });

  }, []);

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
  const pesquisarPorFiltro=()=>{
    setListaUsuario(listaUsuarioBackup)
    if(Formulario.nome&&Formulario.nome.trim()){
      setListaUsuario(listaUsuario.filter((a)=>{
        return a.nome==Formulario.nome
      }))
    }
    if(Formulario.email&&Formulario.email.trim()){
      setListaUsuario(listaUsuario.filter((a)=>{
        return a.email==Formulario.email
      }))
    }
    if(Formulario.curso){
      setListaUsuario(listaUsuario.filter((a)=>{
        return a.Curso.id==Formulario.curso
      }))
    }
    if(Formulario.matricula){
      setListaUsuario(listaUsuario.filter((a)=>{
        return a.matricula==Formulario.matricula
      }))
    }
  }
  const updateForm = (e) => {
    setFormulario({
      ...Formulario,
      [e.target.name]: e.target.value,
    });
    console.log("Formulario", Formulario);
  };

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [id, setId] = React.useState(0);

    /** Relacionado a Selecao da Lista de Usuário*/

  const activeRow = (event, linha) => {
    event.preventDefault();
    setId(linha.id);
    console.log(linha,id)
  };

  const hostHistory = useHistory();

  const editarButtonClick = () => {
    hostHistory.push("/cadastraUsuario");
  };

  const deletarUsuario = () =>{
    axios.delete(`http://localhost:3001/usuario/${id}`).then((sucess)=>{
        if(sucess){
          setListaUsuario(listaUsuario.filter((e)=>(e.id !== id)))
          alert("Usuário Excluído com Sucesso!")
        }
      }
    );
    
    
  }
  return (
    <Container maxWidth="lg" className={classes.containerC}>
      <Container component="div">
        <Paper elevation={2}>
          <div className={classes.titulo}>
            <Hidden xsDown>
              <Paper className={classes.paper}>
                <img src={Newton} className={classes.logoNewton} />
              </Paper>
            </Hidden>
            <Hidden xsDown>
              <Paper className={classes.paperDireita}>Buscar Usuários</Paper>
            </Hidden>
          </div>
          <Container component="div" className={classes.containerInput}>
            <form className={classes.root} noValidate autoComplete="on">
              <TextField
                name="nome"
                label="Nome"
                variant="outlined"
                spacing="5"
                onChange={updateForm}
              />
              <TextField name="email" label="E-mail" variant="outlined" onChange={updateForm} />
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Curso</InputLabel>
                <Select
                 id="outlined-age-native-simple"
                 select
                 label="Selecione o curso"
                 name="curso"
                 onChange={updateForm}
                 helperText="Por favor selecione um curso"
                  inputProps={{
                    name: 'curso',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  {listaCursos.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.nomcurso}
                    </option>
                  ))}
                </Select>
              </FormControl>
              
              <TextField name="matricula" label="Matricula" variant="outlined" onChange={updateForm} />
            </form>
          </Container>
          <Container component="div">
            <Tooltip title="Adicionar Usuário" interactive>
              <Button
                variant="contained"
                color="primary"
                className={classes.botoes}
                startIcon={<Icon>add</Icon>}
              >
                Adicionar
              </Button>
            </Tooltip>
            <Tooltip title="Editar Usuário" interactive>
              <Button
                variant="contained"
                color="primary"
                className={classes.botoes}
                startIcon={<Icon>edit</Icon>}
                onClick={() => {
                  editarButtonClick();
                }}
              >
                Editar
              </Button>
            </Tooltip>
            <Tooltip title="Pesquisar Usuário" interactive>
              <Button
                variant="contained"
                color="primary"
                onClick={pesquisarPorFiltro}
                className={classes.botoes}
                startIcon={<Icon>search</Icon>}
              >
                Pesquisar
              </Button>
            </Tooltip>
            <Tooltip title="Excluir Usuário" interactive>
              <Button
                variant="contained"
                style={{ backgroundColor: "red", color: "white" }}
                className={classes.botoes}
                startIcon={<DeleteIcon />}
                onClick={() => {
                  deletarUsuario();
                }}
              >
                Excluir
              </Button>
            </Tooltip>
          </Container>
        </Paper>

        {/** Tentar Colocar a Lista abaixo - Layout Simular ao de Cima!*/}
        <Container component="div">
          <Paper elevation={2} className={(classes.Paper, classes.paperLista)}>
            <TableContainer component={Paper}>
              <Table className={classes.table}>
                <TableHead className={"MuiTableCell-head"}>
                  <TableRow>
                    <TableCell className={"MuiTableCell-alignCenter"}>
                      Nome
                    </TableCell>
                    <TableCell className={"MuiTableCell-alignCenter"}>
                      E-mail
                    </TableCell>
                    <TableCell className={"MuiTableCell-alignCenter"}>
                      Curso
                    </TableCell>
                    <TableCell className={"MuiTableCell-alignCenter"}>
                      Matricula
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={"MuiTableCell-body"}>
                  {listaUsuario.map((linha) => (
                    <TableRow
                      key={linha.id}
                      selected={linha.id === id}
                      onClick={(event) => {
                        activeRow(event, linha);
                      }}
                      className={classes.tableRow}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className={"MuiTableCell-alignCenter"}
                      >
                        {linha.nome}
                      </TableCell>
                      <TableCell className={"MuiTableCell-alignCenter"}>
                        {linha.email}
                      </TableCell>
                      <TableCell className={"MuiTableCell-alignCenter"}>
                        {linha.Curso.nomcurso}
                      </TableCell>
                      <TableCell className={"MuiTableCell-alignCenter"}>
                        {linha.matricula}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Grid className={classes.gridPaginacao}>
              <TablePagination
                component="div"
                count={100}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                nextIconButtonText={"Proximo"}
                backIconButtonText={"Voltar"}
                labelRowsPerPage={"Linhas por página"}
              />
            </Grid>
          </Paper>
        </Container>
      </Container>
    </Container>
  );
}