import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/Main-Page";
import CadastroPage from './pages/Cadastro-page'
import NovoCurso from './pages/NovoCurso';
import EditarCurso from './pages/EditarCurso';
import PesquisarCurso from './pages/PesquisarCurso';
import CronogramaPage from './pages/Cronograma-page'
import ConsultaUsuario from './pages/ConsultaUsuarioPages'
import cadastraUsuario from './pages/CadastroUsuarioPages'
import Menu from './components/Menu'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Menu />
      <Switch>
        <Route path='/cadastraUsuario'  component={cadastraUsuario} />
        <Route path='/ConsultaUsuario' component={ConsultaUsuario} />
        <Route path='/NovoCurso' component={NovoCurso} />
        <Route path='/EditarCurso' component={EditarCurso} />
        <Route path='/PesquisarCurso' component={PesquisarCurso} />
        <Route path='/CronogramaPage' component={CronogramaPage} />
        <Route exact path="/home">
          <MainPage />
        </Route>
        <Route path="/criarconta">
          <CadastroPage />
        </Route>

{/*     <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/criarconta">
          <CadastroPage />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/cadastraUsuario">
          <CadastroUsuarioPages />
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
