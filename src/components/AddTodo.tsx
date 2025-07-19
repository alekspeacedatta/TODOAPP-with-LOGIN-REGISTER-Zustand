import { useState } from "react"
import { useTodoStore } from "../store/useTodoStore";

const AddTodo = () => {
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const addTask = useTodoStore( state => state.addTask );

  return (
    <>
      <form onSubmit={ (e) => { e.preventDefault(), addTask( title, description ) } }>
        <h2>Add Task</h2>
        <section>
          <label>Title: </label>
          <input type="text" onChange={e => {setTitle(e.target.value)}} placeholder="Enter Your Task Title" />
        </section>
        <section>
          <label>Description: </label>
          <input type="text" onChange={e => {setDescription(e.target.value)}} placeholder="Enter Your Task Description" />
        </section>
        <button type="submit" >Submit</button>
      </form>
      <div>
        
      </div>
    </>
  )
}
export default AddTodo