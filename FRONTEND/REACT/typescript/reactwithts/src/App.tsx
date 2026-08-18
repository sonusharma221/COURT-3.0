import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "./type";
import ProductsCard from "./ProductsCard";

const App = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  let getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    console.log(res);
    setProductData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productData.map((val) => (
          <ProductsCard key={val.id} product={val} />
        ))}
      </div>
    </div>
  );
};

export default App;
