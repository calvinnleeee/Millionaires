import NavigationBar from "../components/main/bot";
import TopBar from "../components/main/top";
import Image from "next/image";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="bg-slate-500 container h-screen grid grid-rows-10 gap-0 m-0 p-0">
        <div className="row-span-1 flex place-content-center">
          <TopBar />
        </div>

        <div className="h-full row-span-5 flex flex-col items-center justify-center">
          <div className="mb-5">
            <Image 
              className="mx-auto"
              src="/img/artichoke.png"
              alt="Logo"
              width={1170}
              height={896}
            />
          </div>

          <div className="welcome mt-5">
            <p className="text-3xl text-center">Welcome back, #user#!</p>
          </div>

          <div className="h-24"></div>  {/* spacer */}
          
          <div className="splash-text">
            <p className="text-xl text-center">Click the <span className="underline">Record</span> tab to get started with your day.</p>
          </div>
        </div>

        <div className="row-span-1">
          <NavigationBar />
        </div>
      </div>
    </>
  );
}