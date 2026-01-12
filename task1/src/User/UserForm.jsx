import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function UserForm() {
  let [user, setUser] = useState({
    name: "",
    age: "",
  });
  let [userData, setUserData] = useState([]);
  console.log("🚀 ~ UserForm ~ userData:", userData);

  const addUserHandler = (e) => {
    e.preventDefault();
    setUserData([...userData, user]);
    setUser({
      name: "",
      age: "",
    });
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <form
        onSubmit={(e) => addUserHandler(e)}
        className="flex justify-center items-start flex-col gap-2 border p-3 rounded-2xl border-black"
      >
        <label htmlFor="name">Name</label>
        <input
          value={user.name}
          type="text"
          className="border border-black"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label htmlFor="ages">Age</label>
        <input
        value={user.age}
          type="number"
          className="border border-black"
          name="age"
          placeholder="Enter your age"
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
        <Button className="w-full cursor-pointer">Add User</Button>
      </form>

      <hr />

      <h1>name {user.name}</h1>
      <h1>age {user.age}</h1>
    </div>
  );
}


// select image checkbox radio