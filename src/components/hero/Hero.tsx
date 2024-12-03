import React from 'react';
import { HeroSlider } from './HeroSlider';
import { SearchForm } from './SearchForm';

export function Hero() {
  return (
    <div className="relative pt-[72px]">
      <HeroSlider />
      <SearchForm />
    </div>
  );
}