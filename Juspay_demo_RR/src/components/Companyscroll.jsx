import React from "react";
import Marquee from "react-fast-marquee";
import style from "./style/marquee.module.css";

export default function Companyscroll() {
  return (
    <div className={style.main}>
      <Marquee gradient={true} gradientColor={"#17191B"} speed={190}>
        <img
          src="https://juspay.io/icons/partners/agoda_white_expand.svg"
          alt="agoda"
        />
        <img
          src="https://juspay.io/icons/partners/amazon_white.svg"
          alt="amazon"
        />
        <img
          src="https://juspay.io/icons/partners/burger_king_white_expand.svg"
          alt="burgerking"
        />
        <img
          src="https://juspay.io/icons/partners/flipkart_walmart_white_expand.svg"
          alt="flipkart"
        />
        <img
          src="https://juspay.io/icons/partners/google_white.svg"
          alt="google"
        />
        <img
          src="https://juspay.io/icons/partners/indigo_white_expand.svg"
          alt="indigo"
        />
        <img
          src="https://juspay.io/icons/partners/macdonalds_white_expand.svg"
          alt="macdonalds"
        />
        <img
          src="https://juspay.io/icons/partners/microsoft_white.svg"
          alt="microsoft"
        />
        <img
          src="https://juspay.io/icons/partners/one_plus.svg"
          alt="oneplus"
        />
        <img
          src="https://juspay.io/icons/partners/starbucks_white_expand.svg"
          alt="starbuks"
        />
      </Marquee>
    </div>
  );
}
