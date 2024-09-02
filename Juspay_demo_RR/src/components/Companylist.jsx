import React from "react";
import style from "../components/style/companylist.module.css";
export default function Companylist() {
  return (
    <div className={style.companymain}>
      <div classname={style.marquee_container}>
        <div className={style.marquee}>
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
          {/* <img
            src="https://juspay.io/icons/partners/starbucks_white_expand.svg"
            alt="starbuks"
          /> */}
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
        </div>
      </div>
      <div className={style.videoelement}>
        <video
          style={{ overflow: "hidden" }}
          height={"100%"}
          width={"100%"}
          loop={true}
          autoPlay={true}
          muted
        >
          <source src="https://juspay.io/global/global-second-fold.webm"></source>
        </video>
      </div>
    </div>
  );
}
