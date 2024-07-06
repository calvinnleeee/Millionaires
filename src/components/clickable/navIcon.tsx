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
    <div className="my-1 basis-24 text-center items-center">
      <a
        className="nav-link text-white"
        href={href}>
        {/* <div className="gg-home"></div> */}
        <Image 
          className="mx-auto"
          src={imgLocation}
          alt="Navigation icon"
          width={50}
          height={50}
        />
      <p className="relative bottom-">{text}</p>
      </a>
    </div>
  );
}