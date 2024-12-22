'use client';

import React from 'react';
import { ArrowRight, Brain, Users, Network } from 'lucide-react';

const HeroSection = () => {
    const cards = [
        {
            icon: <Brain className="w-12 h-12 text-blue-600" />,
            title: "AI Training",
            description: "Enhanced machine learning through quality data"
        },
        {
            icon: <Users className="w-12 h-12 text-purple-600" />,
            title: "Human Feedback",
            description: "Expert labeling teams"
        },
        {
            icon: <Network className="w-12 h-12 text-green-600" />,
            title: "Data Quality",
            description: "Rigorous validation processes"
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 100 100">
                    <circle cx="30" cy="30" r="20" fill="#4F46E5" opacity="0.7" />
                    <circle cx="70" cy="70" r="20" fill="#7C3AED" opacity="0.7" />
                    <circle cx="70" cy="30" r="20" fill="#2563EB" opacity="0.7" />
                    <line x1="30" y1="30" x2="70" y2="70" stroke="#4F46E5" strokeWidth="4" opacity="0.5" />
                    <line x1="70" y1="30" x2="30" y2="30" stroke="#4F46E5" strokeWidth="4" opacity="0.5" />
                    <line x1="70" y1="30" x2="70" y2="70" stroke="#4F46E5" strokeWidth="4" opacity="0.5" />
                </svg>
            ),
            title: "AI Visualization",
            description: "Interactive data representation"
        }
    ];

    return (
        // Add pt-20 to account for fixed header height and additional spacing
        <div className="relative w-full bg-white">
            {/* Add top padding to create space below the header */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 py-32 gap-12">
                {/* Left Content */}
                <div className="lg:w-1/2 space-y-6">
                    <h1 className="text-5xl font-bold text-gray-900">
                        Shaping the Future of AI Through Human Insight
                    </h1>
                    <p className="text-xl text-gray-600">
                        Expert RLHF data labeling services that bridge human intelligence with artificial intelligence
                    </p>
                    <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Get Started <ArrowRight size={20} />
                    </button>
                </div>

                {/* Right Visual Section - Card Grid */}
                <div className="lg:w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start h-full"
                            >
                                <div className="mb-4">{card.icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                                <p className="text-sm text-gray-600">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;