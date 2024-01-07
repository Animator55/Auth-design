import { faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
    setPage: Function
}

export default function Register({setPage}: Props) {
    const Form = React.useRef(null)
    const [error, setError] = React.useState("")

    const submit = (e)=>{
        e.preventDefault()

        console.log(Form.current[0].value)
        console.log(Form.current[1].value)
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

        <section className='error-box'></section>

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
                <input name="password"/>
            </div>
            <div className='check-box'>
                <button className='box' onClick={toggleAgree}>
                    <FontAwesomeIcon icon={faSquare} />
                    <FontAwesomeIcon icon={faSquareCheck} />
                </button>
                <h4>Agree with terms and conditions <button className='see-more'>See more</button></h4>
            </div>

            <button className='disabled' type='submit'>Register</button>
            <button className='sec-button' onClick={()=>{setPage("login")}}>Have an account? Login!</button>
        </form>
    </section>
}