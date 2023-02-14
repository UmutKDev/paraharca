import React from "react";

const Footer = () => {
  return (
    <footer className="z-10 w-full bg-white h-28 border-t-2 drop-shadow-2xl flex justify-center pt-4">
      <p>
        <a
          className="transition ease-in-out delay-50 rounded-lg border-2 p-1 hover:bg-cyan-500 hover:text-white"
          href="https://www.umutk.me"
        >
          Umut K.
        </a>{" "}
        Tüm Hakları Saklıdır.
      </p>
    </footer>
  );
};

export default Footer;
