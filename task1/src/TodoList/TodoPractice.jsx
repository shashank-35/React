import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export default function TodoPractice() {

let [todo,setTodo]= useState();
let [todoArray,setTodoArray] = useState([]);
let [updateMode,setUpdateMode]= useState(false);
let [index ,setIndex] = useState(null);
const inputhandler = (e) => 
{
// console.log("🚀 ~ inputhandler ~ e:", e)
// console.log("🚀 ~ TodoPractice ~ todo:", todo)

setTodo(e.target.value);

}

const addhandler = () =>{

  if(todo){
setTodoArray([...todoArray,todo]);
  setTodo("");
  }else{
    window.alert("plz enter the todo")
  }
  
console.log("🚀 ~ TodoPractice ~ todoArray:", todoArray)

}

const deleteHandler = (index) =>{
const filteredData = todoArray.filter((e,i) =>{
  return i !== index;
});
setTodoArray(filteredData);
}

const updateModeHandler =(e,i) =>{
  setUpdateMode(true);
  setTodo(e)
  setIndex(i);

}
const updateHandler = () => {
let updatedArray = todoArray.map((e,i) => {
  if(i === index){
    return todo;
  }else{
    return e;
  }
});
setTodoArray(updatedArray);
setTodo("");
setUpdateMode(false);


};
  
  return (
    <div className='flex justify-center items-center flex-col gap-10'>

      <div className='flex gap-3 flex-col items-center'>
        <h1>
          Todo practical
        </h1>
<div className='flex gap-2'>
        <input value={todo} type="text" name="" id="" onChange={(e)=> inputhandler(e)} placeholder='    enter todo' className='border-2' />

        {updateMode? <Button  onClick={()=> updateHandler()}>Update</Button>:
        <Button onClick={()=> addhandler()}>Add</Button>
  }
        </div>
      </div>

      <div className='border-2 flex gap-5 flex-col'>
        {
          todoArray.map((e,i)=>{
            return(
              <div key={i} className='flex justify-center items-center gap-x-7'>
<ul>{e}</ul>
              <Button onClick={()=> deleteHandler(i)}>Delete</Button>
              <Button onClick={()=> updateModeHandler(e,i)}>Update</Button>
              </div>
              
            )
          })
        }
      </div>
        
    </div>
  )
}
