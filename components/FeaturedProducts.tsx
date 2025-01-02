'use client'

import React, { useState } from 'react';

const FeaturedProducts = ({ id }: { id: string }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = {
    all: 'All Products',
    skincare: 'Skincare & Beauty',
    bags: 'Bags & Accessories',
    home: 'Home & Living',
    kitchen: 'Kitchen & Dining',
    fashion: 'Sustainable Fashion',
    wellness: 'Health & Wellness',
    travel: 'Travel Essentials',
    zero_waste: 'Zero Waste',
    pets: 'Eco Pet Care'
  };

  const products = [
    // Skincare & Beauty
    {
      name: 'Rosehip Night Serum',
      description: 'Organic rosehip oil serum with vitamin C for overnight skin repair.',
      image: '/images/rosehip-serum.jpg',
      impact: 'Zero-waste glass packaging',
      category: 'skincare'
    },
    {
      name: 'Bamboo Charcoal Cleanser',
      description: 'Deep cleansing face wash with activated charcoal.',
      image: '/images/charcoal-cleanser.jpg',
      impact: 'Plastic-free packaging',
      category: 'skincare'
    },
    {
      name: 'Natural Dry Shampoo',
      description: 'Rice and kaolin clay based dry shampoo for all hair types.',
      image: '/images/dry-shampoo.jpg',
      impact: 'Refillable container system',
      category: 'skincare'
    },

    // Bags & Accessories
    {
      name: 'Hemp Canvas Tote',
      description: 'Durable hemp canvas bag with vegan straps.',
      image: '/images/hemp-tote.jpg',
      impact: 'Biodegradable materials',
      category: 'bags'
    },
    {
      name: 'Cork Laptop Sleeve',
      description: 'Protective sleeve made from sustainable cork fabric.',
      image: '/images/cork-sleeve.jpg',
      impact: 'Renewable cork materials',
      category: 'bags'
    },
    {
      name: 'Recycled Denim Backpack',
      description: 'Stylish backpack from upcycled denim.',
      image: '/images/denim-backpack.jpg',
      impact: 'Saves 2500 gallons of water',
      category: 'bags'
    },

    // Home & Living
    {
      name: 'Organic Cotton Bedding',
      description: 'GOTS certified organic cotton bed sheets and pillowcases.',
      image: '/images/cotton-bedding.jpg',
      impact: 'Pesticide-free farming',
      category: 'home'
    },
    {
      name: 'Beeswax Candles',
      description: 'Natural air-purifying beeswax candles in recycled glass.',
      image: '/images/beeswax-candles.jpg',
      impact: 'Supports local beekeepers',
      category: 'home'
    },
    {
      name: 'Bamboo Air Purifier',
      description: 'Natural air purifier with activated charcoal.',
      image: '/images/air-purifier.jpg',
      impact: 'Plastic-free air cleaning',
      category: 'home'
    },

    // Kitchen & Dining
    {
      name: 'Silicone Food Covers',
      description: 'Reusable stretch lids for various containers.',
      image: '/images/food-covers.jpg',
      impact: 'Replaces plastic wrap',
      category: 'kitchen'
    },
    {
      name: 'Coconut Bowl Set',
      description: 'Handcrafted bowls from reclaimed coconut shells.',
      image: '/images/coconut-bowls.jpg',
      impact: 'Upcycled natural materials',
      category: 'kitchen'
    },
    {
      name: 'Glass Storage Containers',
      description: 'Plastic-free food storage with bamboo lids.',
      image: '/images/glass-containers.jpg',
      impact: 'Lifetime durability',
      category: 'kitchen'
    },

    // Sustainable Fashion
    {
      name: 'Hemp Basics Bundle',
      description: 'Essential t-shirts made from organic hemp.',
      image: '/images/hemp-basics.jpg',
      impact: 'Low-water cultivation',
      category: 'fashion'
    },
    {
      name: 'Recycled Ocean Plastic Watch',
      description: 'Timepiece made from recovered ocean plastic.',
      image: '/images/ocean-watch.jpg',
      impact: 'Removes 10kg ocean plastic',
      category: 'fashion'
    },
    {
      name: 'Cork Wallet',
      description: 'Slim wallet made from sustainable cork.',
      image: '/images/cork-wallet.jpg',
      impact: 'Vegan leather alternative',
      category: 'fashion'
    },

    // Health & Wellness
    {
      name: 'Natural Yoga Mat',
      description: 'Non-toxic rubber and cork yoga mat.',
      image: '/images/yoga-mat.jpg',
      impact: 'Biodegradable materials',
      category: 'wellness'
    },
    {
      name: 'Meditation Cushion',
      description: 'Organic buckwheat meditation pillow.',
      image: '/images/meditation-cushion.jpg',
      impact: 'Sustainable agriculture',
      category: 'wellness'
    },
    {
      name: 'Bamboo Massage Tools',
      description: 'Self-massage and acupressure tools.',
      image: '/images/massage-tools.jpg',
      impact: 'Renewable bamboo',
      category: 'wellness'
    },

    // Travel Essentials
    {
      name: 'Bamboo Travel Utensils',
      description: 'Portable cutlery set with case.',
      image: '/images/travel-utensils.jpg',
      impact: 'Replaces plastic utensils',
      category: 'travel'
    },
    {
      name: 'Solar Power Bank',
      description: 'Portable solar charger for devices.',
      image: '/images/solar-bank.jpg',
      impact: 'Clean energy charging',
      category: 'travel'
    },

    // Zero Waste
    {
      name: 'Compost Bin',
      description: 'Countertop compost bin with charcoal filter.',
      image: '/images/compost-bin.jpg',
      impact: 'Reduces landfill waste',
      category: 'zero_waste'
    },
    {
      name: 'Safety Razor',
      description: 'Plastic-free metal safety razor.',
      image: '/images/safety-razor.jpg',
      impact: 'Eliminates plastic razors',
      category: 'zero_waste'
    },

    // Eco Pet Care
    {
      name: 'Hemp Pet Collar',
      description: 'Durable hemp pet collar with coconut buttons.',
      image: '/images/pet-collar.jpg',
      impact: 'Plastic-free pet care',
      category: 'pets'
    },
    {
      name: 'Natural Pet Toys',
      description: 'Organic cotton and hemp rope toys.',
      image: '/images/pet-toys.jpg',
      impact: 'Non-toxic materials',
      category: 'pets'
    }
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
                  className="w-full h-48 object-cover object-center"
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