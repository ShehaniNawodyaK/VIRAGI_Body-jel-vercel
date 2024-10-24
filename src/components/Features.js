const Features = () => {
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-700">Natural Ingredients</h3>
              <p className="mt-4 text-gray-600">Our products are made with 100% natural ingredients, free from harmful chemicals.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-700">Cruelty-Free</h3>
              <p className="mt-4 text-gray-600">We are committed to never testing our products on animals.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-700">Eco-Friendly Packaging</h3>
              <p className="mt-4 text-gray-600">Our packaging is sustainable and 100% recyclable.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  
