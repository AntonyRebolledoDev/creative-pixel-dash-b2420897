import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Promotions from '@/components/Promotions';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import Billing from '@/components/Billing';
import Branches from '@/components/Branches';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="w-full relative bg-white">
      <Header />
      <main>
        <Hero />
        <Promotions />
        <Services />
        <Benefits />
        <Billing />
        <Branches />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
