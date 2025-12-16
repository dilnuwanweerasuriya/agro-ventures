import React from 'react'
import { 
  Leaf, 
  Sun, 
  Wind, 
  Timer, 
  Award,
  Clock,
  ArrowRight
} from 'lucide-react'

const ProcessTimeline = () => {
  const timeline = [
    {
      step: 1,
      name: "Sourcing",
      icon: Leaf,
      duration: "Day 1",
      timeframe: "Harvest",
      color: "green",
      description: "Hand-picked at optimal maturity"
    },
    {
      step: 2,
      name: "Sun Drying",
      icon: Sun,
      duration: "2-3 Hours",
      timeframe: "Day 1-2",
      color: "yellow",
      description: "Killing & initial drying"
    },
    {
      step: 3,
      name: "Shade Drying",
      icon: Wind,
      duration: "2-3 Weeks",
      timeframe: "Week 1-3",
      color: "blue",
      description: "Daily sweating cycles"
    },
    {
      step: 4,
      name: "Conditioning",
      icon: Timer,
      duration: "3-6 Months",
      timeframe: "Month 1-6",
      color: "purple",
      description: "Flavor development"
    },
    {
      step: 5,
      name: "Sorting",
      icon: Award,
      duration: "Final Stage",
      timeframe: "Month 6-9",
      color: "amber",
      description: "Grading & packaging"
    }
  ]

  const getColorClass = (color, type) => {
    const classes = {
      green: { bg: 'bg-green-500', light: 'bg-green-100', text: 'text-green-600', border: 'border-green-500' },
      yellow: { bg: 'bg-yellow-500', light: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-500' },
      blue: { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-500' },
      purple: { bg: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-500' },
      amber: { bg: 'bg-amber-500', light: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-500' }
    }
    return classes[color][type]
  }

  return (
    <section className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-white rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm border border-white/20">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold uppercase tracking-wider">Complete Timeline</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            6-9 Months of
            <span className="block text-amber-400">Careful Craftsmanship</span>
          </h2>
          <p className="text-lg text-gray-300">
            From harvest to final product, every step is meticulously executed to ensure 
            the highest quality vanilla reaches your hands.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-green-500 via-yellow-500 to-amber-500 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid lg:grid-cols-5 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                  {/* Timeline Dot */}
                  <div className={`hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 ${getColorClass(item.color, 'bg')} rounded-full items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-sm">{item.step}</span>
                  </div>

                  {/* Mobile Step Number */}
                  <div className={`lg:hidden w-10 h-10 ${getColorClass(item.color, 'bg')} rounded-full flex items-center justify-center mb-4`}>
                    <span className="text-white font-bold">{item.step}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 ${getColorClass(item.color, 'light')} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-7 h-7 ${getColorClass(item.color, 'text')}`} />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-bold text-white mb-1">{item.name}</h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-2 py-1 ${getColorClass(item.color, 'light')} ${getColorClass(item.color, 'text')} text-xs font-semibold rounded-full`}>
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                  <span className="text-gray-500 text-xs">{item.timeframe}</span>
                </div>

                {/* Connector Arrow */}
                {index < timeline.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 h-6 items-center justify-center z-10">
                    <ArrowRight className="w-5 h-5 text-gray-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4">
            <div className="text-left">
              <div className="text-white/60 text-sm">Total Process Duration</div>
              <div className="text-2xl font-bold text-white">6-9 Months</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-left">
              <div className="text-white/60 text-sm">Quality Result</div>
              <div className="text-2xl font-bold text-amber-400">Premium Grade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline