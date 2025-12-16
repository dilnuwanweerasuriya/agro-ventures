import React, { useEffect } from 'react'
import { 
  X, 
  Star, 
  MapPin, 
  Award, 
  Package,
  FileText,
  Download,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  Share2,
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const ProductModal = ({ product, isOpen, onClose }) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen || !product) return null

  // Sample specifications (in real app, this would come from product data)
  const specifications = product.specifications || {
    "Purity": "99%+",
    "Moisture": "Max 10%",
    "Grade": "Export Quality",
    "Packaging": "As per requirement"
  }

  const packagingOptions = [
    "25 kg PP Bags",
    "50 kg Jute Bags",
    "Bulk Container Bags",
    "Custom Retail Packs"
  ]

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left - Image Section */}
            <div className="relative bg-gray-100 p-8 flex items-center justify-center min-h-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-2xl max-h-125"
              />
              
              {/* Badges */}
              <div className="absolute top-8 left-8 flex flex-col gap-2">
                {product.bestseller && (
                  <span className="px-3 py-1 bg-secondary-500 text-white text-sm font-bold rounded-full">
                    Best Seller
                  </span>
                )}
                {product.popular && (
                  <span className="px-3 py-1 bg-primary-500 text-white text-sm font-bold rounded-full">
                    Popular
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="absolute top-8 right-8 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Image Navigation (if multiple images) */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {[1, 2, 3].map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === 0 ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right - Content Section */}
            <div className="p-8 md:p-10">
              {/* Category */}
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-1.5 mb-4">
                <Package className="w-4 h-4" />
                <span className="text-sm font-semibold">{product.category}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
                {product.name}
              </h2>

              {/* Rating & Origin */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600 font-medium">{product.rating}</span>
                  {product.reviews && (
                    <span className="text-gray-400 ml-1">({product.reviews} reviews)</span>
                  )}
                </div>
              </div>

              {/* Origin */}
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="w-5 h-5 mr-2 text-primary-500" />
                <span>Origin: <strong>{product.origin}</strong></span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Certifications */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {product.certifications?.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg"
                    >
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Specifications</h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(specifications).map(([key, value], idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-3">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{key}</div>
                      <div className="font-semibold text-gray-900">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packaging Options */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">Packaging Options</h4>
                <div className="flex flex-wrap gap-2">
                  {packagingOptions.map((option, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm"
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button className="w-full btn-primary py-4 text-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Quote
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a 
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>

              {/* Download Spec Sheet */}
              <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 text-primary-600 hover:bg-primary-50 rounded-xl transition-colors">
                <Download className="w-5 h-5" />
                Download Product Specification
              </button>
            </div>
          </div>

          {/* Related Products */}
          <div className="border-t border-gray-100 p-8">
            <h4 className="font-bold text-gray-900 mb-4">Related Products</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((_, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-3 cursor-pointer hover:bg-gray-100 transition-colors">
                  <div className="w-full h-20 bg-gray-200 rounded-lg mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal