import Magnetic from "./Magnetic";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

interface ExperienceProp {
  img: string;
  company: string;
  role: string;
  time: string;
  descr: string;
  url: string;
  delay?: number;
}

function Experience({
  img,
  company,
  role,
  time,
  descr,
  url,
  delay = 0,
}: ExperienceProp) {
  return (
    <Reveal delay={delay}>
      <Magnetic strength={0.08}>
        <TiltCard>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="neo-raised neo-press neo-sheen flex flex-col items-center gap-5 rounded-[28px] p-5 md:flex-row md:items-start md:p-7"
          >
            <div className="neo-inset flex h-[120px] w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-[28px] md:h-[140px] md:w-[140px]">
              <img src={img} alt={company} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-2xl font-bold text-[var(--accent-deep)]">
                {role}
              </h3>
              <p className="mt-1 text-lg italic text-[var(--ink)]">{company}</p>
              {descr ? (
                <p className="mt-3 text-sm text-[var(--muted)] md:text-base">{descr}</p>
              ) : null}
              <p className="mt-4 text-sm italic text-[var(--muted)]">{time}</p>
            </div>
          </a>
        </TiltCard>
      </Magnetic>
    </Reveal>
  );
}

export default Experience;
