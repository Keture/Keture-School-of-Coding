import React from 'react';

const Footer = () => (
    <footer className="bg-white dark:bg-slate-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-slate-500 sm:text-center dark:text-slate-400">
                © 2023 {' '}
                <a href="https://keture.com/" className="hover:underline">
                    Keture Ltd
                </a>
                . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-slate-500 dark:text-slate-400 sm:mt-0">
                <li>
                    <a href="https://keture.com/privacy-policy" className="mr-4 hover:underline md:mr-6">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Keture/Keture-School-of-Coding/blob/main/LICENSE" className="mr-4 hover:underline md:mr-6">
                        Licensing
                    </a>
                </li>
                <li>
                    <a href="mailto:keture.com@gmail.com" className="hover:underline">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </footer>
);

export default Footer;
