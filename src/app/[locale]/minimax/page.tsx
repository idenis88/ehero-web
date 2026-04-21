import Nav from '../../../components/layout/Nav';
import Footer from '../../../components/layout/Footer';
import Hero from '../../../components/sections/Hero';
import Marquee from '../../../components/sections/Marquee';
import WhyFeatures from '../../../components/sections/WhyFeatures';
import HowItWorks from '../../../components/sections/HowItWorks';
import Audience from '../../../components/sections/Audience';
import StripeThriveCart from '../../../components/sections/StripeThriveCart';
import WhyEhero from '../../../components/sections/WhyEhero';
import Testimonials from '../../../components/sections/Testimonials';
import Pricing from '../../../components/sections/Pricing';
import FAQ from '../../../components/sections/FAQ';
import CTA from '../../../components/sections/CTA';

export default function MinimaxPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <HowItWorks />
        <WhyFeatures />
        <Audience />
        <StripeThriveCart />
        <WhyEhero />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}