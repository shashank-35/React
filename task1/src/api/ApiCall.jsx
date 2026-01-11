import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

// import { toast } from "sonner"

export default function ApiCall() {
  let [products, setProducts] = useState([]);
  const callApi = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      console.log("🚀 ~ ApiCall ~ data:", response.data);
      toast.error("API call successful!");
      setProducts(response.data);
    } catch (error) {
      console.log("🚀 ~ callApi ~ error:", error);
    }
  };

  const addProductHandler = async () => {
    try {
      let payload = { title: 55, price: 29.99 };
      let response = await axios.post(
        "https://fakestoreapi.com/products",
        payload
      );
    //   toast("Event has been created")
      console.log("🚀 ~ addProductHandler ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ addProductHandler ~ error:", error);
    }
  };

  return (
    <div>
      <Button onClick={() => callApi()}>Call API</Button>
      {products.map((item) => {})}

      <Button onClick={() => addProductHandler()}>Add Product</Button>
    </div>
  );
}

/*

[{}]

patch vs put

post put delete get patch

data pass 
 body
 url params
 headers
 query

post -> create data -> body 
put -> update data -> body
delete -> delete data -> body
get -> get data -> can't pass body


post men

base url 
endpoint
what should pass 



base url + endpoint


*/
