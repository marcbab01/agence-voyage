import React from 'react';

const About = () => {
    return (
        <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">About Our Agency</h2>

                <p className="text-lg leading-relaxed mb-6">
                    At <span className="font-semibold">Wanderlust Travel Co.</span>, we believe that travel should be exciting, easy, and unforgettable.
                    With a passion for exploration and a dedication to service, our agency helps clients plan dream vacations across the globe — whether it's
                    a relaxing beach escape, a thrilling adventure, or a cultural getaway.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                    Our experienced team carefully curates each package to meet your preferences and budget. We handle all the details — from flights and
                    accommodations to guided tours — so you can focus on making memories that last a lifetime.
                </p>

                <p className="text-lg leading-relaxed">
                    With years of experience, strong industry partnerships, and a personalized approach to planning, we’re proud to be a trusted travel
                    partner for families, couples, solo travelers, and groups. Let us turn your travel dreams into reality.
                </p>
            </div>
        </section>
    );
};

export default About;