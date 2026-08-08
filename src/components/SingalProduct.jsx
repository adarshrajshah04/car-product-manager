import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingalProduct = () => {
 const {id} = useParams();
  const [products, setproducts] = useState({});


useEffect(() => {
    axios
      .get(`https://6a74210e15e0453fe1b4664a.mockapi.io/Car/${id}`)
      .then((res) => {
        console.log(res.data);
        setproducts(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
 
}, [id])

const {name,description,image,price}=products


  return (
    <div className=" px-20 pt-30 py-20 min-h-screen bg-gray-400">
     
          <div
          className=" h-screen  rounded-3xl overflow-hidden ">

             <img src={image} alt="" 
          className="w-full h-full object-cover "/>
          </div>
          <p className="mt-4 text-4xl font-bold  " >{name}</p>
          <p className=" mt-2 text-xl font-[550]">{description}</p>
          <p className="font-medium">{price}/.</p>
        
     
    </div>
  );
};

export default SingalProduct;
