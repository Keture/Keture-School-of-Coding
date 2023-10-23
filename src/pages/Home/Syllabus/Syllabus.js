import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { accordionContent } from "./SyllabusData";

const Syllabus = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="my-10 p-4 bg-slate-50">
      <div>
        <span className="text-2xl font-black">Syllabus</span>
        <span className="mx-2">24 Sessions • 5 projects</span>
      </div>
      <hr className="h-[.05em] mb-8 mt-4 bg-slate-200 border-0 dark:bg-slate-700" />

      {accordionContent.map((item, index) => (
        <Accordion
          key={index}
          open={open === index + 1}
          className="mb-2 rounded-lg border border-slate-200 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(index + 1)}
            className={`border-b-0 text-slate-600 transition-colors text-lg font-bold ${
              open === index + 1 ? "text-slate-700 hover:!text-slate-700" : ""
            }`}
          >
            {item.title}
          </AccordionHeader>
          <AccordionBody className="pt-0 text-slate-700 font-normal text-base">
            <ul>
              {item.body.map((point, pointIndex) => (
                <li key={pointIndex} className="mb-2 flex items-center">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="#84cc16"
                    >
                      <path d="M21 8h-8l4-6h-6L3 14h7l-6 9L21 8Z"></path>
                    </svg>
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default Syllabus;
