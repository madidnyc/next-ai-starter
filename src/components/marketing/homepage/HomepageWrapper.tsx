'use client';

import React from 'react';
import ClientProvider from '@/components/ClientProvider';
import HeroSection from './HeroSection';

const HomepageWrapper = () => {
  return (
    <ClientProvider>
      <HeroSection />
    </ClientProvider>
  );
};

export default HomepageWrapper;