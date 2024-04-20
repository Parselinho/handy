import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const PopularProjects = () => {
  return (
    <>
      <div className="-mt-6 flex flex-wrap w-full flex-row mb-8 pr-5 pl-5">
        <h6 className="mt-10 font-bold text-green-950 text-2xl">
          Popular Projects
        </h6>
        <ProjectItem
          image="/Ikea.jpg"
          cardTitle="Mount a TV"
          cardText="Projects starting at $69"
          href="/"
          alt="Test Photos"
        />
        <ProjectItem
          image="/love.jpeg"
          cardTitle="Order Cooker"
          cardText="Projects starting at $39"
          href="/"
          alt="Test Photos"
        />
        <button
          type="button"
          className="font-semibold text-green-800 m-auto mt-5"
        >
          See more projects
        </button>
      </div>
    </>
  );
};
export default PopularProjects;
