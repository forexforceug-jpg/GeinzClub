import React, { useState } from 'react';
import { OPPORTUNITIES } from '../data/mockData';
import { Opportunity } from '../types';
import { MapPin, Clock, ShieldAlert, ArrowUpRight, TrendingUp, Users, CheckCircle2, Filter } from 'lucide-react';

interface InvestmentOpportunitiesProps {
  onSelectOpportunity: (opportunity: Opportunity) => void;
  onJoinClick: () => void;
}

export const InvestmentOpportunities: React.FC<InvestmentOpportunitiesProps> = ({
  onSelectOpportunity,
  onJoinClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Clean Energy', 'AgTech & Food', 'B2B Logistics', 'Health & Tech', 'Retail & Manufacturing'];

  const filteredOpportunities = selectedCategory === 'All'
    ? OPPORTUNITIES
    : OPPORTUNITIES.filter((opp) => opp.category === selectedCategory);

  return (
    <section id="investments" className="py-24 bg-[#070D0A] text-slate-100 relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-emerald-950/25 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10E760]/10 border border-[#10E760]/30 text-[#10E760] text-xs font-bold uppercase tracking-wider">
              CURATED DEAL FLOW
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Real Projects. Real People. Real Impact.
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Every opportunity is submitted directly by vetted operators, audited by independent partners, and backed by verifiable physical assets, customer contracts, and owner capital.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/[0.03] px-4 py-2.5 rounded-xl border border-white/5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#10E760] animate-pulse"></span>
            <span>Real verified submissions · No synthetic products</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 mr-1 shrink-0" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-[#10E760] text-[#070D0A] shadow-lg shadow-[#10E760]/20'
                  : 'bg-[#0F1A14] text-slate-400 hover:text-white border border-white/5 hover:border-white/15'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Opportunities Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredOpportunities.map((opp) => (
            <div
              key={opp.id}
              className="rounded-3xl bg-[#0D1812] border border-white/10 hover:border-[#10E760]/40 overflow-hidden shadow-xl shadow-black/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <div>
                {/* Image Header with Badges */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={opp.image}
                    alt={opp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1812] via-black/20 to-transparent"></div>

                  {/* Top tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white border border-white/20">
                      {opp.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#10E760]/90 backdrop-blur-md text-[11px] font-bold text-[#070D0A]">
                      {opp.projectedReturn}
                    </span>
                  </div>

                  {/* Location badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-slate-200 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-[#10E760]" />
                    <span>{opp.location}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#10E760] transition-colors">
                      {opp.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                      {opp.tagline}
                    </p>
                  </div>

                  {/* Project Owner Strip */}
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <img
                      src={opp.owner.avatar}
                      alt={opp.owner.name}
                      className="w-9 h-9 rounded-full object-cover border border-[#10E760]/40"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1 text-xs font-bold text-white truncate">
                        <span>{opp.owner.name}</span>
                        {opp.owner.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10E760] shrink-0" />
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {opp.owner.company}
                      </div>
                    </div>
                  </div>

                  {/* Financial Metrics Strip */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase">Target Raise</span>
                      <div className="font-mono font-bold text-white">
                        ${opp.targetAmount.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase">Term & Payout</span>
                      <div className="font-medium text-slate-200">
                        {opp.termMonths} Mo · {opp.returnType}
                      </div>
                    </div>
                  </div>

                  {/* Funding Progress Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">
                        <strong className="text-white font-mono">${opp.raisedAmount.toLocaleString()}</strong> raised
                      </span>
                      <span className="font-mono font-bold text-[#10E760]">
                        {opp.fundingProgress}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#0A8738] to-[#10E760] rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(opp.fundingProgress, 100)}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-0.5">
                      <span>{opp.backersCount} verified backers</span>
                      <span>{opp.closingDaysLeft > 0 ? `${opp.closingDaysLeft} days left` : 'Fully Funded'}</span>
                    </div>
                  </div>

                  {/* Risk Profile & Collateral Tag */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px]">
                    <span className="flex items-center gap-1 text-slate-400">
                      <ShieldAlert className="w-3 h-3 text-amber-400" />
                      Risk: {opp.riskRating}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white/5 text-emerald-300 font-medium">
                      {opp.riskProfile}
                    </span>
                  </div>

                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectOpportunity(opp)}
                  className="w-full py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-[#10E760] text-white hover:text-[#070D0A] font-bold text-xs border border-white/10 hover:border-transparent transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                >
                  <span>View Opportunity & Prospectus</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom prompt to submit opportunities */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0B1610] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#10E760]/20 flex items-center justify-center text-[#10E760] shrink-0 font-bold text-sm">
              GC
            </div>
            <div>
              <div className="text-sm font-bold text-white">Are you an operator seeking growth capital?</div>
              <div className="text-xs text-slate-400">Submit your business for our 5-stage due diligence review and syndicate directly to 2,400+ members.</div>
            </div>
          </div>
          <button
            onClick={onJoinClick}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#070D0A] text-xs font-bold transition-all"
          >
            Submit a Project
          </button>
        </div>

      </div>
    </section>
  );
};
