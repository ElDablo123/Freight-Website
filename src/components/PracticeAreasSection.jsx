import { FileText, Scale, Truck } from 'lucide-react';

const colorScheme = {
  primary: 'bg-blue-800',
  accent: 'text-orange-400',
  hover: 'hover:bg-blue-700',
  cardBg: 'bg-indigo-50',
  iconBg: 'bg-orange-50',
  border: 'border-indigo-100'
};

const PracticeAreasSection = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Practice Areas of Expertise</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Freight Collections Card */}
        <div className={`bg-white p-8 rounded-lg shadow-lg border ${colorScheme.border}`}>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className={`w-16 h-16 ${colorScheme.iconBg} rounded-full flex items-center justify-center`}>
              <Truck className={`w-8 h-8 ${colorScheme.accent}`} />
            </div>
            <h3 className="text-xl font-semibold">Freight Collections</h3>
            <p className="text-gray-600">
              Specialized in recovering payments for trucking companies, freight brokers, and carriers
            </p>
            <button className={`${colorScheme.primary} text-white px-6 py-2 rounded-lg ${colorScheme.hover} transition-colors`}>
              Learn More
            </button>
          </div>
        </div>

        {/* Commercial Litigation Card */}
        <div className={`bg-white p-8 rounded-lg shadow-lg border ${colorScheme.border}`}>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className={`w-16 h-16 ${colorScheme.iconBg} rounded-full flex items-center justify-center`}>
              <Scale className={`w-8 h-8 ${colorScheme.accent}`} />
            </div>
            <h3 className="text-xl font-semibold">Commercial Litigation</h3>
            <p className="text-gray-600">
              Representing transportation companies in complex commercial disputes
            </p>
            <button className={`${colorScheme.primary} text-white px-6 py-2 rounded-lg ${colorScheme.hover} transition-colors`}>
              Learn More
            </button>
          </div>
        </div>

        {/* Contract Review Card */}
        <div className={`bg-white p-8 rounded-lg shadow-lg border ${colorScheme.border}`}>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className={`w-16 h-16 ${colorScheme.iconBg} rounded-full flex items-center justify-center`}>
              <FileText className={`w-8 h-8 ${colorScheme.accent}`} />
            </div>
            <h3 className="text-xl font-semibold">Contract Review</h3>
            <p className="text-gray-600">
              Reviewing and drafting transportation contracts to protect your interests
            </p>
            <button className={`${colorScheme.primary} text-white px-6 py-2 rounded-lg ${colorScheme.hover} transition-colors`}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreasSection; 