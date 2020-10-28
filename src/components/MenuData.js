import React from 'react'
import * as Icon from '@material-ui/icons'

export const MenuDataUser = [
  {
    title: 'Cadastrar Usuario',
    path: '/cadastraUsuario',
    icon: <Icon.Add/>,
    cName: 'nav-text'
  },
  {
    title: 'Consultar Usuario',
    path: '/ConsultaUsuario',
    icon: <Icon.Search/>,
    cName: 'nav-text'
  }
]

export const MenuDataCurso =[
  {
    title: 'Cadastrar Curso',
    path: '/NovoCurso',
    icon: <Icon.Add/>,
    cName: 'nav-text'
  },
  {
    title: 'Consultar Curso',
    path: '/PesquisarCurso',
    icon: <Icon.Search/>,
    cName: 'nav-text'
  },

]
export const MenuDataCronograma =[
  {
    title: 'Cronograma',
    path: '/CronogramaPage',
    icon: <Icon.Schedule/>,
    cName: 'nav-text'
  },
]