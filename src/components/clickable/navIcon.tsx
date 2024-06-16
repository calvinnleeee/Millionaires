import Image from "next/image";

/*
  Navigation bar icon and text.
*/

// Define types used by the NavIcon arguments.
type navProps = {
  text: string,
  href: string,
  imgLocation: string
}

export default function NavIcon({ text, href, imgLocation } : navProps) {
  return (
    <div className="my-2 basis-24 text-center items-center">
      <a
        className="nav-link colour-text"
        href={href}>
        {/* <div className="gg-home"></div> */}
        <Image 
          className="mx-auto"
          src={imgLocation}
          alt="Navigation icon"
          width={60}
          height={60}
        />
      <p className="relative bottom-2">{text}</p>
      </a>
    </div>
  );
}