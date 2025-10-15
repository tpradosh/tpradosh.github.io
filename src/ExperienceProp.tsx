interface ExperienceProp{
    img: string;
    company: string;
    role: string;
    time: string;
    descr: string;
    url: string;
    color: string;
}

function Experience({ img, company, role, time, descr, color, url}: ExperienceProp) {
    const Map: Record<string, string> = {
        blue: 'text-blue', 
        green: 'text-green',
        yellow: 'text-yellow',
        red: 'text-red'
    };
    
    
    return (
        <a href = {url}>
            <div className="hover-large mt-[2vh] md:mt-[5vh] w-full p-4 md:p-6 border border-white rounded-md flex flex-col md:flex-row items-start bg-black">
                <div className="w-full md:w-1/4 mb-4 md:mb-0 flex justify-center md:justify-start">
                    <img src={img} className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-cover rounded-lg"/>
                </div>

                <div className="flex-1 text-center md:text-left md:ml-10">
                    <h3 className={`text-xl md:text-2xl font-bold ${Map[color]}`}>{role}</h3>
                    <p className="text-white font-style: italic text-lg md:text-l">{company}</p>
                    <p className="text-white mt-4 text-timberwolf text-sm md:text-base">{descr}</p>
                    <p className="text-sm text-timberwolf italic mt-6">{time}</p>
                </div>
            </div>
        </a>
    );
  }

export default Experience