import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CadastroPage from './pages/Cadastro-page'
import NovoCurso from './pages/NovoCurso'
import EditarCurso from './pages/EditarCurso';
import PesquisarCurso from './pages/PesquisarCurso'
import CronogramaPage from './pages/Cronograma-page'
import ConsultaUsuario from './pages/ConsultaUsuarioPages'
import cadastraUsuario from './pages/CadastroUsuarioPages'
import cadastrarTCC from './pages/CadastrarTcc'
import LoginPage from './pages/LoginPage'
import ConfiguredPage from './components/ConfiguredPageComponent'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <ConfiguredPage authed={true} showMenu={true}  path='/cadastraUsuario'  component={cadastraUsuario} />
        <ConfiguredPage authed={true} showMenu={true}  path='/ConsultaUsuario' component={ConsultaUsuario} />
        <ConfiguredPage authed={true} showMenu={true}  path='/NovoCurso' component={NovoCurso} />
        <ConfiguredPage authed={true} showMenu={true}  path='/EditarCurso' component={EditarCurso} />
        <ConfiguredPage authed={true} showMenu={true}  path='/PesquisarCurso' component={PesquisarCurso} />
        <ConfiguredPage authed={true} showMenu={true}  path='/CronogramaPage' component={CronogramaPage} />
        <ConfiguredPage authed={true} showMenu={true}  path='/cadastrartcc' component={cadastrarTCC} />
        <Route path='/login' component={LoginPage} />

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
