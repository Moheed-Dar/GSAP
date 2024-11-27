import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import { Timeline } from "gsap/gsap-core";
function Nav() {
  const navg =useRef()
  const navg1 =useRef()
  var tl = gsap.timeline()
  useGSAP(() => {
    tl.from(navg.current,{
      y:-20,
      duration:2,
      delay:2,
      opacity:0,
      color:"aqua",
      repeat:-1,
      yoyo:true,
    })
    tl.from("#h2",{
      y:-20,
      duration:1,
      stagger:0.5,
      opacity:0,
      color:"aqua",
    })
    tl.from("#h1",{
      y:20,
      color:"blue",
      duration:2,
      delay:2,
      opacity:0,
      scale:0.5,
      repeat:-1,
      yoyo:true,
    })
  })
  return (
    <div  className="Nav flex pl-10 ps-10 text-3xl " style={{ alignItems: "center",justifyContent:"space-between",padding:"20px 50px" }}>
      <h2 ref={navg}  className="text-4xl text-orange-500" style={{fontFamily:"mono"}} >Moheed</h2>
      <div  className="part2 " style={{display:"flex", gap:"50px",fontSize:"20px"}} >
        <h4 id="h2" className="font-serif text-3xl" ref={navg1}>home</h4>
        <h4 id="h2" className="font-serif text-3xl" ref={navg1}>about</h4>
        <h4 id="h2" className="font-serif text-3xl" ref={navg1}>detail</h4>
        <h4 id="h2" className="font-serif text-3xl" ref={navg1}>contact</h4>
      </div>
      <h1 id="h1" className="text-5xl text-yellow-600" style={{position:"absolute",top:"10%",left:"35%"}}>HAPPY NEW PLAN</h1>
    </div>
  )
}
export default Nav;
