import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-gray-900 w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex px-8 flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Akhil Sugunan
        </h1>
        <p className="text-4xl sm:text-6xl font-bold text-gray-400">
          I'm a Web developer.
        </p>
        <p className="text-sm text-gray-400 py-4 max-w-[700px]">
          I would like to be a part of an organization where I could use and
          enhance my knowledge and talent for the development of both the
          organization and myself.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View work
              <span className="group-hover:rotate-90 duration-300 ">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
