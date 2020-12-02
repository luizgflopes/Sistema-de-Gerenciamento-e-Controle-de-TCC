import React from "react"
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
import Menu from './Menu'


export default function  ConfiguredPage ({component: Component, authed,showMenu, ...rest}) {
    function getPageConfig(menu,props){
      if(menu){
        return(<div><Menu/><Component {...props} /></div>)
      }else{
        return <Component {...props} />
      }
    }
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? getPageConfig(showMenu,props)
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }