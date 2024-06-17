import NavigationBar from "../components/main/bot";
import TopBar from "../components/main/top";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container h-screen grid grid-rows-7 gap-0 m-0 p-0">
        <div className="row-span-1">
          <TopBar />
        </div>

        <div className="stuff h-full row-span-5 flex flex-col items-center justify-center">
          <div className="logo mb-5">
            <Image 
              className="mx-auto"
              src="/img/brain.png"
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