import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function UserForm() {
  let [user, setUser] = useState({
    name: "",
    age: "",
  });
  let [userData, setUserData] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  let [index, setIndex] = useState(null);
  console.log("🚀 ~ UserForm ~ userData:", userData);

  const addUserHandler = (e) => {
    e.preventDefault();
    setUserData([...userData, user]);
    setUser({
      name: "",
      age: "",
    });
  };

  const EditHandler = (element, index) => {
    setUser(element);
    setIndex(index);
    setUpdateMode(true);
  };

  const UpdateHandler = () => {
    let updatedArray = userData.map((e, i) => {
      if (i == index) {
        return user;
      } else {
        return e;
      }
    });
    setUserData(updatedArray);
    setUser({
      name: "",
      age: "",
    });
    setUpdateMode(false);
  };

  const deleteHandler = (i) => {
    const filteredData = userData.filter((e, index) => {
      return index !== i;
    });
    setUserData(filteredData);
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

        {updateMode ? (
          <Button onClick={() => UpdateHandler()}>Update</Button>
        ) : (
          <Button className="w-full cursor-pointer">Add User</Button>
        )}
      </form>

      <hr />

      <div>
        {userData.map((e, i) => {
          return (
            <div
              key={i}
              className="p-2 mb-4 flex justify-center items-center gap-3 border-2 mt-4"
            >
              <div className="p-2 mb-4">
                <ul>Name: {e.name}</ul>
                <ul>Age: {e.age}</ul>
              </div>

              <div className="flex justify-center flex-col gap-2">
                <Button onClick={() => EditHandler(e, i)}>Update</Button>

                <Button onClick={() => deleteHandler(i)}>Delete</Button>
              </div>

              <hr />
            </div>
          );
        })}
      </div>

      {/* <h1>name {userData.name}</h1>
      <h1>age {userData.age}</h1> */}
    </div>
  );
}
