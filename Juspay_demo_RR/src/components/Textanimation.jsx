import React, { useEffect } from "react";
import gsap from "gsap";
import style from "../components/style/textanimation.module.css";

export default function Textanimation() {
  useEffect(() => {
    gsap.from("#box", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0,
      stagger: 0.1,
    });
    gsap.from("#box1", {
      
      y: 30,
      duration: 1,
      delay: 0,
      stagger: -0.1,
    });
    gsap.from("#upptext", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0,
    });
  }, []);

  return (
    <div className={style.textanimation_main}>
      <div id="upptext" className={style.uppertext}>
        {" "}
        Payments designed for{" "}
      </div>
      <div className={style.textanimation}>
        <div className={style.global}>
          <div id="box" className={style.box}>
            <div>₹</div>
            <div>₹</div>
            <div>R</div>
            <div>G</div>
          </div>
          <div id="box" className={style.box}>
            <div>£</div>
            <div>$</div>
            <div>₹</div>
            <div>L</div>
          </div>
          <div id="box" className={style.box}>
            <div>c</div>
            <div>¥</div>
            <div>€</div>
            <div>O</div>
          </div>
          <div id="box" className={style.box}>
            <div>¥</div>
            <div>£</div>
            <div>₣</div>
            <div>B</div>
          </div>
          <div id="box" className={style.box}>
            <div>¥</div>
            <div>R</div>
            <div>₹</div>
            <div>A</div>
          </div>
          <div id="box" className={style.box}>
            <div>€</div>
            <div>€</div>
            <div>₹</div>
            <div>L</div>
          </div>
        </div>
        <div className={style.outcome}>
          <div id="box1" className={style.box1}>
            <div>£</div>
            <div>$</div>
            <div>₹</div>
            <div>O</div>
          </div>
          <div id="box1" className={style.box1}>
            <div>¥</div>
            <div>£</div>
            <div>₣</div>
            <div>U</div>
          </div>
          <div id="box1" className={style.box1}>
            <div>₹</div>
            <div>₹</div>
            <div>R</div>
            <div>T</div>
          </div>
          <div id="box1" className={style.box1}>
            <div>¥</div>
            <div>£</div>
            <div>₣</div>
            <div>C</div>
          </div>
          <div id="box1" className={style.box1}>
            <div>¥</div>
            <div>R</div>
            <div>₹</div>
            <div>O</div>
          </div>
          <div id="box1" className={style.box1}>
            <div>₹</div>
            <div>₹</div>
            <div>R</div>
            <div>M</div>
          </div>
          <div id="box1" className={style.box1}>
            <div>¥</div>
            <div>£</div>
            <div>₣</div>
            <div>E</div>
          </div>
          <div id="box1" className={style.box1}>
            <div>¥</div>
            <div>R</div>
            <div>₹</div>
            <div>S</div>
          </div>
        </div>
      </div>
    </div>
  );
}
