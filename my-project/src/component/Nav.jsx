import React from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Nav() {
  useGSAP(()=>{
    gsap.to(".page2 .h1",{
      transform:"translateX(-310%)",
      scrollTrigger:{
        trigger:".page2 ",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:3,
        pin:true,

      }
    })
   
  })
  return (
    <div>
      <div className="page1 flex items-center justify-center">
      </div>
      <div className="page2 ">
        <h1 className="h1" >Moheed-developer</h1>
      </div>
      <div className="page3"></div>
    </div>
  )
}
export default Nav;
