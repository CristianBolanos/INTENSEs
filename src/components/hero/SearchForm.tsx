import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export function SearchForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="absolute bottom-0 left-0 right-0 z-10 transform translate-y-1/2"
    >
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Location"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <select className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              <option>Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
              <option>Villa</option>
            </select>
            <select className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              <option>Price Range</option>
              <option>$100k - $200k</option>
              <option>$200k - $300k</option>
              <option>$300k - $500k</option>
              <option>$500k+</option>
            </select>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded flex items-center justify-center space-x-2 hover:bg-blue-700 transition duration-300">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}