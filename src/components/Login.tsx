import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faG, faSquare } from '@fortawesome/free-solid-svg-icons'

type Props = {
    setPage: Function
}

export default function Login({setPage}: Props) {
    const Form = React.useRef(null)

    const submit = (e)=>{
        e.preventDefault()

        console.log(Form.current[0].value)
        console.log(Form.current[1].value)
    }

    return <section>
        <h1>Login</h1>
        <p>You can login with a registered account or with your Google account</p>
        <button>
            <FontAwesomeIcon icon={faG} />
            <h5>Login with Google</h5>
        </button>

        <div>or</div>

        <form ref={Form} onSubmit={submit}>
            <div>
                <label>Email</label>
                <input />
            </div>
            <div>
                <label>Password</label>
                <button onClick={()=>{setPage("forgot")}}>Forget password?</button>
                <input />
            </div>
            <div>
                <h4>Remember me</h4>
                <FontAwesomeIcon icon={faSquare} />
            </div>

            <button type='submit'>Login</button>
            <button onClick={()=>{setPage("register")}}>Don't have an account</button>
        </form>
    </section>

}