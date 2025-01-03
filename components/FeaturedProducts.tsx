'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

interface Category {
  [key: string]: string;
}

interface SeoData {
  title: string;
  description: string;
  keywords: string;
}

interface Product {
  name: string;
  description: string;
  image: string;
  impact: string;
  category: string;
  alt: string;
}

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories: { [key: string]: string } = {
    all: 'All Products',
    skincare: 'Skincare & Beauty',
    bags: 'Bags & Accessories',
    home: 'Home & Living',
    travel: 'Travel Essentials',
    pets: 'Pet Care'
  };

  const seoData: SeoData = {
    title: 'Eco-Friendly Lifestyle Essentials | Sustainable Products',
    description: 'Discover our comprehensive collection of sustainable products including skincare, bags, home essentials, and more. Shop eco-conscious living products.',
    keywords: 'eco-friendly products, sustainable living, green products, eco essentials',
  };

  const products: Product[] = [
    // Skincare & Beauty
    {
      name: 'Kiwi Night Serum',
      description: 'Revitalizing night serum infused with kiwi extract, packed with vitamins and antioxidants to rejuvenate the skin overnight.',
      image: '/images/skincare/borcelle.png',
      impact: 'Eco-friendly packaging, made from recyclable materials',
      category: 'skincare',
      alt: 'Natural kiwi extract night serum in recyclable glass bottle with dropper'
    },
    {
      name: 'Bamboo Cleanser',
      description: 'Gentle face cleanser made with bamboo extract, designed to purify and refresh the skin while maintaining its natural balance.',
      image: '/images/skincare/aloe-cream.png',
      impact: 'Plastic-free packaging',
      category: 'skincare',
      alt: 'Eco-friendly bamboo extract facial cleanser in plastic-free container'
    },
    {
      name: 'Natural Dry Shampoo',
      description: 'Rice and kaolin clay based dry shampoo for all hair types.',
      image: '/images/skincare/natural dry shampoo.png',
      impact: 'Refillable container system',
      category: 'skincare',
      alt: 'Natural dry shampoo powder in refillable glass container with bamboo cap'
    },

    // Bags & Accessories
    {
      name: 'Tote bag',
      description: 'A versatile, reusable tote bag made from high-quality, eco-friendly materials. Its perfect for carrying groceries, books, or personal items ',
      image: '/images/bags/tote.png',
      impact: 'Biodegradable materials',
      category: 'bags',
      alt: 'Sustainable canvas tote bag made from biodegradable materials'
    },
    {
      name: 'Zinc Earings',
      description: 'Made from zinc alloy, a durable and lightweight material. These earrings feature a sleek design, making them perfect for both casual and formal occasions.',
      image: '/images/bags/zinc-earings.png',
      impact: 'Zinc is a non-toxic metal that is 100% recyclable',
      category: 'bags',
      alt: 'Recyclable zinc alloy earrings with modern minimalist design'
    },
    {
      name: 'Cork Handbag',
      description: 'A chic and durable handbag made from eco-friendly cork fabric. The Cork Handbag is lightweight yet sturdy',
      image: '/images/bags/bag.png',
      impact: 'Cork is biodegradable and recyclable',
      category: 'bags',
      alt: 'Sustainable cork fabric handbag with elegant design and eco-friendly materials'
    },

    // Home & Living
    {
      name: 'Clay Vase',
      description: 'A beautifully crafted vase made from natural clay, perfect for displaying flowers or as a decorative piece.',
      image: '/images/home/clay-vase.png',
      impact: 'Uses fewer chemicals and synthetic materials than other ceramics.',
      category: 'home',
      alt: 'Handcrafted natural clay vase with minimal chemical processing'
    },
    {
      name: 'Organic Candle',
      description: 'A natural, eco-friendly candle made from organic waxes like soy, beeswax, or coconut. These candles burn cleanly without harmful chemicals',
      image: '/images/home/organic-candles.png',
      impact: 'Emits less soot and toxins',
      category: 'home',
      alt: 'Organic soy wax candle in recycled glass container with natural cotton wick'
    },
    {
      name: 'Bamboo Toothbrush',
      description: 'A sustainable toothbrush with a handle made from biodegradable bamboo. The bamboo toothbrush features soft bristles, often made from nylon or plant-based materials',
      image: '/images/home/bamboo-toothbrush.png',
      impact: 'more sustainable material than plastic.',
      category: 'home',
      alt: 'Biodegradable bamboo toothbrush with plant-based bristles'
    },

    // Travel Essentials
    {
      name: 'Bamboo Travel Utensils',
      description: 'A portable set of utensils made from sustainable bamboo, designed for on-the-go use. ',
      image: '/images/travel/bamboo-travel.png',
      impact: 'Sustainable alternative to disposable plastic cutlery.',
      category: 'travel',
      alt: 'Portable bamboo travel utensil set with carrying case made from organic cotton'
    },

    // Eco Pet Care
    {
      name: 'Organic Kibble',
      description: 'Nutritious pet food made from certified organic ingredients, including natural grains, vegetables, and high-quality protein sources',
      image: '/images/pet/organic-kibble.png',
      impact: ' smaller carbon footprint compared to conventional pet food.',
      category: 'pets',
      alt: 'Organic pet food kibble made with certified organic ingredients in recyclable packaging'
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-featured-products.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Eco-Friendly Lifestyle Products" />
      </Head>

      <section
        id="featured-products"
        className="py-24"
        aria-label="Featured Products Section"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <header className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Eco-Friendly Lifestyle Essentials
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Discover our comprehensive collection of sustainable products that make eco-conscious living beautiful, practical, and accessible.
            </p>
          </header>

          <nav className="mb-12 overflow-x-auto" aria-label="Product Categories">
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
                  aria-current={activeCategory === key ? 'true' : 'false'}
                  aria-label={`Show ${label} products`}
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>

          <div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            role="list"
            aria-label="Product List"
          >
            {filteredProducts.map((product, index) => (
              <article
                key={`${product.name}-${index}`}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    loading="lazy"
                    itemProp="image"
                  />
                </div>
                <div className="p-6">
                  <h2
                    className="text-lg font-medium text-gray-900"
                    itemProp="name"
                  >
                    {product.name}
                  </h2>
                  <p
                    className="mt-2 text-sm text-gray-500"
                    itemProp="description"
                  >
                    {product.description}
                  </p>
                  <div
                    className="mt-4 px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full inline-block"
                    itemProp="additionalProperty"
                  >
                    {product.impact}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;