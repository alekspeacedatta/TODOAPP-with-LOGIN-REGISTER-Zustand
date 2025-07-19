import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './components/Login' 
import Register from './components/Register'
import AddTodo from './components/AddTodo'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <Register/>
      <Login/>
    </div>
    <div>
      <AddTodo/>
    </div>
  </StrictMode>,
)
