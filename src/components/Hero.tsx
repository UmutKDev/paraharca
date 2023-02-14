import dollar_wing from "public/dollar_wing.gif";

function Hero() {
  return (
    <div className="md:h-96 w-full rounded-3xl bg-gradient-to-r from-lime-400 to-green-500 md:justify-items-between md:grid md:grid-cols-2">
      <div className="md:row-span-8 md:p-16 p-10">
        <p className="md:text-4xl text-3xl text-white font-semibold">
          #Paraharca
        </p>
        <h2 className="md:text-xl text-white mt-5">
          Paranızı Çarçur Edeceğiniz Güzel Bir Uygulama :)
        </h2>
      </div>
      <div className="row-span-8 flex items-center justify-center">
        <img src={dollar_wing.src} className="lg:w-72 w-44" alt="paraharca" />
      </div>
    </div>
  );
}

export default Hero;
