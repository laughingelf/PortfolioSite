import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-900 py-4">
            <div className="container mx-auto pr-4 flex justify-end items-center">
                <div className="sm:hidden">
                    <button
                        className="text-white hover:text-gray-300 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.293 4.293L12 11.586 4.707 4.293 3.293 5.707 11.586 14 3.293 22.293 4.707 23.707 12 16.414 19.293 23.707 20.707 22.293 13.414 14 20.707 6.707 19.293 5.293 12 12.586 4.707 5.293 3.293 6.707z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } sm:flex sm:space-x-4`}
                >
                    <HashLink
                        smooth
                        to="/#projects"
                        className="mx-1 text-white hover:text-gray-300 font-medium transition duration-300"
                    >
                        Projects
                    </HashLink>
                    <HashLink
                        smooth
                        to="/#technologies"
                        className="mx-1 text-white hover:text-gray-300 font-medium transition duration-300"
                    >
                        Technologies
                    </HashLink>
                    <HashLink
                        smooth
                        to="/#about-me"
                        className="mx-1 text-white hover:text-gray-300 font-medium transition duration-300"
                    >
                        About Me
                    </HashLink>
                    <HashLink
                        smooth
                        to="/#resume"
                        className="mx-1 text-white hover:text-gray-300 font-medium transition duration-300"
                    >
                        Resume
                    </HashLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
