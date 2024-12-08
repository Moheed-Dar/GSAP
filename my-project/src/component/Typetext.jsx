import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
function Typetext() {
    const [text] = useTypewriter({
        words: ['Software Developer!', 'TypeScript + JavaScript!', 'Full Stack Engineer!', 'MERN Stack', ' Tailwind CSS + Bootstrap', 'GSAP + Framer motion'],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 50,
        delaySpeed: 1000,
    });
    return (
        <div>
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
export default Typetext;
