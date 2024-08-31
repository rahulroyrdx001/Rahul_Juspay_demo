import React, { useEffect } from "react";
import gsap from "gsap";
import style from "./style/nav.module.css";

export default function Navbar() {
  useEffect(() => {
    // GSAP animation that starts on component load
    gsap.from("#logo", {
      opacity: 0,
      rotate:360,
      x: 30,
      duration: 1.2,
      delay: 0,
      
    });
    gsap.from(".lmenu", {
      opacity: 0,
      y: 20,
      duration: 0.7,
      delay: 0,
      stagger: 0.5,
    });
  }, []);
  return (
    <div className={style.nav}>
      <div className={style.leftmenu}>
        <div
          id="logo"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            className={style.responsivsvg}
            width="99"
            height="100"
            viewBox="0 0 33 34"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5135 33.4094C15.7272 33.4313 14.9628 33.3657 14.1765 33.2563C12.0579 32.9499 10.0704 32.2717 8.23573 31.1558C4.1733 28.7053 1.57422 25.1389 0.504005 20.4566C0.263754 19.4064 0.154549 18.3342 0.154549 17.2621C0.132708 12.9737 1.53053 9.21038 4.36987 6.01593C6.8379 3.25908 9.89565 1.57434 13.4994 0.874186C14.5041 0.677268 15.5088 0.567869 16.5135 0.611629C16.5135 2.25261 16.5135 3.87171 16.5135 5.5127C16.4698 5.53458 16.4261 5.55646 16.3824 5.60022C15.7927 6.01593 15.203 6.45353 14.6352 6.913C13.3465 7.96323 12.1234 9.0791 11.0969 10.4138C9.72092 12.186 8.8036 14.1333 8.67255 16.4307C8.60703 17.5247 8.73807 18.5968 9.08753 19.6252C9.93933 22.1851 12.5821 24.8325 16.2951 24.8982C16.5135 24.8982 16.5572 24.9419 16.5572 25.1826C16.5353 26.2985 16.5353 28.5302 16.5353 28.5302C16.5353 28.5302 16.5353 28.6615 16.5353 28.7271C16.5135 30.2806 16.5135 31.8341 16.5135 33.4094Z"
              fill="#0099FF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5132 5.4906C16.5132 5.4906 16.5132 2.23052 16.5132 0.589532C17.4087 0.567653 18.2823 0.655172 19.156 0.78645C20.7941 1.04901 22.3666 1.53036 23.8518 2.29615C26.9314 3.89338 29.3557 6.16887 30.9938 9.2758C31.933 11.0699 32.5445 12.9735 32.7848 14.9645C33.0687 17.3057 32.8503 19.6249 32.1514 21.8785C31.3433 24.4385 29.9891 26.6921 28.089 28.5956C25.7738 30.893 23.0218 32.3808 19.833 33.0591C18.741 33.2779 17.6271 33.4092 16.5132 33.3873C16.5132 31.812 16.5132 30.2585 16.5132 28.6832C16.5132 28.6175 16.5132 28.5081 16.5132 28.5081C16.5132 28.5081 16.5787 28.4644 16.6006 28.4425C18.3042 27.2391 19.9204 25.9263 21.3182 24.351C22.2356 23.3226 23.0218 22.2286 23.5679 20.9596C24.3323 19.1655 24.6381 17.3276 24.2449 15.3803C23.546 11.8357 20.3791 9.18828 16.7316 9.10076C16.4914 9.10076 16.5132 8.90385 16.5132 8.90385V5.4906Z"
              fill="#0561E2"
            />
          </svg>
        </div>
        <div style={{ position: "relative", left: "-8%" }}>JUSPAY</div>
      </div>
      <div className={style.rightmenu}>
        <div className={style.menuleft}>
          <div className="lmenu">About us</div>
          <div className="lmenu">Docs</div>
          <div className="lmenu">Integrations</div>
        </div>
        <div className={style.menuright}>
          <div>
            <img
              src="https://juspay.io/global/flags/globe-dark.png"
              alt="globe"
            />
          </div>
          <div>Contact us</div>
        </div>
        <div className={style.hamburger}>
          <img
            src="https://juspay.io/_astro/hamburger-icon.DmpCzxrL.svg"
            alt="hamburger-icon"
          />
        </div>
      </div>
    </div>
  );
}
