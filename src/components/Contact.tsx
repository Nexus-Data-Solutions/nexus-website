'use client';

// src/components/Contact.tsx
import React from 'react';
import { Mail, Calendar } from 'lucide-react';

const Contact = () => {
    const handleEmailClick = () => {
        // Prepare email parameters
        const email = 'contact@nexusdatasolution.org';
        const subject = 'Inquiry about RLHF Data Services';

        // Create mailto link
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    };

    const handleScheduleClick = () => {
        window.open('https://calendly.com/ismail-nexusdatasolution/30min', '_blank');
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-xl text-gray-600">
                        Ready to enhance your AI with quality human feedback? Contact us today.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-blue-600" />
                            <a
                                href="mailto:contact@nexusdatasolution.org"
                                className="text-lg hover:text-blue-600 transition-colors"
                            >
                                contact@nexusdatasolution.org
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <Calendar className="w-6 h-6 text-blue-600" />
                            <a
                                href="https://calendly.com/ismail-nexusdatasolution/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg hover:text-blue-600 transition-colors"
                            >
                                Schedule a Meeting
                            </a>
                        </div>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6">Lets Connect</h3>
                        <div className="space-y-4">
                            <button
                                onClick={handleScheduleClick}
                                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Schedule a Consultation
                            </button>

                            <button
                                onClick={handleEmailClick}
                                className="block w-full bg-gray-100 text-gray-700 text-center py-3 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Send Email
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;