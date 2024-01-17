import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faG, faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

type Props = {
    setPage: Function
    confirm: Function
}

export default function Login({setPage, confirm}: Props) {
    const Form = React.useRef(null)
    const [error, setError] = React.useState("")

    const submit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        
        if(!Form.current) return
        
        if(Form.current[0].value === "" || Form.current[1].value === "") return setError("Complete all inputs")
        
        let [email, password] = [Form.current[0].value, Form.current[1].value]
        let submit = Form.current[4] as HTMLButtonElement

        submit.classList.add('loading-button')

        setTimeout(()=>{
            confirm(email, password)
            submit.classList.remove('loading-button')
        }, 2000)
    }

    const togglePassword = (e: MouseEvent) =>{
        let button = e.currentTarget as HTMLButtonElement
        button.classList.toggle('check')
        
        let input = button.previousElementSibling as HTMLInputElement
        input.type = input.type === "text" ? "password" : "text"
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
        <section className='error-box'>{error}</section>


        <form ref={Form} onSubmit={submit} className='form'>
            <div className='labeled-input'>
                <label>Email</label>
                <input name='email'/>
            </div>
            <div className='labeled-input'>
                <label>Password</label>
                <a onClick={()=>{setPage("forgot")}}>Forget password?</a>
                <div className='input-container'>
                    <input name="password" type='password'/>
                    <button type='button' onClick={togglePassword}>
                        <FontAwesomeIcon icon={faEyeSlash} />
                        <FontAwesomeIcon icon={faEye} />
                    </button>
                </div>
            </div>
            <div className='check-box'>
                <h4>Remember me</h4>
                <button className='box' type='button' onClick={toggleRemember}>
                    <FontAwesomeIcon icon={faSquare} />
                    <FontAwesomeIcon icon={faSquareCheck} />
                </button>
            </div>

            <button type='submit' data-text="Login"></button>
            <button className='sec-button' type="button" onClick={()=>{setPage("register")}}>Don't have an account</button>
        </form>
    </section>

}