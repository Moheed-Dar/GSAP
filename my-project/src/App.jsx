// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";
import {useGSAP} from '@gsap/react';
import "./App.css";
import { useRef } from "react";
function App ()  {
 const boxref =useRef()
 const boxref2 =useRef()
 const nameref1 =useRef()
 useGSAP(()=>{
  gsap.from(boxref.current,{
      x:1000,
      y:300,
      duration:3,
      delay:1,
      backgroundColor:"yellow",
      borderRadius:"50%",
      rotate:360,
      width:"30px",
      height:"30px",
      repeat:-1,
      yoyo:true,
  })
  gsap.to(boxref2.current,{
      x:1000,
      y:-100,
      duration:3,
      rotate:360,
      delay:1,
      backgroundColor:"yellow",
      borderRadius:"50%",
      width:"30px",
      height:"30px",
      repeat:-1,
      yoyo:true,
  })
  gsap.from("#name1",{
    opacity:0,
    y:-20,
    borderRadius:"50%",
    duration:2,
    delay:1,
    stagger:1,
    color:"yellow",
    repeat:-1,
    yoyo:true,  
  })
 })
  
  return (
    <div className="App" >
      <div ref={boxref} className="box mt-10 ms-10 rounded-lg w-72 h-72 bg-red-400">
      </div>
      <div  ref={boxref2} className="box1 mt-10 ms-10 h-72 w-72 bg-green-600 "></div>
      <h1 ref={nameref1} id="name1" className="text-4xl text-blue-400 " >Moheed</h1><br/>
      <h1 ref={nameref1} id="name1" className="text-5xl text-blue-400 " >Software </h1><br/>
      <h1 ref={nameref1} id="name1" className="text-6xl text-blue-400 " >Developer</h1>
    </div>
  );
}
export default App;
