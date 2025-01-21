import React from 'react';
import { Construction } from 'lucide-react';
import FeatureSection2 from 'src/components/construction/contact.jsx';



const ConstructionOverlay = () => {
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Blur overlay */}
      <div className="fixed inset-0 bg-white/30 backdrop-blur-md"></div>
      
      {/* Content */}
      <div className="relative min-h-screen py-8 flex items-center justify-center">
        <div className="relative z-10 bg-white p-4 sm:p-8 rounded-xl shadow-2xl w-full max-w-lg mx-4 my-8">
          <div className="flex justify-center mb-6">
            <Construction className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-500" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl text-center font-bold text-gray-800 mb-4">
            Under Construction
          </h2>
          
          <p className="text-gray-600 -mb-12 text-center">
            We're working hard to bring you something amazing. Our new website will be ready soon!
          </p>
          <div>
            <FeatureSection2   />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionOverlay;