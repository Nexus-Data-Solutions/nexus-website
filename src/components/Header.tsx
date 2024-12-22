import React from 'react';
import { Network } from 'lucide-react';

const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-16 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="flex items-center gap-4 mb-4">
                <Network size={48} className="text-white" />
                <h1 className="text-4xl font-bold text-white">Nexus Data Solutions</h1>
            </div>
            <p className="text-xl text-white font-light">
                Empowering AI Through Human Intelligence
            </p>
            <p className="mt-4 text-lg text-white/80">
                Specialized in RLHF Data Labeling & AI Training
            </p>
        </div>
    );
};

export default Header;