"use client";
import React, { useState } from 'react';

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    name: 'Premium Cotton T-Shirt',
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.8,
    reviews: 324,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&h=600&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'black', hex: '#000000' },
      { name: 'white', hex: '#FFFFFF' },
      { name: 'navy', hex: '#005C8A' },
      { name: 'gray', hex: '#6B7280' }
    ],
    inStock: true,
    description: 'Experience ultimate comfort with our Premium Cotton T-Shirt. Crafted from 100% organic cotton, this shirt offers breathability and durability. Perfect for casual wear or layering, it features a modern fit that flatters all body types.',
    features: [
      '100% Organic Cotton',
      'Pre-shrunk fabric',
      'Reinforced shoulder seams',
      'Tag-free neck label',
      'Machine washable',
      'Sustainable production'
    ]
  };

  const reviews = [
    { name: 'Sarah M.', rating: 5, comment: 'Best t-shirt I\'ve ever owned! Super soft and fits perfectly.', date: '2 days ago' },
    { name: 'John D.', rating: 5, comment: 'Great quality for the price. Will definitely buy more colors.', date: '1 week ago' },
    { name: 'Emma W.', rating: 4, comment: 'Very comfortable, runs slightly large but overall excellent.', date: '2 weeks ago' }
  ];

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  // Icon Components
  const ShoppingCartIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const HeartIcon = ({ filled }) => (
    <svg className="w-6 h-6" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  const StarIcon = ({ filled }) => (
    <svg className="w-5 h-5" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );

  const TruckIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  );

  const RotateIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );

  const ShieldIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  const ChevronLeftIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">SHOPIFY</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">New Arrivals</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Men</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Women</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Sale</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <HeartIcon filled={false} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <ShoppingCartIcon />
                <span className="absolute top-0 right-0 bg-brand-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-200 rounded-2xl overflow-hidden group">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeftIcon />
              </button>
              <button 
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRightIcon />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-gray-900 scale-95' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt={`Product ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-brand-blue-100 text-brand-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
                <span className="bg-brand-orange-100 text-brand-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                  37% OFF
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={i < Math.floor(product.rating) ? 'text-brand-orange-400' : 'text-gray-300'}>
                      <StarIcon filled={i < Math.floor(product.rating)} />
                    </div>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Color: <span className="font-normal text-gray-600 capitalize">{selectedColor}</span>
              </label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColor === color.name ? 'border-gray-900 scale-110' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColor === color.name && color.name === 'white' && (
                      <div className="text-gray-900">
                        <CheckIcon />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Size: <span className="font-normal text-gray-600">{selectedSize}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                      selectedSize === size 
                        ? 'border-gray-900 bg-gray-900 text-white' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-gray-100 font-semibold"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 font-semibold border-x-2 border-gray-300">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-gray-100 font-semibold"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-600">Only 12 items left</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <ShoppingCartIcon />
                Add to Cart
              </button>
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  isWishlisted ? 'border-brand-orange-500 bg-brand-orange-50 text-brand-orange-500' : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <HeartIcon filled={isWishlisted} />
              </button>
            </div>

            <button className="w-full bg-gray-100 text-gray-900 py-4 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Buy Now
            </button>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex flex-col items-center text-center">
                <div className="text-gray-700 mb-2">
                  <TruckIcon />
                </div>
                <p className="text-sm font-semibold">Free Shipping</p>
                <p className="text-xs text-gray-600">Orders over $50</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-gray-700 mb-2">
                  <RotateIcon />
                </div>
                <p className="text-sm font-semibold">30-Day Returns</p>
                <p className="text-xs text-gray-600">Easy returns</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-gray-700 mb-2">
                  <ShieldIcon />
                </div>
                <p className="text-sm font-semibold">Secure Payment</p>
                <p className="text-xs text-gray-600">100% protected</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b">
            <div className="flex gap-8">
              {['description', 'features', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-semibold capitalize transition-colors relative ${
                    activeTab === tab ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="text-brand-blue-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {reviews.map((review, idx) => (
                  <div key={idx} className="border-b pb-6 last:border-0">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{review.name}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className={i < review.rating ? 'text-brand-orange-400' : 'text-gray-300'}>
                                <svg className="w-4 h-4" fill={i < review.rating ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                              </div>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}