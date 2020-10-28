import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CadastroPage from './pages/Cadastro-page';
import ConsultaUsuarioPages from './pages/ConsultaUsuarioPages';
import NovoCurso from './pages/NovoCurso';
import EditarCurso from './pages/EditarCurso';
import PesquisarCurso from './pages/PesquisarCurso';
import CronogramaPage from './pages/Cronograma-page';
import CadastroUsuarioPage from './pages/CadastroUsuarioPages';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/criarconta">
          <CadastroUsuarioPage />
        </Route>
        <Route path="/consultaUsuario">
          <ConsultaUsuarioPages />
        </Route>
        <Route path="/editar/:id">
          <ConsultaUsuarioPages />
        </Route>
        <Route path="/NovoCurso">
          <NovoCurso />
        </Route>
        <Route path="/cronograma">
          <CronogramaPage />
        </Route>
        <Route path="/EditarCurso">
          <EditarCurso />
        </Route>
        <Route path="/PesquisarCurso">
          <PesquisarCurso />
        </Route>
        <Route path="/home">
        </Route>
        {/* <Route path="/CadastrarTcc">
          <CadastrarTcc/>
        </Route> */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can chan
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
