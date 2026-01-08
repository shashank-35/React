import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import { User } from './components/User.jsx'
import { Button } from '@/components/ui/button'
import { InputGroupDemo } from './components/UserForm'
import {Todo4}  from './TodoList/Todo4.jsx'
import { Todo3 } from './TodoList/Todo3'
import Todo from './TodoList/Todo'


function App() {
  return(
    <div>
     {/* <Todo4/> */}
{/* <Todo3/> */}
<Todo/>
    </div>
  )
}

export default App
