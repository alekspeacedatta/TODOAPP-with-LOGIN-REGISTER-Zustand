import { create } from "zustand";
import { type AuthenticationType } from "../types";

export const useAuthenticationStore = create<AuthenticationType>( () => ({
    user: null,

    register: async (name: string, email: string, password: string) => {  
        try {
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
        } catch (error) {
            console.error(error);
        }
            
    },
    login: async ( email: string, password: string ) => {
        try {
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
            if(!res.ok) throw new Error("Login Response Is Not Ok");
    
            const data = await res.json();
            const token = data.token;
            localStorage.setItem( 'token', token);
        } catch (error) {
            console.error(error);
        }
    }
}))