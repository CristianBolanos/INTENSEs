import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
    submenu: [
      { label: 'Modern Home', href: '/home/modern' },
      { label: 'Classic Home', href: '/home/classic' }
    ]
  },
  {
    label: 'Properties',
    href: '/properties',
    submenu: [
      { label: 'For Sale', href: '/properties/sale' },
      { label: 'For Rent', href: '/properties/rent' }
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
];

export function NavMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav className="hidden md:flex space-x-8">
      {menuItems.map((item) => (
        <div key={item.label} className="relative">
          {item.submenu ? (
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <span>{item.label}</span>
                <ChevronDown className="w-4 h-4" />
              </Menu.Button>

              <AnimatePresence>
                {openMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Menu>
          ) : (
            <Link to={item.href} className="text-gray-700 hover:text-blue-600">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}