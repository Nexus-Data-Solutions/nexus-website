import React from 'react';
import { Calendar, Clock, Video, Users } from 'lucide-react';

const Appointment = () => {
    return (
        <section id="appointment" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold">Schedule a Consultation</h2>
                            <p className="text-xl text-gray-600">
                                Discuss your AI training needs with our experts and discover how we can help improve your models
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Video className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Virtual Consultation</h3>
                                    <p className="text-gray-600">In-depth discussion of your project requirements</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Users className="w-6 h-6 text-purple-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Expert Team</h3>
                                    <p className="text-gray-600">Meet with our specialized AI training consultants</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-green-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Flexible Timing</h3>
                                    <p className="text-gray-600">Schedule at your convenience across time zones</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <form className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Company</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your Company Name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Preferred Date</label>
                                    <input
                                        type="date"
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Project Description</label>
                                    <textarea
                                        className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Tell us about your project and requirements..."
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <Calendar className="w-5 h-5" />
                                Schedule Consultation
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;