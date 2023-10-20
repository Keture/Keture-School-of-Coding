import React from 'react';

const CourseIntro = () => (
    <div className="md:grid grid-cols-4 mt-10">
        <div className="flex align-middle justify-center">
            <span className="material-symbols-sharp text-9xl">terminal</span>
        </div>
        <div className="col-span-3 px-4">
            <div className="text-4xl font-black">Programming Basics</div>
            <div className="mt-2 text-sm text-justify">
                Programming isn't just about writing code. It's about solving problems and creating efficient solutions. This course is designed for beginners and will cover the foundational topics that every programmer should know. By the end of this course, students will have a solid understanding of programming basics and will be ready to delve into more advanced topics or specific programming languages. We use C as our programming language for this course, as C is often considered the "mother of languages" and it is a good place to start for beginners.
            </div>
        </div>
    </div>
);

export default CourseIntro;
