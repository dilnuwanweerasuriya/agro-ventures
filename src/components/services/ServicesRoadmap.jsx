import React, { useState } from 'react';
import { roadmapSteps, getColorClasses } from '../../data/content';

const ServicesRoadmap = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section id='services-roadmap' className="max-w-6xl mx-auto px-6 py-16" >
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
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-emerald-300 via-amber-300 to-rose-300 transform md:-translate-x-1/2 rounded-full"></div>

        {/* Steps */}
        <div className="space-y-12">
          {roadmapSteps.map((step, index) => (
            <div
              key={step.id}
              className={`relative flex flex-col md:flex-row items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <button
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  className={`w-16 h-16 rounded-full bg-linear-to-br ${getColorClasses(step.color, 'gradient')} 
                      flex items-center justify-center text-2xl shadow-lg ${getColorClasses(step.color, 'shadow')}
                      hover:scale-110 transition-all duration-300 cursor-pointer border-4 border-white`}
                >
                  <step.icon className="w-7 h-7 text-white" />
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
                  <div className={`overflow-hidden transition-all duration-500 ${activeStep === step.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
                      className={`w-4 h-4 transition-transform duration-300 ${activeStep === step.id ? 'rotate-180' : ''
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
    </section >
  );
};

export default ServicesRoadmap;