import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";

const App = () => {
  let limit = 10;

  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(0);
  console.log(page);

  const getAllProducts = async () => {
    try {
      let res = await axios.get(
        `https://dummyjson.com/products?limit= ${limit}&skip=${page*limit}`,
      );
      setProducts(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [page]);

  let totalPages = Math.ceil(products?.total /limit)
   

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {products?.products.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      <div className="flex gap-5 items-center">
        <button
        disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="p-3 bg-red-700 text-white rounded-xl"
        >
          Prev
        </button>
        <p>page {page+1} of {totalPages} </p>
        <button
        disabled={page >= totalPages-1}
          onClick={() => setPage(page + 1)}
          className="p-3 bg-red-700 text-white rounded-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
