"use client";
import { useState, useEffect } from "react";


const useGetProductByid = (id: any) => {
    const [productInfo, setProductInfo] = useState({name: "", 
    category: "",
    image: "",
    price: 0,
    description: "none",
    discount: 0});
    useEffect(() =>{
        const fetchData = async () => {
            const response : any = await fetch('http://localhost:3000/api/product',{method: 'GET'})
            const data = await response.json();
            setProductInfo(data[0]);
            //fetch url: "http://localhost:3000/cards/rugrats-twins-birthday-invitation/data.json
            // const response1 : any = await fetch('./data.json',{method: 'GET'})
            // console.log("response1", response1)
            // const data1 = await response1.json();
            // console.log("data1", data1)
            // setDatos(data);
        }
        fetchData();
      },[])
  return {
    productInfo
  }
}

export default useGetProductByid