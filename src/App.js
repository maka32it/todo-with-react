import { useEffect, useState } from 'react';
import './index.css';
import Todo from './Todo';
import TodoForm from './TodoForm';


function App() {
  const [todos,setTodos] = useState([])
  
  function addTask(input){
    if(input){
      const newItem = {
        id:Math.random()*100,
        text: input,
        complete:false
      }
      setTodos([...todos,newItem])
    }
   
  }

  
  function removeTask(id){
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  function toggleTask(id){
    setTodos([
      ...todos.map((todo)=>{
        if(todo.id === id){
          return {
            ...todo,
            complete:!todo.complete
          }
         
        }
        return todo
      })
    ])
  }
  return (
    <div className='App'>
      <header>
        <h1>Todo List : {todos.length}</h1>
      </header>
        <TodoForm addTask={addTask} ></TodoForm>
        {todos.map((todo)=>{
          return (
            <Todo 
            todo={todo}
            removeTask={removeTask}
            toggleTask={toggleTask}
            key={todo.id}/>
          )
        })}
    </div>
  );
}

export default App;

