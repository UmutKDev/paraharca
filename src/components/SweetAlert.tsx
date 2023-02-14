import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { NumericFormat } from "react-number-format";
const MySwal = withReactContent(Swal);

type Props = {
    total: number;
    money: number;
    basket: Basket[];
    setBasket: React.Dispatch<React.SetStateAction<Basket[]>>;
  };

const SweetAlert = ({ basket, total, money, setBasket }: Props) => {
  const SweetComplateShop = () => {
    return (
      <>
        {!basket.length
          ? MySwal.fire({
              title: "Sepetiniz Boş!",
              text: "İlk önce bir şeyler almaya ne dersiniz?",
              icon: "error",
              confirmButtonText: "Tamam",
            })
          : MySwal.fire({
              title: "Ürünlerinizi Satın Alın",
              text: "Ürünlerinizi satın almak istediğinizden emin misiniz?",
              icon: "question",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Evet, Satın Al!",
              cancelButtonText: "Hayır, İptal Et!",
            }).then((result) => {
              if (result.isConfirmed) {
                MySwal.fire({
                  title: "Tebrikler!",
                  icon: "success",
                  width: 800,
                  showCloseButton: true,
                  showConfirmButton: false,
                  html: <SweetTable />,
                }).then((result) => {
                  if (result.isConfirmed) {
                    MySwal.fire({
                      title: "Tebrikler!",
                      icon: "success",
                      showCloseButton: true,
                      showCancelButton: false,
                      width: 800,
                    })
                  } else if (result.isDenied) {
                    MySwal.fire({
                      showCloseButton: true,
                      showCancelButton: false,
                      showConfirmButton: false,
                      confirmButtonText: "Anladım!",
                      width: 800,
                    });
                  }
                });
              }
            })}
      </>
    );
  };

  const SweetClearShop = () => {
    return (
      <>
        {!basket.length
          ? MySwal.fire({
              title: "Sepetiniz Boş!",
              text: "İlk önce bir şeyler almaya ne dersiniz?",
              icon: "error",
              confirmButtonText: "Tamam",
            })
          : MySwal.fire({
              title: "Sepetinizi Boşalt",
              text: "Sepetinizi boşaltmak istediğinizden emin misiniz?",
              icon: "question",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Evet, Boşalt!",
              cancelButtonText: "Hayır, İptal Et!",
            }).then((result) => {
              if (result.isConfirmed) {
                {
                  setBasket([]);
                }
                MySwal.fire({
                  title: "Sepetiniz Boşaltıldı!",
                  icon: "success",
                  showCloseButton: true,
                  showCancelButton: false,
                  showConfirmButton: true,
                  confirmButtonText: "Anladım!",
                });
              }
            })}
      </>
    );
  };

  const SweetTable = () => {
    return (
      <>
        <div>
          <p className="mb-5 md:text-base text-sm">
            128 Milyardan{" "}
            <strong>
              <NumericFormat
                value={total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </strong>{" "}
            harcandı,{" "}
            <strong>
              <NumericFormat
                value={money - total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </strong>{" "}
            Kaldı.
          </p>
          <p className="mt-5 md:text-base text-sm">
            Harcamınızı Başarıyla Tamamladınız
          </p>
        </div>
      </>
    );
  };

  return (
    <div className="gap-3 fixed flex items-center justify-center h-14 bottom-0 left-0 right-0 z-20 w-full hover:bg-green-600 text-sm md:text-base text-white font-semibold bg-gradient-to-r from-lime-400 to-green-500">
      <button
        className="transition duration-75 border-blue-300 ease-in-out border-2 p-1 rounded-lg flex items-center justify-center bg-blue-500 hover:bg-blue-600"
        onClick={() => SweetComplateShop()}
      >
        <FaShoppingCart />
        {"\u00A0"}Harcamayı Bitir!
      </button>
      <button
        className="transition duration-75 border-red-300 ease-in-out border-2 p-1 rounded-lg flex items-center justify-center bg-red-500 hover:bg-red-600"
        onClick={() => {
          SweetClearShop();
        }}
      >
        <FaTrashAlt />
        {"\u00A0"}Sepeti Temizle!
      </button>
    </div>
  );
};

export default SweetAlert;
