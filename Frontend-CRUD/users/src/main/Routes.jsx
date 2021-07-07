import React from 'react'
import {Switch, Route, Redirect } from 'react-router'/*1- escolha 3 -  se colocar uma url que n tem nada haver com a url ele volta para a url de inicio*/


import Home from '../components/home/Home'
import UserCrud from '../components/users/UserCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />{/*exact: EXATAMENTE O barra*/}
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/'/> {/*url diferente digitada volta para home*/}
    </Switch>