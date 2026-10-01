import Magnetic from "./Magnetic";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

interface ProjectCard {
  img: string;
  title: string;
  time: string;
  descr: string;
  url: string;
}

function ProjectCard({ img, title, time, descr, url }: ProjectCard) {
  const imageClass =
    title === "NavAid"
      ? "h-48 w-full object-contain"
      : "h-48 w-full object-cover";

  return (
    <Reveal>
      <Magnetic strength={0.1}>
        <TiltCard>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="neo-raised neo-press neo-sheen flex h-full flex-col overflow-hidden rounded-[28px]"
          >
            <div className="neo-inset m-3 overflow-hidden rounded-[22px]">
              <img src={img} alt={title} className={imageClass} />
            </div>
            <div className="flex flex-1 flex-col px-5 pb-5">
              <h3 className="font-display text-xl font-bold text-[var(--accent-deep)]">
                {title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] md:text-base">{descr}</p>
              <p className="mt-auto pt-4 text-sm italic text-[var(--muted)]">{time}</p>
            </div>
          </a>
        </TiltCard>
      </Magnetic>
    </Reveal>
  );
}

export default ProjectCard;
