import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop:'10'
  },
  table: {
    minWidth: 650,
  },
  gridCentral:{
    marginTop: '100px',
    backgroundColor: 'gainsboro'
  },
  teste:{
    backgroundColor: 'green'
  },
  botoes:{
    backgroundColor: 'black',
    direction:'row'
  },
  table: {
    minWidth: 700,
  },
  
}));

function listaCurso(codCurso, nomeCurso){
    return {codCurso, nomeCurso};
  }
  
  const dadosListaCurso=[
    listaCurso('001','Sistemas de informação'),
  ]
  
  const classes = useStyles();

export default function PesquisarCurso(){

  return (
    
      <Container maxWidth="lg">
        <div className={classes.root} >
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              
              {/** aqui tem que entrar os filtros */}
              <Grid item xs={12} className={classes.teste2}>
                asdads
              </Grid>


              {/**Aqui eu tenho que criar as gras para organizar os botões*/}

              <Grid container direction="row" justify="flex-end" alignItems="flex-start">
                  <Button variant="contained" color="primary">
                    Pesquisar
                  </Button>
      
                  <Button variant="contained" color="secondary" spacing={3}> 
                    Excluir
                  </Button>
                </Grid>
                                
                
              {/** AQUI INICIA A TABELA QUE DEPOIS VAI FICAR*/}
              <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Código do curso</TableCell>
                        <TableCell textAlign="left">Nome do curso</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dadosListaCurso.map((linha) => (
                        <TableRow key={linha.codCurso}>
                          <TableCell component="th" scope="row">
                            {linha.codCurso}
                          </TableCell>
                          <TableCell align="left">{linha.nomeCurso}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
        </div>
      </Container>
  );
}
