import Intro_txt from "./Intro_txt";
import Magnetic from "./Magnetic";
import pfp from "./assets/PradoshThirunavukkarasu.jpg";

function Intro() {
  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-28">
      <Magnetic strength={0.12}>
        <div className="neo-inset rounded-full p-3">
          <img
            src={pfp}
            alt="Pradosh Thirunavukkarasu"
            className="h-[46vw] w-[46vw] max-h-[280px] max-w-[280px] rounded-full object-cover md:h-[320px] md:w-[320px] md:max-h-none md:max-w-none"
          />
        </div>
      </Magnetic>

      <div className="mt-8 w-full max-w-6xl px-2">
        <Intro_txt />
      </div>

      <Magnetic>
        <a
          href="#Experience"
          className="neo-raised neo-press neo-sheen mt-10 rounded-full px-6 py-3 text-sm font-semibold tracking-wide"
        >
          Scroll into the work
        </a>
      </Magnetic>
    </div>
  );
}

export default Intro;
