import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
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
