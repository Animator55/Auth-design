import React from 'react'

type Props = {
  sendPassword: Function
  setPage: Function
}

export default function ForgotPassword({sendPassword, setPage}: Props) {
  const Form = React.useRef(null)
  const [error, setError] = React.useState("")

  const submit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    
    if(!Form.current) return
    
    if(Form.current[0].value === "") return setError("Complete the input")
    
    let email = Form.current[0].value
    let submit = Form.current[1] as HTMLButtonElement

    submit.classList.add('loading-button')

    setTimeout(()=>{
        sendPassword(email)
        submit.classList.remove('loading-button')
    }, 1000)
  } 

  return (
    <section className='forgot-back'>
      <div className="info-background">
        <div className="ball-4"/>
        <div className="ball-1"/>
        <div className="ball-2"/>
        <div className="ball-3"/>
      </div>
      <div className='forgot-div'>
        <h1>Send a new password</h1>

        <div className='divisor' data-text=""/>

        <section className='error-box'>{error}</section>

        <form className="form" ref={Form} onSubmit={submit} >
          <div className='labeled-input'>
              <label>Email</label>
              <input name='email'/>
          </div>
          <button type='submit' data-text="Send"></button>
          <button className='sec-button' type="button" onClick={()=>{setPage("login")}}>You recovered your password? Login!</button>
        </form>
      </div>
    </section>
  )
}