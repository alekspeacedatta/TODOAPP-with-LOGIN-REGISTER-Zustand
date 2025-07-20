import { useState } from "react"
import { useAuthenticationStore } from "../store/useAuthenticationStore"

const Register = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const register = useAuthenticationStore(state => state.register);

    const handleRegister = async ( e : any ) => {
        e.preventDefault();
        await register(name, email, password);
        setName('');
        setEmail('');
        setPassword('');
    }
    return (
        <>
            <form onSubmit={handleRegister}>
                <h2>Register: </h2>
                <section>
                    <label htmlFor="">Name: </label>
                    <input value={name} type="text" placeholder="enter your name" onChange={e => { setName(e.target.value) }} />
                </section>
                <section>
                    <label htmlFor="">Email: </label>
                    <input value={email} type="text" placeholder="enter your email" onChange={e => { setEmail(e.target.value) }} />
                </section>
                <section>
                    <label htmlFor="">Password:</label>
                    <input value={password} type="text" placeholder="enter your password" onChange={e => { setPassword(e.target.value) }} />
                </section>
                <button type="submit">Submit</button>
            </form>        
        </>

    )
}
export default Register