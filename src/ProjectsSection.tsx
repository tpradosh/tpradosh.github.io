import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";
import Test from "./assets/test.png";
import ZOTNostic from "./assets/ZOTNostic.png";
import BTC from "./assets/btc.png";
import CVOT from "./assets/cvot.jpg";
import navaid from "./assets/navaid.png";
import urbanresponse from "./assets/urbanresponse.jpg";

function ProjectSection() {
  return (
    <div className="relative z-10 mx-auto max-w-6xl px-4">
      <Reveal>
        <ScrambleText
          as="h2"
          playOnView
          text="Projects"
          className="font-display text-4xl font-bold tracking-tight md:text-5xl"
        />
        <p className="mt-3 max-w-xl text-[var(--muted)]">
          Cards that tilt with your hand and sink when you press.
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          img={urbanresponse}
          title="UrbanResponse AI"
          time="June 2025"
          descr="An emergency response simulation that demonstrates intelligent emergency vehicle dispatching"
          url="https://github.com/tpradosh/UrbanResponse-AI"
        />
        <ProjectCard
          img={navaid}
          title="NavAid"
          time="May 2025"
          descr="A Navigation Aid for the visually impaired"
          url="https://github.com/tpradosh/NavAid"
        />
        <ProjectCard
          img={BTC}
          title="Bitcoin OHLC Visualizer"
          time="May 2025"
          descr="A Visualizer of Bitcoin data in Open Low High Close Charts"
          url="https://github.com/tpradosh/btc"
        />
        <ProjectCard
          img={CVOT}
          title="Computer Vision Object Tracker"
          time="Feb. 2025"
          descr="A Tracker that detects Object Movement within Videos"
          url="https://github.com/tpradosh/obj-finder"
        />
        <ProjectCard
          img={ZOTNostic}
          title="ZOTNostic"
          time="Nov. 2024"
          descr="An AI Chatbot that helps users with Medical Diagnosis"
          url="https://github.com/setripper/ZotNostic"
        />
        <ProjectCard
          img={Test}
          title="Portfolio Website"
          time="Oct. 2024"
          descr="My Website to display my current experience and projects"
          url="https://github.com/tpradosh/tpradosh.github.io"
        />
      </div>
    </div>
  );
}

export default ProjectSection;
