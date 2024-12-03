import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavMenu } from './navigation/NavMenu';
import { MobileMenu } from './navigation/MobileMenu';

export function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white">
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="text-sm">1-800-1234-567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-sm">info@demolink.org</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm">2130 Fulton Street, San Diego, CA 94117-1080</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">INTENSE</Link>
          <NavMenu />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}