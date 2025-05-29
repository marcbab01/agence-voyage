import React from 'react'

const Hero = () => {
    <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel,vacation')" }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Adventure Begins Here</h1>
            <p className="text-lg md:text-2xl mb-6 max-w-2xl">
                Discover unforgettable vacations crafted just for you. Explore the world with ease and confidence.
            </p>
        </div>
    </section>
};

export default Hero;