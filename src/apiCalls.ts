export const fetchUserTask = async () => {
    try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:3000/api/todos/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if(!res.ok) throw new Error("Error: Get User Tasks Is Not Ok"); 
        const data = await res.json()
        return data.todos;
    } catch (error) {
        console.error(error);
    }
}
export const addTask = async ( title: string, description: string ) => {
    try {
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
        
    } catch (error) {
        console.error(error);
    }
}
export const deleteTask = async ( taskID : number ) => {
    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`http://localhost:3000/api/todos/${taskID}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if(!res.ok) throw new Error("Error: Delete Task Res Is Not Ok");
    } catch (error) {
        console.error(error);
    }
}
export const changeCompletedStatus = async ( taskID : number, completed : boolean ) => {
    try {
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
    } catch (error) {
        console.error(error);
    }
}