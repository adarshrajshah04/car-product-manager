import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




export default function Product() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6a74210e15e0453fe1b4664a.mockapi.io/Car")
      .then((res) => {
        // console.log(res.data);
        setproducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-gray-500 min-h-screen pt-10">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link  to={`/product/${product.id}`} className="group">
              <img
               
                src={product.image}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              
              <h3 className="mt-4 text-sm text-gray-900">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
              <p className="mt-1 text-[14px] font-medium text-gray-900">
                {product.description}
              </p>
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
