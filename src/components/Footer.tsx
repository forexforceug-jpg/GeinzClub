import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Twitter, Linkedin, Send, Youtube, Globe } from 'lucide-react';

interface FooterProps {
  onJoinClick: () => void;
  onOpenPolicy?: (policyName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onJoinClick, onOpenPolicy }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (onOpenPolicy) {
      onOpenPolicy(href);
    }
  };

  return (
    <footer className="bg-[#050A07] text-slate-400 border-t border-white/10 pt-16 pb-12 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Logo + Dispatch Newsletter + Nav Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column (Left) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10E760] to-[#0A8738] flex items-center justify-center p-0.5 shadow-lg shadow-[#10E760]/20">
                <div className="w-full h-full bg-[#070D0A] rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-black text-xl text-[#10E760]">GC</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-white">
                  GEINZ<span className="text-[#10E760]">CLUB</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-semibold">
                  A Club of Money Makers
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              The digital headquarters where real entrepreneurs, business owners, and investors connect, build businesses, discover verified investments, and compound wealth together.
            </p>

            {/* Newsletter Dispatch Box */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold text-white">
                Receive the GeinzClub Private Deal Brief
              </div>
              {subscribed ? (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-[#10E760]/40 text-[#10E760] text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! You will receive our weekly verified deal debrief.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-[#10E760]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-xs hover:bg-[#1cf36f] transition-colors"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 hover:text-[#10E760] flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 hover:text-[#10E760] flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 hover:text-[#10E760] flex items-center justify-center transition-colors">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 hover:text-[#10E760] flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Columns (6 Columns required by prompt: Company, How It Works, Investments, Community, Resources, Contact) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-xs">
            
            {/* 1. Company */}
            <div className="space-y-3">
              <div className="font-display font-bold text-white uppercase tracking-wider text-[11px]">
                Company
              </div>
              <ul className="space-y-2">
                <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#10E760] transition-colors">About Club</a></li>
                <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#10E760] transition-colors">Manifesto</a></li>
                <li><a href="#members" onClick={(e) => handleLinkClick(e, '#members')} className="hover:text-[#10E760] transition-colors">Leadership</a></li>
                <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#10E760] transition-colors">Chapters</a></li>
              </ul>
            </div>

            {/* 2. How It Works */}
            <div className="space-y-3">
              <div className="font-display font-bold text-white uppercase tracking-wider text-[11px]">
                How It Works
              </div>
              <ul className="space-y-2">
                <li><a href="#how-it-works" onClick={(e) => handleLinkClick(e, '#how-it-works')} className="hover:text-[#10E760] transition-colors">5-Step Flow</a></li>
                <li><a href="#how-it-works" onClick={(e) => handleLinkClick(e, '#how-it-works')} className="hover:text-[#10E760] transition-colors">Smart Allocation</a></li>
                <li><a href="#how-it-works" onClick={(e) => handleLinkClick(e, '#how-it-works')} className="hover:text-[#10E760] transition-colors">Manual Investing</a></li>
                <li><a href="#how-it-works" onClick={(e) => handleLinkClick(e, '#how-it-works')} className="hover:text-[#10E760] transition-colors">Due Diligence</a></li>
              </ul>
            </div>

            {/* 3. Investments */}
            <div className="space-y-3">
              <div className="font-display font-bold text-white uppercase tracking-wider text-[11px]">
                Investments
              </div>
              <ul className="space-y-2">
                <li><a href="#investments" onClick={(e) => handleLinkClick(e, '#investments')} className="hover:text-[#10E760] transition-colors">Live Deals</a></li>
                <li><a href="#investments" onClick={(e) => handleLinkClick(e, '#investments')} className="hover:text-[#10E760] transition-colors">Clean Energy</a></li>
                <li><a href="#investments" onClick={(e) => handleLinkClick(e, '#investments')} className="hover:text-[#10E760] transition-colors">AgTech</a></li>
                <li><a href="#investments" onClick={(e) => handleLinkClick(e, '#investments')} className="hover:text-[#10E760] transition-colors">Logistics</a></li>
              </ul>
            </div>

            {/* 4. Community */}
            <div className="space-y-3">
              <div className="font-display font-bold text-white uppercase tracking-wider text-[11px]">
                Community
              </div>
              <ul className="space-y-2">
                <li><a href="#community" onClick={(e) => handleLinkClick(e, '#community')} className="hover:text-[#10E760] transition-colors">Discussions</a></li>
                <li><a href="#community" onClick={(e) => handleLinkClick(e, '#community')} className="hover:text-[#10E760] transition-colors">Masterminds</a></li>
                <li><a href="#community" onClick={(e) => handleLinkClick(e, '#community')} className="hover:text-[#10E760] transition-colors">Founder AMAs</a></li>
                <li><a href="#members" onClick={(e) => handleLinkClick(e, '#members')} className="hover:text-[#10E760] transition-colors">Member Directory</a></li>
              </ul>
            </div>

            {/* 5. Resources */}
            <div className="space-y-3">
              <div className="font-display font-bold text-white uppercase tracking-wider text-[11px]">
                Resources
              </div>
              <ul className="space-y-2">
                <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#10E760] transition-colors">Deal Room Guide</a></li>
                <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#10E760] transition-colors">SPV Structures</a></li>
                <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#10E760] transition-colors">Tax Efficiency</a></li>
                <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#10E760] transition-colors">Glossary</a></li>
              </ul>
            </div>

            {/* 6. Contact */}
            <div className="space-y-3" id="contact">
              <div className="font-display font-bold text-white uppercase tracking-wider text-[11px]">
                Contact
              </div>
              <ul className="space-y-2">
                <li><a href="mailto:membership@geinzclub.com" className="hover:text-[#10E760] transition-colors">Membership Desk</a></li>
                <li><a href="mailto:deals@geinzclub.com" className="hover:text-[#10E760] transition-colors">Submit Deal</a></li>
                <li><a href="mailto:press@geinzclub.com" className="hover:text-[#10E760] transition-colors">Media Relations</a></li>
                <li><span className="text-slate-500">London · Zurich</span></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Policies and Legal Row */}
        <div className="pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => onOpenPolicy?.('Privacy Policy')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => onOpenPolicy?.('Terms of Service')} className="hover:text-slate-300 transition-colors">
              Terms of Service
            </button>
            <span>·</span>
            <button onClick={() => onOpenPolicy?.('Risk Disclosure')} className="hover:text-[#10E760] transition-colors">
              Risk Disclosure
            </button>
            <span>·</span>
            <button onClick={() => onOpenPolicy?.('AML/KYC Policy')} className="hover:text-slate-300 transition-colors">
              AML/KYC Policy
            </button>
            <span>·</span>
            <button onClick={() => onOpenPolicy?.('Investor Charter')} className="hover:text-slate-300 transition-colors">
              Investor Charter
            </button>
          </div>

          <div className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} GeinzClub. All rights reserved. A Club of Money Makers.
          </div>
        </div>

        {/* Small Bottom Disclaimer */}
        <div className="pt-4 text-[10px] text-slate-600 leading-relaxed border-t border-white/5">
          Disclaimer: GeinzClub provides software infrastructure and club membership connectivity for private syndicate co-investments and business operators. All private investments involve substantial risk of loss and illiquidity. Verified members must conduct independent assessment and review formal prospectus documents prior to capital deployment.
        </div>

      </div>
    </footer>
  );
};
