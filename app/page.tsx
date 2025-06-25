import { greeting } from "@/lib/helper";
import Image from "next/image";
import { content } from  '../lib/constants'
import { Button } from "@/components/ui/button";
import GitHubCalendar from 'react-github-calendar';
import { FaGithub } from "react-icons/fa";

export default function Home() {
  
  return (
    <>
    <main className="flex flex-col items-center justify-center h-auto min-h-[90vh]">
      <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center w-full">
      <div className="w-1/2 flex justify-center">
        <Image className="rounded-full" src={'/Dikshith.jpeg'} height={280} width={280} alt="profile picture" priority={false} />
      </div>
      <div className="flex-1 flex-col space-y-4 justify-center px-5 md:pr-32">
        <h2 className="text-xl md:text-2xl font-medium">{`Good ${greeting()} 👋`}</h2>
        <h1 className="text-2xl md:text-3xl font-semibold">{content.home.title}</h1>
        <p className="text-lg text-justify">{content.home.description}</p>
        <div className="hidden md:flex md:flex-col">
        <div className="flex items-center gap-2">
          <FaGithub className="text-2xl" />
          <p>Stats</p>
        </div>
        <GitHubCalendar style={{
          width: '100%',
          marginTop: '20px',
          marginBottom: '20px',
          overflowX: 'hidden'
        }} colorScheme="light" username="dikshithvishnu" />
        </div>
        <Button className="bg-primary dark:text-white dark:bg-primary">
          <a href={'/Dikshith Vishnuvardhan - Resume.pdf'} download>
            Download Resume
          </a>
        </Button>
      </div>
      </div>
    </main>
    </>
  );
}
