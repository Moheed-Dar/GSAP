// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";
import {useGSAP} from '@gsap/react';
import "./App.css";
import { useRef } from "react";
function App ()  {
 const boxref =useRef()
 const boxref2 =useRef()
 useGSAP(()=>{
  gsap.from(boxref.current,{
      x:1000,
      duration:2,
      delay:1,
      backgroundColor:"yellow",
      borderRadius:"50%",
      width:"30px",
      height:"30px",
  })
  gsap.to(boxref2.current,{
      x:1000,
      duration:2,
      delay:1,
      backgroundColor:"yellow",
      borderRadius:"50%",
      width:"30px",
      height:"30px",
  })
 })
  
  return (
    <div className="App" >
      <div ref={boxref} className="box  w-72 h-72 bg-red-400">
      </div>
      <div  ref={boxref2} className="box1 h-72 w-72 bg-green-600 "></div>
    </div>
  );
}
export default App;
