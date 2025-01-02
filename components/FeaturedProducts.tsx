'use client'

import React, { useState } from 'react';

const FeaturedProducts = ({ id }: { id: string }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = {
    all: 'All Products',
    skincare: 'Skincare & Beauty',
    bags: 'Bags & Accessories',
    home: 'Home & Living',
    travel: 'Travel Essentials',
    pets: 'Pet Care'
  };

  const products = [
    // Skincare & Beauty
    {
      name: 'Kiwi Night Serum',
      description: 'Revitalizing night serum infused with kiwi extract, packed with vitamins and antioxidants to rejuvenate the skin overnight.',
      image: '/images/skincare/borcelle.png',
      impact: 'Eco-friendly packaging, made from recyclable materials',
      category: 'skincare'
    },
    {
      name: 'Bamboo Cleanser',
      description: 'Gentle face cleanser made with bamboo extract, designed to purify and refresh the skin while maintaining its natural balance.',
      image: '/images/skincare/aloe-cream.png',
      impact: 'Plastic-free packaging',
      category: 'skincare'
    },
    {
      name: 'Natural Dry Shampoo',
      description: 'Rice and kaolin clay based dry shampoo for all hair types.',
      image: '/images/skincare/natural dry shampoo.png',
      impact: 'Refillable container system',
      category: 'skincare'
    },

    // Bags & Accessories
    {
      name: 'Tote bag',
      description: 'A versatile, reusable tote bag made from high-quality, eco-friendly materials. Its perfect for carrying groceries, books, or personal items ',
      image: '/images/bags/tote.png',
      impact: 'Biodegradable materials',
      category: 'bags'
    },
    {
      name: 'Zinc Earings',
      description: 'made from zinc alloy, a durable and lightweight material. These earrings feature a sleek design, making them perfect for both casual and formal occasions.',
      image: '/images/bags/zinc-earings.png',
      impact: 'Zinc is a non-toxic metal that is 100% recyclable',
      category: 'bags'
    },
    {
      name: 'Cork Handbag',
      description: 'A chic and durable handbag made from eco-friendly cork fabric. The Cork Handbag is lightweight yet sturdy',
      image: '/images/bags/bag.png',
      impact: 'Cork is biodegradable and recyclable',
      category: 'bags'
    },

    // Home & Living
    {
      name: 'Clay Vase',
      description: 'A beautifully crafted vase made from natural clay, perfect for displaying flowers or as a decorative piece.',
      image: '/images/home/clay-vase.png',
      impact: 'Uses fewer chemicals and synthetic materials than other ceramics.',
      category: 'home'
    },
    {
      name: 'Organic Candle',
      description: 'A natural, eco-friendly candle made from organic waxes like soy, beeswax, or coconut. These candles burn cleanly without harmful chemicals',
      image: '/images/home/organic-candles.png',
      impact: 'Emits less soot and toxins',
      category: 'home'
    },
    {
      name: 'Bamboo Toothbrush',
      description: 'A sustainable toothbrush with a handle made from biodegradable bamboo. The bamboo toothbrush features soft bristles, often made from nylon or plant-based materials',
      image: '/images/home/bamboo-toothbrush.png',
      impact: 'more sustainable material than plastic.',
      category: 'home'
    },

    // Travel Essentials
    {
      name: 'Bamboo Travel Utensils',
      description: 'A portable set of utensils made from sustainable bamboo, designed for on-the-go use. ',
      image: '/images/travel/bamboo-travel.png',
      impact: 'Sustainable alternative to disposable plastic cutlery.',
      category: 'travel'
    },

    // Eco Pet Care
    {
      name: 'Organic Kibble',
      description: 'Nutritious pet food made from certified organic ingredients, including natural grains, vegetables, and high-quality protein sources',
      image: '/images/pet/organic-kibble.png',
      impact: ' smaller carbon footprint compared to conventional pet food.',
      category: 'pets'
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="featured-products" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Eco-Friendly Lifestyle Essentials
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Discover our comprehensive collection of sustainable products that make eco-conscious living beautiful, practical, and accessible.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeCategory === key
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div key={product.name} className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {product.description}
                </p>
                <div className="mt-4 px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full inline-block">
                  {product.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;