import Image from "next/image";
//import Profile from "../component/profile";
import { Galerry } from "@/component/galerry";
import Bio from "@/component/bio";
import TodoList from "@/component/todolist";
import MyGallery from "@/component/mygallery";
import Myprofile from "@/component/myprofile";
import MyProfile from "@/component/myprofile";
import MyProfileV2 from "@/component/myprofilev2";

export default function Home() {
  return (
    <main>
      <div>
        <MyProfileV2 />
      </div>
    </main>
      );
    };
