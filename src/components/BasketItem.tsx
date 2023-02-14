import React from "react";
import { NumericFormat } from "react-number-format";

type Props = {
  item: Basket;
  product: Product;
};

const BasketItem = ({ item, product }: Props) => {
  return (
    <>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {product.title}
      </th>
      <td className="px-6 py-4">{item.amount}</td>
      <td className="px-6 py-4">
        <NumericFormat
          thousandSeparator={true}
          prefix={"$"}
          displayType={"text"}
          value={product.price}
        />
      </td>
      <td className="px-6 py-4">
        <NumericFormat
          thousandSeparator={true}
          prefix={"$"}
          displayType={"text"}
          value={product.price * item.amount}
        />
      </td>
    </>
  );
};

export default BasketItem;
