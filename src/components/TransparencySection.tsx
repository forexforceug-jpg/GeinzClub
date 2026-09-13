import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Building, 
  ShieldCheck, 
  Download, 
  ArrowRight,
  TrendingUp,
  FileCheck,
  Award
} from 'lucide-react';

export const TransparencySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'structure' | 'milestones' | 'documents'>('structure');

  return (
    <section className="py-24 bg-[#F4F7F5] text-[#0A120E] relative overflow-hidden border-t border-slate-200">
      {/* Subtle accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/70 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/10 border border-emerald-800/20 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            RADICAL CLARITY & DIGNITY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07120B] tracking-tight">
            Know Where Your Money Goes.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Members should understand exactly what they participate in rather than placing money into an unexplained black box. Every deal has an open ledger, audited financials, and explicit founder skin-in-the-game.
          </p>
        </div>

        {/* Large Visual Representation of an Investment Detail Page (Deal Room) */}
        <div className="mt-16 rounded-3xl bg-[#09130E] text-white border-2 border-emerald-950 shadow-2xl shadow-emerald-950/20 overflow-hidden">
          
          {/* Top Deal Room Header */}
          <div className="px-6 py-5 bg-[#060D09] border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#10E760]/20 border border-[#10E760]/30 flex items-center justify-center text-[#10E760] font-bold text-sm">
                AF
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-lg font-bold text-white">Apex CleanFleet Cold-Chain SPV</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#10E760]/15 text-[#10E760] text-[10px] font-bold">
                    VERIFIED DEAL ROOM
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  SPV Reg: NL-849204 · Registered at Rotterdam Commercial Chamber · Trustee: ABN AMRO Custody
                </p>
              </div>
            </div>

            {/* Quick Stats in Header */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">Target Capital</span>
                <span className="font-bold text-white">$750,000</span>
              </div>
              <div className="border-l border-white/10 pl-4">
                <span className="text-slate-400 block text-[10px]">Founder Skin-in-Game</span>
                <span className="font-bold text-[#10E760]">$220,000 (29.3%)</span>
              </div>
              <div className="border-l border-white/10 pl-4">
                <span className="text-slate-400 block text-[10px]">Projected Yield</span>
                <span className="font-bold text-emerald-400">15.8% IRR</span>
              </div>
            </div>
          </div>

          {/* Navigation Sub-Tabs in Mockup */}
          <div className="flex items-center gap-2 px-6 py-3 bg-[#0B1711] border-b border-white/10 overflow-x-auto text-xs">
            <button
              onClick={() => setActiveTab('structure')}
              className={`px-4 py-1.5 rounded-lg font-semibold transition-colors ${
                activeTab === 'structure' ? 'bg-[#10E760] text-[#070D0A]' : 'text-slate-400 hover:text-white'
              }`}
            >
              1. Capital Stack & Skin-In-The-Game
            </button>
            <button
              onClick={() => setActiveTab('milestones')}
              className={`px-4 py-1.5 rounded-lg font-semibold transition-colors ${
                activeTab === 'milestones' ? 'bg-[#10E760] text-[#070D0A]' : 'text-slate-400 hover:text-white'
              }`}
            >
              2. Milestones & Escrow Release
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-4 py-1.5 rounded-lg font-semibold transition-colors ${
                activeTab === 'documents' ? 'bg-[#10E760] text-[#070D0A]' : 'text-slate-400 hover:text-white'
              }`}
            >
              3. Audited Documents & Contracts
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-1.5 rounded-lg font-semibold transition-colors ${
                activeTab === 'overview' ? 'bg-[#10E760] text-[#070D0A]' : 'text-slate-400 hover:text-white'
              }`}
            >
              4. Operational Cashflow Updates
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="p-6 sm:p-8">
            
            {/* TAB: Structure & Skin-in-the-Game */}
            {activeTab === 'structure' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <h4 className="font-display text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#10E760]" />
                    Co-Investing Alongside the Founder, Not Below Them
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We forbid deals where the promoter takes zero financial risk. Henrik van de Berg has contributed €220,000 of his personal cash into the first-loss tranche, meaning member capital is structurally prioritized.
                  </p>
                  
                  {/* Capital Stack Progress */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                    <div className="text-xs font-semibold text-white flex justify-between">
                      <span>Total Project Capitalization</span>
                      <span>€1,270,000</span>
                    </div>

                    <div className="w-full h-4 rounded-full bg-white/10 overflow-hidden flex">
                      <div className="h-full bg-emerald-700" style={{ width: '23.6%' }} title="Senior Bank Facility (23.6%)"></div>
                      <div className="h-full bg-[#10E760]" style={{ width: '59.1%' }} title="GeinzClub Members Senior Note (59.1%)"></div>
                      <div className="h-full bg-amber-400" style={{ width: '17.3%' }} title="Founder Junior Equity (17.3%)"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1 text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-emerald-700"></span>
                        <span>Bank Term Debt (€300k)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#10E760]"></span>
                        <span>Member Capital (€750k)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-amber-400"></span>
                        <span>Owner Skin (€220k)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side: Security & Lien summary */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs">
                    <div className="text-slate-400 uppercase text-[10px] tracking-wider font-semibold">
                      Legal Recourse & Collateral
                    </div>
                    <div className="font-semibold text-white">
                      1st Ranked Fixed Charge on 18 Scania Commercial Electric Vehicles
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      Vehicle titles are registered directly to Apex ColdFleet SPV B.V. Independent appraisal values liquidation recovery at 134% of member loan balance.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs">
                    <div className="text-slate-400 uppercase text-[10px] tracking-wider font-semibold">
                      Distribution Mechanism
                    </div>
                    <div className="font-semibold text-[#10E760]">
                      Automated Smart Contract or Direct Bank Wire Disbursement
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      Client revenues deposit into an ABN AMRO escrow lockbox account. Debt service and member dividends are paid before any operating dividends exit to the founder.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Milestones */}
            {activeTab === 'milestones' && (
              <div className="space-y-4">
                <div className="text-xs text-slate-300">
                  Funds are released in tranches only upon independent third-party engineer sign-off on each milestone:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-emerald-500/30 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#10E760] font-bold">Phase 1 · VERIFIED</span>
                      <CheckCircle2 className="w-4 h-4 text-[#10E760]" />
                    </div>
                    <div className="text-xs font-bold text-white">Signed Supermarket Supply Contracts</div>
                    <div className="text-[10px] text-slate-400">Audited by Deloitte Legal on Jan 14, 2026</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-emerald-500/30 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#10E760] font-bold">Phase 2 · VERIFIED</span>
                      <CheckCircle2 className="w-4 h-4 text-[#10E760]" />
                    </div>
                    <div className="text-xs font-bold text-white">Scania Vehicle Build Allocation</div>
                    <div className="text-[10px] text-slate-400">Chassis VIN certificates confirmed Feb 03, 2026</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-amber-500/30 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-amber-400 font-bold">Phase 3 · ACTIVE</span>
                      <Clock className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-xs font-bold text-white">Depot Depot Charging System Setup</div>
                    <div className="text-[10px] text-slate-400">Scheduled inspection: April 2026</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-bold">Phase 4 · UPCOMING</span>
                      <span className="text-[10px] text-slate-500">Pending</span>
                    </div>
                    <div className="text-xs font-bold text-white">First Quarterly Member Payout</div>
                    <div className="text-[10px] text-slate-400">Scheduled for July 15, 2026</div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Documents */}
            {activeTab === 'documents' && (
              <div className="space-y-3">
                <div className="text-xs text-slate-300 mb-2">
                  All verified members can download unredacted legal documentation and independent audit filings:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-[#10E760]" />
                      <div>
                        <div className="text-xs font-semibold text-white">Apex_Commercial_Contract_Summary.pdf</div>
                        <div className="text-[10px] text-slate-400">3.4 MB · Legal Due Diligence</div>
                      </div>
                    </div>
                    <button className="p-1.5 rounded-lg bg-white/10 hover:bg-[#10E760] text-slate-300 hover:text-[#070D0A] transition-colors">
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-[#10E760]" />
                      <div>
                        <div className="text-xs font-semibold text-white">Fleet_SPV_Charter_Articles.pdf</div>
                        <div className="text-[10px] text-slate-400">1.8 MB · Corporate Deed</div>
                      </div>
                    </div>
                    <button className="p-1.5 rounded-lg bg-white/10 hover:bg-[#10E760] text-slate-300 hover:text-[#070D0A] transition-colors">
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-[#10E760]" />
                      <div>
                        <div className="text-xs font-semibold text-white">Deloitte_Due_Diligence_Audit.pdf</div>
                        <div className="text-[10px] text-slate-400">4.1 MB · Compliance Clean Bill</div>
                      </div>
                    </div>
                    <button className="p-1.5 rounded-lg bg-white/10 hover:bg-[#10E760] text-slate-300 hover:text-[#070D0A] transition-colors">
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Overview / Financials */}
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase">Monthly Contract Billing</div>
                    <div className="text-xl font-bold font-mono text-white mt-1">€114,200 / mo</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">Anchored by 3-yr fixed supermarket contract</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase">Operating Expense Ratio</div>
                    <div className="text-xl font-bold font-mono text-white mt-1">31.4%</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Fleet telematics and predictive maintenance</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase">Projected Net IRR</div>
                    <div className="text-xl font-bold font-mono text-[#10E760] mt-1">15.8% Annualized</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Quarterly dividends disbursed via IBAN/USDC</div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Banner in Deal Room */}
          <div className="px-6 py-4 bg-[#060D09] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#10E760]" />
              No blind pool risk. Inspect any project before committing a single euro or dollar.
            </span>
            <span className="text-slate-200 font-mono mt-1 sm:mt-0">
              Audit Hash: 0x9f8b...28ea (Immutable ledger timestamped)
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
