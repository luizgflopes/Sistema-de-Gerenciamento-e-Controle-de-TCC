import React from "react";
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

function listaUsuario(id, nome, email, curso, matricula, unidadeCurso) {
  return { id, nome, email, curso, matricula, unidadeCurso };
}

const dadosListaUsuario = [
  listaUsuario(
    1,
    "Luiz Gustavo",
    "luizgustavo-fl@hotmail.com",
    "SI",
    "123456789",
    "Silva Lobo"
  ),
  listaUsuario(
    2,
    "Gustavo",
    "gustavo-fl@hotmail.com",
    "ADS",
    "9998547",
    "Silva Lobo"
  ),
  listaUsuario(
    3,
    "Luiz",
    "luiz-fl@hotmail.com",
    "DIREITO",
    "114455895",
    "Silva Lobo"
  ),
  listaUsuario(
    4,
    "Bob",
    "bob@hotmail.com",
    "FARMACIA",
    "111222333",
    "Carlos Luz"
  ),
  listaUsuario(
    5,
    "Frederico",
    "frederico@hotmail.com",
    "ENG. CIVIL",
    "000000000",
    "Buritis"
  ),
];

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

  {
    /** Relacionado a Paginação */
  }
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

  {
    /** Relacionado a Selecao da Lista de Usuário*/
  }
  const activeRow = (event, linha) => {
    event.preventDefault();
    setId(linha.id);
  };

  const hostHistory = useHistory();

  const editarButtonClick = () => {
    hostHistory.push("/criarconta");
  };

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
                id="nomeFiltro"
                label="Nome"
                variant="outlined"
                spacing="5"
              />
              <TextField id="emailFiltro" label="E-mail" variant="outlined" />
              <TextField id="CursoFiltro" label="Curso" variant="outlined" />
              <TextField id="matricula" label="Matricula" variant="outlined" />
              <TextField
                id="camposFaculdade"
                label="Unidade Curso"
                variant="outlined"
              />
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
                className={classes.botoes}
                startIcon={<Icon>search</Icon>}
                label="essd"
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
                    <TableCell className={"MuiTableCell-alignCenter"}>
                      Unidade do Curso
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={"MuiTableCell-body"}>
                  {dadosListaUsuario.map((linha) => (
                    <TableRow
                      key={linha.id}
                      selected={linha.id === id}
                      onClick={(event) => {
                        activeRow(event, linha);
                      }}
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
                        {linha.curso}
                      </TableCell>
                      <TableCell className={"MuiTableCell-alignCenter"}>
                        {linha.matricula}
                      </TableCell>
                      <TableCell className={"MuiTableCell-alignCenter"}>
                        {linha.unidadeCurso}
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