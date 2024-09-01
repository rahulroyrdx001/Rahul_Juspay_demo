import React, { useEffect } from "react";
import gsap from "gsap";
import style from "./style/nav.module.css";

export default function Navbar() {
  // function split_text() {
  //   var h4 = document.querySelector("h4");
  //   var h4text = h4.textContent;
  //   var split_text = h4text.split("");
  //   var halfvalue = split_text.length / 2;

  //   var clutter = "";
  //   split_text.forEach((e, idx) => {
  //     if (idx < halfvalue) {
  //       clutter += `<span classname="a">${e}</span>`;
  //     } else {
  //       clutter += `<span classname="b">${e}</span>`;
  //     }
  //   });
  //   h4.innerHTML = clutter;
  // }

  useEffect(() => {
    gsap.from("#logo", {
      opacity: 0,
      rotate: 360,
      x: 30,
      duration: 1.2,
      delay: 0,
    });
    gsap.from(".lmenu", {
      opacity: 0,
      y: 20,
      duration: 0.7,
      delay: 0,
      stagger: 0.3,
    });
    gsap.from(".l", {
      opacity: 0,
      y: 30,
      duration: 0.4,
      delay: 0.3,
      stagger: -0.2,
    });
    gsap.from(".r", {
      opacity: 0,
      y: 30,
      duration: 0.4,
      delay: 0.3,
      stagger: 0.2,
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
        <div
          style={{
            width: "150%",
            height: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            position: "relative",
            left: "-8%",
          }}
        >
          <h4>
            <span className="l">J</span>
            <span className="l">U</span>
            <span className="l">S</span>
            <span className="r">P</span>
            <span className="r">A</span>
            <span className="r">Y</span>
          </h4>
        </div>
      </div>
      <div className={style.rightmenu}>
        <div className={style.menuleft}>
          <div id={style.lmenu} className="lmenu">
            About us
          </div>
          <div id={style.lmenu} className="lmenu">
            Docs
          </div>
          <div id={style.lmenu} className="lmenu">
            Integrations
          </div>
        </div>
        <div className={style.menuright}>
          <div className="lmenu">
            <svg
              className={style.globimg}
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.22114"
                y="0.652778"
                width="50.6944"
                height="50.6944"
                rx="25.3472"
                stroke="#232323"
                stroke-width="1.30556"
              />
              <path
                d="M26.568 14.3328C33.0113 14.3328 38.2347 19.5561 38.2347 25.9994C38.2347 32.4427 33.0113 37.6661 26.568 37.6661C20.1247 37.6661 14.9014 32.4427 14.9014 25.9994C14.9014 19.5561 20.1247 14.3328 26.568 14.3328ZM31.2397 27.0234C30.8367 26.4116 30.546 25.9698 29.4406 26.145C27.3517 26.4766 27.1201 26.8422 27.0204 27.4432L26.9922 27.6261L26.9639 27.8191C26.8499 28.616 26.8542 28.9175 27.2201 29.302C28.6961 30.8507 29.5804 31.9669 29.8482 32.6198C29.979 32.9392 30.3153 33.9037 30.0839 34.8576C31.5114 34.2905 32.7696 33.3882 33.7609 32.248C33.8895 31.8119 33.9823 31.2688 33.9823 30.6099V30.4878C33.9823 29.4116 33.9823 28.9208 33.2217 28.4861C32.9007 28.3037 32.6612 28.1939 32.4693 28.1069C32.0409 27.9121 31.7572 27.7841 31.3745 27.2243C31.3288 27.1577 31.2843 27.0912 31.2397 27.0234ZM26.568 16.4716C23.8644 16.4716 21.4238 17.5978 19.6896 19.4065C19.8961 19.5499 20.076 19.7514 20.1995 20.0291C20.4375 20.5631 20.4375 21.1125 20.4375 21.5983C20.4371 21.9817 20.4365 22.3445 20.5596 22.608C20.7282 22.9677 21.4538 23.1204 22.0944 23.2547C22.3233 23.3029 22.5593 23.3521 22.774 23.4115C23.3644 23.5755 23.8212 24.1053 24.1873 24.5308C24.3392 24.708 24.5636 24.9684 24.6761 25.0331C24.7347 24.991 24.923 24.787 25.0162 24.4518C25.0872 24.1966 25.067 23.9691 24.9626 23.8461C24.3103 23.0763 24.3458 21.5932 24.5474 21.0469C24.8649 20.1848 25.8569 20.2484 26.582 20.2956C26.8525 20.313 27.1077 20.3297 27.298 20.3058C28.0243 20.2147 28.2476 19.1107 28.4055 18.8944C28.7463 18.4275 29.7888 17.7244 30.4365 17.2897C29.2543 16.7639 27.9453 16.4716 26.568 16.4716Z"
                fill="#F5F5F5"
              />
            </svg>
            <div className={style.insideglob}>
              <div className={style.globtopmenu}>REGION</div>
              <div className={style.globbottommenu}>
                <div className={style.globreg}>
                  <img
                    src="https://juspay.io/global/flags/region/sea.svg"
                    alt="Southeast Asia map"
                  ></img>
                  <p>Southeast Asia (SEA)</p>
                </div>
                <div className={style.globreg}>
                  <img
                    src="https://juspay.io/global/flags/region/latam.svg"
                    alt="Latin America map"
                  ></img>
                  <p>Latin America (LATAM)</p>
                </div>
                <div className={style.globreg}>
                  <img
                    src="https://juspay.io/global/flags/region/north-america.svg"
                    alt="North Americ map"
                  ></img>
                  <p>North America</p>
                </div>
                <div className={style.globreg}>
                  <img
                    src="https://juspay.io/global/flags/region/europe.svg"
                    alt="Europe map"
                  ></img>
                  <p>Europe</p>
                </div>
                <div className={style.globreg}>
                  <img
                    src="https://juspay.io/global/flags/region/india.svg"
                    alt="India map"
                  ></img>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lmenu" style={{ color: "#0099FF" }}>
            Contact us
          </div>
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
