import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "http://product-app-elb-836248400.us-west-2.elb.amazonaws.com/api/product"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
};

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="container mx-auto p-8">
        <div className="flex justify-evenly">
      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
      <div className="">
        <Link className="text-xl text-center p-4  bg-blue-500 text-white rounded hover:bg-blue-700" href="/product/createProduct">
          Create Product
        </Link>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.name} className="border rounded-lg p-4 shadow-lg">
            <img
              className="w-full h-48 object-cover mb-4"
              src={product.imageUrl}
              alt={product.name}
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-4">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
