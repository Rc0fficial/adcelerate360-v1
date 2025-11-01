'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
// import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <WhyChooseUs />
      {/* <CaseStudies /> */}
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
