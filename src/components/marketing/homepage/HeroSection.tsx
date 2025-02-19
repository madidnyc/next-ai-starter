'use client';

import React from 'react';

const HeroSection = () => {
  return (
    <section 
      data-testid="hero-container"
      className="w-full bg-white"
    >
      <div 
        data-testid="hero-content"
        className="flex max-w-[1200px] mx-auto px-4 py-12 items-center justify-between"
      >
        <div className="max-w-[600px] space-y-6">
          <h1 
            className="text-[48px] font-bold text-[#343A40]"
          >
            The AI Lab's Platform for Specialized Talent at Scale
          </h1>
          
          <p className="text-[16px] text-[#343A40]">
            AI-powered vetting connects you with elite academic talent in hours—not weeks.
          </p>
          
          <div className="flex gap-8">
            <div className="text-[24px] text-[#028C6A]">250,000+ Vetted Experts</div>
            <div className="text-[24px] text-[#028C6A]">7,500+ Academic Institutions</div>
            <div className="text-[24px] text-[#028C6A]">80% Faster Hiring</div>
          </div>
          
          <div className="flex gap-4 pt-6">
            <button
              className="h-[48px] px-6 bg-[#028C6A] text-white rounded-lg"
            >
              See Zaigo in Action
            </button>
            <button
              className="h-[40px] px-6 border border-[#A3E4D7] text-[#028C6A] rounded-lg"
            >
              Post a Job Now
            </button>
          </div>
        </div>

        <div 
          data-testid="dashboard-mockup"
          className="w-[600px] shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
        >
          {/* Placeholder for dashboard mockup */}
          <div className="aspect-video bg-gray-100 rounded-lg"></div>
        </div>
      </div>

      <div 
        data-testid="ticker"
        className="w-full bg-[#F8F9FA] text-[14px] text-[#028C6A] py-2 overflow-hidden"
      >
        <div className="animate-marquee whitespace-nowrap">
          Hired in 4 Hours • Hired in 6 Hours • Hired in 2 Hours
        </div>
      </div>
    </section>
  );
};

export default HeroSection;