import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const Infinite = () => {
  let limit = 100;

  let { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => getAllProducts(limit, pageParam),
      initialPageParam: 0,

      getNextPageParam: (lastPage, allPage) => {
        let loadedData = allPage.length * limit;
        //   console.log("allpagelength",allPage.length);

        if (loadedData < lastPage.total) return loadedData;
        return undefined;
      },
    });

  if (isPending) return "Loading...";

  console.log(data);

  let allProducts = data?.pages?.flatMap((val) => val.products) ?? [];
  return (
    <div className="flex flex-col gap-6 items-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {allProducts.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load mores"}
        </button>
      )}
    </div>
  );
};

export default Infinite;
