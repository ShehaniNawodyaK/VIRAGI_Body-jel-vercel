// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <Header />
            <Hero />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Add other routes here */}
                <Route path="/shop" element={<div>Shop Page</div>} />
                <Route path="/blog" element={<div>Blog Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
                <Route path="/our-story" element={<div>Our Story Page</div>} />
            </Routes>
        </Router>
    );
}

export default App;


