import React from 'react';
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
import Menu from '../components/Menu';

function listaCurso(codCurso, nomeCurso) {
  return { codCurso, nomeCurso };
}

const ListaCurso = [
  listaCurso(
    "001",
    "Sistemas de informação"
  ),
  listaCurso(
    "002",
    "Análise e desenvolvimento de sistemas"
  ),
  listaCurso(
    "003",
    "Ciências da computação"
  ),
  listaCurso(
    "004",
    "Engenharia de software"
  ),
  listaCurso(
    "005",
    "Matemática da computação"
  ),
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(45),
      height: theme.spacing(10),
      margintop: theme.spacing(20)
    },
  },
  botoes: {
    marginRight: '-230px',
    marginBottom: '50px',
    marginLeft: '250px',
  },
  containerC: {
    marginTop: '60px'
  },
  containerInput: {
    paddingLeft: '15%',
    marginTop: '20px'
  },
  titulo: {
    backgroundColor: '#265891',
    textAlign: 'center',
    verticalAlign: 'top',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '20px',
    fontWeight: 'bold',
    display: 'flex',
    flexWrap: 'wrap',
  },
  logoNewton: {
    height: '53px',
    width: 'auto'
  },
  container: {
  },
  paper: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    backgroundColor: '#265891',
    boxShadow: '0 0 black'
  },
  paperLista: {
    backgroundColor: 'white',
    marginLeft: '-24px',
    width: '104.2%',
    marginTop: '47px'
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
  gridPaginacao:{
    alignItems:'center',
    paddingRight: '34%'
  },
  paperTabela: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: "10",
  },
  table: {
    minWidth: 650,
    backgroundColor: theme.palette.action.hover
  },
  tableHead: {
    backgroundColor: "#265891",
    color: theme.palette.common.white,
    textAlign: 'center'
  },
  gridCentral: {
    marginTop: "100px",
    backgroundColor: "gainsboro",
  },
}));

export default function PesquisarCurso() {
  const classes = useStyles();

  {/** Relacionado a Paginação */ }
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [codCurso, setcodCurso] = React.useState(0);
  
  /** Relacionado a Seleção da Lista de Curso*/
  const activeRow = (event, linha) => {
    event.preventDefault();
    setcodCurso(linha.codCurso);
  };

  const hostHistory = useHistory();

  const adicionarButtonClick = () => {
    hostHistory.push("/NovoCurso");
  };

  const editarButtonClick = () => {
    hostHistory.push("/EditarCurso");
  };

  return (
    <Container maxWidth="lg" className={classes.containerC}>
      <Container component='div'>
        <Menu />
        <Paper elevation={3}>
          <div className={classes.titulo}>
            <Hidden xsDown>
              <Paper className={classes.paper} >
                <img src={Newton} className={classes.logoNewton} />
              </Paper>
            </Hidden>
            <Hidden xsDown>
              <Paper className={classes.paperDireita}>Pesquisar Cursos</Paper>
            </Hidden>
          </div>
          <Container component='div' className={classes.containerInput}>
            <form className={classes.root} noValidate autoComplete="on">
              <TextField id="codCurso" label="Código do curso" variant="outlined" spacing="5" />
              <TextField id="nomeCurso" label="Nome do curso" variant="outlined" />
            </form>
          </Container>
          <Container component='div'>
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
                className={classes.botoes}
                startIcon={<Icon>edit</Icon>}
                onClick={() => {
                  editarButtonClick();
                }}
              >
                Editar
              </Button>
            </Tooltip>
            <Tooltip title="Pesquisar Curso" interactive>
              <Button
                variant="contained"
                color="primary"
                className={classes.botoes}
                startIcon={<Icon>search</Icon>}
                label="search"
              >
                Pesquisar
              </Button>
            </Tooltip>
            <Tooltip title="Excluir Curso" interactive>
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

        {/** Tentar Colocar a Lista aqui a abaixo - Layout Simular ao de Cima!*/}
        <Container component='div'>
          <Paper elevation={3} className={classes.Paper, classes.paperLista}>
          <TableContainer component={Paper}>
              <Table className={classes.table}>
                <TableHead className={"MuiTableCell-head"}>
                  <TableRow className={classes.tableHead}>
                    <TableCell className={"MuiTableCell-alignCenter", classes.tableHead}>
                      Código do Curso
                    </TableCell>
                    <TableCell className={"MuiTableCell-alignCenter", classes.tableHead}>
                      Nome do Curso
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={"MuiTableCell-body"}>
                  {ListaCurso.map((linha) => (
                    <TableRow
                      key={linha.codCurso}
                      selected={linha.codCurso === codCurso}
                      onClick={(event) => {
                        activeRow(event, linha);
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className={"MuiTableCell-alignCenter"}
                      >
                        {linha.codCurso}
                      </TableCell>
                      <TableCell className={"MuiTableCell-alignCenter"}>
                        {linha.nomeCurso}
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
                nextIconButtonText={'Proximo'}
                backIconButtonText={'Voltar'}
                labelRowsPerPage={'Linhas por página'}
              />
            </Grid>           
          </Paper>
        </Container>
      </Container>
    </Container>
  );
}


//teste teste teste
