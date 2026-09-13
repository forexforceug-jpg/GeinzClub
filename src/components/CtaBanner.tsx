import React from 'react';
import { ArrowRight, Sparkles, Shield, ChevronRight } from 'lucide-react';

interface CtaBannerProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onJoinClick, onExploreClick }) => {
  return (
    <section className="py-20 bg-[#070D0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Box */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0D2418] via-[#0A1A12] to-[#06120C] border-2 border-[#10E760]/40 p-8 sm:p-14 lg:p-16 text-center overflow-hidden shadow-2xl shadow-[#10E760]/10">
          
          {/* Subtle decorative glow and rings */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#10E760]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#10E760]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-7">
            
            {/* GC Emblem */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10E760] to-[#087832] p-0.5 shadow-xl shadow-[#10E760]/30 mx-auto">
              <div className="w-full h-full bg-[#070D0A] rounded-[14px] flex items-center justify-center">
                <span className="font-display font-black text-2xl text-[#10E760] tracking-tighter">GC</span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Build, Invest & Grow Together?
            </h2>

            {/* Sub-copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              Join 2,400+ vetted entrepreneurs, business owners, and capital allocators backing real businesses and compounding long-term wealth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={onJoinClick}
                id="cta-join-geinzclub-button"
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-base hover:bg-[#1cf36f] transition-all shadow-xl shadow-[#10E760]/25 flex items-center justify-center gap-2 group"
              >
                <span>Join GeinzClub</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreClick}
                id="cta-explore-club-button"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/15 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore the Club</span>
                <ChevronRight className="w-4 h-4 text-[#10E760]" />
              </button>
            </div>

            {/* Footnote */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#10E760]" />
                Bank-Grade Identity Verification
              </span>
              <span>·</span>
              <span>No Membership Lock-In</span>
              <span>·</span>
              <span>Direct Asset Collateral</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
