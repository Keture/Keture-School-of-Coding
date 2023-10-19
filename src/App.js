import mith from "./assets/images/mith.png";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function App() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="container max-w-3xl mx-auto mt-20 text-slate-700">
        <div className=" text-center">
          <div className=" text-xl font-black tracking-wide">Keture</div>
          <div className="tracking-[.15em]">School of Coding</div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-slate-700 mx-4"></hr>
        <div className="md:grid grid-cols-4 mt-10">
          <div className=" flex align-middle justify-center">
            <span className="material-symbols-sharp text-9xl">terminal</span>
          </div>
          <div className="col-span-3 px-4">
            <div className="text-4xl font-black">Programming Basics</div>
            <div className=" mt-2 text-sm text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3 mt-10 gap-4">
          <div className="bg-lime-200 p-4 m-4 md:m-0">
            <div>
              <span className=" font-semibold">Level</span> : Beginner
            </div>
            <div>
              <span className=" font-semibold">Course Duration</span> : 3 Months
            </div>
            <div>
              <span className=" font-semibold">Instruction Language</span> : Tamil
            </div>
            <div>
              <span className=" font-semibold">Course Fee</span> : Free
            </div>
            <button class="w-full h-12 px-6 mt-5 text-gray-100 font-medium text-lg transition-colors duration-150 bg-slate-700 rounded-lg focus:shadow-outline hover:bg-slate-800">Enroll Now</button>
          </div>
          <div className="col-span-2 grid grid-cols-4">
            <div className="col-span-3 flex justify-center items-center">
              <div>
                <div className="text-xl">Meet the Instructor</div>
                <div className="text-xl font-black">
                  Rajamiththiran Varatharajan
                </div>
                <div className="text-md">
                  BSc (Honours) in Software Engineering
                </div>
                <div className="text-sm">Universtiy of Kelaniya Srilanka</div>
                <div className="text-md">rajamithiran.keture.com@gmai.com</div>
              </div>
            </div>
            <div>
              <img className="block w-auto" src={mith} alt="Workflow" />
            </div>
          </div>
        </div>
        <div className="my-20">
          
        <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>

        </div>
      </div>
    </>
  );
}

export default App;
