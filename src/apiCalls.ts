export const fetchUserTask = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:3000/api/todos/', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    if(!res.ok) throw new Error("Error: Get User Tasks Is Not Ok"); 
    const data = await res.json()
    return data.todos;
}
export const addTask = async ( title: string, description: string ) => {
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
}
export const deleteTask = async ( taskID : number ) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`http://localhost:3000/api/todos/${taskID}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    if(!res.ok) throw new Error("Error: Delete Task Res Is Not Ok");
}
export const changeCompletedStatus = async ( taskID : number, completed : boolean ) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`http://localhost:3000/api/todos/${taskID}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            completed: completed
        })
    })
    if(!res.ok) throw new Error("Error: Patching Task property Res Is Not Ok");   
}