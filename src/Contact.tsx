

function Contact(){
    return(
        <div className="bg-black pb-8 md:pb-12 w-full">
            <div className = "text-green text-left text-3xl md:text-4xl font-bold ml-[3vh] px-4 md:px-0"> 
                
            </div>
            <div className = "w-full border-t border-white my-4 font-bold p-4 mx-0"></div>
                <div className = "mx-4 md:ml-[20vw] md:mr-[20vw] flex flex-col md:flex-row md:justify-between text-lg md:text-xl font-bold space-y-4 md:space-y-0">
                    
                    <p className = "hover-box_green text-center md:text-left">tpradosh360@gmail.com</p>
                    <a className = "hover-box_green text-center md:text-left" href = 'https://www.linkedin.com/in/pradosht/'>Linkedin</a>
                    <a className = "hover-box_green text-center md:text-left" href = 'https://github.com/tpradosh/'>Github</a>
                    <a className = "hover-box_green text-center md:text-left" href = 'https://drive.google.com/file/d/100tf2IF-AQrR6V6La0wjaBh1AUIeSFJm/view?usp=sharing'>Resume</a>

                </div>
        </div>
    )
}

export default Contact