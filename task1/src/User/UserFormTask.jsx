import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function UserFormTask() {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

   let [userData, setUserData] = useState([]);

   const [index, setIndex] = useState(null);
  const [updateMode, setUpdateMode] = useState(false);
  // console.log("🚀 ~ UserFormTask ~ user:", user)

 
  
  console.log("🚀 ~ UserFormTask ~ userData:", userData);

  const userHandler = (e) => {
    e.preventDefault();
    setUserData([...userData, user]);
    setUser({ name: "", age: "" });
  };

  const editHandler = (element, idx) => {
    setUser(element);
    setIndex(idx);
    setUpdateMode(true);
  };

  const updateHandler = () => {
    let updatedArray = userData.map((e, i) => {
      if (i === index) {
        return user;
      } else {
        return e;
      }
    });
    console.log("🚀 ~ updateHandler ~ updatedArray:", updatedArray);
    setUserData(updatedArray);
    setUser({ name: "", age: "" });
    setUpdateMode(false);
  };

  const Delete = () => {
    const filteredData = userData.filter((e, index) => index !== i);
    setUserData(filteredData);
  };
  return (
    <div>
      <div>
        <h1>User Form</h1>
      </div>
      <form action="" onSubmit={(e) => userHandler(e)}>
        <label htmlFor="name">Name:</label>
        <input
          value={user.name}
          className="border-2"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          type="text"
          name="name"
        />
        <label htmlFor="age">age:</label>
        <input
          value={user.age}
          className="border-2"
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          type="text"
          name="age"
        />

        {updateMode ? (
          <Button type="button" onClick={() => updateHandler()}>
            Update
          </Button>
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </form>

      <div>
        {
          <div>
            {userData.map((e, i) => {
              return (
                <div key={i} className="border-2 p-2 mb-4">
                  <li>Name: {e.name}</li>
                  <li>Age: {e.age}</li>
                  <Button onClick={() => editHandler(e, i)}>Update</Button>
                  <Button onClick={() => Delete()}>Delete</Button>
                </div>
              );
            })}
          </div>
        }
      </div>
    </div>
  );
}
