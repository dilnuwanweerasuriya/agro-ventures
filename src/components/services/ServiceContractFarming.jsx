import React from 'react'
import { 
  FileCheck, 
  Handshake, 
  Shield, 
  TrendingUp,
  Truck,
  HeadphonesIcon,
  Banknote,
  Package,
  CheckCircle,
  ArrowRight,
  FileText,
  Users
} from 'lucide-react'

const ServiceContractFarming = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Guaranteed Buyback",
      description: "100% purchase guarantee at pre-agreed prices, eliminating market uncertainty"
    },
    {
      icon: Banknote,
      title: "Fair Pricing",
      description: "Transparent pricing mechanism based on quality parameters and market rates"
    },
    {
      icon: Package,
      title: "Input Support",
      description: "Quality seeds, fertilizers, and other inputs provided at subsidized rates"
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Guidance",
      description: "Regular field visits and expert advice throughout the growing season"
    },
    {
      icon: Truck,
      title: "Logistics Support",
      description: "Farm-gate collection and transportation arrangement for your produce"
    },
    {
      icon: TrendingUp,
      title: "Premium for Quality",
      description: "Additional premium paid for produce exceeding quality standards"
    }
  ]

  const crops = [
    {
      name: "Vanilla",
      image: "https://images.unsplash.com/photo-1631209121750-a9f656d26a5b?w=300&q=80",
      buybackPrice: "₹25,000-40,000/kg",
      duration: "3-4 years to harvest"
    },
    {
      name: "Black Pepper",
      image: "https://images.unsplash.com/photo-1599909533681-74570b4f8a66?w=300&q=80",
      buybackPrice: "₹400-600/kg",
      duration: "2-3 years to harvest"
    },
    {
      name: "Turmeric",
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=300&q=80",
      buybackPrice: "₹80-150/kg",
      duration: "8-10 months"
    },
    {
      name: "Cardamom",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80",
      buybackPrice: "₹1,500-2,500/kg",
      duration: "2-3 years to harvest"
    }
  ]

  const process = [
    {
      step: 1,
      title: "Registration",
      description: "Submit your land details and interest in contract farming"
    },
    {
      step: 2,
      title: "Site Assessment",
      description: "Our team visits your farm to assess suitability"
    },
    {
      step: 3,
      title: "Agreement",
      description: "Sign contract with clear terms and buyback prices"
    },
    {
      step: 4,
      title: "Cultivation",
      description: "Start farming with our inputs and technical support"
    },
    {
      step: 5,
      title: "Harvest & Sale",
      description: "We purchase your produce at agreed prices"
    }
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Kerala",
      crop: "Vanilla",
      quote: "Contract farming with AgroVentures gave me the confidence to invest in vanilla. The guaranteed buyback and technical support made all the difference.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    {
      name: "Lakshmi Devi",
      location: "Karnataka",
      crop: "Black Pepper",
      quote: "I've been growing pepper for 10 years, but the income was never stable. With contract farming, I now have price security and better yields.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
    }
  ]

  return (
    <section id="contract-farming" className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-tr from-blue-50/50 to-transparent" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-5 py-2.5 mb-6">
              <FileCheck className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">Service 04</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Contract
              <span className="block text-blue-600">Farming</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Take the uncertainty out of farming with our contract farming program. 
              We provide guaranteed buyback, quality inputs, technical support, and 
              fair pricing – ensuring stable income for farmers while securing quality 
              supply for our export business.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 shadow-blue-600/30">
                Join Our Network
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="#" className="btn-secondary border-blue-600 text-blue-600 hover:bg-blue-50">
                <FileText className="w-5 h-5 mr-2" />
                Download Brochure
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                alt="Contract Farming"
                className="w-full h-100 object-cover"
              />
            </div>
            
            {/* Stats Cards */}
            <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
              {[
                { value: "5000+", label: "Acres" },
                { value: "1000+", label: "Farmers" },
                { value: "100%", label: "Buyback" }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center">
                  <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-gray-600 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Why Choose Contract Farming?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                    <benefit.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              How Contract Farming Works
            </h3>
            
            <div className="grid md:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h4 className="text-white font-bold mb-2">{step.title}</h4>
                  <p className="text-blue-100 text-sm">{step.description}</p>
                  
                  {/* Connector Arrow */}
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-3 w-6">
                      <ArrowRight className="w-6 h-6 text-white/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Available Crops */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Crops Under Contract Farming</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {crops.map((crop, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                      Contract Available
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{crop.name}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Buyback Price</span>
                      <span className="font-semibold text-blue-600">{crop.buybackPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration</span>
                      <span className="font-medium text-gray-900">{crop.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Farmer Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <div className="flex items-start space-x-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location} • {testimonial.crop}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceContractFarming