import React from 'react';

const Homepage = () => {
    return (
        <section
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?vacation,beach')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Discover Your Next Adventure
                </h1>
                <p className="text-lg md:text-2xl mb-6 max-w-2xl">
                    Plan the perfect escape with our all-inclusive vacation packages tailored just for you.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a
                        href="#packages"
                        className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
                    >
                        Browse Packages
                    </a>
                    <a
                        href="#contact"
                        className="bg-white bg-opacity-20 hover:bg-opacity-30 border border-white text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Homepage;