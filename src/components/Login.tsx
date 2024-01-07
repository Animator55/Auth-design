import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faG, faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

type Props = {
    setPage: Function
}

export default function Login({setPage}: Props) {
    const Form = React.useRef(null)
    const [error, setError] = React.useState("")

    const submit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        console.log(Form)
        console.log(Form.current[0].value)
        console.log(Form.current[1].value)


    }

    const toggleRemember = (e: MouseEvent) =>{
        let button = e.currentTarget as HTMLButtonElement
        button.classList.toggle('check')
    }

    return <section className='auth-section'>
        <h1>Login</h1>
        <p>You can login with a registered account or with your Google account</p>
        {/* <button className='google-button'>
            <FontAwesomeIcon icon={faG} />
            <h5>Login with Google</h5>
        </button> */}

        <div className='divisor' data-text=""></div>

        <section className='error-box'></section>

        <form ref={Form} onSubmit={submit} className='form'>
            <div className='labeled-input'>
                <label>Email</label>
                <input name='email'/>
            </div>
            <div className='labeled-input'>
                <label>Password</label>
                <button onClick={()=>{setPage("forgot")}}>Forget password?</button>
                <input name="password"/>
            </div>
            <div className='check-box'>
                <h4>Remember me</h4>
                <button className='box' onClick={toggleRemember}>
                    <FontAwesomeIcon icon={faSquare} />
                    <FontAwesomeIcon icon={faSquareCheck} />
                </button>
            </div>

            <button type='submit'>Login</button>
            <button className='sec-button' onClick={()=>{setPage("register")}}>Don't have an account</button>
        </form>
    </section>

}