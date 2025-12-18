import React, { useState } from 'react';

const ServicesRoadmap = () => {
  const [activeStep, setActiveStep] = useState(null);

  const roadmapSteps = [
    {
      id: 1,
      phase: 'Discovery',
      title: 'Finding Clients',
      icon: '🔍',
      color: 'emerald',
      description: 'Identifying and connecting with potential buyers worldwide',
      details: [
        'Market research & analysis',
        'B2B platform outreach',
        'Trade show participation',
        'Digital marketing campaigns',
        'Referral network building'
      ],
      duration: '2-4 weeks'
    },
    {
      id: 2,
      phase: 'Negotiation',
      title: 'Agreement & Contract',
      icon: '📝',
      color: 'blue',
      description: 'Establishing terms, pricing, and legal documentation',
      details: [
        'Price negotiation',
        'Quality specifications',
        'Payment terms setup',
        'Contract drafting',
        'Compliance verification'
      ],
      duration: '1-2 weeks'
    },
    {
      id: 3,
      phase: 'Sourcing',
      title: 'Vanilla Procurement',
      icon: '🌱',
      color: 'amber',
      description: 'Sourcing premium vanilla from certified farmers',
      details: [
        'Farmer partnership coordination',
        'Quality inspection',
        'Grading & sorting',
        'Organic certification check',
        'Inventory management'
      ],
      duration: '2-3 weeks'
    },
    {
      id: 4,
      phase: 'Processing',
      title: 'Curing & Packaging',
      icon: '📦',
      color: 'orange',
      description: 'Processing and preparing vanilla for export',
      details: [
        'Traditional curing process',
        'Moisture content testing',
        'Vacuum sealing',
        'Custom packaging',
        'Labeling & barcoding'
      ],
      duration: '1-2 weeks'
    },
    {
      id: 5,
      phase: 'Logistics',
      title: 'Distribution & Shipping',
      icon: '🚢',
      color: 'purple',
      description: 'Managing logistics and international shipping',
      details: [
        'Export documentation',
        'Customs clearance',
        'Freight forwarding',
        'Cold chain management',
        'Real-time tracking'
      ],
      duration: '2-6 weeks'
    },
    {
      id: 6,
      phase: 'Support',
      title: 'After Service',
      icon: '🤝',
      color: 'rose',
      description: 'Ongoing support and relationship management',
      details: [
        'Delivery confirmation',
        'Quality feedback collection',
        'Issue resolution',
        'Reorder management',
        'Long-term partnership building'
      ],
      duration: 'Ongoing'
    }
  ];

  const getColorClasses = (color, type) => {
    const colors = {
      emerald: {
        bg: 'bg-emerald-500',
        bgLight: 'bg-emerald-50',
        border: 'border-emerald-500',
        text: 'text-emerald-600',
        gradient: 'from-emerald-400 to-emerald-600',
        shadow: 'shadow-emerald-200'
      },
      blue: {
        bg: 'bg-blue-500',
        bgLight: 'bg-blue-50',
        border: 'border-blue-500',
        text: 'text-blue-600',
        gradient: 'from-blue-400 to-blue-600',
        shadow: 'shadow-blue-200'
      },
      amber: {
        bg: 'bg-amber-500',
        bgLight: 'bg-amber-50',
        border: 'border-amber-500',
        text: 'text-amber-600',
        gradient: 'from-amber-400 to-amber-600',
        shadow: 'shadow-amber-200'
      },
      orange: {
        bg: 'bg-orange-500',
        bgLight: 'bg-orange-50',
        border: 'border-orange-500',
        text: 'text-orange-600',
        gradient: 'from-orange-400 to-orange-600',
        shadow: 'shadow-orange-200'
      },
      purple: {
        bg: 'bg-purple-500',
        bgLight: 'bg-purple-50',
        border: 'border-purple-500',
        text: 'text-purple-600',
        gradient: 'from-purple-400 to-purple-600',
        shadow: 'shadow-purple-200'
      },
      rose: {
        bg: 'bg-rose-500',
        bgLight: 'bg-rose-50',
        border: 'border-rose-500',
        text: 'text-rose-600',
        gradient: 'from-rose-400 to-rose-600',
        shadow: 'shadow-rose-200'
      }
    };
    return colors[color][type];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-amber-900 via-amber-800 to-stone-900 text-white py-16 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl">🌿</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Vanilla Exports
            </h1>
          </div>
          <p className="text-center text-amber-200 text-lg md:text-xl max-w-2xl mx-auto">
            Your Premium Partner for Madagascar Vanilla — From Farm to Global Markets
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { value: '50+', label: 'Countries Served' },
              { value: '1000+', label: 'Partner Farmers' },
              { value: '99%', label: 'On-time Delivery' },
              { value: '15+', label: 'Years Experience' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-amber-300">{stat.value}</div>
                <div className="text-sm text-amber-100/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Roadmap Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Services Roadmap
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            A seamless journey from finding the right clients to delivering exceptional after-service support
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-300 via-amber-300 to-rose-300 transform md:-translate-x-1/2 rounded-full"></div>

          {/* Steps */}
          <div className="space-y-12">
            {roadmapSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <button
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${getColorClasses(step.color, 'gradient')} 
                      flex items-center justify-center text-2xl shadow-lg ${getColorClasses(step.color, 'shadow')}
                      hover:scale-110 transition-all duration-300 cursor-pointer border-4 border-white`}
                  >
                    {step.icon}
                  </button>
                </div>

                {/* Content Card */}
                <div className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300
                      border-2 ${activeStep === step.id ? getColorClasses(step.color, 'border') : 'border-transparent'}
                      ${activeStep === step.id ? 'scale-105' : 'hover:scale-102'}`}
                  >
                    {/* Phase Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3
                      ${getColorClasses(step.color, 'bgLight')} ${getColorClasses(step.color, 'text')}`}>
                      <span className="w-2 h-2 rounded-full bg-current"></span>
                      Phase {step.id}: {step.phase}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-stone-800 mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-stone-600 mb-4">
                      {step.description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-stone-500 mb-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Duration: {step.duration}</span>
                    </div>

                    {/* Details List */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      activeStep === step.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-stone-100">
                        <h4 className="text-sm font-semibold text-stone-700 mb-3">Key Activities:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-stone-600">
                              <svg className={`w-4 h-4 ${getColorClasses(step.color, 'text')}`} 
                                fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" 
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                                  clipRule="evenodd" />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Expand Button */}
                    <button
                      onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                      className={`mt-4 text-sm font-medium ${getColorClasses(step.color, 'text')} 
                        hover:underline flex items-center gap-1`}
                    >
                      {activeStep === step.id ? 'Show Less' : 'Learn More'}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeStep === step.id ? 'rotate-180' : ''
                        }`} 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-stone-900 via-amber-900 to-stone-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Vanilla Journey?
          </h2>
          <p className="text-amber-200 mb-8 text-lg">
            Partner with us for premium Madagascar vanilla, delivered with excellence at every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold 
              rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg 
              hover:shadow-amber-500/25 hover:scale-105">
              Get Started Today
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-400 font-semibold 
              rounded-xl hover:bg-amber-400 hover:text-stone-900 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-stone-800 text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🌍', title: 'Global Reach', desc: 'Export to 50+ countries worldwide' },
            { icon: '✅', title: 'Quality Assured', desc: 'Premium Grade A vanilla only' },
            { icon: '🔒', title: 'Secure Payments', desc: 'Multiple payment options available' },
            { icon: '📞', title: '24/7 Support', desc: 'Dedicated account managers' }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow 
              border border-stone-100 text-center group hover:-translate-y-1 duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-bold text-stone-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-stone-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🌿</span>
            <span className="text-white font-bold text-lg">Vanilla Exports</span>
          </div>
          <p className="text-sm">
            © 2024 Vanilla Exports. Premium Madagascar Vanilla for Global Markets.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ServicesRoadmap;