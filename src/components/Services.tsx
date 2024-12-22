import React from 'react';
import {
    Brain,
    Users,
    BarChart,
    Shield,
    Database,
    LineChart,
    BookOpen,
    Target
} from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Brain className="w-12 h-12 text-blue-600" />,
            title: "RLHF Data Labeling",
            description: "Expert human feedback for training and fine-tuning large language models, ensuring optimal performance and alignment."
        },
        {
            icon: <Database className="w-12 h-12 text-purple-600" />,
            title: "Dataset Creation",
            description: "Custom dataset development for specific AI training needs, including specialized domain knowledge and multilingual capabilities."
        },
        {
            icon: <LineChart className="w-12 h-12 text-green-600" />,
            title: "Model Evaluation",
            description: "Comprehensive AI model assessment through structured human feedback and detailed performance metrics."
        },
        {
            icon: <Shield className="w-12 h-12 text-red-600" />,
            title: "AI Safety & Ethics",
            description: "Ensuring responsible AI development through careful evaluation of model outputs and bias detection."
        },
        {
            icon: <Users className="w-12 h-12 text-indigo-600" />,
            title: "Expert Annotation Teams",
            description: "Specialized teams with domain expertise for high-quality data annotation and validation."
        },
        {
            icon: <BookOpen className="w-12 h-12 text-cyan-600" />,
            title: "Training Data QA",
            description: "Rigorous quality assurance processes ensuring the highest standards of data accuracy."
        },
        {
            icon: <BarChart className="w-12 h-12 text-amber-600" />,
            title: "Analytics & Reporting",
            description: "Detailed insights and metrics on model improvement and training data quality."
        },
        {
            icon: <Target className="w-12 h-12 text-pink-600" />,
            title: "Custom Solutions",
            description: "Tailored RLHF solutions for specific industry needs and use cases."
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive AI training and evaluation services to enhance your models performance
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;