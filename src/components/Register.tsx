import { useState } from "react"
import { useAuthenticationStore } from "../store/useAuthenticationStore"

const Register = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const register = useAuthenticationStore(state => state.register);
    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(), register(name, email, password) }}>
                <h2>Register</h2>
                <section>
                    <label htmlFor="">Name: </label>
                    <input type="text" placeholder="enter your name" onChange={e => { setName(e.target.value) }} />
                </section>
                <section>
                    <label htmlFor="">Email: </label>
                    <input type="text" placeholder="enter your email" onChange={e => { setEmail(e.target.value) }} />
                </section>
                <section>
                    <label htmlFor="">Password:</label>
                    <input type="text" placeholder="enter your password" onChange={e => { setPassword(e.target.value) }} />
                </section>
                <button type="submit">Submit</button>
            </form>        
        </>

    )
}
export default Register