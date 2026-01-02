import {state, useState} from "react"


export function State(){
let [shashank, setShashank] = useState(0);
function inc(){
    setShashank(shashank+1);
}
    return(
        <div className="">
        <div className="flex justify-center align-middle">
            <h3>Count: {shashank}</h3>
        <button className="border-2 p-1 m-1" onClick={inc}>increment</button>
        </div>
        </div>
        
    )
}