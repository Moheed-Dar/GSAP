import React from "react";
import Cursor from "./Cursor";
import 'remixicon/fonts/remixicon.css';
import { RiHome2Line } from 'react-icons/ri';
import { GoProjectSymlink } from "react-icons/go";
import { TbListDetails } from "react-icons/tb";
import { GrContactInfo } from "react-icons/gr";
import { ImBooks } from "react-icons/im";
import { gsap } from "gsap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useGSAP } from '@gsap/react';
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger); 
function Nav() {
  return (
    <div className="page1 w-full h-screen bg-zinc-900 text-white  ">
      <Cursor />
      <div className="container pt-2   ">
        <div className="row">
          <div className="col-lg-4 flex justify-start">
            <h1 className="h1-font  z-5"
              onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })} onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}>
              Moheed.
            </h1 >
          </div>
          <div className="col-lg-4 mt-1   ">
            <ul id="h1-font" className=" list-unstyled   flex items-center justify-center gap-6 text-xl mt-2">
              <li onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })} onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })} className="flex ">
                <RiHome2Line className="mt-1 text-yellow-500 no-blend " /> Home
              </li>
              <li onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })} onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })} className="flex">
                <GoProjectSymlink className="mt-1 text-yellow-500 no-blend " /> Projects
              </li>
              <li onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })} onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })} className="flex">
                <ImBooks className="mt-1 me-1 text-yellow-500 no-blend " />About</li>
              <li onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })} onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })} className="flex">
                <GrContactInfo className="mt-1 me-1 text-yellow-500 no-blend " />Contact</li>
              <li onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })} onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })} className="flex">
                <TbListDetails className="mt-1 me-1 text-yellow-500 no-blend " />Details</li>
            </ul>
          </div>
          <div className="col-lg-4 flex justify-end  no-blend">
            <button className="btn btn-outline-warning mt-1 rounded-xl w-32 h-10" >Hire me</button>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Nav;
