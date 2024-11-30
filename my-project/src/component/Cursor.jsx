import React, { useEffect } from 'react'
import { gsap } from "gsap";


const Cursor =()=>{
    useEffect (()=>{
        const handleMouseMove=(event)=>{
            const {clientX,clientY} = event;
            gsap.to("#cursor",{
                x:clientX-30/2,
                y:clientY-30/2,
                duration:1,
                delay:0,
                ease:"power4.out"
            });
        };
        const changeColor = () => {
            gsap.to("#cursor", {
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
              duration: 1,
              repeat: -1,
              yoyo: true,
            });
        };
        window.addEventListener("mousemove",handleMouseMove);
        return ()=>{
            window.removeEventListener("mousemove",handleMouseMove);
        };
    },[]);



  return (
    <div id="cursor" className='h-[30px] w-[30px] bg-green-500 rounded-full fixed top-0 left-0  z-10 ' ></div>
  )
}

export default Cursor