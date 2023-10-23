import React from 'react';

const PageNotFound = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-gray-800">
                <div className="texto max-w-8xl mx-auto px-2 bg-gray-800">
                    <h1 className="ke font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600 over">
                        404
                    </h1>
                    <h1>
                        <span className="container">
                            <span>Go back to <a href="https://soc.keture.com" className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600 over">soc.keture.com</a></span>
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;