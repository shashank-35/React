import React, { useEffect, useState } from "react";
import { Edit, Trash } from "lucide-react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [updateMode, setUpdateMode] = useState(false);

  // Load data safely from localStorage
  useEffect(() => {
    const jsonString = localStorage.getItem("todoData");
    const parsedData = jsonString ? JSON.parse(jsonString) : [];

    if (Array.isArray(parsedData)) {
      setTodoArray(parsedData);
    } else {
      setTodoArray([]);
      localStorage.setItem("todoData", JSON.stringify([]));
    }
  }, []);

  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (todo.trim() === "") {
      alert("Please enter a todo");
      return;
    }

    const newTodos = [...todoArray, todo.trim()];
    setTodoArray(newTodos);
    localStorage.setItem("todoData", JSON.stringify(newTodos));
    setTodo("");
  };

  const deleteTodo = (index) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    const filtered = todoArray.filter((_, i) => i !== index);
    setTodoArray(filtered);
    localStorage.setItem("todoData", JSON.stringify(filtered));
  };

  const editTodo = (value, index) => {
    setTodo(value);
    setEditIndex(index);
    setUpdateMode(true);
  };

  const updateTodo = () => {
    if (todo.trim() === "") {
      alert("Todo cannot be empty");
      return;
    }

    const updated = todoArray.map((item, i) =>
      i === editIndex ? todo.trim() : item
    );

    setTodoArray(updated);
    localStorage.setItem("todoData", JSON.stringify(updated));
    setTodo("");
    setUpdateMode(false);
    setEditIndex(null);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-xl font-bold">Todo List</h1>

      <div className="flex gap-3">
        <input
          type="text"
          value={todo}
          onChange={inputHandler}
          className="border-2 px-3 py-1 rounded-2xl"
        />

        {updateMode ? (
          <button
            onClick={updateTodo}
            className="border-2 px-4 rounded-2xl"
          >
            Update
          </button>
        ) : (
          <button
            onClick={addTodo}
            className="border-2 px-4 rounded-2xl"
          >
            Add
          </button>
        )}
      </div>

      <div className="w-full max-w-md">

        {todoArray.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border p-2 rounded-xl my-2"
          >
            <span>{item}</span>
            <div className="flex gap-2">
              <Edit
                className="cursor-pointer"
                onClick={() => editTodo(item, index)}
              />
              <Trash
                className="cursor-pointer"
                onClick={() => deleteTodo(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
