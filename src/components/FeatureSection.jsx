import { useState } from 'react';
import { Scale, FileText, TrendingUp, Truck } from 'lucide-react';
import { Phone, MapPin, Mail } from 'lucide-react';

// Color scheme options that can be switched
const colorSchemes = {
  deepBlueGold: {
    primary: 'bg-blue-800',
    accent: 'text-orange-400',
    hover: 'hover:bg-blue-700',
    cardBg: 'bg-indigo-50',
    iconBg: 'bg-orange-50',
    border: 'border-indigo-100'
  },
  emeraldCopper: {
    primary: 'bg-emerald-800',
    accent: 'text-rose-600',
    hover: 'hover:bg-emerald-700',
    cardBg: 'bg-emerald-50',
    iconBg: 'bg-rose-50',
    border: 'border-emerald-100'
  },
  plumGold: {
    primary: 'bg-purple-900',
    accent: 'text-yellow-500',
    hover: 'hover:bg-purple-800',
    cardBg: 'bg-purple-50',
    iconBg: 'bg-yellow-50',
    border: 'border-purple-100'
  },
  maroonSilver: {
    primary: 'bg-red-900',
    accent: 'text-gray-400',
    hover: 'hover:bg-red-800',
    cardBg: 'bg-red-50',
    iconBg: 'bg-gray-100',
    border: 'border-red-100'
  }
};

const FeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  // Can be changed to any of the color schemes above
  const colors = colorSchemes.deepBlueGold;

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
    
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
        
          <h2 className="text-3xl font-bold text-black text-center mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-center mb-12">Industry-leading expertise in transportation collections</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${colors.cardBg} p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                  activeFeature === index ? 'shadow-lg' : 'shadow'
                }`}
                onMouseEnter={() => setActiveFeature(activeFeature)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-3 ${colors.iconBg} rounded-full shadow-sm`}>
                    <div className={colors.accent}>{feature.icon}</div>
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
                    <span className={`font-semibold ${colors.accent}`}>
                      {feature.stats}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Practice Areas Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Practice Areas of Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Freight Collections Card */}
              <div className={`bg-white p-8 rounded-lg shadow-lg border ${colors.border}`}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 ${colors.iconBg} rounded-full flex items-center justify-center`}>
                    <Truck className={`w-8 h-8 ${colors.accent}`} />
                  </div>
                  <h3 className="text-xl font-semibold">Freight Collections</h3>
                  <p className="text-gray-600">
                    Specialized in recovering payments for trucking companies, freight brokers, and carriers
                  </p>
                  <button className={`${colors.primary} text-white px-6 py-2 rounded-lg ${colors.hover} transition-colors`}>
                    Learn More
                  </button>
                </div>
              </div>

              {/* Commercial Litigation Card */}
              <div className={`bg-white p-8 rounded-lg shadow-lg border ${colors.border}`}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 ${colors.iconBg} rounded-full flex items-center justify-center`}>
                    <Scale className={`w-8 h-8 ${colors.accent}`} />
                  </div>
                  <h3 className="text-xl font-semibold">Commercial Litigation</h3>
                  <p className="text-gray-600">
                    Representing transportation companies in complex commercial disputes
                  </p>
                  <button className={`${colors.primary} text-white px-6 py-2 rounded-lg ${colors.hover} transition-colors`}>
                    Learn More
                  </button>
                </div>
              </div>

              {/* Contract Review Card */}
              <div className={`bg-white p-8 rounded-lg shadow-lg border ${colors.border}`}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 ${colors.iconBg} rounded-full flex items-center justify-center`}>
                    <FileText className={`w-8 h-8 ${colors.accent}`} />
                  </div>
                  <h3 className="text-xl font-semibold">Contract Review</h3>
                  <p className="text-gray-600">
                    Reviewing and drafting transportation contracts to protect your interests
                  </p>
                  <button className={`${colors.primary} text-white px-6 py-2 rounded-lg ${colors.hover} transition-colors`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
                    {/* Contact Section */}
                    <div className="bg-white py-16">
                      <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12">
                          <div>
                            <h2 className="text-3xl font-bold text-black mb-6">Contact Us</h2>
                            <div className="space-y-4">
                              <div className="flex items-center space-x-4">
                                <MapPin className="h-6 w-6 text-orange-500" />
                                <span className='text-black'>801 Travis Street, Suite 2101 #1422
                                Houston, TX 77002</span>
                              </div>
                              <div className="flex items-center space-x-4">
                                <Phone className="h-6 w-6 text-orange-500" />
                                <span className='text-black'>(346) 574-3483</span>
                              </div>
                              <div className="flex items-center space-x-4">
                                <Mail className="h-6 w-6 text-orange-500" />
                                <span className='text-black'>company@freight-cs.com</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <form className="space-y-4">
                              <input 
                                type="text" 
                                placeholder="Your Name"
                                className="w-full p-3 border border-slate-300 rounded-lg"
                              />
                              <input 
                                type="email" 
                                placeholder="Your Email"
                                className="w-full p-3 border border-slate-300 rounded-lg"
                              />
                              <textarea 
                                placeholder="Your Message"
                                className="w-full p-3 border border-slate-300 rounded-lg"
                                rows= {4}
                              ></textarea>
                              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 w-full">
                                Send Message
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

              
            
          </div>
        </div>
      </div>
  );
};

export default FeatureSection;