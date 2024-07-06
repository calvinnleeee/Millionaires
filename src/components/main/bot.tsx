import NavIcon from "../clickable/navIcon"

/*
  Bottom navigation bar.
*/

export default function NavigationBar() {
  return (
    <nav>
      <div
        className="bg-slate-500 rounded-t-xl h-20 w-screen flex flex-row absolute bottom-0 content-stretch">
      
        <NavIcon 
          text="Home"
          href="/"
          imgLocation="/img/navbar-home.png"/>
        <NavIcon 
          text="Files"
          href="/files"
          imgLocation="/img/navbar-files.png"/>
        <NavIcon 
          text="Record"
          href="#"
          imgLocation="/img/navbar-camera.png"/>
        <NavIcon 
          text="Chat"
          href="#"
          imgLocation="/img/navbar-chat.png"/>
        <NavIcon 
          text="Settings"
          href="#"
          imgLocation="/img/navbar-settings.png"/>

      </div>
    </nav>
  );
}