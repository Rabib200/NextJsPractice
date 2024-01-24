"use client";
import SearchResCar from "./components/SearchResCar";
import SearchSidebar from "./components/SearchSidebar";

import { useState } from "react";

export interface Product {
  productName: string;
  productReview: string;
  productType: string;
  productLoaction: string;
}
export interface ProductList {
  products: Product[];
}

export default function Home() {
  const [product, setProduct] = useState<Product[]>([
    {
      productName: "Product A",
      productReview: "Bhai shera food",
      productType: "BANGALI-BHAI",
      productLoaction: "Dhaka",
    },
    {
      productName: "Product B",
      productReview: "Bhai eta bhallagenai",
      productType: "BRITISH-BHAI",
      productLoaction: "England",
    },
  ]);

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        {/* <SearchNavbar /> */}
        {/* HEADER */}
        {/* <SearchHeader/> */}
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          {/* SEARCH SIDE BAR */}
          <SearchSidebar />
          {/* SEARCH SIDE BAR */}
          <div className="w-5/6">
            {/* RESAURANT CAR */}
            <SearchResCar products={product} />
            {/* RESAURANT CAR */}
          </div>
        </div>
      </main>
    </main>
  );
}
