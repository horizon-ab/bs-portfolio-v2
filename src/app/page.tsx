import Image from "next/image";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  FileTextIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const icons = {
  Github: {
    href: "https://github.com/horizon-ab",
    image: <GitHubLogoIcon style={{ width: "64px", height: "64px" }} />,
  },

  LinkedIn: {
    href: "https://www.linkedin.com/in/bailey-say-2a64b3266/",
    image: <LinkedInLogoIcon style={{ width: "64px", height: "64px" }} />,
  },

  Resume: {
    href: "/bsresume.pdf",
    image: <FileTextIcon style={{ width: "64px", height: "64px" }} />,
  },

  Instagram: {
    href: "https://www.instagram.com/bay__salt/",
    image: <InstagramLogoIcon style={{ width: "64px", height: "64px" }} />,
  },

  Mail: {
    href: "mailto:baileyasay@gmail.com",
    image: <EnvelopeClosedIcon style={{ width: "64px", height: "64px" }} />,
  },
};


export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10 p-10 text-xl">
        <div>Hi, I'm Bailey.</div>
        <div>I'm a second-year CS student at UCSB. Feel free to check out my work:</div>
        <Image 
          src="/images/moonberry.png"
          alt="moonberry"
          width={1000}
          height={500}
        />
        <hr className="bg-white w-250"/>
        <div>Experience:</div>
        <div className="grid grid-cols-5 gap-5">
          {nums.map((num) => {
            return <div key={num} className="border-1 w-50 h-75">{num}</div>
          })}
        </div>
        <hr className="bg-white w-250"/>
        <div>Contact me:</div>
        <div className="flex flex-row">
        {Object.entries(icons).map(([name, { href, image }]) => {
        return (
          <a key={name} href={href} target="_blank" rel="noopener">
            <div className="flex flex-col gap-5 p-5 items-center">
              {image}
              <div>{name}</div>
            </div>
          </a>
        );
      })}
        </div>
    </div>
  );
}
