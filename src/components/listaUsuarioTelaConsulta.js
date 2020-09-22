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

function listaUsuario(nome,email,curso,matricula,unidadeCurso){
    return {nome,email,curso,matricula,unidadeCurso};
  }
  
  const dadosListaUsuario=[
    listaUsuario('Luiz Gustavo','luizgustavo-fl@hotmail.com','SI','123456789','Silva Lobo'),
    listaUsuario('Gustavo','gustavo-fl@hotmail.com','ADS','9998547','Silva Lobo'),
    listaUsuario('Luiz','luiz-fl@hotmail.com','DIREITO','114455895','Silva Lobo'),
    listaUsuario('Bob','bob@hotmail.com','FARMACIA','111222333','Carlos Luz'),
    listaUsuario('Frederico','frederico@hotmail.com','ENG. CIVIL','000000000','Buritis')
  ]
  
  const classes = useStyles();

export default function listaUsuarioTelaConsulta(){

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
                        <TableCell>Nome</TableCell>
                        <TableCell textAlign="left">E-mail</TableCell>
                        <TableCell align="left">Curso</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dadosListaUsuario.map((linha) => (
                        <TableRow key={linha.nome}>
                          <TableCell component="th" scope="row">
                            {linha.nome}
                          </TableCell>
                          <TableCell align="left">{linha.email}</TableCell>
                          <TableCell align="left">{linha.curso}</TableCell>
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
