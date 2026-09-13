import React, { useState } from 'react';
import { Cpu, HandCoins, Check, Sliders, Shield, Zap, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface InvestmentApproachesProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
}

export const InvestmentApproaches: React.FC<InvestmentApproachesProps> = ({
  onJoinClick,
  onExploreClick,
}) => {
  // Smart Allocation Interactive Simulator State
  const [riskProfile, setRiskProfile] = useState<'conservative' | 'balanced' | 'growth'>('balanced');
  const [autoRebalance, setAutoRebalance] = useState(true);

  // Manual Investing Interactive State
  const [selectedTicket, setSelectedTicket] = useState<number>(10000);
  const [selectedManualCategory, setSelectedManualCategory] = useState<string>('Clean Energy');
  const [approvedManually, setApprovedManually] = useState(false);

  return (
    <section className="py-24 bg-[#0A120E] text-slate-100 relative overflow-hidden border-t border-[#10E760]/15">
      {/* Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#10E760]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-900/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10E760]/10 border border-[#10E760]/30 text-[#10E760] text-xs font-bold uppercase tracking-wider">
            FREEDOM OF CAPITAL ARCHITECTURE
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            You Choose How Your Capital Works.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Technology is your servant, never your master. Deploy through algorithmic diversification, or retain 100% personal control over every deal.
          </p>
        </div>

        {/* Two Large Side-by-Side Cards with Central "OR" */}
        <div className="mt-16 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* CARD 1: Smart Allocation */}
            <div className="rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-[#0F2018] to-[#0A150F] border-2 border-[#10E760]/40 shadow-2xl shadow-emerald-950/40 flex flex-col justify-between relative overflow-hidden group">
              {/* Corner badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#10E760] to-emerald-500 text-[#070D0A] font-bold text-[10px] uppercase tracking-wider px-4 py-1.5 rounded-bl-xl shadow-md">
                ALGORITHMIC DIVERSIFICATION
              </div>

              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#10E760]/20 border border-[#10E760]/40 flex items-center justify-center text-[#10E760]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">Smart Allocation</h3>
                    <span className="text-xs text-[#10E760] font-semibold tracking-wide">Automated · Vetted Rules Engine</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Allow the GeinzClub algorithm to analyse all available verified opportunities and allocate your capital automatically according to your selected preferences, diversification rules, and risk parameters.
                </p>

                {/* Core Benefits */}
                <div className="space-y-2.5 mb-6 text-xs text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#10E760] shrink-0 mt-0.5" />
                    <span>Dynamic multi-asset rebalancing across verified businesses</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#10E760] shrink-0 mt-0.5" />
                    <span>Strict diversification caps (never more than 15% in a single project)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#10E760] shrink-0 mt-0.5" />
                    <span>Automated dividend reinvestment or quarterly cash payout options</span>
                  </div>
                </div>

                {/* Interactive Simulator Inside Card */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-[#10E760]" />
                      Simulate Risk Tolerance
                    </span>
                    <span className="text-[11px] text-[#10E760] font-mono capitalize">
                      {riskProfile} Profile
                    </span>
                  </div>

                  {/* Profile Buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    {(['conservative', 'balanced', 'growth'] as const).map((profile) => (
                      <button
                        key={profile}
                        onClick={() => setRiskProfile(profile)}
                        className={`py-2 px-2 rounded-xl text-xs font-semibold capitalize transition-all ${
                          riskProfile === profile
                            ? 'bg-[#10E760] text-[#070D0A] shadow-md shadow-[#10E760]/30'
                            : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {profile}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Metric Preview */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">Target Projected IRR</div>
                      <div className="text-base font-bold text-[#10E760]">
                        {riskProfile === 'conservative' ? '12.4% - 14.0%' : riskProfile === 'balanced' ? '15.2% - 17.8%' : '18.5% - 21.5%'}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">Primary Collateral</div>
                      <div className="text-xs font-medium text-white">
                        {riskProfile === 'conservative' ? '100% Asset-Backed' : riskProfile === 'balanced' ? 'Equipment + Rev Share' : 'Growth Preferred'}
                      </div>
                    </div>
                  </div>

                  {/* Toggle */}
                  <div className="flex items-center justify-between pt-2 text-xs text-slate-300">
                    <span>Quarterly Auto-Rebalance</span>
                    <button
                      onClick={() => setAutoRebalance(!autoRebalance)}
                      className={`w-10 h-5 rounded-full transition-colors relative ${
                        autoRebalance ? 'bg-[#10E760]' : 'bg-slate-700'
                      }`}
                    >
                      <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-[#070D0A] transition-transform ${
                        autoRebalance ? 'left-5' : 'left-0.5'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Optional automated execution</span>
                <button
                  onClick={onJoinClick}
                  className="px-5 py-2.5 rounded-xl bg-[#10E760]/15 hover:bg-[#10E760] text-[#10E760] hover:text-[#070D0A] font-bold text-xs border border-[#10E760]/30 transition-all flex items-center gap-1.5"
                >
                  <span>Select Smart Allocation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* CARD 2: Manual Investing */}
            <div className="rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-[#131E18] to-[#0A120E] border-2 border-white/20 hover:border-emerald-400/50 shadow-2xl shadow-emerald-950/30 flex flex-col justify-between relative overflow-hidden group transition-colors">
              {/* Corner badge */}
              <div className="absolute top-0 right-0 bg-white/10 text-emerald-300 font-bold text-[10px] uppercase tracking-wider px-4 py-1.5 rounded-bl-xl">
                100% PERSONAL SOVEREIGNTY
              </div>

              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <HandCoins className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">Manual Investing</h3>
                    <span className="text-xs text-emerald-400 font-semibold tracking-wide">Direct · Complete Member Involvement</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Members remain completely involved and can personally browse opportunities, inspect pitch books, meet founders in private AMAs, select exact projects, and approve each commitment ticket individually.
                </p>

                {/* Core Benefits */}
                <div className="space-y-2.5 mb-6 text-xs text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#10E760] shrink-0 mt-0.5" />
                    <span>Direct access to audited legal contracts, SPV charters & financials</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#10E760] shrink-0 mt-0.5" />
                    <span>Choose exact ticket sizes from $1,000 to $100,000+ per deal</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#10E760] shrink-0 mt-0.5" />
                    <span>Every allocation requires your explicit digital signature & authorization</span>
                  </div>
                </div>

                {/* Interactive Simulator Inside Card */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      Simulate Direct Deal Commitment
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono">
                      Your Ticket: ${selectedTicket.toLocaleString()}
                    </span>
                  </div>

                  {/* Ticket selector */}
                  <div className="grid grid-cols-3 gap-2">
                    {[2500, 10000, 50000].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedTicket(amount);
                          setApprovedManually(false);
                        }}
                        className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all ${
                          selectedTicket === amount
                            ? 'bg-emerald-500 text-[#070D0A] shadow-md shadow-emerald-500/30 font-bold'
                            : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        ${amount.toLocaleString()}
                      </button>
                    ))}
                  </div>

                  {/* Category Target */}
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10">
                    <span className="text-slate-400">Target Opportunity:</span>
                    <select
                      value={selectedManualCategory}
                      onChange={(e) => setSelectedManualCategory(e.target.value)}
                      className="bg-[#0B1510] border border-white/20 rounded-lg px-2 py-1 text-xs text-white focus:outline-none focus:border-[#10E760]"
                    >
                      <option>Apex CleanFleet Cold-Chain</option>
                      <option>Solara Commercial Solar Microgrid</option>
                      <option>Nordic Pure AgTech Greenhouses</option>
                    </select>
                  </div>

                  {/* Simulated Sign-off */}
                  <button
                    onClick={() => setApprovedManually(!approvedManually)}
                    className={`w-full py-2 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-1.5 ${
                      approvedManually
                        ? 'bg-emerald-950/80 border-[#10E760] text-[#10E760]'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 ${approvedManually ? 'text-[#10E760]' : 'text-slate-500'}`} />
                    <span>{approvedManually ? 'Deal Authorized & Digitally Signed' : 'Click to Simulate Direct Deal Approval'}</span>
                  </button>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Direct deal curation</span>
                <button
                  onClick={onExploreClick}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#070D0A] font-bold text-xs transition-all flex items-center gap-1.5"
                >
                  <span>Browse Deals Manually</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Central Prominent "OR" Badge */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#070D0A] border-4 border-[#10E760] shadow-2xl shadow-[#10E760]/30 flex items-center justify-center">
              <span className="font-display font-black text-xl text-[#10E760] tracking-wider">
                OR
              </span>
            </div>
          </div>

        </div>

        {/* Note underneath emphasizing that the algorithm is optional */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            <strong className="text-white font-semibold">Remember:</strong> The GeinzClub algorithm is 100% optional. You can use Smart Allocation for automatic passive diversification, handpick every opportunity via Manual Investing, or run a hybrid balance.
          </p>
        </div>

      </div>
    </section>
  );
};
