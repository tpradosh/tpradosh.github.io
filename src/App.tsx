
import Intro from './Intro.tsx'
import Taskbar from './NavigationBar.tsx'
import ExperienceSection from './ExperienceSection.tsx'
import ProjectSection from './ProjectsSection.tsx'
import Contact from './Contact.tsx'

function App() {

  return (
    <>
      <div className = "bg-black text-white text-center">
        <div>
          <Taskbar />
        </div>

        <section id = "Home">
          <div className = "min-h-screen">
            <Intro />
          </div>
        </section>

        <div className = "fade-down">
          <section id = "Experience">
            <div className = "py-8 md:py-12 px-4 md:px-0">
              <ExperienceSection />
            </div>
          </section>

          <section id = "Projects">
            <div className = "py-8 md:py-12 px-4 md:px-[6vw]">
              <ProjectSection />
            </div>
          </section>

          <section id = "Contact">
            <div className = "h-[5vh] md:h-[10vh]">
              <Contact />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
