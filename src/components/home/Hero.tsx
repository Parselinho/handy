import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-5">
            Find your trusted help for home tasks
          </h1>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <button>
              <FaSearch />
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};
export default Hero;
