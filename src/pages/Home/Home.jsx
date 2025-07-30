import { NavLink } from "react-router-dom";
import personal from "../../assets/personal-pic.jpg";
import { TypeAnimation } from "react-type-animation";
import { Cog, MonitorCog } from "lucide-react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[83vh] md:flex-row md:gap-6">
        <Cog
          size={50}
          className="absolute top-[16%] right-[6%] text-gray-500 md:hidden"
        />
        <MonitorCog
          size={340}
          className="absolute top-[36%] right-0 text-gray-300 hidden md:flex lg:hidden"
        />
        <MonitorCog
          size={400}
          className="absolute top-[32%] right-0 text-gray-300 hidden lg:flex 2xl:right-[16%]"
        />
        <Cog
          size={50}
          className="absolute top-[56%] left-[16%] text-gray-500"
        />
        <section className=" border-22 rounded-full overflow-hidden w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]  text-main-txt z-20">
          <img
            src={personal}
            alt="Home"
            className="rounded w-full h-full object-cover object-top"
          />
        </section>

        <section className="text-center pt-4 md:w-1/2 lg:w-1/4 z-20">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl text-main-txt">
            <TypeAnimation
              sequence={[
                "Hello, I'm Mohamed Emad",
                1000,
                "I'm Frontend Engineer",
                1000,
                "I'm a React Developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mt-2 text-lg font-semibold">
            I am a passionate computer engineer with experience in building web
            applications.
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <a
              href="/Mohamed-Emad-Dawood-Front-End-Engineer-CV.pdf"
              download="Mohamed-Emad-Dawood-CV.pdf"
              className=" bg-orange-900 text-white px-4 py-2 rounded font-semibold hover:outline-1 hover:outline-orange-900 hover:text-main-txt hover:bg-transparent transition-colors"
            >
              Download Resume
            </a>
            <NavLink to="/contact">
              <button className="outline-orange-900 outline-1 text-main-txt font-semibold px-4 py-2 rounded hover:bg-orange-900 hover:text-white hover:cursor-pointer transition-colors">
                Contact Me
              </button>
            </NavLink>
          </div>
        </section>
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
