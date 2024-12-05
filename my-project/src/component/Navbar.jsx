import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsListNested } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { gsap } from "gsap";
import { Timeline } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react'
function Navbar() {
  var menu = document.querySelector(".col-6 #i");
  var cross = document.querySelector("#i2");
  var tl = gsap.timeline()
  useGSAP(() => {
    tl.to(".list", {
      right: 0,
      duration: 0.8,
    })
    tl.from(" h4", {
      x: 150,
      opacity: 0,
      duration: 0.7,
      stagger: 0.3,
    });
    tl.from("#i2", {
      opacity: 0,
    })
    tl.pause()
  })
  menu.addEventListener("click", function () {
    tl.play()
  });
  cross.addEventListener("click", function () {
    tl.reverse()
  })
  return (
    <div className="Navbar" >
      <div className="container-fluid mt-2">
        <div className="row  ">
          <div className="col-6 flex justify-start cursor-default text-yellow-50 ">
            <h1>Moheed </h1>
          </div>
          <div className="col-6   flex justify-end items-center ">
            <BsListNested id="i" className='text-zinc-200 cursor-pointer' />
          </div>
        </div>
      </div>
      <div className="list">
        <IoMdClose id="i2" className='cursor-pointer' />
        <h4>Home</h4>
        <h4>Contact</h4>
        <h4>Detail</h4>
        <h4>Service</h4>
        <h4>About</h4>
      </div>
    </div>
  )
}
export default Navbar;