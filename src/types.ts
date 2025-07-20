export interface TaskType {
    id: number,
    title: string,
    description: string,
    completed: boolean,
    user_id: number,
    created_at: string,
    updated_at: string
}
export interface TodoStoreType {
    tasks: TaskType[] | [];
    getUserTasks: () => void;
    addTask: ( title: string, description: string ) => void;
    deleteTask: ( taskID : number ) => void;
    setCompleted: ( taskID: number) => void;
}
export interface UserType {
    email: string,
    password: string,
    name: string
}
export interface RegisterType {
    user: UserType | null,
    register: (name: string, email: string, password: string) => void;
    login: ( email : string, password : string ) => void;
}