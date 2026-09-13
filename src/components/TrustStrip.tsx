import React from 'react';
import { TRUST_CATEGORIES } from '../data/mockData';
import { Shield, Check, Building2, Users2, Landmark, FileCheck } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="relative py-8 bg-[#0B1410] border-y border-[#10E760]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strip Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#10E760]/15 border border-[#10E760]/30 flex items-center justify-center text-[#10E760]">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                Real People. Real Businesses. Real Opportunities.
              </h2>
              <p className="text-xs text-slate-400">
                Direct member-backed ventures with owner equity commitments — strictly zero fictional financial instruments.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#10E760]" />
              100% Verified Founders
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-[#10E760]" />
              Audited Filings
            </span>
            <span className="flex items-center gap-1.5">
              <Landmark className="w-4 h-4 text-[#10E760]" />
              Regulated Escrow
            </span>
          </div>
        </div>

        {/* Verified Sectors & Categories Grid */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {TRUST_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#10E760]/30 hover:bg-white/[0.04] transition-all duration-200 group flex flex-col justify-between"
            >
              <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                {cat.name}
              </span>
              <div className="mt-2 flex items-center justify-between text-[11px]">
                <span className="text-emerald-400/90 font-medium">{cat.count}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10E760] opacity-75"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
