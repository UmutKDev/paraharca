import React from "react";
import ProductItem from "./ProductItem";

const Products = ({
  total,
  money,
  products,
  basket,
  setBasket,
}: {
  total: number;
  money: number;
  products: Product[];
  basket: Basket[];
  setBasket: React.Dispatch<React.SetStateAction<Basket[]>>;
}) => {
  return (
    <div className="h-auto max-h-auto my-8">
      <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {products.map((product) => (
          <div
            key={product.id.toString()}
            className="max-w bg-white drop-shadow-2xl rounded-lg shadow-mdborder-gray-400 hover:scale-105 hover:z-10 ease-in-out transition delay-75"
          >
            <ProductItem
              total={total}
              money={money}
              basket={basket}
              setBasket={setBasket}
              product={product}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
