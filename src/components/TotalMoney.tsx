import React from "react";
import { NumericFormat } from "react-number-format";

const TotalMoney = ({ total, money }: any) => {
  return (
    <div className="md:h-20 h-16 w-full flex flex-row bg-white drop-shadow-2xl rounded-xl sticky top-0 z-20">
      <div className="flex items-center justify-center rounded-r-2xl rounded-md bg-gradient-to-r from-lime-400 to-green-500 md:w-1/12 w-3/12">
        <p className="md:text-4xl text-3xl text-white font-semibold">$</p>
      </div>
      <div className="w-full flex items-center justify-center">
        <NumericFormat
          className="md:text-3xl md:h-16 bg-white border text-gray-900 rounded-lg block md:w-1/2 w-9/12 p-2.5 text-center"
          placeholder="Paranızı Girin"
          value={money - total}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
};

export default TotalMoney;
