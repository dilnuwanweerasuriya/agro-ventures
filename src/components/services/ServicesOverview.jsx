import React from 'react'
import { 
  Sparkles, 
  Leaf, 
  Users, 
  FileCheck,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const ServicesOverview = () => {
  const services = [
    {
      id: "creating-awareness",
      icon: Sparkles,
      title: "Creating Awareness",
      shortDesc: "Educating farmers about high-value crops and modern farming techniques",
      features: [
        "Farmer education programs",
        "Market trend analysis",
        "Crop selection guidance",
        "Technical training workshops"
      ],
      image: "https://images.unsplash.com/photo-1589923188651-268a9765e432?w=600&q=80",
      color: "primary",
      stats: { value: "5000+", label: "Farmers Educated" }
    },
    {
      id: "quality-planting-material",
      icon: Leaf,
      title: "Quality Planting Material",
      shortDesc: "Providing certified, disease-free planting materials for optimal yields",
      features: [
        "Tissue culture plants",
        "Certified seeds & saplings",
        "Disease-free materials",
        "High-yield varieties"
      ],
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
      color: "secondary",
      stats: { value: "1M+", label: "Plants Supplied" }
    },
    {
      id: "vanilla-cultivation",
      icon: Users,
      title: "Vanilla Cultivation",
      shortDesc: "Complete support for vanilla farming from plantation to harvest",
      features: [
        "Site assessment & planning",
        "Cultivation techniques",
        "Pollination training",
        "Curing & processing guidance"
      ],
      image: "https://images.unsplash.com/photo-1631209121750-a9f656d26a5b?w=600&q=80",
      color: "green",
      stats: { value: "500+", label: "Vanilla Farmers" }
    },
    {
      id: "contract-farming",
      icon: FileCheck,
      title: "Contract Farming",
      shortDesc: "Guaranteed buyback agreements ensuring stable income for farmers",
      features: [
        "Buyback guarantee",
        "Technical support",
        "Input supply assistance",
        "Fair pricing mechanism"
      ],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
      color: "blue",
      stats: { value: "5000+", label: "Acres Contracted" }
    }
  ]

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-5 py-2.5 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="block gradient-text">Agricultural Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            We provide end-to-end support to farmers, from awareness and training to 
            quality inputs and guaranteed market access through contract farming.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 card-hover"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 ${
                    service.color === 'primary' ? 'bg-primary-600/40' :
                    service.color === 'secondary' ? 'bg-secondary-600/40' :
                    service.color === 'green' ? 'bg-green-600/40' :
                    'bg-blue-600/40'
                  } group-hover:opacity-60 transition-opacity`} />
                  
                  {/* Stats Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                    <div className="text-xl font-bold text-gray-900">{service.stats.value}</div>
                    <div className="text-xs text-gray-600">{service.stats.label}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    service.color === 'primary' ? 'bg-primary-100' :
                    service.color === 'secondary' ? 'bg-secondary-100' :
                    service.color === 'green' ? 'bg-green-100' :
                    'bg-blue-100'
                  }`}>
                    <service.icon className={`w-7 h-7 ${
                      service.color === 'primary' ? 'text-primary-600' :
                      service.color === 'secondary' ? 'text-secondary-600' :
                      service.color === 'green' ? 'text-green-600' :
                      'text-blue-600'
                    }`} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6 grow">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className={`w-4 h-4 shrink-0 ${
                          service.color === 'primary' ? 'text-primary-500' :
                          service.color === 'secondary' ? 'text-secondary-500' :
                          service.color === 'green' ? 'text-green-500' :
                          'text-blue-500'
                        }`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={`#${service.id}`}
                    className={`inline-flex items-center font-semibold group/link ${
                      service.color === 'primary' ? 'text-primary-600 hover:text-primary-700' :
                      service.color === 'secondary' ? 'text-secondary-600 hover:text-secondary-700' :
                      service.color === 'green' ? 'text-green-600 hover:text-green-700' :
                      'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview