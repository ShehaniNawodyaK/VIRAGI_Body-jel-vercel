// src/components/Navigation.js

function Navigation() {
    return (
        <nav className="bg-black text-white py-4 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">VIRAGI</div>
                <div className="flex-grow">
                    <ul className="flex justify-center space-x-4">
                        <li><a href="#" className="hover:text-green-500">Home</a></li>
                        <li><a href="#" className="bg-black text-white hover:bg-gray-800 px-2 py-1 rounded">Shop Now</a></li>
                        <li><a href="#" className="hover:text-green-500">Blog</a></li>
                        <li><a href="#" className="hover:text-green-500">Contact</a></li>
                        <li><a href="#" className="bg-black text-white hover:bg-gray-800 px-2 py-1 rounded">Our Story</a></li>
                    </ul>
                </div>
                <div className="flex items-center space-x-4"> {/* Added a container for icons */}
                    <a href="#" className="text-white hover:text-green-500">
                        <i className="fas fa-search"></i> {/* Search Icon */}
                    </a>
                    <a href="#" className="text-white hover:text-green-500">
                        <i className="fas fa-shopping-cart"></i> {/* Cart Icon */}
                    </a>
                    <a href="#" className="text-white hover:text-green-500">
                        <i className="fas fa-th"></i> {/* App Menu Icon */}
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;











