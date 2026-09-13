import React, { useState } from 'react';
import { Opportunity, UserProfile } from '../../types';
import { OPPORTUNITIES } from '../../data/mockData';
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  ShieldCheck, 
  Users, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Sliders, 
  Lock, 
  Wallet,
  AlertCircle
} from 'lucide-react';

interface DealRoomTabProps {
  user: UserProfile;
  onAllocateDeal: (opportunity: Opportunity, amount: number) => void;
  onOpenOpportunityDetail: (opportunityId: string) => void;
  onOpenDeposit: () => void;
}

export const DealRoomTab: React.FC<DealRoomTabProps> = ({
  user,
  onAllocateDeal,
  onOpenOpportunityDetail,
  onOpenDeposit,
}) => {
  const [selectedDealForAlloc, setSelectedDealForAlloc] = useState<Opportunity | null>(null);
  const [allocationAmount, setAllocationAmount] = useState<number>(10000);
  const [allocationSuccessMsg, setAllocationSuccessMsg] = useState<string | null>(null);

  // Smart Allocation state
  const [smartAllocEnabled, setSmartAllocEnabled] = useState(true);
  const [riskPreference, setRiskPreference] = useState<'Conservative' | 'Balanced' | 'Growth'>('Balanced');
  const [maxExposurePercent, setMaxExposurePercent] = useState<number>(15);
  const [smartAllocSaved, setSmartAllocSaved] = useState(false);

  const handleOpenAllocateModal = (deal: Opportunity) => {
    setSelectedDealForAlloc(deal);
    setAllocationAmount(Math.max(deal.minInvestment, 5000));
    setAllocationSuccessMsg(null);
  };

  const handleConfirmAllocation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDealForAlloc) return;

    if (allocationAmount > user.availableBalance) {
      alert('Allocation amount exceeds your available liquid balance. Please deposit additional capital into escrow first.');
      return;
    }

    onAllocateDeal(selectedDealForAlloc, allocationAmount);
    setAllocationSuccessMsg(`Allocation of $${allocationAmount.toLocaleString()} to ${selectedDealForAlloc.title} confirmed! Capital committed to escrow.`);
    setTimeout(() => {
      setSelectedDealForAlloc(null);
      setAllocationSuccessMsg(null);
    }, 2200);
  };

  const handleSaveSmartAlloc = () => {
    setSmartAllocSaved(true);
    setTimeout(() => setSmartAllocSaved(false), 3000);
  };

  return (
    <div className="space-y-8">
      
      {/* Top Banner: Smart Allocation Engine */}
      <div className="rounded-3xl bg-[#0B1711] border border-white/10 p-6 space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#10E760]" />
              <h3 className="font-display text-lg font-bold text-white">
                Syndicate Smart-Allocation Engine
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#10E760]/20 text-[#10E760] font-bold">
                {smartAllocEnabled ? 'ACTIVE' : 'PAUSED'}
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Automatically pre-reserves allocation tickets in oversubscribed deals that match your risk criteria.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSmartAllocEnabled(!smartAllocEnabled)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                smartAllocEnabled
                  ? 'bg-emerald-950 text-[#10E760] border border-[#10E760]/30'
                  : 'bg-white/5 text-slate-400 border border-white/10'
              }`}
            >
              {smartAllocEnabled ? 'Automated Engine Enabled' : 'Enable Engine'}
            </button>
          </div>
        </div>

        {smartAllocEnabled && (
          <div className="pt-4 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1.5">
                Target Risk & Yield Profile
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {(['Conservative', 'Balanced', 'Growth'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRiskPreference(r)}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      riskPreference === r
                        ? 'bg-[#10E760] text-black'
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1.5">
                Max Exposure Per Single Deal: <strong className="text-white">{maxExposurePercent}%</strong>
              </label>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={maxExposurePercent}
                onChange={(e) => setMaxExposurePercent(Number(e.target.value))}
                className="w-full accent-[#10E760] cursor-pointer"
              />
            </div>

            <div className="flex items-end justify-between">
              <div className="text-[11px] text-slate-400">
                Liquid Escrow: <strong className="text-white">${user.availableBalance.toLocaleString()}</strong>
              </div>
              <button
                type="button"
                onClick={handleSaveSmartAlloc}
                className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition-colors"
              >
                {smartAllocSaved ? '✓ Saved!' : 'Save Rules'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Available Syndicate Opportunities Grid */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              Live Verified Opportunities ({OPPORTUNITIES.length})
            </h3>
            <p className="text-xs text-slate-400">
              Due-diligence passed deals open for member capital commitment.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            Available to allocate: <strong className="text-[#10E760]">${user.availableBalance.toLocaleString()}</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OPPORTUNITIES.map((deal) => {
            const fundingPercent = Math.round((deal.raisedAmount / deal.targetAmount) * 100);

            return (
              <div
                key={deal.id}
                className="rounded-3xl bg-[#0C1712] border border-white/10 hover:border-[#10E760]/40 transition-all overflow-hidden flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Image & Badges */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C1712] via-transparent to-black/60"></div>

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#10E760] text-[10px] font-mono font-bold uppercase border border-[#10E760]/30">
                        {deal.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-slate-300 text-[10px] font-mono border border-white/10">
                        {deal.riskRating}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-[#10E760]/40 text-[11px] font-mono font-bold">
                        {deal.projectedReturn}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#10E760]" />
                        {deal.location}
                      </span>
                      <span className="font-mono text-[11px] text-amber-300">
                        {deal.closingDaysLeft} days left
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 space-y-4">
                    <div>
                      <h4 className="font-display text-lg font-bold text-white group-hover:text-[#10E760] transition-colors">
                        {deal.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                        {deal.tagline}
                      </p>
                    </div>

                    {/* Progress */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-400">
                          Raised: <strong className="text-white">${deal.raisedAmount.toLocaleString()}</strong> of ${deal.targetAmount.toLocaleString()}
                        </span>
                        <span className="text-[#10E760] font-bold">{fundingPercent}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#0A8738] to-[#10E760]"
                          style={{ width: `${fundingPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Meta Specs */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-black/40 border border-white/5 text-center text-xs">
                      <div>
                        <div className="text-[10px] uppercase font-mono text-slate-500">Min Ticket</div>
                        <div className="font-mono font-bold text-slate-200 mt-0.5">
                          ${deal.minInvestment.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono text-slate-500">Term</div>
                        <div className="font-mono font-bold text-slate-200 mt-0.5">
                          {deal.termMonths} Mo
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono text-slate-500">Backers</div>
                        <div className="font-mono font-bold text-slate-200 mt-0.5">
                          {deal.backersCount} Vetted
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => onOpenOpportunityDetail(deal.id)}
                    className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors"
                  >
                    View Dossier
                  </button>

                  <button
                    onClick={() => handleOpenAllocateModal(deal)}
                    className="flex-1 py-2.5 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-xs hover:bg-[#1cf36f] transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-[#10E760]/20"
                  >
                    <span>Allocate Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Allocation Execution Modal */}
      {selectedDealForAlloc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0C1611] border border-[#10E760]/30 p-6 sm:p-8 text-slate-100 shadow-2xl">
            
            {allocationSuccessMsg ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#10E760]/20 border border-[#10E760] text-[#10E760] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  Commitment Executed
                </h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  {allocationSuccessMsg}
                </p>
              </div>
            ) : (
              <form onSubmit={handleConfirmAllocation} className="space-y-5">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#10E760] tracking-wider">
                      SYNDICATE CAPITAL DEPLOYMENT
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">
                      Allocate to {selectedDealForAlloc.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {selectedDealForAlloc.category} · {selectedDealForAlloc.projectedReturn}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedDealForAlloc(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                  >
                    ✕
                  </button>
                </div>

                {/* Amount Input */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <label className="font-semibold text-slate-300">Investment Commitment ($ USD)</label>
                    <span className="text-slate-400 font-mono">
                      Available: <strong className="text-white">${user.availableBalance.toLocaleString()}</strong>
                    </span>
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-3 text-slate-400 font-mono text-lg">$</span>
                    <input
                      type="number"
                      required
                      min={selectedDealForAlloc.minInvestment}
                      max={user.availableBalance}
                      step={500}
                      value={allocationAmount}
                      onChange={(e) => setAllocationAmount(Number(e.target.value))}
                      className="w-full pl-9 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-lg font-bold focus:outline-none focus:border-[#10E760]"
                    />
                  </div>

                  {/* Quick Preset Buttons */}
                  <div className="flex items-center gap-2 pt-1">
                    {[selectedDealForAlloc.minInvestment, 5000, 10000, 20000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setAllocationAmount(preset)}
                        className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 transition-colors"
                      >
                        ${preset.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculated Yield Projection */}
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Projected Annual Cash Distribution:</span>
                    <span className="font-mono font-bold text-[#10E760]">
                      ~${Math.round(allocationAmount * 0.15).toLocaleString()} / year
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Escrow SPV Structure:</span>
                    <span className="text-slate-200">Senior Secured Ring-Fenced Lien</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Custody Source:</span>
                    <span className="text-slate-200">Zurich Cantonal Escrow SPV</span>
                  </div>
                </div>

                {allocationAmount > user.availableBalance ? (
                  <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-xs text-rose-300 flex items-center justify-between">
                    <span>Insufficient liquid escrow balance.</span>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedDealForAlloc(null);
                        onOpenDeposit();
                      }}
                      className="text-white font-bold underline ml-2"
                    >
                      Deposit Funds
                    </button>
                  </div>
                ) : null}

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedDealForAlloc(null)}
                    className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={allocationAmount > user.availableBalance || allocationAmount <= 0}
                    className="flex-1 py-3 rounded-xl bg-[#10E760] disabled:bg-slate-700 text-[#070D0A] font-bold text-xs hover:bg-[#1cf36f] transition-colors shadow-lg shadow-[#10E760]/20"
                  >
                    Execute Commitment
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
