// src/components/Hero.js

import { useEffect, useState } from 'react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/assets/background_image_1.jpg",
        "/assets/background_image_2.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    const heroStyle = {
        backgroundImage: `url(${slides[currentSlide]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        transition: "background-image 1s ease-in-out",
    };

    const gelSectionStyle = {
        backgroundImage: "url(/assets/background_image_3.jpg)", // Adding background_image_3
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 0", // Increased padding for more space
        color: "black", // Set text color to black
    };

    const productsSectionStyle = {
        backgroundImage: "url(/assets/background_image_4.jpg)", // Adding background_image_4
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 0",
        color: "black", // Set text color to black for this section
    };

    return (
        <section>
            <div style={heroStyle} className="relative flex items-center justify-center">
                <div className="container mx-auto flex justify-end pr-10"> {/* Positions the content to the right */}
                    <div className="max-w-md text-right"> {/* Aligns text and buttons to the right */}
                        <h1 className="text-4xl md:text-5xl font-bold text-black">Embrace The Green Revolution</h1>
                        <div className="mt-8">
                            <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-md mr-4">
                                Shop Now
                            </button>
                            <button className="bg-black hover:bg-gray-800 text-white border border-black px-6 py-2 rounded-md">
                                Our Story
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slide Navigation Buttons */}
                <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
                    <button
                        onClick={prevSlide}
                        className="bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100"
                    >
                        &#10094; {/* Left arrow icon */}
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100"
                    >
                        &#10095; {/* Right arrow icon */}
                    </button>
                </div>
            </div>

            {/* New Section for Viragi Body Gel */}
            <div style={gelSectionStyle}>
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold">Viragi Body Gel</h2>
                    <p className="mt-4 text-lg text-black">
                        <strong>Revitalize and hydrate your skin with the soothing power of aloe vera. Experience the cooling and anti-inflammatory properties of our natural gel formula made from 99% aloe vera extract for added hydration and a healthier complexion.</strong>
                    </p>
                    {/* Add the price here */}
                    <p className="mt-4 text-2xl font-bold text-black">$28.99</p>
                    {/* Shop Now Button in the Gel Section */}
                    <div className="mt-8">
                        <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-md">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            {/* New Section for Products Information */}
            <div style={productsSectionStyle}>
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold"> <strong>...Viragi products...</strong></h2>
                    <p className="mt-4 text-lg font-bold text-black"> {/* Change this to black */}
                        <strong>The power of aloe vera</strong>
                    </p>
                    <div className="mt-4 text-md text-black flex justify-center space-x-4"> {/* Centered items in a row */}
                        <div className="flex items-center font-bold">
                            <span className="mr-2">➤</span> {/* Arrow bullet */}
                            <span>Hydrating</span>
                        </div>
                        <div className="flex items-center font-bold">
                            <span className="mr-2">➤</span> {/* Arrow bullet */}
                            <span>Healing</span>
                        </div>
                        <div className="flex items-center font-bold">
                            <span className="mr-2">➤</span> {/* Arrow bullet */}
                            <span>Nourishing</span>
                        </div>
                    </div>
                    <p className="mt-4 text-md font-bold text-black"> {/* Change this to black */}
                        <strong>We proudly source locally grown aloe vera from Sri Lankan farmers with commendable manufacturing practices, contributing to their economic growth and fostering sustainable agriculture.</strong>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;














