import React from 'react';

const CourseIntro = () => (
    <div className="md:grid grid-cols-4 mt-10">
        <div className="flex align-middle justify-center">
            <span className="material-symbols-sharp text-9xl">terminal</span>
        </div>
        <div className="col-span-3 px-4">
            <div className="text-4xl font-black">Programming Basics</div>
            <div className="mt-2 text-sm text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
            </div>
        </div>
    </div>
);

export default CourseIntro;
