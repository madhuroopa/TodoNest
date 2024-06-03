import React, { useRef } from 'react'
import './styles.css'

interface props{
    todo :string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=> void;
}
const InputField : React.FC <props> = (props):React.JSX.Element=> {
const inputRef =useRef<HTMLInputElement>(null);
  return (
   <form className='input' onSubmit={(e)=>
    {props.handleAdd(e)
    inputRef.current?.blur();

   }
  }>
    <input 
    ref = {inputRef}
    type ='input'
     value ={props.todo}
     onChange ={
        (e) => props.setTodo(e.target.value)
     }

     placeholder='Enter a Task' className='input__box'/>
    <button className='input__submit'>Go</button>


   </form>
  )
}

export default InputField