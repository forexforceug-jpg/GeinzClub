import React, { useState } from 'react';
import { DealSubmission, UserProfile } from '../../types';
import { 
  Building2, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileText, 
  UploadCloud, 
  AlertCircle,
  HelpCircle,
  Briefcase,
  Layers,
  ArrowRight
} from 'lucide-react';

interface OperatorDeskTabProps {
  user: UserProfile;
  submissions: DealSubmission[];
  onSubmitNewDeal: (deal: Omit<DealSubmission, 'id' | 'submissionDate' | 'stage' | 'stageNumber'>) => void;
}

export const OperatorDeskTab: React.FC<OperatorDeskTabProps> = ({
  user,
  submissions,
  onSubmitNewDeal,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [sector, setSector] = useState('Clean Energy');
  const [targetAmount, setTargetAmount] = useState(500000);
  const [projectedIRR, setProjectedIRR] = useState('15.5% IRR');
  const [collateralSummary, setCollateralSummary] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !collateralSummary) return;

    onSubmitNewDeal({
      companyName,
      sector,
      targetAmount,
      projectedIRR,
      collateralSummary,
    });

    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setShowForm(false);
      setCompanyName('');
      setCollateralSummary('');
    }, 2500);
  };

  const STAGES = [
    'KYC & Legal Audit',
    'Collateral Verification',
    'Committee Review',
    'Term Sheet',
    'Live in Deal Room'
  ];

  return (
    <div className="space-y-8">
      
      {/* Intro Header */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0C1E14] via-[#0A1710] to-[#070D0A] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#10E760]">
            <Briefcase className="w-4 h-4" />
            <span>OPERATOR VENTURE DESK</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Fund Your Business with GeinzClub Capital
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Are you expanding an established business, acquiring revenue-generating equipment, or scaling commercial infrastructure? Submit your proposal for our 5-stage diligence review.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="px-5 py-3 rounded-2xl bg-[#10E760] hover:bg-[#1cf36f] text-[#070D0A] font-bold text-xs transition-colors flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-[#10E760]/20"
        >
          <span>{showForm ? 'Close Application' : '+ Submit Project / Expansion'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Submission Form Modal/Panel */}
      {showForm && (
        <div className="rounded-3xl bg-[#0C1712] border border-[#10E760]/40 p-6 sm:p-8 shadow-2xl space-y-6">
          {submittedSuccess ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#10E760]/20 border border-[#10E760] text-[#10E760] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Project Submitted for Due Diligence
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Your proposal has been logged with reference ID <span className="font-mono text-[#10E760]">GC-SUB-{(Math.random()*90000+10000)|0}</span>. Stage 1 KYC & entity review has been initiated.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Submit Venture Proposal for Syndicate Review
                </h3>
                <p className="text-xs text-slate-400">
                  Fill out key financials and pledge physical collateral or existing commercial customer contracts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Company / Project Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nordic Clean Biofuels AG"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-[#10E760]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Industry / Sector
                  </label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070D0A] border border-white/10 text-white text-xs focus:outline-none focus:border-[#10E760]"
                  >
                    <option>Clean Energy & Microgrids</option>
                    <option>B2B Cold-Chain Logistics</option>
                    <option>Industrial Robotics & Automation</option>
                    <option>AgTech & Controlled Agriculture</option>
                    <option>Commercial Real Estate / Logistics Hub</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Target Syndicate Raise ($ USD)
                  </label>
                  <input
                    type="number"
                    required
                    min={50000}
                    step={10000}
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-[#10E760]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Proposed Member Yield / IRR
                  </label>
                  <input
                    type="text"
                    required
                    value={projectedIRR}
                    onChange={(e) => setProjectedIRR(e.target.value)}
                    placeholder="e.g. 15.5% IRR (Quarterly Dividends)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#10E760]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Collateral & Customer Contracts Summary
                </label>
                <textarea
                  required
                  rows={3}
                  value={collateralSummary}
                  onChange={(e) => setCollateralSummary(e.target.value)}
                  placeholder="Describe tangible assets pledged (real estate, vehicles, machinery liens) and contracted off-take agreements covering debt service..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-[#10E760]"
                />
              </div>

              {/* Upload simulation */}
              <div className="border border-dashed border-white/15 rounded-2xl p-4 text-center space-y-1.5 bg-black/20">
                <UploadCloud className="w-6 h-6 text-[#10E760] mx-auto" />
                <div className="text-xs text-slate-300 font-medium">
                  Upload Financial Model, Audited Accounts, or Pitch Deck
                </div>
                <div className="text-[10px] text-slate-500">
                  PDF, XLSX, DOCX up to 50MB · Encrypted in Swiss Vault
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-xs hover:bg-[#1cf36f] transition-colors shadow-lg shadow-[#10E760]/20"
                >
                  Submit for Committee Review
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Current Submissions Tracker */}
      <div className="space-y-4">
        <h3 className="font-display text-xl font-bold text-white">
          Your Active Venture Pipeline ({submissions.length})
        </h3>

        <div className="space-y-4">
          {submissions.map((sub) => (
            <div
              key={sub.id}
              className="p-6 rounded-3xl bg-[#0C1712] border border-white/10 space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#10E760]/10 text-[#10E760] text-[10px] font-mono font-bold uppercase">
                      {sub.sector}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Submitted: {sub.submissionDate}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-white mt-1">
                    {sub.companyName}
                  </h4>
                </div>

                <div className="text-left sm:text-right font-mono text-xs">
                  <div className="text-slate-400">Target Raise</div>
                  <div className="text-lg font-bold text-white">
                    ${sub.targetAmount.toLocaleString()} <span className="text-xs text-[#10E760]">({sub.projectedIRR})</span>
                  </div>
                </div>
              </div>

              {/* 5-Stage Visual Stepper */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase text-slate-400">
                  Diligence Committee Progress (Stage {sub.stageNumber} of 5: <strong className="text-emerald-300">{sub.stage}</strong>)
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {STAGES.map((s, idx) => {
                    const stepNum = idx + 1;
                    const isPassed = stepNum <= sub.stageNumber;
                    const isCurrent = stepNum === sub.stageNumber;

                    return (
                      <div key={idx} className="space-y-1">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            isCurrent
                              ? 'bg-[#10E760] animate-pulse'
                              : isPassed
                              ? 'bg-emerald-600'
                              : 'bg-white/10'
                          }`}
                        />
                        <div className="text-[9px] font-mono text-slate-400 truncate hidden sm:block">
                          {s}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Collateral description & Committee feedback */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono uppercase text-slate-500">Collateral Pledged</div>
                  <p className="text-slate-300 text-[11px]">{sub.collateralSummary}</p>
                </div>
                {sub.feedback && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-[#10E760]/20 space-y-1">
                    <div className="text-[10px] font-mono uppercase text-[#10E760]">Committee Status Note</div>
                    <p className="text-emerald-200 text-[11px]">{sub.feedback}</p>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
