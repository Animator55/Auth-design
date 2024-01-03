import React from 'react'
import './App.css'
import Login from './components/Login'
import Info from './components/Info'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'

type pagesRouter = {
  [key:string] : JSX.Element
}

export default function App() {
  const [page, setPage] = React.useState("login")

  const pages: pagesRouter = {
    "login": <>
      <Info/>
      <Login setPage={setPage}/>
    </>,
    "register": <>
      <Info/>
      <Register setPage={setPage}/>
    </>,
    "forgot": <ForgotPassword/>
  }

  return <main>
      {pages[page]}
  </main>
}
