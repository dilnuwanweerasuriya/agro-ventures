import React, { useState, useMemo } from 'react'
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  ChevronDown, 
  Star, 
  Eye,
  X,
  SlidersHorizontal
} from 'lucide-react'

const ProductGrid = ({ onProductClick }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    { id: 'all', name: 'All Products', count: 200 },
    { id: 'spices', name: 'Spices', count: 45 },
    { id: 'rice', name: 'Rice & Grains', count: 28 },
    { id: 'pulses', name: 'Pulses', count: 32 },
    { id: 'oilseeds', name: 'Oil Seeds', count: 18 },
    { id: 'dehydrated', name: 'Dehydrated', count: 24 },
    { id: 'organic', name: 'Organic', count: 35 }
  ]

  const allProducts = [
    // Spices
    {
      id: 1,
      name: "Turmeric Powder",
      category: "spices",
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80",
      description: "Premium quality turmeric with high curcumin content",
      rating: 4.9,
      origin: "Tamil Nadu",
      certifications: ["Organic", "FSSAI"],
      popular: true
    },
    {
      id: 2,
      name: "Red Chili Powder",
      category: "spices",
      image: "https://images.unsplash.com/photo-1599909533353-f2b1fb90a76a?w=400&q=80",
      description: "Vibrant red color with perfect heat level",
      rating: 4.7,
      origin: "Guntur, AP",
      certifications: ["FSSAI", "ISO"],
      popular: true
    },
    {
      id: 3,
      name: "Cumin Seeds",
      category: "spices",
      image: "https://images.unsplash.com/photo-1599909533681-74570b4f8a66?w=400&q=80",
      description: "Whole cumin seeds with strong aroma",
      rating: 4.8,
      origin: "Rajasthan",
      certifications: ["Organic", "FSSAI"],
      popular: false
    },
    {
      id: 4,
      name: "Black Pepper",
      category: "spices",
      image: "https://images.unsplash.com/photo-1599909533681-74570b4f8a66?w=400&q=80",
      description: "Malabar black pepper, bold grade",
      rating: 4.9,
      origin: "Kerala",
      certifications: ["Spices Board", "Organic"],
      popular: true
    },
    {
      id: 5,
      name: "Coriander Seeds",
      category: "spices",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80",
      description: "Eagle/Badami quality coriander",
      rating: 4.6,
      origin: "Rajasthan",
      certifications: ["FSSAI"],
      popular: false
    },
    {
      id: 6,
      name: "Green Cardamom",
      category: "spices",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80",
      description: "8mm bold green cardamom pods",
      rating: 4.9,
      origin: "Kerala",
      certifications: ["Spices Board", "Organic"],
      popular: true
    },
    // Rice
    {
      id: 7,
      name: "1121 Basmati Rice",
      category: "rice",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
      description: "Extra long grain premium basmati",
      rating: 4.8,
      origin: "Punjab",
      certifications: ["APEDA", "ISO"],
      popular: true
    },
    {
      id: 8,
      name: "1509 Basmati Rice",
      category: "rice",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
      description: "Long grain steam basmati rice",
      rating: 4.7,
      origin: "Haryana",
      certifications: ["APEDA", "FSSAI"],
      popular: false
    },
    {
      id: 9,
      name: "Sona Masoori Rice",
      category: "rice",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
      description: "Medium grain non-basmati rice",
      rating: 4.5,
      origin: "Andhra Pradesh",
      certifications: ["FSSAI"],
      popular: false
    },
    // Pulses
    {
      id: 10,
      name: "Chickpeas (Kabuli)",
      category: "pulses",
      image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400&q=80",
      description: "Large white chickpeas, export quality",
      rating: 4.6,
      origin: "Madhya Pradesh",
      certifications: ["FSSAI", "ISO"],
      popular: true
    },
    {
      id: 11,
      name: "Yellow Lentils (Toor Dal)",
      category: "pulses",
      image: "https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?w=400&q=80",
      description: "Split yellow pigeon peas",
      rating: 4.5,
      origin: "Maharashtra",
      certifications: ["FSSAI"],
      popular: false
    },
    {
      id: 12,
      name: "Green Moong Dal",
      category: "pulses",
      image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400&q=80",
      description: "Split green gram, premium quality",
      rating: 4.7,
      origin: "Rajasthan",
      certifications: ["Organic", "FSSAI"],
      popular: false
    },
    // Oil Seeds
    {
      id: 13,
      name: "Groundnuts (Bold)",
      category: "oilseeds",
      image: "https://images.unsplash.com/photo-1567892737950-30c4db37cd89?w=400&q=80",
      description: "Bold java groundnuts, high oil content",
      rating: 4.8,
      origin: "Gujarat",
      certifications: ["FSSAI", "ISO"],
      popular: true
    },
    {
      id: 14,
      name: "White Sesame Seeds",
      category: "oilseeds",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80",
      description: "Hulled white sesame, 99% purity",
      rating: 4.7,
      origin: "Rajasthan",
      certifications: ["Organic", "FSSAI"],
      popular: false
    },
    // Dehydrated
    {
      id: 15,
      name: "Dehydrated Onion",
      category: "dehydrated",
      image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&q=80",
      description: "Dehydrated onion flakes and powder",
      rating: 4.6,
      origin: "Maharashtra",
      certifications: ["FSSAI", "ISO"],
      popular: true
    },
    {
      id: 16,
      name: "Dehydrated Garlic",
      category: "dehydrated",
      image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&q=80",
      description: "Dehydrated garlic flakes and powder",
      rating: 4.7,
      origin: "Madhya Pradesh",
      certifications: ["FSSAI"],
      popular: false
    },
    // Organic
    {
      id: 17,
      name: "Organic Turmeric",
      category: "organic",
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80",
      description: "Certified organic turmeric powder",
      rating: 4.9,
      origin: "Tamil Nadu",
      certifications: ["USDA Organic", "India Organic"],
      popular: true
    },
    {
      id: 18,
      name: "Organic Black Pepper",
      category: "organic",
      image: "https://images.unsplash.com/photo-1599909533681-74570b4f8a66?w=400&q=80",
      description: "Certified organic black pepper",
      rating: 4.8,
      origin: "Kerala",
      certifications: ["EU Organic", "USDA"],
      popular: true
    }
  ]

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...allProducts]

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }

    // Filter by search
    if (searchTerm) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.origin.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sort
    switch (sortBy) {
      case 'popular':
        result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name))
        break
      default:
        break
    }

    return result
  }, [activeCategory, searchTerm, sortBy])

  return (
    <section id="all-products" className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-5 py-2.5 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider">Product Catalog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            All
            <span className="gradient-text"> Products</span>
          </h2>
        </div>

        {/* Filters Bar */}
        <div className="bg-gray-50 rounded-2xl p-4 md:p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Search */}
            <div className="relative grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all focus:outline-none"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all focus:outline-none bg-white cursor-pointer min-w-45"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* View Mode */}
            <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-200 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-primary-600 text-white' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-xl border border-gray-200"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Category Filters */}
          <div className={`mt-4 pt-4 border-t border-gray-200 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.name}
                  <span className={`ml-2 ${activeCategory === category.id ? 'text-primary-200' : 'text-gray-400'}`}>
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length > 0 ? (
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
              : 'space-y-4'
          }`}>
            {filteredProducts.map((product) => (
              viewMode === 'grid' ? (
                // Grid View Card
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover cursor-pointer"
                  onClick={() => onProductClick(product)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.popular && (
                        <span className="px-2 py-1 bg-secondary-500 text-white text-xs font-bold rounded-full">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Quick View */}
                    <button className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white">
                      <Eye className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700 ml-1">{product.rating}</span>
                      </div>
                      <span className="text-xs text-gray-400 ml-2">{product.origin}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {product.certifications.slice(0, 2).map((cert, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // List View Card
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
                  onClick={() => onProductClick(product)}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative w-full md:w-48 h-48 md:h-auto overflow-hidden shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.popular && (
                        <span className="absolute top-3 left-3 px-2 py-1 bg-secondary-500 text-white text-xs font-bold rounded-full">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="grow p-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center mb-2">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium text-gray-700 ml-1">{product.rating}</span>
                            </div>
                            <span className="text-sm text-gray-400 ml-3">{product.origin}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {product.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {product.certifications.map((cert, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors">
                          <Eye className="w-4 h-4" />
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        ) : (
          // No Results
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setActiveCategory('all')
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Products
              <ChevronDown className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductGrid