import Image from "next/image";
import Link from "next/link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  FileTextIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: 'home'
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8]

const projects = {
  "Rizz AI" : {
    img : "/images/rizz-ai.png",
    link : "https://hetvit27.github.io/freelancer-theme/"
  },
  "Gaucho Racing" : {
    img : "/images/gaucho-racing.jpeg",
    link : "https://gauchoracing.com/"
  },
}

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
        <div className="flex flex-col items-start w-2/3 gap-10">
          <div className="text-5xl">Hi, I'm Bailey.</div>
          <div className="">I'm a second-year CS student at UCSB. I dabble with full-stack, AI, embedded systems, game development, etc. There will be more to come...</div>
        </div>
        <div className="flex flex-col items-center">
          <Image 
            src="/images/moonberry.png"
            alt="moonberry"
            width={1000}
            height={500}
          />
          <div className="text-sm">Bailey finally gets the Celeste moonberry after about 12 hours on one screen.</div>
        </div>
        <hr className="bg-white w-2/3"/>
        <div className="flex flex-col items-center gap-10 w-5/6">
          <div>Check out my work:</div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 justify-items-center items-center gap-10">
            {Object.entries(projects).map(([name, {img, link}]) => {
              return (
                /* Turn this div into a Link later */
                <Link key={name} href={link} target="_blank" rel="noopener">
                    <div className={`flex flex-col justify-center border-1 w-45 h-45 items-center relative group`}>
                      <Image 
                        src={img}
                        alt={name}
                        width={200}
                        height={200}
                        className="object-cover opacity-60 flex-grow"
                      /> 
                      <div className="absolute bottom-20 group-hover:line-through">{name}</div>
                    </div>
                </Link>
              )
            })}
          </div>
        </div>
        <hr className="bg-white w-2/3"/>
        <div className="flex flex-col items-center gap-10">
          <div>Contact me:</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {Object.entries(icons).map(([name, { href, image }]) => {
            return (
              <Link key={name} href={href} target="_blank" rel="noopener">
                <div className="flex flex-col gap-5 p-5 items-center hover:line-through">
                  {image}
                  <div className="">{name}</div>
                </div>
              </Link>
            );
          })}
          </div>
        </div>
    </div>
  );
}
