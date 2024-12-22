// src/components/HeroSection.tsx
import React from 'react';
import { ArrowRight, Brain, Network, Users } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="relative w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 py-12 gap-8">
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

                <div className="lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl opacity-50" />

                    <div className="relative grid grid-cols-2 gap-4 p-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <Brain className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="font-semibold">AI Training</h3>
                            <p className="text-sm text-gray-600">Enhanced machine learning through quality data</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg mt-8">
                            <Users className="w-12 h-12 text-purple-600 mb-4" />
                            <h3 className="font-semibold">Human Feedback</h3>
                            <p className="text-sm text-gray-600">Expert labeling teams</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <Network className="w-12 h-12 text-green-600 mb-4" />
                            <h3 className="font-semibold">Data Quality</h3>
                            <p className="text-sm text-gray-600">Rigorous validation processes</p>
                        </div>

                        <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden">
                            <img
                                src="/api/placeholder/400/320"
                                alt="AI Visualization"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;