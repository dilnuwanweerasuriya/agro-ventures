import React, { useState } from 'react'
import { 
  Users, 
  Sun, 
  Droplets, 
  Thermometer,
  Calendar,
  Hand,
  Package,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  Play,
  ArrowRight
} from 'lucide-react'

const ServiceVanillaCultivation = () => {
  const [activePhase, setActivePhase] = useState(0)

  const cultivationPhases = [
    {
      title: "Site Preparation",
      duration: "1-2 Months",
      icon: Sun,
      description: "Proper site selection and preparation is crucial. We help you identify the right location with appropriate shade, soil conditions, and drainage.",
      tasks: [
        "Land clearing and leveling",
        "Shade tree establishment",
        "Support structure installation",
        "Soil preparation and composting"
      ]
    },
    {
      title: "Planting & Care",
      duration: "Year 1-2",
      icon: Droplets,
      description: "Proper planting techniques and regular care during the vegetative phase ensures healthy vine development and future productivity.",
      tasks: [
        "Vine planting at optimal spacing",
        "Regular irrigation management",
        "Mulching and fertilization",
        "Vine training and pruning"
      ]
    },
    {
      title: "Flowering & Pollination",
      duration: "Year 3+",
      icon: Hand,
      description: "Vanilla flowers must be hand-pollinated within hours of opening. We train farmers in this critical skill for successful bean production.",
      tasks: [
        "Flower identification",
        "Hand pollination techniques",
        "Timing optimization",
        "Record keeping"
      ]
    },
    {
      title: "Harvest & Curing",
      duration: "9 Months Post-Pollination",
      icon: Package,
      description: "Proper harvesting and curing processes are essential to develop the characteristic vanilla flavor and aroma.",
      tasks: [
        "Harvest timing (7-9 months)",
        "Killing process",
        "Sweating and drying",
        "Conditioning and grading"
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "High Returns",
      description: "Vanilla is one of the most valuable spices, offering excellent returns per acre"
    },
    {
      icon: Calendar,
      title: "Long-term Income",
      description: "Once established, vanilla vines produce for 10-15 years"
    },
    {
      icon: Droplets,
      title: "Low Water Need",
      description: "Suitable for areas with moderate rainfall and irrigation"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Complete technical guidance from planting to marketing"
    }
  ]

  const requirements = [
    { label: "Climate", value: "Tropical/Sub-tropical" },
    { label: "Temperature", value: "20-30°C" },
    { label: "Rainfall", value: "1500-3000mm/year" },
    { label: "Altitude", value: "Up to 1500m" },
    { label: "Soil", value: "Well-drained, rich in organic matter" },
    { label: "Shade", value: "50-60% shade required" }
  ]

  return (
    <section id="vanilla-cultivation" className="section-padding bg-linear-to-b from-green-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-green-100/30 to-transparent" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 rounded-full px-5 py-2.5 mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Service 03</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Vanilla
            <span className="block text-green-600">Cultivation Support</span>
          </h2>
          <p className="text-lg text-gray-600">
            Vanilla is the world's second most expensive spice after saffron. We provide 
            comprehensive support for vanilla cultivation, from planting to processing, 
            helping farmers tap into this lucrative market.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Image & Video */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1631209121750-a9f656d26a5b?w=800&q=80"
                alt="Vanilla Cultivation"
                className="w-full h-125 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-green-900/60 via-transparent to-transparent" />
              
              {/* Play Button */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group">
                <Play className="w-8 h-8 text-green-600 ml-1 group-hover:text-green-700" />
              </button>

              {/* Bottom Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">₹40-60 Lakhs</div>
                      <div className="text-gray-600">Potential earning per acre after 4 years</div>
                    </div>
                    <a href="/contact" className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors">
                      Start Today
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-xs hidden lg:block">
              <h4 className="font-bold text-gray-900 mb-4">Growing Requirements</h4>
              <div className="space-y-3">
                {requirements.slice(0, 4).map((req, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600">{req.label}</span>
                    <span className="font-medium text-gray-900">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Cultivation Phases */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Cultivation Journey</h3>
            
            {/* Phase Tabs */}
            <div className="space-y-4 mb-8">
              {cultivationPhases.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                    activePhase === index
                      ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                      : 'bg-white hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        activePhase === index ? 'bg-white/20' : 'bg-green-100'
                      }`}>
                        <phase.icon className={`w-6 h-6 ${
                          activePhase === index ? 'text-white' : 'text-green-600'
                        }`} />
                      </div>
                      <div>
                        <div className="font-bold">{phase.title}</div>
                        <div className={`text-sm ${
                          activePhase === index ? 'text-green-100' : 'text-gray-500'
                        }`}>{phase.duration}</div>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      activePhase === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Active Phase Details */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                {cultivationPhases[activePhase].title}
              </h4>
              <p className="text-gray-600 mb-4">
                {cultivationPhases[activePhase].description}
              </p>
              <div className="space-y-2">
                {cultivationPhases[activePhase].tasks.map((task, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center card-hover">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Requirements Table (Mobile Visible) */}
        <div className="lg:hidden bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-16">
          <h4 className="font-bold text-gray-900 mb-4">Growing Requirements</h4>
          <div className="grid grid-cols-2 gap-4">
            {requirements.map((req, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-3">
                <div className="text-gray-500 text-xs mb-1">{req.label}</div>
                <div className="font-medium text-gray-900 text-sm">{req.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-green-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
          
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Start Vanilla Cultivation?
              </h3>
              <p className="text-green-100 mb-6">
                Join hundreds of farmers who are successfully growing vanilla with our support. 
                Get expert guidance, quality planting material, and guaranteed buyback.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
                  Get Started
                </a>
                <a href="tel:+919876543210" className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition-colors border border-green-400">
                  Call Expert
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-xs">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-green-100">Vanilla farmers supported across India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceVanillaCultivation