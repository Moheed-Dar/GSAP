import React from 'react';
import { useTypewriter, Cursors } from 'react-simple-typewriter';
function Typetext() {
    const [text] = useTypewriter({
        words: ['Hello, World!', 'Welcome to React!', 'Enjoy Coding!'],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 50,
        delaySpeed: 1000,
    });
    return (
        <div>
            <h1>
                Hello there, I'm {text}
                <Cursors />
            </h1>
        </div>
    );
}
export default Typetext;
