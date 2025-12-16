import React from 'react'
import { 
  Wind, 
  Moon, 
  Sun, 
  Thermometer,
  Clock,
  CheckCircle,
  RefreshCw,
  Eye
} from 'lucide-react'

const ProcessShadeDrying = () => {
  const dailyCycle = [
    {
      time: "Morning",
      icon: Sun,
      activity: "Sun Exposure",
      duration: "2-3 hours",
      description: "Beans spread on racks in morning sunlight for gentle warming"
    },
    {
      time: "Afternoon",
      icon: Wind,
      activity: "Shade Rest",
      duration: "Rest period",
      description: "Moved to shaded area to prevent overheating during peak sun"
    },
    {
      time: "Night",
      icon: Moon,
      activity: "Sweating",
      duration: "12-14 hours",
      description: "Wrapped in blankets inside wooden boxes to sweat overnight"
    }
  ]

  const indicators = [
    { label: "Color Change", value: "Green → Dark Brown", description: "Beans develop rich brown color" },
    { label: "Flexibility", value: "Soft & Pliable", description: "Beans become flexible without breaking" },
    { label: "Aroma", value: "Sweet Vanilla", description: "Characteristic scent develops" },
    { label: "Moisture", value: "30-35%", description: "Target moisture content" }
  ]

  return (
    <section id="shade-drying" className="section-padding bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-5 py-2.5 mb-6">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <span className="text-sm font-semibold uppercase tracking-wider">Step Three</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Shade Drying
            <span className="block text-blue-600">The Sweating Process</span>
          </h2>
          <p className="text-lg text-gray-600">
            Over 2-3 weeks, beans undergo a daily cycle of sun exposure and nighttime sweating, 
            slowly developing their signature flavor and aroma through careful moisture control.
          </p>
        </div>

        {/* Daily Cycle */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">The Daily Cycle</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {dailyCycle.map((phase, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    phase.time === 'Morning' ? 'bg-yellow-100' :
                    phase.time === 'Afternoon' ? 'bg-blue-100' :
                    'bg-indigo-100'
                  }`}>
                    <phase.icon className={`w-8 h-8 ${
                      phase.time === 'Morning' ? 'text-yellow-600' :
                      phase.time === 'Afternoon' ? 'text-blue-600' :
                      'text-indigo-600'
                    }`} />
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      phase.time === 'Morning' ? 'bg-yellow-100 text-yellow-700' :
                      phase.time === 'Afternoon' ? 'bg-blue-100 text-blue-700' :
                      'bg-indigo-100 text-indigo-700'
                    }`}>
                      {phase.time}
                    </span>
                    <span className="text-gray-400 text-sm">{phase.duration}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{phase.activity}</h4>
                  <p className="text-gray-600">{phase.description}</p>
                </div>

                {/* Connector Arrow */}
                {index < dailyCycle.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 w-6 h-6 items-center justify-center z-10">
                    <RefreshCw className="w-5 h-5 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Cycle Note */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 flex items-center justify-center">
              <RefreshCw className="w-4 h-4 mr-2" />
              This cycle repeats daily for 2-3 weeks
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80"
                alt="Shade Drying"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>

            {/* Progress Badge */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">Moisture Reduction</h4>
                  <p className="text-gray-600 text-sm">Gradual drying over 2-3 weeks</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">60% → 30%</div>
                  <div className="text-gray-500 text-sm">Target range</div>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '50%' }} />
              </div>
            </div>
          </div>

          {/* Right - Indicators */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Quality Indicators</h3>
            <p className="text-gray-600">
              During shade drying, trained experts monitor multiple indicators to determine 
              when beans are ready to move to the conditioning phase.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {indicators.map((indicator, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-2 mb-2">
                    <Eye className="w-5 h-5 text-blue-600" />
                    <h4 className="font-bold text-gray-900">{indicator.label}</h4>
                  </div>
                  <div className="text-lg font-semibold text-blue-600 mb-1">{indicator.value}</div>
                  <p className="text-gray-500 text-sm">{indicator.description}</p>
                </div>
              ))}
            </div>

            {/* Expert Note */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-2">Expert Insight</h4>
              <p className="text-blue-700">
                The sweating process is where the magic happens. The alternating heat and 
                moisture cycles activate enzymes that convert precursor compounds into 
                vanillin and hundreds of other flavor compounds.
              </p>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Critical Success Factors</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Thermometer, title: "Temperature", value: "35-40°C", desc: "During sweating" },
              { icon: Clock, title: "Duration", value: "2-3 Weeks", desc: "Daily cycles" },
              { icon: Wind, title: "Ventilation", value: "Controlled", desc: "Prevent mold" },
              { icon: Eye, title: "Inspection", value: "Daily", desc: "Quality check" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900">{item.title}</h4>
                <div className="text-lg font-semibold text-blue-600">{item.value}</div>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessShadeDrying