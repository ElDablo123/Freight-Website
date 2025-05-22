import { useState } from 'react';
import { Scale, FileText, TrendingUp, Truck } from 'lucide-react';

const colorScheme = {
  primary: 'bg-blue-800',
  accent: 'text-orange-400',
  hover: 'hover:bg-blue-700',
  cardBg: 'bg-indigo-50',
  iconBg: 'bg-orange-50',
  border: 'border-indigo-100'
};

const WhyChooseUsSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: <Scale className="w-12 h-12" />,
      title: "Legal Collections Excellence",
      description: "Specialized in transportation industry collections with over 7 years of experience and $20M+ recovered for clients.",
      stats: "1,700+ Cases Closed",
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Transportation Industry Focus",
      description: "Deep understanding of freight and logistics collection challenges, serving carriers nationwide.",
      stats: "Nationwide Coverage",
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Comprehensive Solutions",
      description: "From demand letters to litigation, we handle every aspect of the collection process.",
      stats: "End-to-End Service",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Proven Results",
      description: "High success rate in recovering outstanding payments for transportation companies.",
      stats: "90%+ Success Rate",
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-black text-center mb-4">Why Choose Us</h2>
      <p className="text-gray-600 text-center mb-12">Industry-leading expertise in transportation collections</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${colorScheme.cardBg} p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
              activeFeature === index ? 'shadow-lg' : 'shadow'
            }`}
            onMouseEnter={() => setActiveFeature(index)}
            onMouseLeave={() => setActiveFeature(null)}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className={`p-3 ${colorScheme.iconBg} rounded-full shadow-sm`}>
                <div className={colorScheme.accent}>{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
              <div className={`transform transition-all duration-300 ${
                activeFeature === index ? 'scale-110' : 'scale-100'
              }`}>
                <span className={`font-semibold ${colorScheme.accent}`}>
                  {feature.stats}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSection; 