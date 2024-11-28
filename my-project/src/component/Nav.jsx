import React from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Nav() {
  useGSAP(()=>{
    gsap.from(".page1 .box",{
      scale:0,
      delay:2,
      duration:3,
      rotate:360,
    })
    gsap.from(".page2 .box",{
      scale:0,
      duration:3,
      rotate:360,
      scrollTrigger:{
         trigger:".page2 .box",
         scroller:"body",
         markers:true,
         start:"top 60%",
         end:"bottom 50%",
         scrub:2,
      }
    })
    gsap.from(".page3 h1",{
      opacity:0,
      duration:2,
      x:500,
      scrollTrigger:{
        trigger:".page3 h2",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:3,
      }
    })
    gsap.from(".page3 h2",{
      opacity:0,
      duration:2,
      x:-500,
      scrollTrigger:{
        trigger:".page3 h2",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:3,
        pin:true,
      }
    })
  })
  return (
    <div>
      <div className="page1 flex items-center justify-center">
        <div className="box  h-72 w-72 bg-fuchsia-600"></div>
      </div>
      <div className="page2 flex items-center justify-center">
      <div className="box h-72 w-72 bg-green-600"></div>
      </div>
      <div className="page3 flex items-center pt-20 flex-col gap-10">
        <h1 className="text-6xl text-orange-300 bg-black w-50 h-30" >hello</h1>
        <h2 className="text-6xl text-orange-300 bg-black w-70 h-30" >Moheed</h2>
      </div>
      <div className="page4"></div>
    </div>
  )
}
export default Nav;
