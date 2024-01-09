import { faEye, faEyeSlash, faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
    setPage: Function
    confirm: Function
}

export default function Register({setPage, confirm}: Props) {
    const Form = React.useRef(null)
    const [error, setError] = React.useState("")

    const submit = (e)=>{
        e.preventDefault()
        
        if(!Form.current) return
        
        if(Form.current[0].value === "" || Form.current[1].value === "") return setError("Complete all inputs")
        
        let [name, email, password] = [Form.current[0].value, Form.current[0].value, Form.current[2].value]
        let submit = Form.current[6] as HTMLButtonElement
        
        if(submit.classList.contains("disabled")) return setError("Must agree with terms and conditions")
        submit.classList.add('loading-button')

        setTimeout(()=>{
            confirm(email, password, name)
            submit.classList.remove('loading-button')
        }, 1000)
    }


    const togglePassword = (e: MouseEvent) =>{
        let button = e.currentTarget as HTMLButtonElement
        button.classList.toggle('check')
        
        let input = button.previousElementSibling as HTMLInputElement
        input.type = input.type === "text" ? "password" : "text"
    }

    const toggleAgree = (e: MouseEvent) =>{
        let button = e.currentTarget as HTMLButtonElement
        button.classList.toggle('check')
        let submit = button.parentElement!.nextSibling as HTMLButtonElement
        submit.classList.toggle("disabled")
    }

    return <section className='auth-section'>
        <h1>Register</h1>

        <div className='divisor' data-text=""></div>

        <section className='error-box'>{error}</section>

        <form ref={Form} onSubmit={submit} className='form'>
            <div className='labeled-input'>
                <label>Name</label>
                <input name='name'/>
            </div>
            <div className='labeled-input'>
                <label>Email</label>
                <input name='email'/>
            </div>
            <div className='labeled-input'>
                <label>Password</label>
                <div className='input-container'>
                    <input name="password"/>
                    <button type='button' onClick={togglePassword}>
                        <FontAwesomeIcon icon={faEye} />
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </button>
                </div>
            </div>
            <div className='check-box'>
                <button className='box' type="button" onClick={toggleAgree}>
                    <FontAwesomeIcon icon={faSquare} />
                    <FontAwesomeIcon icon={faSquareCheck} />
                </button>
                <h5>Agree with terms and conditions <button type="button" className='see-more'>See more</button></h5>
            </div>

            <button className='disabled' type='submit' data-text="Register"></button>
            <button className='sec-button' type="button" onClick={()=>{setPage("login")}}>Have an account? Login!</button>
        </form>
    </section>
}