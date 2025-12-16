import React from 'react'
import { 
  Leaf, 
  MapPin, 
  Calendar, 
  CheckCircle, 
  Users,
  ThumbsUp,
  Eye,
  Scissors,
  ArrowRight
} from 'lucide-react'

const ProcessSourcing = () => {
  const criteria = [
    {
      icon: Calendar,
      title: "Optimal Timing",
      description: "Beans harvested 8-9 months after pollination when tips turn yellow"
    },
    {
      icon: Eye,
      title: "Visual Inspection",
      description: "Each bean individually inspected for color, size, and maturity"
    },
    {
      icon: Scissors,
      title: "Careful Harvesting",
      description: "Hand-picked using specialized techniques to prevent damage"
    },
    {
      icon: ThumbsUp,
      title: "Quality Selection",
      description: "Only beans meeting our strict criteria are selected for processing"
    }
  ]

  const sources = [
    { region: "Kerala", specialty: "Wayanad Vanilla", percentage: 40 },
    { region: "Karnataka", specialty: "Coorg Vanilla", percentage: 30 },
    { region: "Tamil Nadu", specialty: "Nilgiri Vanilla", percentage: 20 },
    { region: "Northeast", specialty: "Assam Vanilla", percentage: 10 }
  ]

  return (
    <section id="sourcing" className="section-padding bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-green-100/30 to-transparent" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 rounded-full px-5 py-2.5 mb-6">
              <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <span className="text-sm font-semibold uppercase tracking-wider">Step One</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Sourcing
              <span className="block text-green-600">Premium Beans</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              The journey to exceptional vanilla begins with careful sourcing. We partner with 
              experienced farmers across India's best vanilla-growing regions to hand-select 
              only the finest beans.
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Partner Farmers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
                alt="Vanilla Sourcing"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
            </div>
            
            {/* Info Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-xs">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Fresh Harvest</h4>
                  <p className="text-gray-600 text-sm">Beans processed within 24 hours of harvest</p>
                </div>
              </div>
            </div>

            {/* Location Badge */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="text-gray-900 font-medium text-sm">Direct from Farms</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            {/* Criteria Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {criteria.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Key Points */}
            <div className="bg-green-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Why Sourcing Matters</h4>
              <div className="space-y-3">
                {[
                  "Quality of raw beans directly affects final vanilla flavor",
                  "Proper maturity ensures optimal vanillin development",
                  "Direct farmer relationships guarantee traceability",
                  "Sustainable practices support local communities"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Source Regions */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Sourcing Regions</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sources.map((source, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#16a34a"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${source.percentage * 2.51} 251`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-900">{source.percentage}%</span>
                  </div>
                </div>
                <h4 className="font-bold text-gray-900">{source.region}</h4>
                <p className="text-gray-500 text-sm">{source.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSourcing