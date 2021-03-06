import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import {
  makeStyles,
  Grid,
  TablePagination,
  withStyles,
} from "@material-ui/core/";
import {NotificationContainer, NotificationManager} from 'react-notifications';

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
import Menu from "../components/Menu";
import { yellow } from "@material-ui/core/colors";
import { get, put, excluir } from "../infrastructure/axiosApi";
import DefaultDialogComponent from "../components/DefaultDialogComponent";
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    "&:hover": {
      backgroundColor: yellow[700],
    },
  },
}))(Button);
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
    marginRight: "-230px",
    marginBottom: "50px",
    marginLeft: "250px",
  },
  containerC: {
    marginTop: "60px",
  },
  containerInput: {
    paddingLeft: "15%",
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
    marginLeft: "-250px",
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
    backgroundColor: theme.palette.action.hover,
  },
  tableHead: {
    backgroundColor: "#265891",
    color: theme.palette.common.white,
    textAlign: "center",
  },
  gridCentral: {
    marginTop: "100px",
    backgroundColor: "gainsboro",
  },
}));

export default function PesquisarCurso() {
  const classes = useStyles();
  const [searchForm, setsearchForm] = useState({
    nomcurso: "undefined",
  });
  const [updateScreen, setupdateScreen] = useState(true);
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [listaCursos, setlistaCursos] = useState([]);
  const [showEdit, setshowEdit] = useState(false);
  const [curso, setCurso] = useState({});
  useEffect(() => {
    getListaCursos();
    setupdateScreen(false);
    setshowEdit(false);
  }, [updateScreen]);

  const getListaCursos = async () => {
    let result = await get(
      "curso",
      "Não foi possivel Obter a listagem de cursos",
      "Sucesso"
    );
    console.log("cursos", result);
    setlistaCursos(result);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [codCurso, setcodCurso] = React.useState(0);
  const activeRow = (event, linha) => {
    console.log("linha", linha);
    event.preventDefault();
    setcodCurso(linha.id);
  };
  const deleteCursoFunc = () => {
    excluir(`curso/${codCurso}`);
    setlistaCursos(listaCursos.filter((x) => x.id != codCurso));
  };
  const hostHistory = useHistory();

  const adicionarButtonClick = () => {
    hostHistory.push("/NovoCurso");
  };

  const editarButtonClick = () => {
    hostHistory.push("/EditarCurso");
  };

  async function onCloseModal() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setshowEdit(false);
    setupdateScreen(true);
  }
  async function atualizarEvent() {
    let result =  put(
      `curso/${codCurso}`,
      curso,
      "Não foi possivel atualizar o curso",
      "Atualizado com sucesso",
      async (messagem)=>{
        NotificationManager.warning( messagem,'', 3000);

      }
    );
    await setTimeout(() => {
      setshowEdit(false);

    }, 1);
    setupdateScreen(true);
  }
  const handleOpen = () => {
    setshowEdit(true);
  };
  const  editarEvent =async()=> {
    setshowEdit(true);

    var codCursoValidator = codCurso==null||codCurso===0;
    if(codCursoValidator){
      NotificationManager.warning( 'Você precisa selecionar um curso na listagem','Selecione um curso', 3000);
    }
      let result = await get(
        `curso/id/${codCurso}`,
        "Ouve um erro ao obter os dados deste curso",
        "Sucesso"
      );
      setCurso(result);
      if (curso&&curso=={}) {
        setshowEdit(false);
    }
  }
  async function getCursosByFilter() {
   let result = await get(
      `curso/${searchForm.nomcurso}`,
      curso,
      "Não foi possivel obter a listagem de curso com esses parametros",
      "Atualizado com sucesso"
    );
    setlistaCursos(result);
  }
  const updateFormCurso = (e) => {
    setCurso({
      ...curso,
      [e.target.name]: e.target.value,
    });
    console.log("Formulario", curso);
  };
  const updateFormSearchForm = (e) => {
    setsearchForm({
      ...searchForm,
      [e.target.name]: e.target.value,
    });
    console.log("Formulario", curso);
  };
  return (
    <Container maxWidth="lg" className={classes.containerC}>
      <Container component="div">
        <Paper elevation={3}>
          <div className={classes.titulo}>
            <Hidden xsDown>
              <Paper className={classes.paper}>
                <img src={Newton} className={classes.logoNewton} />
              </Paper>
            </Hidden>
            <Hidden xsDown>
              <Paper className={classes.paperDireita}>Pesquisar Cursos</Paper>
            </Hidden>
          </div>
          <Grid container direction="row" justify="center" alignItems="center">
            
            <div className={classes.root} >
              <TextField
                name="nomcurso"
                label="Nome do curso"
                variant="outlined"
                onChange={(e) => {
                  updateFormSearchForm(e);
                }}
              />
            </div>
          </Grid>
          <Container component="div">
            <Tooltip title="Adicionar Curso" interactive>
              <Button
                variant="contained"
                color="primary"
                className={classes.botoes}
                startIcon={<Icon>add</Icon>}
                onClick={() => {
                  adicionarButtonClick();
                }}
              >
                Adicionar
              </Button>
            </Tooltip>
            <Tooltip title="Editar Curso" interactive>
              <Button
                variant="contained"
                color="primary"
                type="button"
                className={classes.botoes}
                startIcon={<Icon>edit</Icon>}
                onClick={editarEvent}
              >
                <DefaultDialogComponent
                  onClose={onCloseModal}
                  open={showEdit}
                  confirmAction={atualizarEvent}
                  title="Editar Curso"
                >
                  <TextField
                    name="nomcurso"
                    value={curso ? curso.nomcurso : ""}
                    onChange={(e) => {
                      updateFormCurso(e);
                    }}
                    variant="filled"
                  />
                </DefaultDialogComponent>
                Editar
              </Button>
            </Tooltip>
            <Tooltip title="Pesquisar Curso" interactive>
              <Button
                variant="contained"
                color="primary"
                className={classes.botoes}
                startIcon={<Icon>search</Icon>}
                onClick={(e) => {
                  e.preventDefault();
                  getCursosByFilter(e);
                }}
                label="search"
              >
                Pesquisar
              </Button>
            </Tooltip>
            <Tooltip title="Limpar filtros" interactive>
              <ColorButton
                variant="contained"
                color="primary"
                className={classes.botoes}
                startIcon={<Icon>search</Icon>}
                onClick={(e) => {
                  setupdateScreen(true);
                }}
                label="search"
              >
                Limpar filtros
              </ColorButton>
            </Tooltip>
            <Tooltip title="Excluir Curso" interactive>
              <Button
                variant="contained"
                style={{ backgroundColor: "red", color: "white" }}
                className={classes.botoes}
                startIcon={<DeleteIcon />}
                onClick={(e) => {
                  deleteCursoFunc();
                }}
              >
                Excluir
              </Button>
            </Tooltip>
          </Container>
        </Paper>

        {/** Tentar Colocar a Lista aqui a abaixo - Layout Simular ao de Cima!*/}
        <Container component="div">
          <Paper elevation={3} className={(classes.Paper, classes.paperLista)}>
            <TableContainer component={Paper}>
              <Table className={classes.table}>
                <TableHead className={"MuiTableCell-head"}>
                  <TableRow className={classes.tableHead}>
                    <TableCell
                      className={
                        ("MuiTableCell-alignCenter", classes.tableHead)
                      }
                    >
                      Código do Curso
                    </TableCell>
                    <TableCell
                      className={
                        ("MuiTableCell-alignCenter", classes.tableHead)
                      }
                    >
                      Nome do Curso
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={"MuiTableCell-body"}>
                  {listaCursos.map((linha) => (
                    <TableRow
                      key={linha.id}
                      selected={linha.id === codCurso}
                      onClick={(event) => {
                        activeRow(event, linha);
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className={"MuiTableCell-alignCenter"}
                      >
                        {linha.id}
                      </TableCell>
                      <TableCell className={"MuiTableCell-alignCenter"}>
                        {linha.nomcurso}
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
      <NotificationContainer/>

    </Container>
  );
}
