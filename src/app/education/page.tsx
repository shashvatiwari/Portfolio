import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            July 2021 - 2025
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Technology, <br /> UIET CSJMU
              Kanpur
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I am currently pursuing Bachelor of Technology in the field of Computer Science and Engineering from University Institute of Engineering and Technology of Kanpur.
              The program has provided me with a well-rounded education, covering both theoretical foundations and practical applications of computer science.
            </p>
          </FramerWrapper>
        </div>
      </div>
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Experience
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>Ops Mantra</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            Aug 2023 - Oct 2023
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Web Developer Intern
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
            ● Developed and deployed multiple websites for clients, ensuring high-quality design and functionality. <br />
            ● Collaborated with the team to gather requirements, create project plans, and meet project deadlines.
            </p>
          </FramerWrapper>
        </div>
        </div>
      <div className="flex flex-col gap-3">
        <Heading>AG Technology </Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            Apr 2024 - July 2024
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Software Engineer Intern, <br /> Backend Devloper (NodeJs)
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
            ● Developed and maintained scalable and secure APIs using Node.js, integrating them with MySQL databases. <br />
            ● Created dynamic and responsive user interfaces with React.js and EJS, ensuring seamless interaction with backend services.

            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
