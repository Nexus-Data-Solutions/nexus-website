import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Get in Touch</h3>
                        <p className="text-gray-600">Ready to enhance your AI with quality human feedback? Contact us today.</p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="text-blue-600" />
                                <span>contact@nexusdatasolutions.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-blue-600" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="text-blue-600" />
                                <span>Your Business Address</span>
                            </div>
                        </div>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input type="text" className="w-full p-3 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input type="email" className="w-full p-3 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea className="w-full p-3 border rounded-lg h-32"></textarea>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;