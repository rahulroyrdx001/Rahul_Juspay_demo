import React, { useEffect } from "react";
import gsap from "gsap";
import style from "../components/style/demobutton.module.css";

export default function Schduledemobutton() {
  useEffect(() => {
    gsap.from("#btn button", {
      opacity: 0,
      y: 20,
      width: 10,
      duration: 1,
      delay: 1,
    });
  }, []);
  return (
    <div id="btn" className={style.mainbtn}>
      <button>Schedule Demo Button</button>
    </div>
  );
}
