import about from "../../assets/About.jpeg";
import about1 from "../../assets/About1.jpeg";
import about2 from "../../assets/About2.jpeg";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "BootStrap",
    "React",
    "Tailwind",
    "Next.js",
    "TypeScript",
  ];

  const tools = [
    "Redux Toolkit",
    "GitHub",
    "Figma",
    "Context API",
    "TankStack Query",
    "Formik",
    "Yup",
    "Postman",
  ];

  return (
    <div>
      <section className="flex flex-col justify-center items-center pt-10 md:items-start min-h-[83vh] md:flex-row md:justify-between md:gap-6 md:pt-20 overflow-hidden relative">
        <div className="pt-4 pb-6 text-center md:text-left md:w-1/2 lg:w-1/3 z-20 md:pt-8 md:ms-[8%]">
          <h2 className="text-4xl  font-bold md:text-3xl lg:text-6xl main-text ps-2">
            About Me
          </h2>
          <p className="mt-3 text-lg font-semibold md:mt-5">
            Hello, my name is Mohamed Emad, I'm a 25-year-old computer engineer
            graduated from the Faculty of Engineering, Computer Department at
            Pharos University in Alexandria (PUA). Throughout my academic years,
            I developed a strong interest in software development, especially
            front-end technologies. I focused on building user-friendly,
            responsive web interfaces using modern tools and frameworks like
            React. My curiosity and problem-solving mindset have driven me to
            constantly explore and learn new technologies.
          </p>
        </div>
        <div className="shadow-lg mb-6 border-22 rounded-full overflow-hidden w-[300px] h-[300px] sm:mb-0 sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px]  main-text z-20 md:me-[2%] lg:me-[16%] xl:me-[22%] lg:shadow-xl shadow-black">
          <img
            src={about}
            alt="Home"
            className="rounded w-full h-full object-cover object-top "
          />
        </div>

        <div className="hidden 2xl:block w-[100px] h-[100px] rounded-full overflow-hidden absolute top-[66%] left-[16%]">
          <img
            src={about1}
            alt="About"
            className="rounded w-full h-full object-cover object-top"
          />
        </div>
        <div className="hidden 2xl:block w-[200px] h-[200px] border-12 rounded-full overflow-hidden absolute top-[76%] left-[36%] main-text">
          <img
            src={about2}
            alt="About"
            className="rounded w-full h-full object-cover object-top"
          />
        </div>
      </section>
      <section className="flex items-center justify-start py-8 ms-6">
        <div className="text-left p-4">
          <h2 className="text-4xl font-bold text-[#003b3b] mb-6">Skills :</h2>
          <ul className=" ms-16 md:flex md:items-center md:flex-wrap md:gap-8">
            {skills.map((skill, index) => (
              <li key={index} className=" relative mb-4">
                <div className="absolute w-[50px] h-[50px] flex items-center justify-center rounded-full border-8 border-[#c1b8b1] text-[#003b3b] font-bold bg-white mr-3 left-[-16px]">
                  {index + 1}
                </div>
                <div className="bg-[#003b3b] text-white px-10 py-3 rounded-full w-full max-w-[230px] text-xl">
                  {skill}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="flex items-center justify-start py-8 ms-6">
        <div className="text-left p-4">
          <h2 className="text-4xl font-bold text-[#003b3b] mb-6">
            Tools & Others :
          </h2>
          <ul className=" ms-16 md:flex md:items-center md:flex-wrap md:gap-8">
            {tools.map((tool, index) => (
              <li key={index} className=" relative mb-4">
                <div className="absolute w-[50px] h-[50px] flex items-center justify-center rounded-full border-8 border-[#c1b8b1] text-[#003b3b] font-bold bg-white mr-3 left-[-16px]">
                  {index + 1}
                </div>
                <div className="bg-[#003b3b] text-white px-10 py-3 rounded-full w-full max-w-[230px] text-xl">
                  {tool}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
