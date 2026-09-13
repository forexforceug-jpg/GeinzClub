import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutWhatIsGeinzClub } from './components/AboutWhatIsGeinzClub';
import { HowItWorks } from './components/HowItWorks';
import { InvestmentApproaches } from './components/InvestmentApproaches';
import { InvestmentOpportunities } from './components/InvestmentOpportunities';
import { TransparencySection } from './components/TransparencySection';
import { BuiltAroundPeople } from './components/BuiltAroundPeople';
import { CommunitySection } from './components/CommunitySection';
import { PlatformMetrics } from './components/PlatformMetrics';
import { MemberStories } from './components/MemberStories';
import { SecurityAndGovernance } from './components/SecurityAndGovernance';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

// Modals
import { JoinModal } from './components/JoinModal';
import { LoginModal } from './components/LoginModal';
import { OpportunityModal } from './components/OpportunityModal';
import { PolicyModal } from './components/PolicyModal';
import { MemberDashboard } from './components/dashboard/MemberDashboard';

import { Opportunity } from './types';
import { OPPORTUNITIES } from './data/mockData';
import { ShieldCheck, ArrowRight, LayoutDashboard } from 'lucide-react';

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  // Authentication & View state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');

  const handleOpenJoin = () => {
    setJoinModalOpen(true);
  };

  const handleCloseJoin = () => {
    setJoinModalOpen(false);
  };

  const handleOpenLogin = () => {
    setLoginModalOpen(true);
  };

  const handleCloseLogin = () => {
    setLoginModalOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('landing');
  };

  const handleExploreClick = () => {
    const el = document.getElementById('investments');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If currently in Member Dashboard view
  if (currentView === 'dashboard') {
    return (
      <>
        <MemberDashboard
          onViewLandingPage={() => setCurrentView('landing')}
          onLogout={handleLogout}
          onOpenOpportunityDetail={(oppId) => {
            const opp = OPPORTUNITIES.find((o) => o.id === oppId);
            if (opp) setSelectedOpportunity(opp);
          }}
        />

        {/* Re-use Opportunity Modal for deep dossiers */}
        <OpportunityModal
          opportunity={selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)}
          onJoinClick={() => setSelectedOpportunity(null)}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#070D0A] text-slate-100 flex flex-col selection:bg-[#10E760] selection:text-black">
      
      {/* If logged in and browsing public landing page, show persistent quick-switch banner */}
      {isLoggedIn && (
        <div className="bg-[#0A1710] border-b border-[#10E760]/30 py-2 px-4 sticky top-0 z-50 text-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#10E760] animate-pulse"></span>
              <span>Authenticated as <strong className="text-white">David Kestler</strong> (Verified Operator)</span>
            </div>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="px-3 py-1 rounded-lg bg-[#10E760] text-black font-bold text-xs hover:bg-[#1cf36f] flex items-center gap-1.5 shadow-md shadow-[#10E760]/20"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Return to Dashboard</span>
            </button>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        onOpenJoin={handleOpenJoin}
        onOpenLogin={handleOpenLogin}
        isLoggedIn={isLoggedIn}
        onOpenDashboard={() => setCurrentView('dashboard')}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section (with dual desktop + mobile platform preview) */}
        <Hero
          onJoinClick={handleOpenJoin}
          onExploreClick={handleExploreClick}
        />

        {/* 2. Trust Strip (Real People. Real Businesses. Real Opportunities.) */}
        <TrustStrip />

        {/* 3. What GeinzClub Actually Is (More Than an Investment Platform - Connect, Build, Invest, Grow) */}
        <AboutWhatIsGeinzClub
          onJoinClick={handleOpenJoin}
        />

        {/* 4. How It Works (5-Step Journey: 1. Join -> 2. Verify -> 3. Discover -> 4. Choose -> 5. Track) */}
        <HowItWorks
          onJoinClick={handleOpenJoin}
        />

        {/* 5. You Choose How Your Capital Works (Smart Allocation vs Manual Investing with Central "OR") */}
        <InvestmentApproaches
          onJoinClick={handleOpenJoin}
          onExploreClick={handleExploreClick}
        />

        {/* 6. Investment Opportunities (Real Projects. Real People. Real Impact.) */}
        <InvestmentOpportunities
          onSelectOpportunity={(opp) => setSelectedOpportunity(opp)}
          onJoinClick={handleOpenJoin}
        />

        {/* 7. Transparency (Know Where Your Money Goes - Detailed Deal Room Visual) */}
        <TransparencySection />

        {/* 8. Built Around People (Entrepreneurs, Business Owners, Investors, Traders, Professionals, Builders) */}
        <BuiltAroundPeople
          onJoinClick={handleOpenJoin}
        />

        {/* 9. Community (Discussions, Member Activity, Masterminds & Gatherings) */}
        <CommunitySection
          onJoinClick={handleOpenJoin}
        />

        {/* 10. Platform Metrics (Early Stage Platform Track Record) */}
        <PlatformMetrics />

        {/* 11. Member Stories (Authentic Testimonials from Founders & Investors) */}
        <MemberStories
          onJoinClick={handleOpenJoin}
        />

        {/* 12. Security, Verification & Responsibility (No False Promises, Rigorous Governance) */}
        <SecurityAndGovernance />

        {/* 13. CTA Banner (Ready to Build, Invest & Grow Together?) */}
        <CtaBanner
          onJoinClick={handleOpenJoin}
          onExploreClick={handleExploreClick}
        />
      </main>

      {/* Substantial Footer */}
      <Footer
        onJoinClick={handleOpenJoin}
        onOpenPolicy={(policy) => setActivePolicy(policy)}
      />

      {/* Modals */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={handleCloseJoin}
      />

      <LoginModal
        isOpen={loginModalOpen}
        onClose={handleCloseLogin}
        onSwitchToJoin={() => {
          handleCloseLogin();
          handleOpenJoin();
        }}
        onLoginSuccess={handleLoginSuccess}
      />

      <OpportunityModal
        opportunity={selectedOpportunity}
        onClose={() => setSelectedOpportunity(null)}
        onJoinClick={() => {
          setSelectedOpportunity(null);
          handleOpenJoin();
        }}
      />

      <PolicyModal
        policyName={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </div>
  );
}
