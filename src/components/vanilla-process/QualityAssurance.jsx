import React from 'react'
import { 
  Shield, 
  Microscope, 
  Award, 
  FileCheck,
  CheckCircle,
  BadgeCheck
} from 'lucide-react'

const QualityAssurance = () => {
  const qualityChecks = [
    {
      icon: Microscope,
      title: "Laboratory Testing",
      description: "Every batch undergoes rigorous lab analysis for moisture, vanillin content, and microbial safety"
    },
    {
      icon: Shield,
      title: "Purity Verification",
      description: "We ensure 100% natural vanilla with no artificial additives or adulterants"
    },
    {
      icon: FileCheck,
      title: "Documentation",
      description: "Complete traceability from farm to final product with detailed processing records"
    },
    {
      icon: BadgeCheck,
      title: "Third-Party Certification",
      description: "Independent verification of organic, fair trade, and food safety standards"
    }
  ]

  const certifications = [
    { name: "ISO 22000", desc: "Food Safety Management" },
    { name: "HACCP", desc: "Hazard Analysis" },
    { name: "USDA Organic", desc: "Organic Certification" },
    { name: "FSSAI", desc: "Food Safety License" },
    { name: "Fair Trade", desc: "Ethical Sourcing" },
    { name: "Spices Board", desc: "Export Certification" }
  ]

  return (
    <section className="section-padding bg-linear-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
      </div>

      {/* Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-white rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm border border-white/20">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold uppercase tracking-wider">Quality Assurance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Uncompromising
            <span className="block text-amber-400">Quality Standards</span>
          </h2>
          <p className="text-lg text-gray-300">
            Every vanilla bean we process meets the highest international quality standards, 
            backed by rigorous testing and globally recognized certifications.
          </p>
        </div>

        {/* Quality Checks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {qualityChecks.map((check, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                <check.icon className="w-7 h-7 text-amber-400 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{check.title}</h4>
              <p className="text-gray-400 text-sm">{check.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Our Certifications</h3>
            <p className="text-gray-400">Internationally recognized quality certifications</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/15 transition-colors"
              >
                <div className="text-lg font-bold text-amber-400 mb-1">{cert.name}</div>
                <div className="text-gray-400 text-xs">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { value: "100%", label: "Natural" },
            { value: "0", label: "Additives" },
            { value: "200+", label: "Quality Checks" },
            { value: "99.9%", label: "Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QualityAssurance