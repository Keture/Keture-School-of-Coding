import React from 'react';

const SkillList = () => {
    const skills = [
        "Understand core programming ideas",
        "Write your own C programs",
        "Utilize pointers to interact with memory locations",
        "Create custom functions and structures"
    ];

    return (
        <div className="p-8 bg-gray-100 rounded-md w-1/2 mx-auto">
            <h2 className="text-2xl font-bold mb-4">Skills you'll gain</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index} className="mb-2 flex items-center">
                        <span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span>{skill}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SkillList;
