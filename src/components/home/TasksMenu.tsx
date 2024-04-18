import { MdOutlineHandyman, MdCleaningServices } from "react-icons/md";
import { GiDrill, GiPaintRoller, GiCelebrationFire } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { TiTree } from "react-icons/ti";
import { IoHammerOutline } from "react-icons/io5";
import TaskItem from "./TaskItem";

const TasksMenu = () => {
  return (
    <>
      <div className="w-full ml-auto mr-auto box-border block pl-4 pr-4 mt-0">
        <div className="overflow-auto">
          <div className="flex flex-row flex-no-wrap mb-5 mt-10">
            <TaskItem iconComponent={MdOutlineHandyman} label="Assembly" />
            <TaskItem iconComponent={GiDrill} label="Mounting" />
            <TaskItem iconComponent={CiDeliveryTruck} label="Moving" />
            <TaskItem iconComponent={MdCleaningServices} label="Cleaning" />
            <TaskItem iconComponent={TiTree} label="Outdoor Help" />
            <TaskItem iconComponent={IoHammerOutline} label="Home Repairs" />
            <TaskItem iconComponent={GiPaintRoller} label="Painting" />
            <TaskItem iconComponent={GiCelebrationFire} label="Trending" />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
export default TasksMenu;
