import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';




function Intro_txt(){

    const type_speed = 40;

    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);



    useEffect( () => {
        
        setOne(true);

        const one_time = '👋 Hi! My name is '.length * type_speed +500
        const two_time = one_time + ' Pradosh Thirunavukkarasu'.length * (type_speed) + 500
        
        const timer1 = setTimeout(() => setTwo(true), one_time);
        const timer2 = setTimeout(() => setThree(true), two_time);
        
        
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };

    }, []);





    return (
        <div className="text-white font-bold text-center md:text-left">
          {one && (
            <span className="text-white text-lg md:text-4xl">
              <Typewriter
                words={['👋 Hi! My name is ']}
                loop={1}
                cursor={false}
                typeSpeed={type_speed}

              />
            </span>
          )}
        <br />

          {two && (
            <span className="text-green text-xl md:text-5xl">
              <Typewriter
                words={[' Pradosh Thirunavukkarasu']}
                loop={1}
                cursor={false}
                typeSpeed={type_speed}
              />
            </span>
          )}
    
          <br />
    
          {three && (
            <span className="text-white text-base md:text-3xl">
              <Typewriter
                words={[' Welcome to my Website!']}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={type_speed}
              />
            </span>
          )}
        </div>
      );
    }
    


export default Intro_txt

