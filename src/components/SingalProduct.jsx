import React from "react";
import { useParams } from "react-router-dom";

const SingalProduct = () => {
  const params = useParams();

  return (
    <div>
      <h1 className=" pt-25 text-2xl">Single Product {params.id}</h1>
    </div>
  );
};

export default SingalProduct;