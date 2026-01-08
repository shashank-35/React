import { Trash } from "lucide-react";
import React, { useState } from "react";

export default function shashank1() {
  let [shashank, setshashank] = useState();
  let [shashankArray, setshashankArray] = useState([]);

  const ClickHandler = (e) => {
    setshashank(e.target.value);
  };
  // console.log("🚀 ~ shashank1 ~ shashank:", shashank)
  const addshashankArray = () => {
    setshashankArray([...shashankArray, shashank]);
    setshashank("");
  };
//   console.log("🚀 ~ shashank1 ~ shashankArray:", shashankArray);

const deleteshashank = (index) => {
    const filteredData = shashankArray.filter((e,i) => {
        return i !== index
    })
    setshashankArray(filteredData);
}

const Check = (index) => {
    const conformDelete = window.confirm("are u sure for delete Todo?"); 
    if(conformDelete === true){
        deleteshashank(index);
    }
}
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col justify-center items-center gap-4 border-2 p-4 rounded-3xl">
        <h1>Todo List</h1>
        <div className="flex gap-4">
          <input
          value={shashank}
            type="text"
            placeholder="  Enter Todo Here"
            onChange={(e) => ClickHandler(e)}
            className="border-2 rounded-2xl"
          />
          <button
          value={shashank}
            type="button"
            className="border-2 rounded-2xl p-2"
            onClick={() => addshashankArray()}
          >
            Add Todo
          </button>
        </div>

        <div>
          {shashankArray.map((e, i) => {
            return (
                <div key={i} className="min-w-full flex justify-between items-center m-3 gap-3 ">
                    <li>{e}</li>
                    {/* <button type="button" className="rounded-2xl border-2">Delete</button> */}
                    <Trash onClick={() => Check(i)} />
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
