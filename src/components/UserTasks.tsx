import { useEffect } from "react";
import { useTodoStore } from "../store/useTodoStore"

const UserTasks = () => {
    const getUserTasks = useTodoStore(state => state.getUserTasks);
    const deleteTask = useTodoStore(state => state.deleteTask);
    const setCompleted = useTodoStore(state => state.setCompleted);
    const tasks = useTodoStore(state => state.tasks);
    useEffect(() => {
        getUserTasks();
    }, [tasks])

    return (
        <div className="user-tasks-container">
            <h2>user Tasks: </h2>
            {/* {tasks.map(task => (
                <div className="task" key={task.id}>
                    <section>
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                            <input type="checkbox" checked={task.completed} onChange={() => setCompleted(task.id)} />
                    </section>
                    <button onClick={() => { deleteTask(task.id) }}>delete Task</button> 
                </div>
            ))} */}
        </div>
    )
}
export default UserTasks