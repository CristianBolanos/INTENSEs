import React from 'react';
import { Bed, Bath, Square } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="w-full h-64 object-cover"
        />
        {property.featured && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded">
            Featured
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded text-lg font-bold">
          ${property.price.toLocaleString()}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-4">{property.location}</p>
        <div className="flex justify-between text-gray-500">
          <div className="flex items-center space-x-1">
            <Bed className="w-5 h-5" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="w-5 h-5" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center space-x-1">
            <Square className="w-5 h-5" />
            <span>{property.sqft} Sq Ft</span>
          </div>
        </div>
      </div>
    </div>
  );
}