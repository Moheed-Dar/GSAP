import React from "react";
import Cursor from "./Cursor";
// import { gsap } from "gsap";
// import { useGSAP } from '@gsap/react';
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
function Nav() {
  return (
      <div className="page1 w-full h-screen bg-zinc-900 text-white flex justify-center items-center  ">
        <Cursor/>
      </div>
  )
}
export default Nav;
