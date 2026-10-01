import Experience from "./ExperienceProp";
import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";
import BRSS from "./assets/BRSS.jpeg";
import UCI from "./assets/uci.png";
import DAPLAB from "./assets/daplab.png";
import CTC from "./assets/ctc.png";

function ExperienceSection() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-4">
      <Reveal>
        <ScrambleText
          as="h2"
          playOnView
          text="Experience"
          className="font-display text-4xl font-bold tracking-tight md:text-5xl"
        />
        <p className="mt-3 max-w-xl text-[var(--muted)]">
          Soft-pressed records of where I have been building.
        </p>
      </Reveal>

      <div className="mt-8 space-y-6">
        <Experience
          img={CTC}
          company="Commit the Change"
          role="Full Stack Developer"
          time="Sep. 2025 - Present"
          descr="Collaborating with a team of 14 developers to build software for local nonprofits"
          url="https://ctc-uci.com/"
          delay={0.05}
        />
        <Experience
          img={DAPLAB}
          company="UCI Design and Partnership Lab"
          role="Undergraduate Research Assistant"
          time="Sep. 2025 - Present"
          descr="WholeChild Analytics Project : Building AI products for 1,200+ students"
          url="https://www.daplab.education.uci.edu/"
          delay={0.12}
        />
        <Experience
          img={BRSS}
          company="Boundary Remote Subsurface Solutions"
          role="Software Developer"
          time="Jan. 2025 - May 2025"
          descr="Created Wifi Mappings leveraging RF RSSI Wifi data to map out a geospatial area"
          url="https://www.linkedin.com/company/boundary-remote-sensing-systems/"
          delay={0.19}
        />
        <Experience
          img={UCI}
          company="University of California, Irvine"
          role="B.S Computer Science"
          time="Sept. 2023 - Jun. 2027"
          descr=""
          url="https://uci.edu/"
          delay={0.26}
        />
      </div>
    </div>
  );
}

export default ExperienceSection;
