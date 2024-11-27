// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import "./App.css";
import Nav from './component/Nav.jsx'
import { useRef } from "react";
function App() {
  const boxref = useRef()
  const boxref2 = useRef()
  const nameref1 = useRef()
  const tox = useRef()
  const tox1 = useRef()
  const tox2 = useRef()
  useGSAP(() => {
    gsap.to(tox.current, {
      x: 1000,
      backgroundColor: "blue",
      duration: 1.5,
      delay: 1,
      repeat: -1,
      yoyo: true,
    })
    gsap.to(tox1.current, {
      x: 800,
      backgroundColor: "orange",
      duration: 1.5,
      delay: 1.5,
      repeat: -1,
      yoyo: true,
    })
    gsap.to(tox2.current, {
      x: 600,
      backgroundColor: "red",
      duration: 1.5,
      delay: 2.5,
      repeat: -1,
      yoyo: true,
    })
    gsap.from(boxref.current, {
      x: 1000,
      y: 300,
      duration: 3,
      delay: 1,
      backgroundColor: "yellow",
      borderRadius: "50%",
      rotate: 360,
      width: "30px",
      height: "30px",
      repeat: -1,
      yoyo: true,
    })
    gsap.to(boxref2.current, {
      x: 1000,
      y: -100,
      duration: 3,
      rotate: 360,
      delay: 1,
      backgroundColor: "yellow",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      repeat: -1,
      yoyo: true,
    })
    gsap.from("#name1", {
      opacity: 0,
      y: -20,
      borderRadius: "50%",
      duration: 2,
      delay: 1,
      stagger: 1,
      color: "yellow",
      repeat: -1,
      yoyo: true,
    })
  })

  return (
    <div className="App" >

      <div ref={boxref} className="box mt-10 ms-10 rounded-lg w-72 h-72 bg-red-400">
      </div>
      <div ref={boxref2} className="box1 mt-10 ms-10 h-72 w-72 bg-green-600 "></div>
      <h1 ref={nameref1} id="name1" className="text-4xl text-blue-400 " >Moheed</h1><br />
      <h1 ref={nameref1} id="name1" className="text-5xl text-blue-400 " >Software </h1><br />
      <h1 ref={nameref1} id="name1" className="text-6xl text-blue-400 " >Developer</h1>
      <div ref={tox} className="tox h-40 w-40 bg-red-600"></div>
      <div ref={tox1} className="to1 h-40 w-40 bg-green-600"></div>
      <div ref={tox2} className="to2 h-40 w-40 bg-yellow-600"></div><br />
      <br />
      <Nav />
    </div>
  );
}
export default App;
