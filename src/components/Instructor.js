import React from 'react';
import mith from '../assets/images/mith.png';


const Instructor = () => (
    <div className="col-span-2 grid grid-cols-4 p-4 md:p-0">
        <div className="col-span-3 flex justify-center items-center">
            <div>
                <div className="text-xl">Course Instructor</div>
                <div className="text-xl font-black">
                    Rajamiththiran Varatharajan
                </div>
                <div className="text-md">
                    BSc (Honours) in Software Engineering
                </div>
                <div className="text-sm">Universtiy of Kelaniya Srilanka</div>
                <a className="text-md" href="mailto:rajamithiran.keture.com@gmail.com">rajamithiran.keture.com@gmail.com</a>
            </div>
        </div>
        <div>
            <img className="block w-auto" src={mith} alt="Workflow" />
        </div>
    </div>
);

export default Instructor;
