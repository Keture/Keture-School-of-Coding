import React, { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { accordionContent } from './SyllabusData';

const Syllabus = () => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="my-20 px-4 lg:px-0">
            <div className="text-2xl font-black">Syllabus</div>
            <div>24 Sessions • 5 projects</div>
            <hr className="h-[.05em] mb-8 mt-4 bg-slate-200 border-0 dark:bg-slate-700" />

            {accordionContent.map((item, index) => (
                <Accordion key={index}
                    open={open === index + 1}
                    className="mb-2 rounded-lg border border-slate-200 px-4"
                >
                    <AccordionHeader
                        onClick={() => handleOpen(index + 1)}
                        className={`border-b-0 text-slate-600 transition-colors text-lg font-medium ${open === index + 1 ? "text-slate-700 hover:!text-slate-700" : ""}`}
                    >
                        {item.title}
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-slate-700 font-normal">
                        <ul>
                            {item.body.map((point, pointIndex) => (
                                <li key={pointIndex}>{point}</li>
                            ))}
                        </ul>
                    </AccordionBody>
                </Accordion>
            ))}

        </div>
    );
}

export default Syllabus;
