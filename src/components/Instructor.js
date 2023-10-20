import React from 'react';
import mith from '../assets/images/mith.png';


const Instructor = () => (
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
);

export default Instructor;
