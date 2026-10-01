import ScrambleText from "./ScrambleText";

function Intro_txt() {
  return (
    <div className="text-center">
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--muted)] md:text-base">
        Hi, my name is
      </p>
      <ScrambleText
        as="h1"
        playOnMount
        text="Pradosh Thirunavukkarasu"
        className="mt-3 whitespace-nowrap font-display text-[clamp(1.35rem,5.2vw,3.75rem)] font-extrabold leading-none tracking-tight text-[var(--ink)]"
      />
      <p className="mx-auto mt-5 max-w-xl text-base text-[var(--muted)] md:text-xl">
        Welcome to my website — a tactile, kinetic space for the software I build.
      </p>
    </div>
  );
}

export default Intro_txt;
