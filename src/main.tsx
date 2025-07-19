import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './components/Login' 
import Register from './components/Register'
import AddTodo from './components/AddTodo'
import UserTasks from './components/UserTasks'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="forms-container">
        <Register/>
        <Login/>
        <AddTodo/>
        <UserTasks/>
    </div>
    
  </StrictMode>,
)
