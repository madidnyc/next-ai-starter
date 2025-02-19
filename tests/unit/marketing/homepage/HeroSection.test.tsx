// This code is testing the main hero section that appears at the top of our homepage
// We're importing some testing tools and the actual HeroSection component we want to test
import { render, screen } from '@testing-library/react';
import HeroSection from '@/components/homepage/HeroSection';

// This is like a container for all our tests related to the HeroSection
describe('HeroSection', () => {
  // Test #1: Checking if the main headline shows up correctly
  it('renders the headline with correct text and styling', () => {
    // Put the HeroSection on a virtual screen
    render(<HeroSection />);
    
    // Look for the main heading and make sure it has the right text
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveTextContent('The AI Lab's Platform for Specialized Talent at Scale');
    // Check if the text looks right (size, boldness, color)
    expect(headline).toHaveStyle({
      fontSize: '48px',
      fontWeight: 'bold', 
      color: '#343A40'
    });
  });

  // Test #2: Checking if the smaller text below the headline looks right
  it('renders the subhead with correct text and styling', () => {
    render(<HeroSection />);
    
    // Find the smaller text and check its appearance
    const subhead = screen.getByText('AI-powered vetting connects you with elite academic talent in hours—not weeks.');
    expect(subhead).toHaveStyle({
      fontSize: '16px',
      color: '#343A40'
    });
  });

  // Test #3: Making sure our impressive numbers/stats show up correctly
  it('renders key metrics with correct text and styling', () => {
    render(<HeroSection />);
    
    // List of stats we want to check
    const metrics = [
      '250,000+ Vetted Experts',
      '7,500+ Academic Institutions',
      '80% Faster Hiring'
    ];

    // Check each stat one by one to make sure they look right
    metrics.forEach(metric => {
      const element = screen.getByText(metric);
      expect(element).toHaveStyle({
        fontSize: '24px',
        color: '#028C6A'
      });
    });
  });

  // Test #4: Making sure our clickable buttons look and say the right things
  it('renders CTA buttons with correct text and styling', () => {
    render(<HeroSection />);
    
    // Check the main green button
    const primaryCTA = screen.getByRole('button', { name: 'See Zaigo in Action' });
    expect(primaryCTA).toHaveStyle({
      height: '48px',
      backgroundColor: '#028C6A',
      color: '#FFFFFF'
    });

    // Check the secondary button
    const secondaryCTA = screen.getByRole('button', { name: 'Post a Job Now' });
    expect(secondaryCTA).toHaveStyle({
      height: '40px',
      color: '#028C6A'
    });
    // Make sure it has a nice border
    expect(secondaryCTA).toHaveClass('border-[#A3E4D7]');
  });

  // Test #5: Checking if the moving text at the top works right
  it('renders the ticker with correct text and styling', () => {
    render(<HeroSection />);
    
    // Find the moving text and check its style and content
    const ticker = screen.getByTestId('ticker');
    expect(ticker).toHaveStyle({
      backgroundColor: '#F8F9FA',
      fontSize: '14px',
      color: '#028C6A'
    });
    expect(ticker).toHaveTextContent('Hired in 4 Hours • Hired in 6 Hours • Hired in 2 Hours');
  });

  // Test #6: Making sure everything is laid out nicely and responsive
  it('maintains responsive layout structure', () => {
    render(<HeroSection />);
    
    // Check the main container background
    const container = screen.getByTestId('hero-container');
    expect(container).toHaveStyle({
      backgroundColor: '#FFFFFF'
    });

    // Make sure content is using flex for nice layout
    const contentWrapper = screen.getByTestId('hero-content');
    expect(contentWrapper).toHaveClass('flex');

    // Check if our dashboard preview image is the right size and has a nice shadow
    const mockupImage = screen.getByTestId('dashboard-mockup');
    expect(mockupImage).toHaveStyle({
      width: '600px'
    });
    expect(mockupImage).toHaveClass('shadow-[0_2px_8px_rgba(0,0,0,0.1)]');
  });
});