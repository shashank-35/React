import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function UserFormTask() {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  let [userData, setUserData] = useState([]);
  console.log("----------urvish-----------22------:", userData);

  const [index, setIndex] = useState(null);
  const [updateMode, setUpdateMode] = useState(false);
  // console.log("🚀 ~ UserFormTask ~ user:", user)

  // console.log("🚀 ~ UserFormTask ~ userData:", userData);

  const userHandler = (e) => {
    console.log("----------urvish-----------33------:", userData);

    e.preventDefault();
    setUserData([...userData, user]);
    setUser({ name: "", age: "" });
  };

  const editHandler = (element, idx) => {
    console.log("----------urvish----------44------:", userData);

    setUser(element);
    setIndex(idx);
    setUpdateMode(true);
  };

  const updateHandler = (e) => {
    e.preventDefault()
    let updatedArray = userData.map((e, i) => {
      if (i === index) {
        return user;
      } else {
        return e;
      }
    });
    console.log("----------urvish-----------11------:", updatedArray);
    setUserData(updatedArray);
    setUser({ name: "", age: "" });
    setUpdateMode(false);
  };

  const Delete = (i) => {
    console.log("----------urvish----------55------:", userData);

    const filteredData = userData.filter((e, index) => index !== i);
    setUserData(filteredData);
  };
  return (
    <div>
      <div>
        <h1>User Form</h1>
      </div>
      <form action="">
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
          <Button type="button" onClick={(e) => updateHandler(e)}>
            Update
          </Button>
        ) : (
          <Button type="submit" onClick={(e) => userHandler(e)}>
            Submit
          </Button>
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
                  <Button onClick={() => Delete(i)}>Delete</Button>
                </div>
              );
            })}
          </div>
        }
      </div>
    </div>
  );
}
