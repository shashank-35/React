import { useEffect, useState } from "react";

export function Effect(params) {
  let [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("call only one time when page load because of pass blank dependency");
  // },[]);

  // useEffect(() => {
  //   console.log("always call because of not pass any depedency or blanck array dependency");
  // });

  useEffect(()=>{
    if(count===0) {
      return;
    }
    if(count % 10 === 0) {
window.alert(`count change :${count}`)
    }
    
  },[count])

  function click() {
    setCount(count + 1);
    console.log("🚀 ~ Effect ~ count:", count);
  }

  return (
    <dir className="flex justify-center align-center flex-col text-center">
      <p className=""> Hooks -UseEffect</p>
      <h1>Count - {count}</h1>
      <button className="gap-2" type="button" onClick={click}>
        click
      </button>
    </dir>
  );
}
