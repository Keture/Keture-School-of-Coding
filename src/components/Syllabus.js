import React, { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const Syllabus = () => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const accordionContent = [
        {
            title: "Session 1: Introduction to Programming",
            body: [
                "• How does a computer work?",
                "• What is Programming?",
                "• Programming Lang Types",
                "• Approach to a problem.",
                "• Introduction to Control Flow.",
                "• How do we approach a real-world problem using Flow Chart/Pusedo Code?"
            ]
        },
        {
            title: "Session 2: Getting Started with C - I",
            body: [
                "• Hello World",
                "• Keyword & Identifier",
                "• Variables & Constants",
                "• Data Types",
                "• Input/Output",
                "• Comments"
            ]
        },
        {
            title: "Session 3: Getting Started with C - II",
            body: [
                "• Operators",
                "• Practicals"
            ]
        },
        {
            title: "Session 4: Flow Control - I",
            body: [
                "• If…else",
                "• Switch…case",
                "• Ternary"
            ]
        },
        {
            title: "Session 5: Flow Control - II",
            body: [
                "• Nested if",
                "• Practicals"
            ]
        },
        {
            title: "Session 6: Flow Control - III",
            body: [
                "• For Loop",
                "• While Loop"
            ]
        },
        {
            title: "Session 7: Flow Control - IV",
            body: [
                "• Flow Controls - break, continue, and goto",
                "• Nested Loops"
            ]
        },
        {
            title: "Session 8: Functions - I",
            body: [
                "• Programming Functions",
                "• User-defined Functions",
                "• Function Types"
            ]
        },
        {
            title: "Session 9: Functions - II",
            body: [
                "• Recursion",
                "• Storage Class"
            ]
        },
        {
            title: "Session 10: Project I",
            body: [
                "• Practicals & Project"
            ]
        },
        {
            title: "Session 11: Arrays",
            body: [
                "• Arrays"
            ]
        },
        {
            title: "Session 12: Multi-dimensional Arrays",
            body: [
                "• Multi-dimensional Arrays"
            ]
        },
        {
            title: "Session 13: Arrays & Functions",
            body: [
                "• Arrays & Functions"
            ]
        },
        {
            title: "Session 14: Project II",
            body: [
                "• Practicals & Project"
            ]
        },
        {
            title: "Session 15: Strings",
            body: [
                "• String",
                "• String Functions"
            ]
        },
        {
            title: "Session 16: Pointers",
            body: [
                "• Pointers"
            ]
        },
        {
            title: "Session 17: Pointers & Arrays",
            body: [
                "• Pointers & Arrays"
            ]
        },
        {
            title: "Session 18: Pointers",
            body: [
                "• Pointers & Functions",
                "• Memory Allocation"
            ]
        },
        {
            title: "Session 19: Project III",
            body: [
                "• Practicals & Project"
            ]
        },
        {
            title: "Session 20: Structure",
            body: [
                "• Structure",
                "• Struct & Pointers"
            ]
        },
        {
            title: "Session 21: Structure - II",
            body: [
                "• Struct & Functions",
                "• Unions"
            ]
        },
        {
            title: "Session 22: Project - IV",
            body: [
                "• Practicals & Project"
            ]
        },
        {
            title: "Session 23: File Handling",
            body: []
        },
        {
            title: "Session 24: Project - V",
            body: []
        }
    ];

    return (
        <div className="my-20 px-4 lg:px-0">
            <div className="text-2xl font-black">Syllabus</div>
            <div>11 lessons • 12 projects • 8 quizzes</div>
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
