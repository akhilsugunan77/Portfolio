import html from "../assets/html-icon.svg";
import css from "../assets/css-icon.svg";
import tailwindcss from "../assets/tailwindcss.png";
import javascript from "../assets/Javascript-icon.svg";
import React from "../assets/React-icon.svg";

export default function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-gray-900 text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl  font-bold border-b-4 border-pink-600 inline">
            Skills
          </p>
          <p className="py-4">These are the technologies I worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img
              className="w-[100px] h-[100px] mx-auto"
              src={html}
              alt="html"
            />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-[100px] h-[100px] mx-auto" src={css} alt="css" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img
              className="w-[100px] h-[100px] mx-auto"
              src={tailwindcss}
              alt="tailwindcss"
            />
            <p className="my-4">Tailwindcss</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img
              className="w-[100px] h-[100px] mx-auto"
              src={javascript}
              alt="javascript"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img
              className="w-[100px] h-[100px] mx-auto"
              src={React}
              alt="React"
            />
            <p className="my-4">React JS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
