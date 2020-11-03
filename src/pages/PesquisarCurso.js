import React from 'react';
import {useHistory} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import { makeStyles, Grid, TablePagination } from "@material-ui/core/";
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import Newton from '../images/newton.png'
import Hidden from '@material-ui/core/Hidden';


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
    marginLeft: '290px',
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
    marginLeft: '-250px',
    marginTop: '14px',
    fontSize: '24px',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    backgroundColor: '#265891',
    boxShadow: '0 0 black'
  },
  gridPaginacao:{
    alignItems:'center',
    paddingRight: '34%'
  }
}));

export default function PesquisarCurso() {
  const classes = useStyles();

  /** Relacionado a Paginação */ 
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const history = useHistory();

  return (
    <Container maxWidth="lg" className={classes.containerC}>
      <Container component='div'>
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
            <Button
              variant="contained"
              color="secondary"
              className={classes.botoes}
              startIcon={<DeleteIcon />}>
              Excluir
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: 'green', color: 'white' }}
              className={classes.botoes}
              startIcon={<Icon>edit</Icon>}
              onClick = {()=>{
                history.push("/EditarCurso")
              }}
            >
              Editar
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.botoes}
              startIcon={<Icon>search</Icon>}
            >
              Pesquisar
            </Button>
          </Container>
        </Paper>


        {/** Tentar Colocar a Lista aqui a abixo - Layout Simular ao de Cima!*/}
        <Container component='div'>
          <Paper elevation={3} className={classes.Paper, classes.paperLista}>

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



