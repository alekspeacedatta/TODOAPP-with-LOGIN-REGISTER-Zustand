import { useState } from "react"
import { useAuthenticationStore } from "../store/useAuthenticationStore"

const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    
    const login = useAuthenticationStore(state => state.login);
    const handleLogin = async ( e : any ) => {
        e.preventDefault();
        await login(email, password);
        setEmail('');
        setPassword('');
    }
    return (
        <>
            <form onSubmit={handleLogin}>
                <h2>Login: </h2>
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
export default Login