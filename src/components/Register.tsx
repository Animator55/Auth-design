import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
    setPage: Function
}

export default function Register({setPage}: Props) {
    const Form = React.useRef(null)

    const submit = (e)=>{
        e.preventDefault()

        console.log(Form.current[0].value)
        console.log(Form.current[1].value)
    }
    return <section>
        <h1>Register</h1>
        <form ref={Form} onSubmit={submit}>
            <div>
                <label>Name</label>
                <input />
            </div>
            <div>
                <label>Email</label>
                <input />
            </div>
            <div>
                <label>Password</label>
                <input />
            </div>
            <div>
                <FontAwesomeIcon icon={faSquare} />
                <h4>Agree with terms and conditions</h4>
            </div>

            <button type='submit'>Register</button>
            <button onClick={()=>{setPage("login")}}>Have an account? Login!</button>
        </form>
    </section>
}