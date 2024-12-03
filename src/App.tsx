import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/hero/Hero';
import { FeaturedProperties } from './components/FeaturedProperties';
import { Footer } from './components/Footer';
import './styles/swiper.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <FeaturedProperties />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;