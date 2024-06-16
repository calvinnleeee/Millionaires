import NavigationBar from "../components/main/bot"
import TopBar from "../components/main/top"

export default function Home() {
  return (
    <>
      <div className="container h-screen grid grid-rows-7 gap-0 m-0 p-0">
        <div className="row-span-1">
          <TopBar />
        </div>

        <div className="stuff h-full row-span-5 flex flex-col items-center justify-center">
          <div className="logo mb-5"></div>

          <div className="welcome mt-5">
            <p className="text-3xl text-center">Welcome back, #user#!</p>
          </div>

          <div className="h-24"></div>  {/* spacer */}

          {/* <div></div> */}
        </div>

        <div className="row-span-1">
          <NavigationBar />
        </div>
      </div>
    </>
  );
}