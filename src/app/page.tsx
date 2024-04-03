import Image from "next/image";
//import Profile from "../component/profile";
import { Galerry } from "@/component/galerry";
import Bio from "@/component/bio";
import TodoList from "@/component/todolist";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Galerry />
      <hr />
      <TodoList />
    </section>
      );
    };
