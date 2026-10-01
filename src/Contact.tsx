import Magnetic from "./Magnetic";
import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";

const links = [
  { label: "Email", href: "mailto:tpradosh360@gmail.com" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/pradosht/" },
  { label: "Github", href: "https://github.com/tpradosh/" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/100tf2IF-AQrR6V6La0wjaBh1AUIeSFJm/view?usp=sharing",
  },
];

function Contact() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-4 pb-16">
      <Reveal>
        <ScrambleText
          as="h2"
          text="Contact"
          className="font-display text-4xl font-bold tracking-tight md:text-5xl"
        />
        <p className="mt-3 text-[var(--muted)]">Press a plate. It should feel like a click.</p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((link) => (
          <Magnetic key={link.label} strength={0.28}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="neo-raised neo-press neo-sheen flex min-h-[88px] items-center justify-center rounded-[24px] px-4 text-center font-display text-lg font-semibold"
            >
              <ScrambleText text={link.label} />
            </a>
          </Magnetic>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-[var(--muted)]">
        tpradosh360@gmail.com
      </p>
    </div>
  );
}

export default Contact;
