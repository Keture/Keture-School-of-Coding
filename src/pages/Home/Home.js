
import React, { useState } from "react";
import { Header, Instructor, Footer } from "../../components";
import CourseIntro from "./CourseIntro";
import CourseDetails from "./CourseDetails";
import Syllabus from "./Syllabus/Syllabus";
import SkillList from "./SkillList";

function Home() {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <div className="container max-w-3xl mx-auto mt-16 text-slate-700">
                <Header />
                <CourseIntro />
                <div className="md:grid grid-cols-3 mt-10 gap-4 md:px-4 lg:px-0">
                    <CourseDetails />
                    <Instructor />
                </div>
                <Syllabus open={open} handleOpen={handleOpen} />
                <SkillList />
            </div>
            <Footer />
        </>
    );
}

export default Home;