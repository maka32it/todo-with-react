import React,{useState} from 'react'


export default function TodoForm({addTask}) {
    const [input,setInput] = useState('')
    function handleChange(e){
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        addTask(input)
        setInput('')
    }

    function onEnter(e){
        if(e === "Enter"){
            handleSubmit(e)
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
            <input
             value={input}
             type="text"
             onChange={handleChange}
             onKeyDown={onEnter}
             placeholder="Enter your Todo" ></input>
             <button>Save</button>
      </form>
      
    </div>
  )
}
