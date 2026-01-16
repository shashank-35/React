import React, { useState } from "react";

export default function CheckBoxInput() {
  let [hobby, setHobby] = useState([]);
  console.log("🚀 ~ CheckBoxInput ~ hobby:", hobby);

  const checkBoxHandler = (e, value) => {
    console.log("🚀 ~ checkBoxHandler ~ e:", value, e.target.checked);
    if (e.target.checked) {
      setHobby([...hobby, value]);
    } else {
      let filterData = hobby.filter((ele) => ele !== value);
      console.log("🚀 ~ checkBoxHandler ~ filterData:", filterData);
      setHobby(filterData);
    }
  };
  return (
    <div className="flex justify-center flex-col items-center">
      <div>
        <input
          checked={hobby.includes("hindi")}
          type="checkbox"
          name=""
          id=""
          onChange={(e) => checkBoxHandler(e, "hindi")}
        />{" "}
        Hindi
      </div>
      <div>
        <input
          checked={hobby.includes("gujarati")}
          type="checkbox"
          name=""
          id=""
          onChange={(e) => checkBoxHandler(e, "gujarati")}
        />{" "}
        Gujarati
      </div>
      <div>
        <input
          checked={hobby.includes("marathi")}
          type="checkbox"
          name=""
          id=""
          onChange={(e) => checkBoxHandler(e, "marathi")}
        />{" "}
        Marathi
      </div>
      <div>
        <input
          checked={hobby.includes("english")}
          type="checkbox"
          name=""
          id=""
          onChange={(e) => checkBoxHandler(e, "english")}
        />{" "}
        English
      </div>
    </div>
  );
}
