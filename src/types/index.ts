export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  featured?: boolean;
  description?: string;
  amenities?: string[];
  images?: string[];
  agent?: Agent;
}

export interface Agent {
  id: number;
  name: string;
  photo: string;
  phone: string;
  email: string;
  position: string;
}

export interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}

export interface TestimonialType {
  id: number;
  text: string;
  author: string;
  position: string;
  avatar: string;
}