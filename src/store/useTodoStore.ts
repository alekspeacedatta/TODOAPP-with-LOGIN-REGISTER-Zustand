import { create } from "zustand";
interface TodoStoreType {
    addTask: ( title: string, description: string ) => void;
    deleteTask: ( taskID : number ) => void;
}
export const useTodoStore = create<TodoStoreType>((set, get) => ({
    
    addTask: async ( title: string, description : string ) => {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:3000/api/todos', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                title: title,
                description: description,
            }) 
        })
        if(!res.ok) throw new Error("Error Add Task Res Is Not Ok");
        
    },
    deleteTask: async ( taskID : number ) => {
        
    }
}))