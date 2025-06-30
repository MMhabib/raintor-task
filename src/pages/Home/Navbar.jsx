import React, { useState } from 'react';

const Navbar = () => {
    // State to manage whether the mobile menu is open or not
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu's open/close state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="mb-20">
            <header
                className="flex items-center justify-between px-4 py-8 font-bold text-[1.125rem] tracking-tight"
                role="banner"
            >
                {/* Logo */}
                <div className="text-4xl font-extrabold ">
                    <a href="#home">DEVLOP.ME</a>
                </div>

                {/* Desktop Navigation */}
                <nav
                    className="hidden md:flex items-center gap-8 font-medium"
                    role="navigation"
                    aria-label="Primary navigation"
                >
                    <a href="#home" className="text-black transition-colors duration-300 hover:text-emerald-500">
                        Home
                    </a>
                    <a href="#about" className="text-black transition-colors duration-300 hover:text-emerald-500">
                        About
                    </a>
                    <a href="#" className="text-black transition-colors duration-300 hover:text-emerald-500">
                        Portfolio
                    </a>
                    <a href="#" className="text-black transition-colors duration-300 hover:text-emerald-500">
                        Blog
                    </a>
                    <button
                        className="flex items-center gap-2 px-5 py-2 border-[1.5px] border-black rounded-full font-medium text-[0.95rem] hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300"
                        aria-label="Start a new project"
                    >
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                        Start Project
                    </button>
                </nav>

                {/* Mobile Menu Button (Hamburger) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
                        {isMenuOpen ? (
                            // Close (X) Icon
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger Icon
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu (conditionally rendered) */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-24 left-0 w-full bg-white z-20 shadow-lg">
                    <nav
                        className="flex flex-col items-center gap-6 py-8"
                        role="navigation"
                        aria-label="Mobile navigation"
                    >
                        <a href="#home" className="text-black hover:text-emerald-500" onClick={toggleMenu}>
                            Home
                        </a>
                        <a href="#about" className="text-black hover:text-emerald-500" onClick={toggleMenu}>
                            About
                        </a>
                        <a href="#" className="text-black hover:text-emerald-500" onClick={toggleMenu}>
                            Portfolio
                        </a>
                        <a href="#" className="text-black hover:text-emerald-500" onClick={toggleMenu}>
                            Blog
                        </a>
                        <button
                            className="flex items-center gap-2 px-5 py-2 mt-4 border-[1.5px] border-black rounded-full font-medium text-[0.95rem] hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition"
                            aria-label="Start a new project"
                            onClick={toggleMenu}
                        >
                            Start Project
                        </button>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Navbar;
