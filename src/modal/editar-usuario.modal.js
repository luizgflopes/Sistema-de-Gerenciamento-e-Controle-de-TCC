import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { get, put, excluir } from "../infrastructure/axiosApi";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const sexo = ["Masculino", "Feminino", "Outros"];

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperCard: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    outline: 0,
    padding: "1%",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textField: {
    paddingBottom: "20px",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,

    maxWidth: "100%",
  },
  textBox: {
    margin: theme.spacing(1),
  },
  botoes: {
    marginRight: "41px",
    marginBottom: "50px",
    marginLeft: "10px",
  },
  cardName: {
    textAlign: "center",
    paddingBottom: "2%",
    color: "white",
    fontSize: "24px",
    boxShadow: "0 0 black",
    backgroundColor: "#265891",
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  const [user, setUser] = React.useState({
    id: null,
    codPerfil: null,
    nome: "",
    email: "",
    matricula: "",
    codCurso: "",
    telefone: "",
    des_Endereco: "",
    dataNasc: null,
    sexo: null,
  });
  async function handleOpen(e) {
    e.stopPropagation();
    e.preventDefault();
    if (!loaded) {
      const result = await get(
        "/usuario/" + props.id,
        "Usuario carregado com sucesso",
        "Falha ao tentar carregar este usuario",
        async (messagem) => {
          NotificationManager.warning(messagem, "", 3000);
        }
      );
      setUser(result);
      if ((result != null, result.id != null)) {
        setOpen(true);
        setLoaded(true);
      }
    }
  }

  async function onConfirm(e) {
    e.stopPropagation();
    e.preventDefault();
      const result = await put(
        "/usuario/" + props.id,user,
        "Falha ao tentar atualizar este usuario",
        "Usuario atualizado com sucesso",
        async (messagem) => {
          NotificationManager.warning(messagem, "", 3000);
        }
      );
      if(result!=null){
        setOpen(false);
        setLoaded(false)
      }
  }

  function handleClose(e) {
    e.preventDefault();
    setLoaded(false);
    setOpen(false);
  }
  const handleChange = (event) => {
    console.log(event.target, event.target.value, event.target.name);

    const name = event.target.name;
    if (event.target.id == "sexo") {
      setUser({
        ...user,
        ["sexo"]:
          event.target.innerHTML === "Masculino"
            ? 0
            : event.target.innerHTML === "Feminino"
            ? 1
            : 2,
      });
    } else {
      setUser({
        ...user,
        [name]: event.target.value,
      });
    }
    console.log(user);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      disabled={!props.disabled}
      className={classes.botoes}
      startIcon={<Icon>add</Icon>}
      onClick={handleOpen}
      type="button"
    >
      Editar
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card
            className={classes.paperCard}
            name="Modal"
            style={{ padding: "0%" }}
          >
            <CardContent style={{ padding: "2%" }}>
              <div className={classes.cardName}>
                <Typography variant="h5" component="h2">
                  Editar usuario
                </Typography>
              </div>
              <Grid spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    name="nome"
                    label="Nome"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type="text"
                    value={user ? user.nome : ""}
                  />
                  <TextField
                    className={classes.textField}
                    fullWidth
                    label="Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={user.email}
                  />
                  <TextField
                    className={classes.textField}
                    fullWidth
                    label="Telefone"
                    type="telefone"
                    name="telefone"
                    onChange={handleChange}
                    value={user.telefone}
                  />
                  <TextField
                    className={classes.textField}
                    fullWidth
                    label="Endereço completo"
                    value={user.des_Endereco}
                    name="des_Endereco"
                    onChange={handleChange}
                  />
                  {/* <TextField
                    className={classes.textField}
                    fullWidth
                    label="Senha"
                    onChange={handleChange}
                    name='senha'

                    type="password"
                  />*/}
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Data de nascimento"
                      value={user.dataNasc}
                      name="dataNasc"
                      onChange={(date) =>
                        setUser({
                          ...user,
                          ["dataNasc"]: date,
                        })
                      }
                      fullWidth
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>

                  <Autocomplete
                    id="sexo"
                    name="sexo"
                    autoComplete={true}
                    onChange={handleChange}
                    value={
                      user.sexo === 0
                        ? "Masculino"
                        : user.sexo === 1
                        ? "Feminino"
                        : "Outros"
                    }
                    fullWidth
                    options={sexo}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Sexo"
                        name="sexo"
                        variant="outlined"
                        required
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" onClick={onConfirm}>
                Salvar
              </Button>
              <Button variant="contained" color="secondary" onClick={()=>{setOpen(false);setLoaded(false)}}>
                Cancelar
              </Button>
            </CardActions>
          </Card>
        </Fade>
      </Modal>
      <NotificationContainer />
    </Button>
  );
}
