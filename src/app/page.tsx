import Link from "next/link";
import Hero from "@/components/home/Hero";
import TasksMenu from "@/components/home/TasksMenu";

export default function Home() {
  return (
    <>
      <Hero />
      <TasksMenu />
    </>
  );
}
