import React from 'react'
import { 
  Sparkles, 
  Leaf, 
  Users, 
  FileCheck, 
  ChevronDown,
  ArrowRight
} from 'lucide-react'

const ServicesHero = () => {
  const services = [
    { icon: Sparkles, name: "Creating Awareness", color: "primary" },
    { icon: Leaf, name: "Quality Planting Material", color: "secondary" },
    { icon: Users, name: "Vanilla Cultivation", color: "green" },
    { icon: FileCheck, name: "Contract Farming", color: "blue" }
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&q=80"
          alt="Agricultural Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-gray-900/40" />
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-3xl floating-slow" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size:[60px_60px]" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-white/60 mb-8">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span className="text-primary-400">Our Services</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white">Comprehensive Agricultural Solutions</span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
                Expert Services
                <span className="block text-primary-400">For Farmers</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                From awareness programs to contract farming, we provide end-to-end support 
                to help farmers succeed in high-value crop cultivation and achieve 
                sustainable growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary group">
                Explore Services
                <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="/contact" className="btn-outline">
                Get Consultation
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">1000+</div>
                <div className="text-white/60 text-sm">Farmers Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-white/60 text-sm">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">5000+</div>
                <div className="text-white/60 text-sm">Acres Under Contract</div>
              </div>
            </div>
          </div>

          {/* Right - Service Cards */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <a
                key={index}
                href={`#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 card-hover"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                  service.color === 'primary' ? 'bg-primary-500/20 group-hover:bg-primary-500' :
                  service.color === 'secondary' ? 'bg-secondary-500/20 group-hover:bg-secondary-500' :
                  service.color === 'green' ? 'bg-green-500/20 group-hover:bg-green-500' :
                  'bg-blue-500/20 group-hover:bg-blue-500'
                }`}>
                  <service.icon className={`w-7 h-7 transition-colors duration-300 ${
                    service.color === 'primary' ? 'text-primary-400 group-hover:text-white' :
                    service.color === 'secondary' ? 'text-secondary-400 group-hover:text-white' :
                    service.color === 'green' ? 'text-green-400 group-hover:text-white' :
                    'text-blue-400 group-hover:text-white'
                  }`} />
                </div>
                <h3 className="text-white font-semibold mb-2">{service.name}</h3>
                <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60">
        <span className="text-xs uppercase tracking-widest mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
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

export default ServicesHero