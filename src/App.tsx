import React from 'react'
import './assets/App.css'
import Login from './components/Login'
import Info from './components/Info'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'

type pagesRouter = {
  [key:string] : JSX.Element
}

export default function App() {
  const [page, setPage] = React.useState("login")

  const confirm = (email: string, password: string, name?: string) =>{
    console.log(email, password, name)
  }

  const sendPassword = (email: string) =>{
    console.log(email)
  }

  const pages: pagesRouter = {
    "login": <>
      <Info/>
      <Login setPage={setPage} confirm={confirm}/>
    </>,
    "register": <>
      <Info/>
      <Register setPage={setPage} confirm={confirm}/>
    </>,
    "forgot": <ForgotPassword setPage={setPage} sendPassword={sendPassword}/>
  }

  return pages[page]
}
