import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

import { User } from "./components/User.jsx";
import { Button } from "@/components/ui/button";
import { InputGroupDemo } from "./components/UserForm";
import { Todo4 } from "./TodoList/Todo4.jsx";
import { Todo3 } from "./TodoList/Todo3";
import Todo1 from "./TodoList/Todo1.jsx";
import ApiCall from "./api/ApiCall";
import { ToastContainer } from "react-toastify";
import { Toaster } from "./components/ui/sonner";
import ApiTask from "./api/ApiTask";
import UserForm from "./User/UserForm";
import UserFormTask from "./User/UserFormTask";
import SelectInput from "./input/SelectInput";
import CheckBoxInput from "./input/CheckBoxInput";

function App() {
  return (
    <div>
      {/* <Todo4/> */}
      {/* <Todo3/> */}
      {/* <Todo/> */}
      {/* <ApiCall />
      <ToastContainer/>
      <Toaster/> */}
      {/* <ApiTask/> */}
      {/* <Todo1/> */}
      {/* <UserForm /> */}
      {/* <UserFormTask/> */}
      {/* <SelectInput/> */}
      <CheckBoxInput/>

    </div>
  );
}

export default App;
