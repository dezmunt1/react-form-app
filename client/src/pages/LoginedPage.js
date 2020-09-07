import React, { useState} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {getLogined} from '../utils/functions'

export const LoginedPage = () => {
  const [logined, setLogined] = useState(
    getLogined() ? getLogined().success : false
  )
  const logoutHandler = () => {
    localStorage.clear()
    setLogined(false)
  }

  const content = (
    <div className="login-page">
      <div className="form">
        <Link to={'/'}>
          <button onClick={logoutHandler}>Выйти</button>
        </Link>
      </div>
    </div>
  )

  return (
    logined ? content : <Redirect to={'/'} />
  )
}