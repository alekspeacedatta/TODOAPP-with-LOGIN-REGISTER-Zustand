import { type TodoStoreType } from '../types'
import { create } from "zustand";
import { fetchUserTask, addTask, deleteTask, changeCompletedStatus } from "../apiCalls";

export const useTodoStore = create<TodoStoreType>((set, get) => ({
    tasks: [],
    getUserTasks: async () => {
        const data = await fetchUserTask();
        set({ tasks: data })
    },
    addTask: async ( title: string, description : string ) => {
        addTask( title, description );
    },
    deleteTask: async ( taskID : number ) => {
        deleteTask(taskID);
        
        const { tasks } = get();
        const filteredTasks = tasks.filter(task => task.id !== taskID);

        set({ tasks: filteredTasks });
    },
    setCompleted: async ( taskID: number ) => {
        const task = get().tasks.find(task => task.id === taskID);
        if(!task) return;

        const newStatus = !task.completed;
        try {
            await changeCompletedStatus(taskID, newStatus);
        } catch (error) {
            console.error(error);
        }
    }
}))