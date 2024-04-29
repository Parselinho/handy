import Image from "next/image";

const TaskPhoto = () => {
  return (
    <>
      <div className="flex gap-4 ml-4 mb-4">
        <span className="font-bold">✓</span>
        <p>
          Assemble or disassemble furniture items by unboxing, building, and any
          cleanup.
        </p>
      </div>
      <div className="flex gap-4 ml-4">
        <span className="font-bold">✓</span>
        <p>
          Assemble or disassemble furniture items by unboxing, building, and any
          cleanup.
        </p>
      </div>
      <div className="h-64 mt-8">
        <div
          className="bg-emerald-100 z-0 rounded-2xl h-full max-h-64 absolute right-0"
          style={{ width: "94vw" }}
        ></div>
        <div
          className="relative rounded h-56 overflow-hidden z-1"
          style={{ width: "96vw" }}
        >
          <Image
            src="/love.jpeg"
            alt="test image"
            width="0"
            height="0"
            sizes="100vw"
            className="absolute h-full w-full left-0 top-0 right-0 bottom-0 object-cover object-center"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </>
  );
};
export default TaskPhoto;
