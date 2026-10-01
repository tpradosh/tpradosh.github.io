import Intro from "./Intro.tsx";
import Taskbar from "./NavigationBar.tsx";
import ExperienceSection from "./ExperienceSection.tsx";
import ProjectSection from "./ProjectsSection.tsx";
import Contact from "./Contact.tsx";
import SmoothScroll from "./SmoothScroll.tsx";
import CustomCursor from "./CustomCursor.tsx";
import { CursorProvider } from "./CursorContext.tsx";

function App() {
  return (
    <SmoothScroll>
      <CursorProvider>
        <CustomCursor />
        <div className="grain" />

        <div className="relative text-[var(--ink)]">
          <Taskbar />

          <section id="Home">
            <Intro />
          </section>

          <section id="Experience" className="py-16 md:py-24">
            <ExperienceSection />
          </section>

          <section id="Projects" className="py-16 md:py-24">
            <ProjectSection />
          </section>

          <section id="Contact" className="pt-8">
            <Contact />
          </section>
        </div>
      </CursorProvider>
    </SmoothScroll>
  );
}

export default App;
