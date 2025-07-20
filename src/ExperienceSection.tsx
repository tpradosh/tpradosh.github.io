import Experience from "./ExperienceProp"
import BRSS from "./assets/BRSS.jpeg"
import UCI from "./assets/UCI.png"
import DAPLAB from "./assets/DAPLAB.png"

function ExperienceSection(){


    return (
        <>
            <div className = "bg-black">

                <div className = "text-green text-3xl md:text-4xl font-bold pt-[15px] px-4 md:px-0"> 
                    💻 Experience 
                </div>

                <div className = "mx-4 md:ml-[10vw] md:mr-[10vw]">
                    <Experience 
                        img = {DAPLAB}
                        company = "UCI DAPLAB"
                        role = "Incoming Undergraduate Research Assistant"
                        time = "Sep. 2025 - Jun. 2027"
                        descr = ""
                        url = ""
                        color = "green"
                    />
                    <Experience 
                        img = {BRSS}
                        company = "Boundary Remote Sensing Systems"
                        role = "Software Developer"
                        time = "Jan. 2025 - May. 2025"
                        descr = "Created Wifi Mappings leveraging RF RSSI Wifi data to map out a geospatial area"
                        url = "https://www.linkedin.com/company/boundary-remote-sensing-systems/"
                        color = "blue"
                    />
                    <Experience 
                        img = {UCI}
                        company = "University of California, Irvine"
                        role = "B.S Computer Science"
                        time = "Sept. 2023 - Jun. 2027"
                        descr = ""
                        url = ""
                        color = "yellow"
                    />
                    {/* <Experience 
                        img = {Test}
                        company = "Boundary Remote Sensing Systems"
                        role = "Software Developer"
                        time = "Jan. 2025 - Present"
                        descr = "Created Wifi Mappings leveraging RF RSSI Wifi data to map out a geospatial area"
                        url = "klgajds;f.com"
                        color = "green"
                    /> */}
                </div>

            </div>
        
        
        </>
    )
}
export default ExperienceSection