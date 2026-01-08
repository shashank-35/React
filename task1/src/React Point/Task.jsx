import { useState } from "react";

export function Task() {
  let [array, setArray] = useState([1,2,3]);

  function add() {
    setArray([...array, array.length + 1]);
  }
//   console.log("🚀 ~ Task ~ array:", array);

  function remove() {
    // setArray(array.pop());
    // setArray(array.slice(-1));
    setArray(array.slice(0, -1));
  };


  let num = array.map((num) => {
    return num;
  });
  console.log("🚀 ~ Task ~ num:", num);

  return (
    <div className="flex justify-center flex-col items-center text-center gap-2 mt-100 bg-red-400">
      <h1>Task using useState</h1>
      <button className="border-2 p-2" onClick={add}>Add Elements</button>
      <button className="border-2 p-2" onClick={remove}>remove Elements</button>

      <p>Array: {num}</p>
    </div>
  );
}
