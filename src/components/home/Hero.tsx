import { FaSearch } from "react-icons/fa";
import ShowUser from "../user/ShowUser";

const Hero = () => {
  return (
    <div className="hero bg-base-200 flex flex-col items-center">
      <div className="hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-1">
            Find your trusted help for home tasks
          </h1>
        </div>
      </div>
      <div className="join w-10/12 m-1 mr-2 ml-2 rounded-3xl p-1">
        <input
          className="input input-bordered join-item w-full "
          placeholder="What do you need help with?"
        />
        <button className="btn join-item rounded-r-full bg-green-600 w-20 text-white">
          <FaSearch />
        </button>
      </div>
      <ShowUser />
    </div>
  );
};
export default Hero;
