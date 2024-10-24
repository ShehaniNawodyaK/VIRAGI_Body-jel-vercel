const Hero = () => {
    const heroStyle = {
        backgroundImage: "url('https://www.google.com/imgres?q=aloe%20vera%20tree%20image%20jpg&imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fvibrant-green-aloe-vera-plant-against-white-background-composition-minimalistic-modern-aloe-vera-plant-324089314.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Faloe-vera-plant.html&docid=yQah60RlJjMLuM&tbnid=2bTlFXpiUEEXgM&vet=12ahUKEwjxg7Hoy6aJAxXYSGwGHYvlK-4QM3oECBcQAA..i&w=800&h=533&hcb=2&ved=2ahUKEwjxg7Hoy6aJAxXYSGwGHYvlK-4QM3oECBcQAA')", // Link to your image
        backgroundSize: "cover", // Cover the entire area
        backgroundPosition: "center", // Center the image
        height: "100vh", // Full height of the viewport
    };

    return (
        <section style={heroStyle} className="flex items-center justify-center">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-20 text-white">
                <div className="max-w-md text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">Embrace The Green Revolution</h1>
                    <p className="mt-4 text-lg">Hydrating Aloe Vera Body Gel</p>
                    <p className="mt-4">Experience the pure, refreshing benefits of aloe vera for healthier, hydrated skin.</p>
                    <div className="mt-8">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md mr-4">
                            Shop Now
                        </button>
                        <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-2 rounded-md">
                            Our Story
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

