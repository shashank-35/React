import React, { useState } from "react";

export default function Todo2() {
  let [todo, setTodo] = useState("");
  let [todoArray, setTodoArray] = useState([]);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  // console.log("🚀 ~ Todo2 ~ todo:", todo)

  const clickHandler = () => {
    setTodoArray([...todoArray, todo]);
    setTodo("");
  }

  const checkTodo = () => {
    if(todo !== ""){
      clickHandler();
    }else{
      window.alert("Please enter a todo item.");
    }
  }

  console.log("🚀 ~ Todo2 ~ todoArray:", todoArray)

  const DeleteTodo = (index) => {
    const filteredData = todoArray.filter((e,i) => {
      return i !== index
    })
    setTodoArray(filteredData);
  }

  const Check = (index) => {
    const conformDelete = window.confirm("Are you sure to delete this todo?");
    if (conformDelete === true) {
      DeleteTodo(index);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col justify-center items-center gap-4 border-2 p-4 rounded-xl">
        <h1>Todo Here</h1>
        <div className="flex gap-3">
          <input
          value={todo}
            type="text"
            name="text"
            className="border-2 rounded-2xl"
            placeholder="  Enter Todo"
            onChange={(e) => handleChange(e)}
          />
          <button type="button" className="border-2 rounded-2xl p-2" onClick={() => checkTodo()}>
            Add Todo
          </button>

          
        </div>
        <div className="flex flex-col gap-10 ">
            {
              todoArray.map((e,i) => {
                return (
                  <div key={i} className="flex flex-row gap-20 p-3 pr-30 "><li >{e}</li><button  onClick={() => Check(i)} className="border-2 rounded-2xl p-3" type="button">Delete</button></div>
                )
              })
            }
          </div>
      </div>
    </div>
  );
}
