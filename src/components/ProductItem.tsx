import React from "react";
import { NumericFormat } from "react-number-format";

type Props = {
  product: Product;
  total: number;
  money: number;
  basket: Basket[];
  setBasket: React.Dispatch<React.SetStateAction<Basket[]>>;
};

const Product = ({ product, total, money, basket, setBasket }: Props) => {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    // ürün daha önce eklenmiş
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    if (currentBasket) {
      const basketWithoutCurrent = basket.filter(
        (item) => item.id !== product.id
      );
      currentBasket.amount -= 1;
      if (currentBasket.amount === 0) {
        setBasket([...basketWithoutCurrent]);
      } else {
        setBasket([...basketWithoutCurrent, currentBasket]);
      }
    }
  };

  return (
    <>
      <img
        src={product.image}
        className="w-full rounded-t-lg"
        alt={product.title}
        draggable={false}
      />
      <div className="px-5 pb-5">
        <h5 className="text-2xl font-semibold tracking-tight text-gray-600 mt-3">
          {product.title}
        </h5>
        <span className="text-base font-bold text-gray-400">
          <NumericFormat
            value={product.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </span>
        <hr className="my-4 " />
        <div className="flex justify-between items-center gap-3">
          {basketItem && (
            <button
              disabled={!basketItem}
              onClick={removeBasket}
              className="transition ease-in-out w-full text-gray-900 bg-red-300 hover:bg-red-500 hover:text-white focus:outline-none font-medium rounded-lg text-xs px-5 py-3 text-center xl:px-5 xl:2.5 xl:text-base"
            >
              Ürünü Sat
            </button>
          )}
          {basketItem && (
            <span className="transition ease-in-out text-gray-900 bg-gray-300 focus:outline-none font-medium rounded-lg text-xs px-5 py-3 text-center lx:px-5 xl:2.5 xl:text-base">
              {basketItem.amount}
            </span>
          )}
          <button
            disabled={total + product.price > money}
            onClick={addBasket}
            className={`${
              total + product.price > money
                ? "disabled:opacity-50 hover:bg-green-300 hover:text-gray-900"
                : "hover:bg-green-500 hover:text-white"
            }
            transition ease-in-out w-full text-gray-900 bg-green-300 focus:outline-none font-medium rounded-lg text-xs px-5 py-3 text-center xl:px-5 xl:2.5 xl:text-base`}
          >
            {basketItem ? "Ürünü Ekle" : "Satın Al"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
