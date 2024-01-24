
import { useState } from "react";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { PRICE, PrismaClient } from "@prisma/client";


export interface Location{
  id: number;
  name: String;
}

export interface Cuisine{
  id: number;
  name: String;
}



export interface Product {
 id: number;
 name: String;
 main_image: string;
 location: Location;
 cuisine: Cuisine;
 price: PRICE;
 slug: string;
}
export interface ProductList {
  products: Product[];
}

const prisma = new PrismaClient();

const fetchRestaurants = async()=>{
  const restaurants = await prisma.restaurant.findMany({
    select:{
      id:true,
      name:true,
      main_image:true,
      cuisine: true,
      location: true,
      price: true,
      slug: true
    }
  });
  return restaurants;
}


export default async function Home() {
 const restaurants = await fetchRestaurants();
 console.log("restaurant", restaurants);

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        {/* <Navbar/> */}
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
          <Header />
          {/* HEADER */}
          {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <RestaurantCard products={restaurants} />
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
