import { create } from "zustand";
import { fetchUserTask, addTask, deleteTask, changeCompletedStatus } from "../apiCalls";
interface TaskType {
    id: number,
    title: string,
    description: string,
    completed: boolean,
    user_id: number,
    created_at: string,
    updated_at: string
}
interface TodoStoreType {
    tasks: TaskType[] | [];
    getUserTasks: () => void;
    addTask: ( title: string, description: string ) => void;
    deleteTask: ( taskID : number ) => void;
    setCompleted: ( taskID: number) => void;
}
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