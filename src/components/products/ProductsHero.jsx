import React from 'react'
import { 
  Package, 
  Globe, 
  Award, 
  Leaf,
  Search,
  ChevronDown
} from 'lucide-react'

const ProductsHero = () => {
  const stats = [
    { icon: Package, value: "200+", label: "Products" },
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: Award, value: "Premium", label: "Quality" },
    { icon: Leaf, value: "Organic", label: "Options" }
  ]

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=80"
          alt="Agricultural Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/40" />
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl floating-delayed" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-white/60 mb-8">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span className="text-primary-400">Products</span>
        </nav>

        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">Premium Export Quality</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
            Premium Agricultural
            <span className="block text-primary-400">Products</span>
          </h1>

          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
            Explore our comprehensive range of export-quality spices, grains, pulses, 
            and specialty products sourced directly from India's finest farms.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mb-10">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-14 pr-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/50 focus:bg-white/20 focus:border-primary-400 focus:outline-none transition-all"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-colors"
              >
                <stat.icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60">
        <ChevronDown className="w-6 h-6 animate-bounce" />
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

export default ProductsHero