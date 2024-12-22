'use client';

// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        {
            name: 'Services',
            href: '#services',
            dropdownItems: [
                { name: 'RLHF Data Labeling', href: '#rlhf' },
                { name: 'AI Training', href: '#ai-training' },
                { name: 'Quality Assurance', href: '#qa' },
                { name: 'Custom Solutions', href: '#custom' }
            ]
        },
        {
            name: 'About',
            href: '#about',
            dropdownItems: [
                { name: 'Our Mission', href: '#mission' },
                { name: 'Team', href: '#team' },
                { name: 'Process', href: '#process' }
            ]
        },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <>
            <div className="h-20"></div>

            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Updated Logo Section */}
                        <Link href="/" className="flex items-center space-x-3">
                            <Image
                                src="/logo.png"
                                alt="Nexus Data Solutions Logo"
                                width={100}  // Adjust this value as needed
                                height={100} // Keep same as width for square aspect ratio
                                className="h-16 w-auto" // This controls the displayed size
                                priority
                            />
                            <span className="text-xl font-bold text-gray-900 whitespace-nowrap">
                                Nexus Data Solutions
                            </span>
                        </Link>

                        {/* Rest of the header code remains the same */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <div key={item.name} className="relative group">
                                    <Link
                                        href={item.href}
                                        className="text-gray-600 hover:text-blue-600 transition-colors py-2 flex items-center gap-1"
                                    >
                                        {item.name}
                                        {item.dropdownItems && <ChevronDown className="w-4 h-4" />}
                                    </Link>

                                    {item.dropdownItems && (
                                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                            {item.dropdownItems.map((dropdownItem) => (
                                                <Link
                                                    key={dropdownItem.name}
                                                    href={dropdownItem.href}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                >
                                                    {dropdownItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <a
                                href="https://calendly.com/ismail-nexusdatasolution/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Schedule Demo
                            </a>
                        </nav>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>

                    {/* Mobile menu code remains the same */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-100">
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <div key={item.name} className="space-y-2">
                                        <Link
                                            href={item.href}
                                            className="text-gray-600 hover:text-blue-600 block py-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>

                                        {item.dropdownItems && (
                                            <div className="pl-4 space-y-2">
                                                {item.dropdownItems.map((dropdownItem) => (
                                                    <Link
                                                        key={dropdownItem.name}
                                                        href={dropdownItem.href}
                                                        className="text-gray-500 hover:text-blue-600 block py-1"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {dropdownItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <a
                                    href="https://calendly.com/ismail-nexusdatasolution/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Schedule Demo
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;