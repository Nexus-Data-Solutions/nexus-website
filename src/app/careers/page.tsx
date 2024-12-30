'use client';

// src/app/careers/page.tsx
import React from 'react';
import {
    Brain,
    Globe,
    Clock,
    Trophy,
    ArrowRight
} from 'lucide-react';

const CareersPage = () => {
    const benefits = [
        {
            icon: <Globe className="w-8 h-8 text-blue-600" />,
            title: "Remote-First Culture",
            description: "Work from anywhere in the world with flexible hours"
        },
        {
            icon: <Brain className="w-8 h-8 text-purple-600" />,
            title: "Learning & Development",
            description: "Regular training sessions and skill development opportunities"
        },
        {
            icon: <Trophy className="w-8 h-8 text-amber-600" />,
            title: "Performance Recognition",
            description: "Rewards and bonuses for exceptional contributions"
        },
        {
            icon: <Clock className="w-8 h-8 text-green-600" />,
            title: "Flexible Hours",
            description: "Work-life balance with flexible scheduling"
        }
    ];

    const openings = [
        {
            title: "AI Trainer",
            type: "Full-time",
            location: "Remote",
            description: [
                "Work on cutting-edge AI model training data",
                "Evaluate and label AI model outputs",
                "Provide detailed feedback for model improvements",
                "Collaborate with AI researchers and engineers"
            ],
            requirements: [
                "Strong analytical skills",
                "Excellent attention to detail",
                "Good written and verbal communication",
                "Interest in AI and machine learning"
            ],
            applyLink: "https://apply.workable.com/nexus-data-solution-1/"
        },
        {
            title: "Senior Data Quality Analyst",
            type: "Full-time",
            location: "Remote",
            description: [
                "Lead quality assurance for data labeling projects",
                "Develop and implement QA processes",
                "Train and mentor junior annotators",
                "Report on quality metrics and improvements"
            ],
            requirements: [
                "3+ years in data quality or related field",
                "Experience with data labeling tools",
                "Strong leadership skills",
                "Statistical analysis background"
            ],
            applyLink: "https://apply.workable.com/nexus-data-solution-1/"
        },
        {
            title: "AI Project Manager",
            type: "Full-time",
            location: "Remote",
            description: [
                "Manage RLHF data labeling projects",
                "Coordinate with clients and internal teams",
                "Ensure project deliverables and timelines",
                "Optimize workflows and processes"
            ],
            requirements: [
                "5+ years project management experience",
                "Understanding of AI/ML concepts",
                "Excellent communication skills",
                "Experience with remote teams"
            ],
            applyLink: "https://apply.workable.com/nexus-data-solution-1/"
        }
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-12 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Join Our Mission to Shape AIs Future
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        Were looking for talented individuals passionate about improving AI through human feedback
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Join Nexus</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center justify-center mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 text-center">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
                    <div className="space-y-6">
                        {openings.map((job, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                                        <div className="flex gap-4">
                                            <span className="text-blue-600">{job.type}</span>
                                            <span className="text-gray-600">{job.location}</span>
                                        </div>
                                    </div>
                                    <a
                                        href={job.applyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 whitespace-nowrap"
                                    >
                                        Apply Now <ArrowRight size={16} />
                                    </a>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-semibold mb-3">Responsibilities:</h4>
                                        <ul className="space-y-2">
                                            {job.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2"></div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3">Requirements:</h4>
                                        <ul className="space-y-2">
                                            {job.requirements.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <div className="w-1 h-1 bg-purple-600 rounded-full mt-2"></div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application CTA */}
            <section className="py-20 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-4">Dont see the perfect role?</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Were always looking for talented individuals to join our team.
                        Send us your application and lets discuss how you can contribute to our mission.
                    </p>
                    <a
                        href="https://apply.workable.com/nexus-data-solution-1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors gap-2"
                    >
                        Apply Now <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </main>
    );
};

export default CareersPage;