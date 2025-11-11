import React, { useState, useEffect } from 'react';
import { Page } from '../App';

interface HeaderProps {
    currentPage: Page;
    onNavigate: (page: Page) => void;
}

const HamburgerIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
);

const CloseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);


const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => { setIsScrolled(window.scrollY > 10); };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = (page: Page) => {
        onNavigate(page);
        setIsMenuOpen(false);
    }
    
    const navItems: { page: Page; label: string }[] = [
        { page: 'inicio', label: 'Inicio' },
        { page: 'guia-padres', label: 'Guía para padres' },
        { page: 'etapas', label: 'Etapas de la piel' },
        { page: 'recomendaciones', label: 'Recomendaciones' },
        { page: 'aprende-jugando', label: 'Aprende jugando' },
        { page: 'blog', label: 'Blog' },
    ];

    return (
        <header className={`sticky top-0 z-40 transition-shadow duration-300 ${isScrolled ? 'shadow-md bg-cream/95 backdrop-blur-sm' : 'bg-cream'}`}>
            <div className="border-t-2 border-lilac"></div>
            <nav className="max-w-5xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
                <button className="font-display text-2xl text-coral" onClick={() => handleNav('inicio')}>
                    Brillo Propio
                </button>
                
                {/* Desktop Nav */}
                <ul className="hidden md:flex justify-center items-center space-x-8">
                    {navItems.map(item => (
                        <li key={item.page}>
                            <button
                                onClick={() => handleNav(item.page)}
                                className={`group relative font-body font-semibold text-navy-blue transition-colors duration-300 hover:text-coral focus:outline-none py-1`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-0.5 left-0 block h-[3px] bg-lilac transition-all duration-300 ${currentPage === item.page ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-navy-blue focus:outline-none z-50 relative">
                        {isMenuOpen ? <CloseIcon className="w-6 h-6"/> : <HamburgerIcon className="w-6 h-6"/>}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-cream/95 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 shadow-lg' : 'max-h-0'}`}>
                <ul className="flex flex-col items-center space-y-4 py-6">
                    {navItems.map(item => (
                        <li key={item.page}>
                            <button
                                onClick={() => handleNav(item.page)}
                                className={`font-body font-semibold text-xl ${currentPage === item.page ? 'text-coral' : 'text-navy-blue'}`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;