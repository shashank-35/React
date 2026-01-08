import { Edit, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";

export function Todo3() {
  let [text, setText] = useState("");
  let [todoList, setTodoList] = useState([]);
  const [index, setIndex] = useState(null);
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    let jsonString = localStorage.getItem("todoData");
    let noramlData = JSON.parse(jsonString);
    console.log("🚀 ~ Todo3 ~ jsonString:", jsonString);
    console.log("🚀 ~ Todo3 ~ NoramlData:", noramlData);
    setTodoList(noramlData);
  }, []);

  const changeHandler = (e) => {
    // console.log("🚀 ~ changeHandler ~ e:", e.target.value)
    setText(e.target.value);
  };

  const addTodoList = () => {
    let duplicate = todoList.includes(text);
    if (duplicate) {
      alert("already avilable");
      return;
    }
    if (!text) {
      window.alert("Please enter a todo.");
    } else {
      setTodoList([...todoList, text]);
      localStorage.setItem("todoData", JSON.stringify([...todoList, text]));
      setText("");
    }
  };

  const Check = (index) => {
    const conformDelete = window.confirm("Are you sure to delete this todo?");
    if (conformDelete === true) {
      deleteTodo(index);
    }
  };

  const deleteTodo = (index) => {
    const filteredData = todoList.filter((e, i) => {
      return i !== index;
    });
    setTodoList(filteredData);
    localStorage.setItem("todoData", JSON.stringify(filteredData));
  };

  const editHandler = (element, index) => {
    setText(element);
    setIndex(index);
    setUpdateMode(true);
  };

  const updateHandler = () => {
    // array => todoList
    // newVal => text
    // index => index
    let updatedArray = todoList.map((e, i) => {
      if (i === index) {
        return text;
      } else {
        return e;
      }
    });
    console.log("🚀 ~ updateHandler ~ updatedArray:", updatedArray);
    setTodoList(updatedArray);
    localStorage.setItem("todoData", JSON.stringify(updatedArray));
    setText("");
    setUpdateMode(false);
  };

  return (
    <div className="border-2 rounded-xl">
      <div className="flex justify-center items-center mt-10 font-bold">
        <h1>TodoList Using React</h1>
      </div>
      <div className="flex justify-center items-center py-5 border-b-2 mx-auto">
        <input
          type="text"
          name="text"
          className="border-2 p-1"
          placeholder="Add your daily task"
          value={text}
          onChange={(e) => changeHandler(e)}
        />
        {updateMode ? (
          <button
            type="button"
            className="border-2 mx-5 p-1 px-3"
            onClick={() => updateHandler()}
          >
            Update
          </button>
        ) : (
          <button
            type="button"
            className="border-2 mx-5 p-1 px-3"
            onClick={() => addTodoList()}
          >
            Add
          </button>
        )}
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        {todoList.map((e, i) => {
          return (
            <div
              key={i}
              className="flex justify-between items-center w-1/3 border-2 p-2 mb-4"
            >
              <ul key={i} className="m-2">
                {e}
              </ul>
              <div className="flex gap-2">
                <Edit
                  className="cursor-pointer"
                  onClick={() => editHandler(e, i)}
                />
                <Trash
                  className="cursor-pointer"
                  color="red"
                  onClick={() => Check(i)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/*

true ? h1 : h2





*/
