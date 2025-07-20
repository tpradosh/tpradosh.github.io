interface ProjectCard{
    img: string;
    title: string;
    time: string;
    descr: string;
    url: string;
    color: string;
}


function ProjectCard({ img, title, time, descr, color, url}: ProjectCard) {
    const Map: Record<string, string> = {
      blue: 'text-blue', 
      lgreen: 'text-dgreen',
      yellow : 'text-yellow',
      lime : 'text-lime',
      indigo : 'text-indigo',
      red : 'text-red',
      teal : 'text-teal'
  };

  // Special handling for NavAid image sizing
  const getImageClass = () => {
    if (title === "NavAid") {
      return "w-full h-48 object-contain rounded-t-md bg-gray-800";
    }
    return "w-full h-48 object-cover rounded-t-md";
  };

  // Special handling for NavAid title color
  const getTitleStyle = () => {
    if (title === "NavAid") {
      return { color: '#0081A7' }; // Using the teal color from tailwind config
    }
    return {};
  };


    return (
          <div className="hover-large w-full sm:w-1/2 lg:w-1/3 p-2 md:p-4">
            <a href = {url}>

            <div className="border border-white rounded-md bg-black flex flex-col h-full">
              <img src={img} className={getImageClass()} />
      
              <div className="p-3 md:p-4 flex flex-col">
                <div>
                  <h3 className={`text-lg md:text-xl font-bold ${Map[color]}`} style={getTitleStyle()}>{title}</h3>
                  <p className="text-white mt-2 text-timberwolf text-sm md:text-base">{descr}</p>
                </div>
                <p className="text-sm text-timberwolf italic mt-4">{time}</p>
              </div>
            </div>
            </a>
          </div>
    );
  }
  

export default ProjectCard