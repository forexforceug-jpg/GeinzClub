import React from 'react';
import { EARLY_STAGE_METRICS } from '../data/mockData';
import { ShieldCheck, Info } from 'lucide-react';

export const PlatformMetrics: React.FC = () => {
  return (
    <section className="py-20 bg-[#070D0A] text-slate-100 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with early stage honesty */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10E760]/10 text-[#10E760] text-xs font-mono font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              EARLY STAGE PLATFORM RECORD
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Real Track Record. No Invented Inflation.
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/[0.02] border border-white/10 px-3.5 py-2 rounded-xl max-w-md">
            <Info className="w-4 h-4 text-[#10E760] shrink-0" />
            <span>
              These metrics reflect our active founding cohorts. As GeinzClub expands, all numbers remain independently verifiable on-chain and through audited custodian ledgers.
            </span>
          </div>
        </div>

        {/* 5 Metrics Cards */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-5 gap-4">
          {EARLY_STAGE_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#0B1610] border border-white/5 hover:border-[#10E760]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  {metric.label}
                </span>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  <span className="text-white">{metric.value}</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400 leading-snug">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
