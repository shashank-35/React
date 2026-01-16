import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export default function SelectInput() {
  let [fruit, setFruit] = useState("chocolate");
  const selectHandler = (e) => {
    console.log("🚀 ~ selectHandler ~ e:", e);
    setFruit(e.value);
  };
  return (
    <div>
      <Select
        value={{ value: fruit, label: fruit }}
        options={options}
        onChange={(e) => selectHandler(e)}
      />
    </div>
  );
}
