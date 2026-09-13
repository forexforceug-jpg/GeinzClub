import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Lock, 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  Activity, 
  ChevronRight,
  Wallet,
  Smartphone
} from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
  onSelectOpportunity?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onExploreClick, onSelectOpportunity }) => {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'allocations' | 'transactions'>('portfolio');

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-[#070D0A]">
      {/* Deep green & emerald ambient gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#10E760]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-900/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#0A3D24]/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Subtle geometric grid backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#10E760 1px, transparent 1px), linear-gradient(to right, #10E760 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-7 text-left">
            
            {/* Green label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10E760]/10 border border-[#10E760]/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#10E760] animate-ping"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#10E760]">
                WELCOME TO GEINZCLUB
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              A Club of{' '}
              <span className="text-[#10E760] relative inline-block">
                Money Makers
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#10E760] to-transparent rounded-full"></span>
              </span>
              . Build. Invest.{' '}
              <span className="text-[#10E760]">Grow</span>. Together.
            </h1>

            {/* Sub-headline explanation */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-xl">
              GeinzClub is an exclusive community where entrepreneurs, business people, and investors connect, build businesses, discover real investment opportunities, and grow together.
            </p>

            {/* Dual CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onJoinClick}
                id="hero-join-button"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-base shadow-xl shadow-[#10E760]/25 hover:bg-[#1cf36f] hover:shadow-[#10E760]/40 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Join the Club</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreClick}
                id="hero-explore-button"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-base border border-white/10 hover:border-[#10E760]/40 transition-all duration-200"
              >
                <span>Explore Investments</span>
                <ChevronRight className="w-4 h-4 text-[#10E760]" />
              </button>
            </div>

            {/* Small Trust Statements */}
            <div className="pt-4 border-t border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#10E760] shrink-0" />
                  <span className="font-medium text-slate-200">Verified Members</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10E760] shrink-0" />
                  <span className="font-medium text-slate-200">Real & Transparent</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#10E760] shrink-0" />
                  <span className="font-medium text-slate-200">Secure & Smart</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#10E760] shrink-0" />
                  <span className="font-medium text-slate-200">Community Driven</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Sophisticated Visual Representation of the Actual GeinzClub Platform */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            
            {/* Glow backing */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#10E760]/30 to-emerald-800/20 rounded-2xl blur-xl opacity-60 pointer-events-none"></div>

            {/* Main Desktop Dashboard Container */}
            <div className="relative rounded-2xl bg-[#0C1511] border border-white/15 shadow-2xl shadow-black/80 overflow-hidden text-slate-200">
              
              {/* Dashboard Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080E0B] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400">geinzclub.internal/portal/portfolio</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#10E760]/10 text-[#10E760] border border-[#10E760]/30 text-[10px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10E760] animate-pulse"></span>
                    LIVE FEED
                  </span>
                  <span className="text-[11px] text-slate-400 hidden sm:inline">Member #GC-2849</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-5 sm:p-6 space-y-5">
                
                {/* Top Row: Portfolio Balance & Returns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Total Portfolio Value</span>
                      <Wallet className="w-3.5 h-3.5 text-[#10E760]" />
                    </div>
                    <div className="mt-1.5 font-display text-2xl font-bold text-white tracking-tight">
                      $148,250<span className="text-slate-400 text-lg">.00</span>
                    </div>
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-[#10E760] font-medium">
                      <TrendingUp className="w-3 h-3" />
                      <span>+$23,410.80 (+18.4% APY)</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Active Capital</span>
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="mt-1.5 font-display text-2xl font-bold text-white tracking-tight">
                      $122,500<span className="text-slate-400 text-lg">.00</span>
                    </div>
                    <div className="mt-1 text-[11px] text-slate-400">
                      Deployed in 6 Verified Deals
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Next Cash Dividend</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div className="mt-1.5 font-display text-2xl font-bold text-emerald-400 tracking-tight">
                      $4,890<span className="text-slate-400 text-lg">.50</span>
                    </div>
                    <div className="mt-1 text-[11px] text-slate-400">
                      Pay date: In 14 days (Quarterly)
                    </div>
                  </div>
                </div>

                {/* Interactive Tab bar inside Mockup */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab('portfolio')}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        activeTab === 'portfolio'
                          ? 'bg-[#10E760]/15 text-[#10E760] border border-[#10E760]/30'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Active Allocations
                    </button>
                    <button
                      onClick={() => setActiveTab('allocations')}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        activeTab === 'allocations'
                          ? 'bg-[#10E760]/15 text-[#10E760] border border-[#10E760]/30'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Mode: Smart + Manual
                    </button>
                    <button
                      onClick={() => setActiveTab('transactions')}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        activeTab === 'transactions'
                          ? 'bg-[#10E760]/15 text-[#10E760] border border-[#10E760]/30'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Recent Ledger
                    </button>
                  </div>
                  <span className="text-[11px] text-[#10E760] font-mono hidden sm:inline">
                    Synced: Real-Time
                  </span>
                </div>

                {/* Tab content 1: Active Investments List with Mini Chart */}
                {activeTab === 'portfolio' && (
                  <div className="space-y-3">
                    {/* Visual Yield Curve */}
                    <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/40 via-black/40 to-emerald-950/20 border border-white/5 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[11px] text-slate-400 uppercase tracking-wider">Compound Growth Curve</span>
                        <div className="text-sm font-semibold text-white">Consistently outperforming benchmark by +6.8%</div>
                      </div>
                      <div className="h-9 w-32 flex items-end gap-1">
                        {[25, 35, 40, 52, 60, 68, 80, 95].map((h, i) => (
                          <div
                            key={i}
                            style={{ height: `${h}%` }}
                            className="flex-1 bg-gradient-to-t from-[#0A8738] to-[#10E760] rounded-t-sm"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Active Opportunity rows */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#10E760]/15 border border-[#10E760]/30 flex items-center justify-center text-[#10E760] font-bold text-xs">
                            AF
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">Apex CleanFleet Logistics</div>
                            <div className="text-[10px] text-slate-400">Rotterdam · Asset-Backed Fleet SPV</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-semibold text-[#10E760]">+15.8% IRR</div>
                          <div className="text-[10px] text-slate-400">$35,000 committed</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
                            SM
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">Solara Industrial Microgrid</div>
                            <div className="text-[10px] text-slate-400">Valencia · 15-Yr PPA Contract</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-semibold text-[#10E760]">+13.4% IRR</div>
                          <div className="text-[10px] text-slate-400">$50,000 committed</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs">
                            NP
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">Nordic Pure AgTech Greenhouses</div>
                            <div className="text-[10px] text-slate-400">Gothenburg · Expansion Capital</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-semibold text-[#10E760]">+17.2% IRR</div>
                          <div className="text-[10px] text-slate-400">$20,000 committed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab content 2: Smart Allocation breakdown */}
                {activeTab === 'allocations' && (
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white">Current Asset Diversification</span>
                      <span className="text-[#10E760]">Risk Mode: Balanced</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden flex">
                      <div className="h-full bg-[#10E760]" style={{ width: '38%' }} title="CleanTech (38%)"></div>
                      <div className="h-full bg-emerald-400" style={{ width: '27%' }} title="Logistics (27%)"></div>
                      <div className="h-full bg-teal-400" style={{ width: '20%' }} title="AgTech (20%)"></div>
                      <div className="h-full bg-amber-400" style={{ width: '15%' }} title="Retail Mfg (15%)"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#10E760]"></span>
                        <span>Clean Energy (38%)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400"></span>
                        <span>Logistics & Fleet (27%)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-teal-400"></span>
                        <span>AgTech & Food (20%)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-amber-400"></span>
                        <span>Retail Mfg (15%)</span>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 text-[11px] text-slate-400 flex items-center justify-between">
                      <span>Smart Algorithm Rebalance: Active</span>
                      <span className="text-[#10E760] font-medium">Automatic Monthly</span>
                    </div>
                  </div>
                )}

                {/* Tab content 3: Ledger */}
                {activeTab === 'transactions' && (
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02]">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#10E760]"></div>
                        <span className="text-white">Quarterly Yield Disbursed</span>
                      </div>
                      <span className="font-mono text-[#10E760]">+$3,240.00</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02]">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                        <span className="text-white">Apex CleanFleet Tranche 1 Escrow</span>
                      </div>
                      <span className="font-mono text-slate-300">-$15,000.00</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02]">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#10E760]"></div>
                        <span className="text-white">Solar Microgrid PPA Dividend</span>
                      </div>
                      <span className="font-mono text-[#10E760]">+$1,650.50</span>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Overlapping Mobile Phone Preview (Bottom-Right) */}
            <div className="hidden sm:block absolute -bottom-8 -right-4 w-60 rounded-[28px] bg-[#070D0A] border-[3px] border-emerald-500/40 shadow-2xl shadow-black p-2.5 z-20 transition-transform hover:-translate-y-1 duration-300">
              {/* Phone speaker notch */}
              <div className="w-16 h-1 rounded-full bg-white/20 mx-auto mb-2"></div>
              
              {/* Phone screen */}
              <div className="bg-[#0C1511] rounded-[20px] p-3 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <div className="flex items-center gap-1 font-bold text-white">
                    <span className="text-[#10E760]">GC</span> Mobile
                  </div>
                  <span className="text-[#10E760] font-mono">18.4% APY</span>
                </div>

                <div className="p-2 rounded-xl bg-gradient-to-br from-[#10E760]/20 to-transparent border border-[#10E760]/30">
                  <div className="text-[9px] text-slate-400">Total Portfolio</div>
                  <div className="font-display text-base font-bold text-white">$148,250</div>
                  <div className="text-[9px] text-[#10E760] flex items-center gap-0.5">
                    <TrendingUp className="w-2.5 h-2.5" /> +$23.4k all-time
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-white font-medium">Smart Allocation</span>
                    <span className="text-[#10E760]">ON</span>
                  </div>
                  <div className="text-[8px] text-slate-400">6 Projects · 0 Defaults · 100% KYC</div>
                </div>

                <div className="pt-1 flex items-center justify-between text-[9px] text-slate-400 border-t border-white/5">
                  <span className="flex items-center gap-1 text-[#10E760]">
                    <Lock className="w-2.5 h-2.5" /> Biometric Escrow
                  </span>
                  <span className="text-slate-200">v2.4</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
