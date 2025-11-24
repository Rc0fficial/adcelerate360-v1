'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/HeroOptimized';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import SocialProof from '@/components/SocialProof';
import ResultsDashboard from '@/components/ResultsDashboard';
import CaseStudies from '@/components/CaseStudies';
import TrustedMarketplaces from '@/components/TrustedMarketplacesOptimized';
import Tools from '@/components/ToolsOptimized';
import TrackRecord from '@/components/TrackRecord';
import Testimonials from '@/components/Testimonials';
import LeadMagnet from '@/components/LeadMagnet';
import BookCall from '@/components/BookCall';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import UrgencyBanner from '@/components/UrgencyBanner';
import { MotionProvider } from './motion-provider';

export default function Home() {
  return (
    <MotionProvider>
      <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Global Background Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#d1981015_1px,transparent_1px),linear-gradient(to_bottom,#d1981015_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" style={{ zIndex: 0 }} />

      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <UrgencyBanner />
        <Hero />
        <SocialProof />
        <About />
        <Services />
        <Process />
        <ResultsDashboard />
        <WhyChooseUs />
        <TrustedMarketplaces />
        <Tools />
        <TrackRecord />
        <CaseStudies />
        <Testimonials />
        <LeadMagnet />
        <BookCall />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
    </MotionProvider>
  );
}
