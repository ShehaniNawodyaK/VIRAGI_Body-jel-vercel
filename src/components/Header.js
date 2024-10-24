// src/components/Header.js
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-green-600 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">VIRAGI</div>
                <nav className="space-x-4">
                    <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                    <Link to="/shop" className="text-white hover:text-gray-200">Shop</Link>
                    <Link to="/blog" className="text-white hover:text-gray-200">Blog</Link>
                    <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
                    <Link to="/our-story" className="text-white hover:text-gray-200">Our Story</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;


  
