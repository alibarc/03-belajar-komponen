import Image from "next/image";
import Profile from "../component/profile";

export default function Home() {
  return (
        <div className="container">
          <div className="header">
          <div className= "flex w-full justify-center">
          <h1>Ilmuwan yang luar biasa</h1>
          </div>
          </div>
          <div className= "mt-4 flex flex-row justify-between">
          <Profile/>
          <Profile/>
          <Profile/>
        </div>
        </div>
      );
    };
