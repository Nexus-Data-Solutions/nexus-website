import React from 'react';
import { Check, Award, Zap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">About Nexus Data Solutions</h2>
                            <p className="text-xl text-gray-600 mb-8">
                                We are pioneering the future of AI development through expert human feedback and data labeling services. Our mission is to enhance AI models' performance, safety, and reliability.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <Check className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Expert Teams</h3>
                                    <p className="text-gray-600">Specialized professionals with deep understanding of AI and machine learning</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-2 rounded-lg">
                                    <Award className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Quality Assurance</h3>
                                    <p className="text-gray-600">Rigorous processes ensuring the highest standards of data quality</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <Zap className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Fast Turnaround</h3>
                                    <p className="text-gray-600">Efficient workflows delivering results quickly without compromising quality</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h4 className="text-4xl font-bold text-blue-600 mb-2">500+</h4>
                                <p className="text-gray-600">Projects Completed</p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-xl">
                                <h4 className="text-4xl font-bold text-purple-600 mb-2">100%</h4>
                                <p className="text-gray-600">Client Satisfaction</p>
                            </div>
                        </div>

                        <div className="space-y-6 mt-12">
                            <div className="bg-green-50 p-6 rounded-xl">
                                <h4 className="text-4xl font-bold text-green-600 mb-2">50+</h4>
                                <p className="text-gray-600">Expert Annotators</p>
                            </div>

                            <div className="bg-amber-50 p-6 rounded-xl">
                                <h4 className="text-4xl font-bold text-amber-600 mb-2">24/7</h4>
                                <p className="text-gray-600">Support Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;