import Image from "next/image";

const SocialProof = () => {
  return (
    <>
      <div
        className="p-5"
        style={{ background: "linear-gradient(#FFF, 15%, #ECF7EF)" }}
      >
        <div className="grid grid-cols-2 gap-4 m-4 mt-8">
          <div>
            <h6 className="text-green-950 font-bold">Furniture Assemblies:</h6>
            <p className="text-green-700 font-bold">3.4 million+</p>
          </div>
          <div>
            <h6 className="text-green-950 font-bold">Items mounted:</h6>
            <p className="text-green-700 font-bold">1 million+</p>
          </div>
          <div>
            <h6 className="text-green-950 font-bold">Home Cleaned:</h6>
            <p className="text-green-700 font-bold">890,000+</p>
          </div>
          <div>
            <h6 className="text-green-950 font-bold">Moving Tasks:</h6>
            <p className="text-green-700 font-bold">1.5 million+</p>
          </div>
          <div>
            <h6 className="text-green-950 font-bold">Home Repairs:</h6>
            <p className="text-green-700 font-bold">700,000+</p>
          </div>
          <div
            className="object-left overflow-hidden relative object-contain"
            style={{ minHeight: "86px", width: "130px" }}
          >
            <Image
              src="/Ikea.jpg"
              alt="Ikea Logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="absolute left-0 top-0  right-0 bottom-0"
              style={{
                color: "transparent",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SocialProof;
