import Image from 'next/image'
'use client'// to store at client side  ( a frontend component)
import { useState } from "react"// state ko store krne ke liye
import { TodoObject } from "./models/Todo"
import { v4 as uuid} from 'uuid';
const Home: React.FC = () => { // functional component
  const [todo, setTodo] = useState<string>('');
  const[todos, setTodos]= useState <TodoObject[ ]>([]);
  const addTodo = () =>
  {
setTodos([{ id:uuid(), value: todo, done:false}, ...todos])
setTodo(" "); 
}
const markTodoDone = (id:string)=>
{
setTodos(todos.map(todo => todo.id === id ? {...todo,  done:true } : todo ));
}
  return (
    <>
    <header className='bg-slate-900 p-4'>
    <h1 className="text-3xl"> Todos</h1>
    </header> 
    <main className="p-4"> 
    <input 
    type= "text"
    placeholder='Enter a new todo'// used for keeping the mousse
    className='p-2 rounded mr-5 text-slate-900'
    onChange= {(e)=> setTodo(e.target.value)}
    value={todo}
    />
    <button 
    className= "border-2 p-2 rounded"
    onClick= {( ) => addTodo()}> Add Todo </button>
     <ul className='mt-5'>
      {
        todos.map(todo =>
          (
            <li 
            onClick={ ()=> markTodoDone(todo.id)}
            className="text-3x1 ml-5 cursor-pointer"> {todo.value} </li>))
              
      }
      
      
     </ul>

    </main>
    </>
  )
}
export default Home;