import React from 'react';

const CourseDetails = () => (
    <div className="bg-slate-200 p-4 m-4 md:m-0">
        <div>
            <span className="font-semibold">Level</span> : Beginner
        </div>
        <div>
            <span className="font-semibold">Course Duration</span> : 3 Months
        </div>
        <div>
            <span className="font-semibold">Instruction Language</span> :
            Tamil
        </div>
        <div>
            <span className="font-semibold">Course Fee</span> : Free
        </div>
        <button className="w-full h-12 px-6 mt-5 text-gray-100 font-medium text-lg transition-colors duration-150 bg-slate-700 rounded-lg focus:shadow-outline hover:bg-slate-800">
            Enroll Now
        </button>
    </div>
);

export default CourseDetails;
