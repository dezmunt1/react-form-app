import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import {useRoutes} from "./routes"

function App() {
  const routes = useRoutes()

  return (
    <Router>
      {routes}
    </Router>
  )
}

export default App
