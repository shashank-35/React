import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

import { User } from "./components/User.jsx";
import { Button } from "@/components/ui/button";
import { InputGroupDemo } from "./components/UserForm";
import { Todo4 } from "./TodoList/Todo4.jsx";
import { Todo3 } from "./TodoList/Todo3";
import Todo from "./TodoList/Todo";
import ApiCall from "./api/ApiCall";
import { ToastContainer } from "react-toastify";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div>
      {/* <Todo4/> */}
      {/* <Todo3/> */}
      {/* <Todo/> */}
      <ApiCall />
      <ToastContainer/>
      <Toaster/>
    </div>
  );
}

export default App;
