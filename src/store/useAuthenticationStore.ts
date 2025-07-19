import { create } from "zustand";
interface UserType {
    email: string,
    password: string,
    name: string
}
interface RegisterType {
    user: UserType | null,
    register: (name: string, email: string, password: string) => void;
    login: ( email : string, password : string ) => void;
}
export const useAuthenticationStore = create<RegisterType>( () => ({
    user: null,

    register: async (name: string, email: string, password: string) => {  
        const res = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                name: name,
                password: password,
            })
        })
        if(!res.ok) throw new Error("Register Response Is Not Ok");
        console.log('Task Was Added Successfully');
        
    },
    login: async ( email: string, password: string ) => {
        
        const res = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        if(!res.ok) throw new Error("Register Response Is Not Ok");

        const data = await res.json();
        const token = data.token;
        localStorage.setItem( 'token', token);
    }

}))