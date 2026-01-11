import { Button } from '@/components/ui/button';
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Cart } from './Cart';

export default function ApiTask() {

  let [products,setProducts] = useState([]);

const callApi = async () => {
  try{
    let response = await axios.get("https://fakestoreapi.com/products");
    console.log("🚀 ~ callApi ~ response:", response)
    setProducts(response.data)
    // toast.success("API call successful!");
  }catch(error){
  console.log("🚀 ~ callApi ~ error:", error)
  }
};

const removeProduct = () => {
  setProducts([]);
}

  return (
    <div>
      <div>
        <div className='flex justify-center gap-5 mt-3.5'>
 <Button type="button" onClick={()=> callApi()}>Call Api and Reload Product</Button>
        <Button type="button" onClick={() => removeProduct()}>Remove All products</Button>
        </div>
       
        <div style= {{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "100px",
          marginLeft: "100px",
          marginRight: "100px",
        }}>
          {
          products.map((e,i)=>{
            return <Cart key={i} name={e}/>
          })
        }
        </div>
        
      </div>
    </div>
  )
}

