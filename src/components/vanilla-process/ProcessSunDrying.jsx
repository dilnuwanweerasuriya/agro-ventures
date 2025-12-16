import React from 'react'
import { 
  Sun, 
  Thermometer, 
  Clock, 
  Droplets,
  CheckCircle,
  AlertTriangle,
  ArrowRight
} from 'lucide-react'

const ProcessSunDrying = () => {
  const steps = [
    {
      step: 1,
      title: "Hot Water Bath (Killing)",
      duration: "2-3 minutes",
      temp: "60-65°C",
      description: "Beans are immersed in hot water to stop vegetative growth and initiate enzymatic processes"
    },
    {
      step: 2,
      title: "Sun Exposure",
      duration: "2-3 hours",
      temp: "Direct sunlight",
      description: "Beans are spread on blankets and exposed to direct sunlight for initial moisture reduction"
    },
    {
      step: 3,
      title: "Blanket Wrapping",
      duration: "Overnight",
      temp: "Retained heat",
      description: "Hot beans are wrapped in blankets to retain heat and begin the sweating process"
    }
  ]

  const dosDonts = {
    dos: [
      "Monitor temperature constantly",
      "Turn beans every 30 minutes",
      "Use clean, dark blankets",
      "Process on clear, sunny days",
      "Maintain consistent timing"
    ],
    donts: [
      "Over-expose to avoid burning",
      "Process during rain or humidity",
      "Use contaminated equipment",
      "Skip the hot water step",
      "Rush the process"
    ]
  }

  return (
    <section id="sun-drying" className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-50/50 to-transparent" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-700 rounded-full px-5 py-2.5 mb-6">
              <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <span className="text-sm font-semibold uppercase tracking-wider">Step Two</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Sun Drying
              <span className="block text-yellow-600">The Killing Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              The sun drying phase, also known as the "killing" process, is crucial for stopping 
              the bean's vegetative growth and initiating the enzymatic reactions that develop vanilla's flavor.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex space-x-4">
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 text-center">
              <Thermometer className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">60-65°C</div>
              <div className="text-gray-500 text-sm">Water Temp</div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 text-center">
              <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">2-3 hrs</div>
              <div className="text-gray-500 text-sm">Sun Exposure</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Process Steps */}
          <div className="space-y-6">
            {steps.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 font-bold">{item.step}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <div className="flex space-x-2">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.duration}
                        </span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full flex items-center">
                          <Thermometer className="w-3 h-3 mr-1" />
                          {item.temp}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <div className="w-0.5 h-6 bg-yellow-200" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right - Image & Info */}
          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
                alt="Sun Drying Vanilla"
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <Sun className="w-8 h-8 text-yellow-500" />
                    <div>
                      <h4 className="font-bold text-gray-900">Critical Temperature Control</h4>
                      <p className="text-gray-600 text-sm">Precise timing prevents over-drying</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Do's and Don'ts */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h4 className="font-bold text-green-800 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Best Practices
                </h4>
                <ul className="space-y-2">
                  {dosDonts.dos.map((item, index) => (
                    <li key={index} className="text-green-700 text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                <h4 className="font-bold text-red-800 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Avoid
                </h4>
                <ul className="space-y-2">
                  {dosDonts.donts.map((item, index) => (
                    <li key={index} className="text-red-700 text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Scientific Explanation */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          
          <div className="relative grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">The Science Behind Killing</h3>
              <p className="text-yellow-100 leading-relaxed mb-4">
                The hot water immersion serves multiple purposes: it ruptures cell walls, 
                releasing enzymes like β-glucosidase that convert glucovanillin into vanillin. 
                This process also kills the bean, stopping growth and preventing germination.
              </p>
              <p className="text-yellow-100 leading-relaxed">
                The subsequent sun exposure and sweating in blankets creates the ideal 
                conditions for these enzymatic reactions to continue, gradually developing 
                the complex flavor compounds that make vanilla so valuable.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30">
                <Droplets className="w-12 h-12 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">80% → 60%</div>
                <div className="text-yellow-200 text-sm">Moisture reduction in this phase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSunDrying