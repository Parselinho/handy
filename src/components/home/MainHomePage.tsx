import Hero from "./Hero";
import PopularProjects from "./PopularProjects";
import SocialProof from "./SocialProof";
import TaskPhoto from "./TaskPhoto";
import TasksMenu from "./TasksMenu";

const MainHomePage = () => {
  return (
    <>
      <Hero />
      <TasksMenu />
      <TaskPhoto />
      <SocialProof />
      <PopularProjects />
    </>
  );
};
export default MainHomePage;
