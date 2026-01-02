import { useState } from "react";

export function Task() {
  let [array, setArray] = useState([]);

  function add() {
    setArray(
        // array.push(1),
        // array.push(2),
        // array.push(3),
        // array.push(4),
        // array.push(5),
        // array.push(6),
        // array.push(7),
        // array.push(8),
        // array.push(9),
        // array.push(10)
        [...array, 1,2,3,4,5,6,7,8,9,10]
    );
  }
//   console.log("🚀 ~ Task ~ array:", array);

  let num = array.map((num) => {
    return num;
  });
//   console.log("🚀 ~ Task ~ num:", num);

  return (
    <div className="flex justify-center flex-col items-center text-center gap-2 mt-100 bg-red-400">
      <h1>Task using useState</h1>
      <button className="border-2 p-2" onClick={add}>Add Elements</button>
      <p>Array: {num}</p>
    </div>
  );
}
