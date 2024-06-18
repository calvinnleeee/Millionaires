import NavigationBar from "../../components/main/bot";
import TopBar from "../../components/main/top";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <div className="container h-screen grid grid-rows-7 gap-0 m-0 p-0">
        <div className="row-span-1">
          <TopBar />
        </div>

        <div className="stuff h-full row-span-5 flex flex-col items-center">
          <div className="file-buttons mb-5 rounded-xl flex flex-row items-center justify-around">
            <div className="relative inline-block w-16 h-8 bg-gray-300 rounded-full cursor-pointer" id="toggleSwitch">
              <div className="absolute border-1 border-black top-0 left-0 w-8 h-8 bg-white rounded-full shadow-md toggle-circle" id="toggleCircle"></div>
            </div>

            <div className="bg-stone-700"></div> {/* spacer */}
            <div></div> {/* spacer */}
            <div></div> {/* spacer */}

            <button className="upload-button text-5xl font-black rounded-full">+</button>
          </div>

          <div className="welcome mt-5">
            <p className="text-3xl text-center">This is the files page.</p>
          </div>
        </div>

        <Script src="/js/files.js" />

        <div className="row-span-1">
          <NavigationBar />
        </div>
      </div>
    </>
  );
}