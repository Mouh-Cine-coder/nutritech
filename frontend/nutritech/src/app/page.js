'use client'
import Image from "next/image";
import Header from "../../Components/Header";
import { HeaderSimple } from "../../Components/HeaderSimple";
import { Grid, Skeleton, Container, Flex } from '@mantine/core';
import { useEffect, useState } from "react";
import ProdcutCard from "../../Components/ProdcutCard";



export default function Home() {
  const [products, setProducts] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {

        if(data != null) {
          setProducts(data)
        }

      })
  }, [])


  console.log(products);
  // const cards = products.map((product) =>  <ProdcutCard product={product} />)
  // console.log(cards);
  

  return (
    <main className="">
      <HeaderSimple />
      <div className="flex p-7 gap-4 ">
        
      </div>
    </main>
  );
}
