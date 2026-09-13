import React from 'react';
import { ShieldCheck, Lock, FileSearch, Scale, AlertTriangle, Landmark, Eye, CheckCircle2 } from 'lucide-react';

export const SecurityAndGovernance: React.FC = () => {
  const securityPillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#10E760]" />,
      title: 'Mandatory Member Verification',
      description: 'Zero anonymous actors. All members complete strict KYC/AML checks and institutional identity confirmation before viewing non-public deal documents or wiring funds.'
    },
    {
      icon: <FileSearch className="w-6 h-6 text-[#10E760]" />,
      title: '5-Stage Project Due Diligence',
      description: 'Less than 4% of applicant businesses pass our review committee. We independently audit tax returns, customer contracts, physical collateral, and operator track records.'
    },
    {
      icon: <Lock className="w-6 h-6 text-[#10E760]" />,
      title: 'Regulated Escrow & SPV Isolation',
      description: 'GeinzClub never holds customer cash directly. All transactions flow through independent regulated custodian accounts and bankruptcy-remote legal special purpose vehicles (SPVs).'
    },
    {
      icon: <Eye className="w-6 h-6 text-[#10E760]" />,
      title: 'Transparent Milestone Release',
      description: 'Project capital is never released in a lump sum. Funds are unlocked in agreed tranches only after independent verification of key operational milestones.'
    },
    {
      icon: <Scale className="w-6 h-6 text-[#10E760]" />,
      title: 'Real Legal Recourse & Liens',
      description: 'Deals feature real tangible assets—equipment titles, commercial pledges, power purchase agreements—duly recorded with relevant national commercial registries.'
    },
    {
      icon: <Landmark className="w-6 h-6 text-[#10E760]" />,
      title: 'Immutable Audit Trail',
      description: 'Every commitment, vote, distribution, and document amendment is permanently archived with digital signatures and timestamped audit logs accessible 24/7.'
    }
  ];

  return (
    <section className="py-24 bg-[#070D0A] text-slate-100 relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10E760]/10 border border-[#10E760]/30 text-[#10E760] text-xs font-bold uppercase tracking-wider">
            RESPONSIBLE GOVERNANCE & RIGOR
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Security, Verification & Responsibility.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            We reject hyperbolic promises and speculative schemes. Our platform is built on institutional due diligence, transparent contracts, and clear risk disclosures.
          </p>
        </div>

        {/* 6 Security Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPillars.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-[#0C1611] border border-white/10 hover:border-[#10E760]/30 transition-all duration-300 space-y-3.5"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#10E760]/15 border border-[#10E760]/30 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Explicit Honest Risk Disclosure Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#121E17] border border-amber-500/30 text-left">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-display text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Clear Risk Disclosure & Investor Responsibility
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Investing in private businesses, commercial ventures, and asset-backed projects involves real capital risk, including the possible loss of principal, illiquidity during contractual terms, and dependency on operator performance. GeinzClub makes no claims that investments are risk-free or guaranteed.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                We provide institutional due diligence, audited documentation, and collateral rights to mitigate structural risks, but past projections do not guarantee future results. Members should only invest capital they are comfortable committing for the defined duration.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
