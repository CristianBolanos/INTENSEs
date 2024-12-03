import React from 'react';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Find Your Perfect Property
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          We have the most comprehensive property database in the USA with thousands of properties for sale
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Location"
              className="w-full px-4 py-2 border rounded"
            />
            <select className="w-full px-4 py-2 border rounded">
              <option>Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
            </select>
            <select className="w-full px-4 py-2 border rounded">
              <option>Price Range</option>
              <option>$100k - $200k</option>
              <option>$200k - $300k</option>
              <option>$300k+</option>
            </select>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded flex items-center justify-center space-x-2 hover:bg-blue-700">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}