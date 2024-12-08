import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
function Text() {
    const h1Ref = useRef(null);
    useEffect(() => {
        if (h1Ref.current) {
            const splitText = h1Ref.current.innerText.split("");
            const clutter = splitText.map((char) => `<span>${char}</span>`).join("");
            h1Ref.current.innerHTML = clutter;
            gsap.from("h1 span", {
                y: 50,
                opacity: 0,
                delay:0.5,
                duration: 1,
                stagger: 0.3, // Add a delay between animations of each span
              });
        }
    }, []);
  
    return (
        <div className=' ' >
            <h1 ref={h1Ref} className='text-white  text-6xl  uppercase ' >moheed dar</h1>
        </div>
    )
}
export default Text