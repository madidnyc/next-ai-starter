import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '@/components/marketing/homepage/HeroSection';

describe('HeroSection', () => {
  it('renders the headline with correct text and styling', () => {
    render(<HeroSection />);
    
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveTextContent(
      'The AI Lab\'s Platform for Specialized Talent at Scale'
    );
    expect(headline).toHaveClass('text-[48px]', 'font-bold', 'text-[#343A40]');
  });

  it('renders the subhead with correct text and styling', () => {
    render(<HeroSection />);
    
    const subhead = screen.getByText(
      'AI-powered vetting connects you with elite academic talent in hours—not weeks.'
    );
    expect(subhead).toHaveClass('text-[16px]', 'text-[#343A40]');
  });

  it('renders key metrics with correct text and styling', () => {
    render(<HeroSection />);
    
    const metrics = [
      '250,000+ Vetted Experts',
      '7,500+ Academic Institutions',
      '80% Faster Hiring'
    ];

    metrics.forEach(metric => {
      const element = screen.getByText(metric);
      expect(element).toHaveClass('text-[24px]', 'text-[#028C6A]');
    });
  });

  it('renders CTA buttons with correct text and styling', () => {
    render(<HeroSection />);
    
    const primaryCTA = screen.getByRole('button', { name: 'See Zaigo in Action' });
    expect(primaryCTA).toHaveClass('h-[48px]', 'bg-[#028C6A]', 'text-white');

    const secondaryCTA = screen.getByRole('button', { name: 'Post a Job Now' });
    expect(secondaryCTA).toHaveClass('h-[40px]', 'text-[#028C6A]', 'border-[#A3E4D7]');
  });

  it('renders the ticker with correct text and styling', () => {
    render(<HeroSection />);
    
    const ticker = screen.getByTestId('ticker');
    expect(ticker).toHaveClass('bg-[#F8F9FA]', 'text-[14px]', 'text-[#028C6A]');
    expect(ticker).toHaveTextContent('Hired in 4 Hours • Hired in 6 Hours • Hired in 2 Hours');
  });

  it('maintains responsive layout structure', () => {
    render(<HeroSection />);
    
    const container = screen.getByTestId('hero-container');
    expect(container).toHaveClass('bg-white');

    const contentWrapper = screen.getByTestId('hero-content');
    expect(contentWrapper).toHaveClass('flex');

    const mockupImage = screen.getByTestId('dashboard-mockup');
    expect(mockupImage).toHaveClass('w-[600px]', 'shadow-[0_2px_8px_rgba(0,0,0,0.1)]');
  });
});