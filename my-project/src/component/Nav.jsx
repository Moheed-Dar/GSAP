import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import { Timeline } from "gsap/gsap-core";
function Nav() {
  const newref = useRef()
  const newref2 =useRef()
  const newref3 =useRef()
  var tl = gsap.timeline()
  useGSAP(() => {

    tl.from(newref.current, {
      x:1000,
      duration:2,
      delay:1,
      backgroundColor:"green",
      repeat:-1,
      yoyo:true,
      borderRadius:"50%",
    })
    tl.from(newref2.current, {
      x:1000,
      duration:2,
      delay:1,
      backgroundColor:"green",
      repeat:-1,
      yoyo:true,
      borderRadius:"50%",
    })
    tl.from(newref3.current, {
      x:1000,
      duration:2,
      delay:1,
      backgroundColor:"green",
      repeat:-1,
      yoyo:true,
      borderRadius:"50%",
    })
  })
  return (
    <div className="Nav" >
      <div ref={newref} className="h-44 w-44 bg-yellow-500"></div>
      <div ref={newref2} className="h-44 w-44 bg-yellow-500"></div>
      <div ref={newref3} className="h-44 w-44 bg-yellow-500">
      </div>
    </div>
  )
}

export default Nav;
