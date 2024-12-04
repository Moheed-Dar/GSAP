import React, { useEffect } from 'react'
import { gsap } from "gsap";
const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to("#cursor", {
        x: clientX - 20 / 2,
        y: clientY - 20 / 2,
        duration: 1,
        delay: 0,
        ease: "power4.out"
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div id="cursor" className='h-[22px] w-[22px] bg-white rounded-full fixed top-0 left-0  z-10 pointer-events-none mix-blend-difference ' ></div>
    </>
  )
}
export default Cursor