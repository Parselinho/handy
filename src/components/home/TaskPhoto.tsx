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
      <div className="bg-slate-500 pr-2 pb-2 rounded-lg mt-5">
        <Image
          src="/love.jpeg"
          alt="some test image"
          width={1600}
          height={900}
        />
      </div>
    </>
  );
};
export default TaskPhoto;
