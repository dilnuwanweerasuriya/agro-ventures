import React from 'react'
import { 
  Timer, 
  Package, 
  Thermometer, 
  Droplets,
  Clock,
  CheckCircle,
  Sparkles,
  TrendingUp
} from 'lucide-react'

const ProcessConditioning = () => {
  const stages = [
    {
      month: "Month 1-2",
      title: "Initial Conditioning",
      moisture: "25-30%",
      description: "Beans stored in paper-lined boxes, flavor compounds begin stabilizing"
    },
    {
      month: "Month 3-4",
      title: "Flavor Development",
      moisture: "20-25%",
      description: "Complex flavor notes develop, vanilla aroma intensifies significantly"
    },
    {
      month: "Month 5-6",
      title: "Final Maturation",
      moisture: "18-22%",
      description: "Optimal flavor profile achieved, beans ready for grading"
    }
  ]

  const flavorNotes = [
    { name: "Vanillin", percentage: 85, color: "amber" },
    { name: "Sweet Notes", percentage: 70, color: "yellow" },
    { name: "Woody Undertones", percentage: 45, color: "brown" },
    { name: "Floral Hints", percentage: 30, color: "pink" }
  ]

  const conditions = [
    { icon: Thermometer, label: "Temperature", value: "18-25°C", optimal: "Room temperature" },
    { icon: Droplets, label: "Humidity", value: "70-80%", optimal: "Controlled environment" },
    { icon: Package, label: "Storage", value: "Paper-lined boxes", optimal: "Breathable materials" },
    { icon: Clock, label: "Duration", value: "3-6 months", optimal: "Extended aging" }
  ]

  return (
    <section id="conditioning" className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-purple-50/50 to-transparent" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 rounded-full px-5 py-2.5 mb-6">
              <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
              <span className="text-sm font-semibold uppercase tracking-wider">Step Four</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Conditioning
              <span className="block text-purple-600">Flavor Maturation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              The conditioning phase is where patience pays off. Over 3-6 months, vanilla beans 
              develop their full complexity of flavors in controlled storage conditions.
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <div className="bg-linear-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
              <Timer className="w-10 h-10 mb-2" />
              <div className="text-3xl font-bold">3-6 Months</div>
              <div className="text-purple-100">Conditioning Period</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-purple-100 -translate-y-1/2 hidden md:block" />
            
            <div className="grid md:grid-cols-3 gap-8">
              {stages.map((stage, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
                      {stage.month}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{stage.title}</h4>
                    <p className="text-gray-600 mb-4">{stage.description}</p>
                    <div className="flex items-center text-purple-600 text-sm font-medium">
                      <Droplets className="w-4 h-4 mr-2" />
                      Moisture: {stage.moisture}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Flavor Development */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Flavor Development Profile</h3>
            <p className="text-gray-600">
              During conditioning, over 200 flavor compounds develop and mature, 
              creating vanilla's complex and beloved taste profile.
            </p>
            
            <div className="space-y-4">
              {flavorNotes.map((note, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">{note.name}</span>
                    <span className="text-purple-600 font-bold">{note.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        note.color === 'amber' ? 'bg-amber-500' :
                        note.color === 'yellow' ? 'bg-yellow-500' :
                        note.color === 'brown' ? 'bg-amber-700' :
                        'bg-pink-400'
                      }`}
                      style={{ width: `${note.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Vanillin Content */}
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                  <TrendingUp className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-800 mb-1">Vanillin Content Increases</h4>
                  <p className="text-purple-700 text-sm mb-2">
                    Well-conditioned beans achieve 2-2.5% vanillin content
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-500">Start: 1%</span>
                    <span className="text-purple-600 font-bold">→</span>
                    <span className="text-purple-700 font-semibold">End: 2.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image & Conditions */}
          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1631209121750-a9f656d26a5b?w=800&q=80"
                alt="Vanilla Conditioning"
                className="w-full h-87.5 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-purple-900/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                    <div>
                      <h4 className="font-bold text-gray-900">Premium Aging</h4>
                      <p className="text-gray-600 text-sm">Slow maturation for complex flavors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Storage Conditions */}
            <div className="grid grid-cols-2 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center">
                  <condition.icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-500">{condition.label}</div>
                  <div className="text-lg font-bold text-gray-900">{condition.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Conditioning Matters */}
        <div className="bg-linear-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Proper Conditioning Matters</h3>
              <p className="text-purple-100 leading-relaxed mb-6">
                Skipping or rushing the conditioning phase results in bland, one-dimensional 
                vanilla. Our extended conditioning allows enzymatic reactions to complete fully, 
                resulting in vanilla with exceptional depth and complexity.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Enhanced Aroma", "Complex Flavor", "Stable Quality", "Premium Grade"].map((item, index) => (
                  <span key={index} className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">200+</div>
                <div className="text-purple-200">Flavor Compounds Developed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessConditioning