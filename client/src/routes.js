import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginedPage } from './pages/LoginedPage'
import { AuthPage } from './pages/AuthPage'

export const useRoutes = () => {
    return (
      <Switch>
        <Route path="/" exact>
          <AuthPage/>
        </Route>
        <Route path="/logined" exact>
          <LoginedPage/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    )
}