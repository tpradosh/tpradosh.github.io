import Intro_txt from './Intro_txt';
import test from './assets/test.png'

function Intro(){

    return (
        <>
            <div className = "h-{15px} bg-green text-green">. </div>

            <div className = "bg-black m-[15px] md:m-[15px]">
                <div className = 'fade-down'>
                    <div className = "px-4 py-3 flex items-center justify-between">
                        <nav className = "space-x-4 font-bold text-xl">
                            <a href = "#Home" className = "hover-box_green">Home</a>
                            <a href = "#Experience" className = "hover-box_green">Experience</a>
                            <a href = "#Projects" className = "hover-box_green">Projects</a>
                            <a href = "#Contact" className = "hover-box_green">Contact</a>
                        </nav>
                    </div>
                </div>


                <div className = 'fade-up'>
                    <div className = 'flex items-center justify-center h-[40vh] md:h-[50vh] px-4'>
                        <img src= {test} alt="Profile" className="rounded-full w-[60vw] h-[60vw] max-w-[40vh] max-h-[40vh] object-cover" />
                    </div>
                </div>

                <div className = "fade-down">
                   <div className = 'flex items-center justify-center h-[25vh] md:h-[30vh] px-4'>
                        <Intro_txt />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Intro;