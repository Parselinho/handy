const TaskItem = ({
  iconComponent: Icon,
  label,
}: {
  iconComponent: any;
  label: string;
}) => {
  return (
    <div
      className="text-center flex-col grow shrink-0"
      style={{ flexBasis: "105px" }}
    >
      <div
        className="relative flex flex-col justify-center items-center"
        style={{ height: "75px" }}
      >
        <Icon style={{ height: "50", width: "60" }} />
        <span className="leading-none tracking-normal ">
          <label
            className="m-0 mt-5 font-bold text-xs tracking-tighter leading-snug text-center flex shrink-0 flex-grow-1 pl-2 pr-2 cursor-pointer"
            style={{ flexBasis: "40px", fontSize: "12px" }}
          >
            {label}
          </label>
        </span>
      </div>
    </div>
  );
};
export default TaskItem;
