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
      <div className="container max-w-3xl mx-auto mt-16 text-slate-700">
        <div className=" text-center">
          <div className=" text-xl font-black tracking-wide">Keture</div>
          <div className="tracking-[.15em]">School of Coding</div>
        </div>
        <hr className=" h-[.05em] mb-8 mt-4 bg-slate-200 border-0 dark:bg-slate-700"></hr>
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
        <div className="md:grid grid-cols-3 mt-10 gap-4 md:px-4 lg:px-0">
          <div className="bg-slate-200 p-4 m-4 md:m-0">
            <div>
              <span className=" font-semibold">Level</span> : Beginner
            </div>
            <div>
              <span className=" font-semibold">Course Duration</span> : 3 Months
            </div>
            <div>
              <span className=" font-semibold">Instruction Language</span> :
              Tamil
            </div>
            <div>
              <span className=" font-semibold">Course Fee</span> : Free
            </div>
            <button class="w-full h-12 px-6 mt-5 text-gray-100 font-medium text-lg transition-colors duration-150 bg-slate-700 rounded-lg focus:shadow-outline hover:bg-slate-800">
              Enroll Now
            </button>
          </div>
          <div className="col-span-2 grid grid-cols-4 p-4 md:p-0">
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
        <div className="my-20 px-4 lg:px-0">
          <div className=" text-2xl font-black">Syllabus</div>
          <div className="">11 lessons • 12 projects • 8 quizzes</div>
          <hr className=" h-[.05em] mb-8 mt-4 bg-slate-200 border-0 dark:bg-slate-700"></hr>
          <Accordion
            open={open === 1}
            className="mb-2 rounded-lg border border-slate-200 px-4 "
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 text-slate-600 transition-colors text-lg font-medium ${
                open === 1 ? "text-slate-700 hover:!text-slate-700" : ""
              }`}
            >
              1. What is Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-slate-700 font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            className="mb-2 rounded-lg border border-slate-200 px-4 "
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 text-slate-600 transition-colors text-lg font-medium ${
                open === 2 ? "text-slate-700 hover:!text-slate-700" : ""
              }`}
            >
              2. What is Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-slate-700 font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            className="mb-2 rounded-lg border border-slate-200 px-4 "
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 text-slate-600 transition-colors text-lg font-medium ${
                open === 3 ? "text-slate-700 hover:!text-slate-700" : ""
              }`}
            >
              3. What is Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-slate-700 font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            className="mb-2 rounded-lg border border-slate-200 px-4 "
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`border-b-0 text-slate-600 transition-colors text-lg font-medium ${
                open === 4 ? "text-slate-700 hover:!text-slate-700" : ""
              }`}
            >
              4. What is Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-slate-700 font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          

        </div>
      </div>

      <footer class="bg-white dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
