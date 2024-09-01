import React, { useEffect } from "react";
import gsap from "gsap";
import style from "../components/style/ptext.module.css";

export default function Ptext() {
  useEffect(() => {
    gsap.from("#ptext", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0,
    });
  }, []);
  return (
    <div className={style.ptextmain}>
      <div id="ptext" className={style.ptext}>
        <p>
          <strong>Juspay</strong> powers leading enterprises around the world,
        </p>
        <p>simplifying go-to-market, build better experiences, and </p>
        <p>never worry about regulatory nuances.</p>
      </div>
    </div>
  );
}
