import React from 'react';
import { PropertyCard } from './PropertyCard';
import type { Property } from '../types/property';

const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Modern Villa with Pool",
    price: 850000,
    location: "Beverly Hills, CA",
    beds: 4,
    baths: 3,
    sqft: 3200,
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    price: 1200000,
    location: "Manhattan, NY",
    beds: 3,
    baths: 2,
    sqft: 2800,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Oceanfront Condo",
    price: 750000,
    location: "Miami Beach, FL",
    beds: 2,
    baths: 2,
    sqft: 1800,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    featured: true
  }
];

export function FeaturedProperties() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}