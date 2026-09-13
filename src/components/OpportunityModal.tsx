import React, { useState } from 'react';
import { Opportunity } from '../types';
import { X, MapPin, ShieldCheck, CheckCircle2, FileText, Download, Calculator, Clock, DollarSign, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';

interface OpportunityModalProps {
  opportunity: Opportunity | null;
  onClose: () => void;
  onJoinClick: () => void;
}

export const OpportunityModal: React.FC<OpportunityModalProps> = ({
  opportunity,
  onClose,
  onJoinClick,
}) => {
  const [pledgeAmount, setPledgeAmount] = useState<number>(10000);
  const [pledgeSubmitted, setPledgeSubmitted] = useState<boolean>(false);

  if (!opportunity) return null;

  // Calculate simulated return
  const irrNumber = parseFloat(opportunity.projectedReturn.replace(/[^0-9.]/g, '')) || 15;
  const annualReturn = (pledgeAmount * irrNumber) / 100;
  const quarterlyDistribution = annualReturn / 4;
  const totalReturnOverTerm = (annualReturn * (opportunity.termMonths / 12)) + pledgeAmount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#09130E] border border-[#10E760]/30 text-slate-100 shadow-2xl shadow-black my-8 max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#060D09] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-[#10E760]/20 text-[#10E760] font-mono text-xs font-bold">
              {opportunity.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#10E760]" />
              {opportunity.location}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Main Hero Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-7 space-y-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {opportunity.title}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {opportunity.description}
              </p>

              {/* Founder Box */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3.5">
                <img
                  src={opportunity.owner.avatar}
                  alt={opportunity.owner.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#10E760]/50"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                    {opportunity.owner.name}
                    <CheckCircle2 className="w-4 h-4 text-[#10E760]" />
                  </div>
                  <div className="text-xs text-[#10E760]">{opportunity.owner.role} · {opportunity.owner.company}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{opportunity.owner.trackRecord}</div>
                </div>
              </div>
            </div>

            {/* Visual Image */}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden border border-white/15 h-48 md:h-full min-h-[190px]">
              <img
                src={opportunity.image}
                alt={opportunity.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <span className="font-mono text-[#10E760] font-bold bg-black/60 px-2.5 py-1 rounded-md">
                  {opportunity.projectedReturn}
                </span>
                <span className="text-slate-300 bg-black/60 px-2 py-1 rounded-md text-[11px]">
                  {opportunity.termMonths} Months Term
                </span>
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-black/40 border border-white/10 text-xs">
            <div>
              <span className="text-[10px] text-slate-400 uppercase">Target Raise</span>
              <div className="font-mono font-bold text-base text-white">
                ${opportunity.targetAmount.toLocaleString()}
              </div>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase">Current Backing</span>
              <div className="font-mono font-bold text-base text-[#10E760]">
                ${opportunity.raisedAmount.toLocaleString()} ({opportunity.fundingProgress}%)
              </div>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase">Min Commitment</span>
              <div className="font-mono font-bold text-base text-white">
                ${opportunity.minInvestment.toLocaleString()}
              </div>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase">Payout Frequency</span>
              <div className="font-medium text-emerald-400">
                {opportunity.returnType}
              </div>
            </div>
          </div>

          {/* Highlights & Collateral */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#10E760] uppercase tracking-wider">
              Project Highlights & Structural Protections
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
              {opportunity.highlights.map((h, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10E760] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Yield Calculator */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0F241A] to-[#0A1610] border border-[#10E760]/30 space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-[#10E760]" />
                Interactive Yield & Dividend Calculator
              </span>
              <span className="text-slate-400 font-mono text-[11px]">
                Rate: {opportunity.projectedReturn}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Your Proposed Ticket:</span>
                <span className="font-mono font-bold text-[#10E760] text-sm">
                  ${pledgeAmount.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={opportunity.minInvestment}
                max={50000}
                step={500}
                value={pledgeAmount}
                onChange={(e) => setPledgeAmount(Number(e.target.value))}
                className="w-full accent-[#10E760] bg-white/10 rounded-lg cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[10px] text-slate-400 block uppercase">Est. Quarterly Dividend</span>
                <span className="font-mono font-bold text-base text-[#10E760]">
                  ${Math.round(quarterlyDistribution).toLocaleString()}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[10px] text-slate-400 block uppercase">Est. Annual Cashflow</span>
                <span className="font-mono font-bold text-base text-white">
                  ${Math.round(annualReturn).toLocaleString()}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-slate-400 block uppercase">Total Projected Return</span>
                <span className="font-mono font-bold text-base text-emerald-400">
                  ${Math.round(totalReturnOverTerm).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Legal Documents Preview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Audited Deal Room Filings
            </h4>
            <div className="space-y-2">
              {opportunity.documents.map((doc, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#10E760]" />
                    <span className="font-medium text-slate-200">{doc.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">({doc.size})</span>
                  </div>
                  <span className="text-[10px] text-[#10E760] font-semibold">Verified</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sticky Action Footer */}
        <div className="px-6 py-4 bg-[#060D09] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400">
            Min investment: ${opportunity.minInvestment.toLocaleString()} · Pledged via Escrow SPV
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-xs text-slate-300"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onJoinClick();
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-xs hover:bg-[#1cf36f] transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-[#10E760]/20"
            >
              <span>Join Club to Commit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
