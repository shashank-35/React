import { CheckCheck, Trash } from 'lucide-react';
import React, { useState } from 'react'

export  function Todo4() {
    let [fruitList, setfruitList] = useState();
    let [fruitArray, setfruitArray] = useState([]);

    const addfruit = () => {
        setfruitArray([...fruitArray, fruitList]);
        setfruitList("");
    }
    const ChangeHandler = (e) => {
        setfruitList(e.target.value);
    }

    const deletefruit = (index) => {
        const filteredData = fruitArray.filter((e,i) => {
            return i !== index
        })
        setfruitArray(filteredData);
    }
    const Check = (index) => {
        const conformDelete = window.confirm("Are you sure to delete this todo?");
        if (conformDelete === true) {
            deletefruit(index);
        }
    }
    const CheckCheck = () => {
        if(fruitList == ""){
            window.alert("Please enter a Todo list.");
        }else{
            addfruit();
        }  
    }

  return (
    <div>
        <p>Todo List</p>
        <div>
        <input value={fruitList} type="text" name="text" onChange={(e) => ChangeHandler(e)} className='border-2 m-10'/>
        <button type="button" className='border-2 ' onClick={()=> CheckCheck()}>Add Todo</button>
        </div>


        <div>
            {
                fruitArray.map((e,i) => {
                    return(
                        <div key={i}>
                            <li>{e}</li>
                            <Trash onClick={() => Check(i)} />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
