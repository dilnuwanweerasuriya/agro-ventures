import React, { useState, useEffect } from 'react'
import { 
  ChevronDown, 
  Play, 
  Leaf, 
  Sun, 
  Wind,
  Timer,
  Award,
  ArrowRight
} from 'lucide-react'

const ProcessHero = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { name: "Sourcing", icon: Leaf, color: "green" },
    { name: "Sun Drying", icon: Sun, color: "yellow" },
    { name: "Shade Drying", icon: Wind, color: "blue" },
    { name: "Conditioning", icon: Timer, color: "purple" },
    { name: "Sorting", icon: Award, color: "primary" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1631209121750-a9f656d26a5b?w=1920&q=80"
          alt="Vanilla Beans"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-gray-900/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl floating-slow" />
      </div>

      {/* Floating Vanilla Beans Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-32 h-8 bg-amber-900/30 rounded-full blur-sm rotate-45 floating" />
        <div className="absolute top-[40%] right-[20%] w-24 h-6 bg-amber-800/20 rounded-full blur-sm -rotate-12 floating-delayed" />
        <div className="absolute bottom-[30%] right-[15%] w-28 h-7 bg-amber-900/25 rounded-full blur-sm rotate-30 floating-slow" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-white/60 mb-8">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href="/services" className="hover:text-white transition-colors">Services</a>
          <span>/</span>
          <span className="text-amber-400">Vanilla Process</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-5 py-2.5">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-amber-200">Premium Vanilla Processing</span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
                The Art of
                <span className="block text-amber-400">Vanilla Curing</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                Discover our meticulous 5-step process that transforms fresh vanilla beans 
                into the world's most aromatic and flavorful vanilla, prized by chefs globally.
              </p>
            </div>

            {/* Process Steps Preview */}
            <div className="flex flex-wrap gap-3">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    currentStep === index
                      ? 'bg-amber-500 text-gray-900'
                      : 'bg-white/10 text-white/70 border border-white/20'
                  }`}
                >
                  <step.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#process-overview" className="btn-primary bg-amber-500 hover:bg-amber-600 shadow-amber-500/30 text-gray-900 group">
                Explore Process
                <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
              <button className="btn-outline border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 group">
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">6-9</div>
                <div className="text-white/60 text-sm">Months Process</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white/60 text-sm">Hand Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">A+</div>
                <div className="text-white/60 text-sm">Export Grade</div>
              </div>
            </div>
          </div>

          {/* Right - Visual Process Flow */}
          <div className="hidden lg:block relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Central Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-500/30">
                <img
                  src="https://images.unsplash.com/photo-1631209121750-a9f656d26a5b?w=600&q=80"
                  alt="Vanilla Beans"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent" />
                
                {/* Current Step Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    {React.createElement(steps[currentStep].icon, { 
                      className: "w-8 h-8 text-amber-600" 
                    })}
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Step {currentStep + 1}</div>
                      <div className="text-lg font-bold text-gray-900">{steps[currentStep].name}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Step Icons */}
              <div className="absolute inset-0">
                {steps.map((step, index) => {
                  const angle = (index / steps.length) * 360 - 90
                  const radius = 180
                  const x = Math.cos((angle * Math.PI) / 180) * radius
                  const y = Math.sin((angle * Math.PI) / 180) * radius
                  
                  return (
                    <div
                      key={index}
                      className={`absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                        currentStep === index
                          ? 'bg-amber-500 text-gray-900 scale-125 shadow-lg shadow-amber-500/50'
                          : 'bg-white/20 text-white border border-white/30'
                      }`}
                      style={{
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`,
                      }}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                  )
                })}
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%', width: '400px', height: '400px' }}>
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="rgba(245, 158, 11, 0.2)"
                  strokeWidth="2"
                  strokeDasharray="10,5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60">
        <span className="text-xs uppercase tracking-widest mb-2">Discover the process</span>
        <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default ProcessHero