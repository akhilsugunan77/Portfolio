import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300 bg-gray-800">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 ">
          <div className="text-2xl font-bold sm:text-right px-4">
            <p>
              I would like to be a part of an organization where I could use and
              enhance my knowledge and talent for the development of both the
              organization and myself.
            </p>
          </div>
          <div className="p-4">
            <Link to="contact" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                Contact
                <span className="group-hover:rotate-90 duration-300 ">
                  <HiArrowNarrowRight className="ml-2" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
