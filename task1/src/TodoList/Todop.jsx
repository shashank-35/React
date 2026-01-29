import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function Todop() {
  let [todo, setTodo] = useState("");
  let [todoArray, setTodoArray] = useState([]);
  let [index, setIndex] = useState(null);

  let [mode, setMode] = useState(false);
  const inputHandler = (e) => {
    setTodo(e.target.value);
    // console.log("🚀 ~ Todop ~ todo:", todo);
  };

  const addHandler = () => {
    if (todo) {
      setTodoArray([...todoArray, todo]);
      setTodo("");
    } else {
      window.alert("plz enter todo");
    }

    // console.log("------------1----------");
    // console.log("🚀 ~ Todop ~ todoArray:", todoArray);
  };

  const updateHandler = (e, i) => {
    setMode(true);
    setIndex(i);
    setTodo(e);
  };

  const update = () => {
    let updatedTodo = todoArray.map((e, i) => {
      if (index === i) {
        return todo;
      } else {
        return e;
      }
    });
    console.log("🚀 ~ update ~ updatedTodo:", updatedTodo)

    if (updatedTodo == ""){
       alert("can not enter blank ");

    }else{
      setTodoArray(updatedTodo);
    setTodo("");
       setMode(false);
    }

 
   
    // console.log("------");
  };

  const deleteHandler = (index) => {
    const filteredData = todoArray.filter((e, i) => {
      return i !== index;
    });
    setTodoArray(filteredData);
    setMode(false);
    setTodo("");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Todo List</h1>
          <p className="text-gray-600">Manage your tasks efficiently</p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
          <div className="flex gap-3">
            <input
              value={todo}
              type="text"
              placeholder="Enter a todo"
              onChange={inputHandler}
              className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
            />
            {mode ? (
              <button
                type="button"
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition shadow-md"
                onClick={() => update()}
              >
                Update
              </button>
            ) : (
              <button
                type="button"
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition shadow-md"
                onClick={() => addHandler()}
              >
                Add
              </button>
            )}
          </div>
        </div>

        {/* Todo List */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          {todoArray.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p className="text-lg">No tasks yet. Add one to get started!</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {todoArray.map((e, i) => {
                return (
                  <li
                    key={i}
                    className="p-4 hover:bg-gray-50 transition flex items-center justify-between gap-4 group"
                  >
                    <span className="flex-1 text-gray-800">{e}</span>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => updateHandler(e, i)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
                      >
                        Update
                      </Button>
                      <Button
                        onClick={() => deleteHandler(i)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                      >
                        Delete
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Task Count */}
        {todoArray.length > 0 && (
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md border border-gray-200 text-center">
            <p className="text-gray-700 font-semibold">
              Total Tasks:{" "}
              <span className="text-blue-600">{todoArray.length}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
