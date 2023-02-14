"use client";
import React, { useState, useEffect } from "react";
import TotalMoney from "@/components/TotalMoney";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Basket from "@/components/Basket";
import SweetAlert from "@/components/SweetAlert";
import { Products as ProductsData } from "@/data/products";

const Home = () => {
  const [products, setProducts] = useState<Product[]>(ProductsData);
  const [money, setMoney] = useState(128000000000);
  const [basket, setBasket] = useState<Basket[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(
      basket.reduce((total, item) => {
        const product = products.find((product) => product.id === item.id);
        return total + (product ? product.price * item.amount : 0);
      }, 0)
    );
  }, [basket, products]);

  return (
    <main className="space-y-8 w-9/12">
      <Hero />
      <TotalMoney total={total} money={money} />
      <Products
        total={total}
        money={money}
        products={products}
        basket={basket}
        setBasket={setBasket}
      />
      <Basket total={total} basket={basket} products={products} />
      <SweetAlert basket={basket} money={money} setBasket={setBasket} total={total} />
    </main>
  );
};

export default Home;
