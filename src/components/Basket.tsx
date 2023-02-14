import React from "react";
import BasketItem from "./BasketItem";
import { NumericFormat } from "react-number-format";

type Props = {
  basket: Basket[];
  total: number;
  products: Product[];
};

const Basket = ({ basket, total, products }: Props) => {
  return (
    <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-lg">
              Ürün
            </th>
            <th scope="col" className="px-6 py-3 text-lg">
              Adet
            </th>
            <th scope="col" className="px-6 py-3 text-lg">
              Birim Fiyat
            </th>
            <th scope="col" className="px-6 py-3 text-lg">
              Toplam Fiyat
            </th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item, index) => (
            <tr
              key={item.id.toString()}
              className="border-b odd:bg-white even:bg-gray-50"
            >
              <BasketItem
                item={item}
                product={products.find((p) => p.id === item.id) as Product}
              />
            </tr>
          ))}
        </tbody>
        <tfoot className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr className="border-b odd:bg-white even:bg-gray-50">
            <th colSpan={2}></th>
            <th scope="row" className="text-lg px-6 py-4">
              Toplam
            </th>
            <th scope="row" className="text-lg px-6 py-4">
              <NumericFormat
                thousandSeparator={true}
                prefix={"$"}
                displayType={"text"}
                value={total}
              />
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Basket;
