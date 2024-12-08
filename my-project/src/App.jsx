// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// import { gsap } from "gsap";
// import Nav from "./component/Nav.jsx";
// import { useGSAP } from '@gsap/react';
// import Navbar from "./component/Navbar.jsx";
// import { useRef } from "react";
// import Text from "./component/Text.jsx";
import "./App.css";
// import Typetext from "./component/Typetext.jsx";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
function App() {
  const [text] = useTypewriter({
    words: ['Software Developer!', 'TypeScript + JavaScript!', 'Full Stack Engineer!', 'MERN Stack', ' Tailwind CSS + Bootstrap', 'GSAP + Framer motion'],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <div className="App">
      <h1 className="text-white text-2xl">
        Hello there, I'm Moheed Dar <br />
        <span className="text-yellow-500">{text}</span>
        <span className="text-3xl text-emerald-400">
          <Cursor cursorStyle="|" />
        </span>
      </h1>
    </div>
  );
}
export default App;
