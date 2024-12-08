import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navscroll() {

    

    window.addEventListener("wheel",function(data){
        if(data.deltaY>0){
            gsap.to(".marque",{
                transform:"translateX(-200%)",
                ease:"none",
                duration:3,
                repeat:-1,
            })
            gsap.to(".marque img",{
                rotate:180,
            })
        }else{
            gsap.to(".marque",{
                transform:"translateX(0%)",
                ease:"none",
                duration:3,
                repeat:-1,
            })
            gsap.to(".marque img",{
                rotate:0,
            })
            
        }
    })

  return (
    <div className='text-3xl text-white uppercase '>
        <div id="page1"></div>
        <div id="page2">
            <div  className='flex' id="move">
                <div className="marque flex items-center gap-4  ">
                    <h1>CHECK YOUR TIME LINES</h1>
                    <img  src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"></img>
                </div>
                <div className="marque flex items-center gap-4  ">
                    <h1>CHECK YOUR TIME LINES</h1>
                    <img  src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"></img>
                </div>
                <div className="marque flex items-center gap-4  ">
                    <h1>CHECK YOUR TIME LINES</h1>
                    <img  src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"></img>
                </div>
                <div className="marque flex items-center gap-4   ">
                    <h1>CHECK YOUR TIME LINES</h1>
                    <img  src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"></img>
                </div>
                <div className="marque flex items-center gap-4    ">
                    <h1>CHECK YOUR TIME LINES</h1>
                    <img  src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"></img>
                </div>
            </div>
        </div>
        <div id="page3"></div>
    </div>
  )
}

export default Navscroll