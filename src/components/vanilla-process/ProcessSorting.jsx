import React from 'react'
import { 
  Award, 
  Ruler, 
  Eye, 
  Droplets,
  CheckCircle,
  Star,
  Package,
  FileCheck,
  ArrowRight
} from 'lucide-react'

const ProcessSorting = () => {
  const grades = [
    {
      grade: "Grade A",
      name: "Gourmet / Prime",
      length: "15+ cm",
      moisture: "25-35%",
      appearance: "Plump, oily, dark brown",
      vanillin: "2.0-2.5%",
      use: "Premium culinary & extract",
      price: "Premium",
      color: "amber"
    },
    {
      grade: "Grade B",
      name: "Extract Grade",
      length: "12-15 cm",
      moisture: "15-25%",
      appearance: "Less oily, some splits",
      vanillin: "1.5-2.0%",
      use: "Vanilla extract production",
      price: "Standard",
      color: "yellow"
    },
    {
      grade: "Grade C",
      name: "Cuts / Splits",
      length: "Variable",
      moisture: "15-20%",
      appearance: "Split beans, shorter lengths",
      vanillin: "1.0-1.5%",
      use: "Industrial extracts, flavoring",
      price: "Economy",
      color: "gray"
    }
  ]

  const criteria = [
    {
      icon: Ruler,
      title: "Length",
      description: "Beans measured and sorted by length (12-20+ cm)"
    },
    {
      icon: Eye,
      title: "Appearance",
      description: "Visual inspection for color, oiliness, and defects"
    },
    {
      icon: Droplets,
      title: "Moisture",
      description: "Tested to ensure optimal moisture content"
    },
    {
      icon: Star,
      title: "Aroma",
      description: "Evaluated for strength and quality of vanilla scent"
    }
  ]

  const qualityChecks = [
    "Visual inspection by trained experts",
    "Moisture content measurement",
    "Length and size grading",
    "Aroma quality assessment",
    "Vanillin content testing (samples)",
    "Defect identification and removal",
    "Weight verification",
    "Final quality certification"
  ]

  return (
    <section id="sorting" className="section-padding bg-linear-to-b from-amber-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-yellow-100/50 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 rounded-full px-5 py-2.5 mb-6">
            <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
            <span className="text-sm font-semibold uppercase tracking-wider">Final Step</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Sorting & Grading
            <span className="block text-amber-600">Quality Classification</span>
          </h2>
          <p className="text-lg text-gray-600">
            Each vanilla bean is individually inspected, measured, and graded by our expert 
            team to ensure consistent quality and proper classification for different markets.
          </p>
        </div>

        {/* Sorting Criteria */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {criteria.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center card-hover">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-amber-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Grade Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Vanilla Grades</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {grades.map((grade, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${
                  grade.color === 'amber' ? 'border-amber-300 hover:border-amber-500' :
                  grade.color === 'yellow' ? 'border-yellow-300 hover:border-yellow-500' :
                  'border-gray-200 hover:border-gray-400'
                }`}
              >
                {/* Header */}
                <div className={`p-6 text-white ${
                  grade.color === 'amber' ? 'bg-linear-to-r from-amber-500 to-amber-600' :
                  grade.color === 'yellow' ? 'bg-linear-to-r from-yellow-500 to-yellow-600' :
                  'bg-linear-to-r from-gray-500 to-gray-600'
                }`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm opacity-80">{grade.grade}</span>
                      <h4 className="text-2xl font-bold">{grade.name}</h4>
                    </div>
                    {grade.color === 'amber' && (
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Award className="w-7 h-7" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-gray-500 text-xs mb-1">Length</div>
                      <div className="font-bold text-gray-900">{grade.length}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-gray-500 text-xs mb-1">Moisture</div>
                      <div className="font-bold text-gray-900">{grade.moisture}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-gray-500 text-xs mb-1">Vanillin</div>
                      <div className="font-bold text-gray-900">{grade.vanillin}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-gray-500 text-xs mb-1">Pricing</div>
                      <div className={`font-bold ${
                        grade.color === 'amber' ? 'text-amber-600' :
                        grade.color === 'yellow' ? 'text-yellow-600' :
                        'text-gray-600'
                      }`}>{grade.price}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-gray-500 text-xs mb-1">Appearance</div>
                    <div className="text-gray-900 text-sm">{grade.appearance}</div>
                  </div>

                  <div className="pt-2">
                    <div className="text-gray-500 text-xs mb-1">Best Used For</div>
                    <div className="text-gray-900 font-medium">{grade.use}</div>
                  </div>
                </div>

                {/* Premium Badge */}
                {grade.color === 'amber' && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/30 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                      PREMIUM
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quality Checks & Packaging */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Quality Checklist */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                <FileCheck className="w-7 h-7 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Quality Control Checklist</h3>
                <p className="text-gray-600">Every batch undergoes rigorous inspection</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-3">
              {qualityChecks.map((check, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-700 text-sm">{check}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Packaging */}
          <div className="bg-linear-to-br from-amber-500 to-amber-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            
            <div className="relative">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Package className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Export Packaging</h3>
                  <p className="text-amber-100">Ready for global shipping</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-amber-50 leading-relaxed">
                  After grading, beans are carefully packaged to preserve their quality 
                  during international shipping:
                </p>
                <ul className="space-y-2">
                  {[
                    "Vacuum-sealed inner packaging",
                    "Food-grade protective wrapping",
                    "Climate-controlled containers",
                    "Proper labeling and documentation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="/contact" className="inline-flex items-center mt-6 bg-white text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors group">
                Request Samples
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSorting