import React, { useState } from 'react';
import { MemberPosition } from '../../types';
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Download, 
  RefreshCw, 
  MessageSquare,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Layers
} from 'lucide-react';

interface PositionsTabProps {
  positions: MemberPosition[];
  onOpenOpportunityDetail: (opportunityId: string) => void;
}

export const PositionsTab: React.FC<PositionsTabProps> = ({
  positions,
  onOpenOpportunityDetail,
}) => {
  const [expandedPositionId, setExpandedPositionId] = useState<string | null>('pos-1');
  const [reinvestSettings, setReinvestSettings] = useState<{ [id: string]: boolean }>({
    'pos-1': true,
    'pos-2': false,
    'pos-3': true,
    'pos-4': false,
  });

  const toggleReinvest = (id: string) => {
    setReinvestSettings((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleExpand = (id: string) => {
    setExpandedPositionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6">
      
      {/* Header Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <h2 className="font-display text-2xl font-bold text-white">
            Active Syndicate Positions ({positions.length})
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Real operational assets legally ring-fenced in dedicated bankruptcy-remote SPVs.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-mono">
            Total Deployed: <strong className="text-white">$217,000.00</strong>
          </span>
          <span className="p-2 rounded-xl bg-emerald-950/80 border border-[#10E760]/30 text-[#10E760] font-mono">
            Total Distributed: <strong>+$28,450.00</strong>
          </span>
        </div>
      </div>

      {/* Positions Grid / Cards */}
      <div className="space-y-4">
        {positions.map((pos) => {
          const isExpanded = expandedPositionId === pos.id;
          const isAutoReinvest = reinvestSettings[pos.id] || false;

          return (
            <div
              key={pos.id}
              className="rounded-3xl bg-[#0C1712] border border-white/10 hover:border-[#10E760]/30 transition-all overflow-hidden shadow-lg"
            >
              {/* Card Top Row */}
              <div className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                
                {/* Left: Thumbnail & Title Info */}
                <div className="flex items-start sm:items-center gap-4">
                  <img
                    src={pos.image}
                    alt={pos.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-white/10 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#10E760]/15 text-[#10E760] text-[10px] font-mono font-bold uppercase">
                        {pos.category}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#10E760]" />
                        {pos.location}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-white/5 text-slate-400 text-[10px]">
                        Committed: {pos.dateCommitted}
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      {pos.title}
                    </h3>

                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <span>Holding: <strong className="text-white">${pos.amountInvested.toLocaleString()}</strong></span>
                      <span>·</span>
                      <span>Target IRR: <strong className="text-[#10E760]">{pos.irr}</strong></span>
                      <span>·</span>
                      <span>Type: <strong className="text-emerald-300">{pos.returnType}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Right: Metrics & Expand Action */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-6 border-t lg:border-t-0 pt-3 lg:pt-0 border-white/5">
                  <div className="text-left sm:text-right">
                    <div className="text-[10px] uppercase font-mono text-slate-400">Cashflow Received</div>
                    <div className="font-mono font-bold text-base text-[#10E760]">
                      +${pos.dividendsReceived.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Next: ~${pos.nextPayoutEst.toLocaleString()} ({pos.nextPayoutDate})
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenOpportunityDetail(pos.opportunityId)}
                      className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white border border-white/10 transition-colors flex items-center gap-1.5"
                    >
                      <span>Deal Room</span>
                      <ExternalLink className="w-3 h-3 text-[#10E760]" />
                    </button>

                    <button
                      onClick={() => toggleExpand(pos.id)}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                      title="Toggle Operational Telemetry"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

              </div>

              {/* Expanded Operational Telemetry Drawer */}
              {isExpanded && (
                <div className="bg-[#08120D] border-t border-white/10 p-5 sm:p-6 space-y-6">
                  
                  {/* Milestone Progress Bar */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-white flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-[#10E760]" />
                        Operational Milestones & Escrow Release Tranches
                      </span>
                      <span className="text-emerald-400 font-mono">
                        {pos.milestonesCompleted} of {pos.totalMilestones} Phases Completed
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { title: 'Commercial Contracts Signed', status: 'Completed', date: 'Jan 2026' },
                        { title: 'Asset Fabrication / Purchase', status: 'Completed', date: 'Feb 2026' },
                        { title: 'Commercial Deployment', status: 'In Progress', date: 'Apr 2026' },
                        { title: 'Full Capacity Distributions', status: 'Upcoming', date: 'Jul 2026' },
                      ].map((m, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl border text-xs ${
                            idx < pos.milestonesCompleted
                              ? 'bg-emerald-950/40 border-[#10E760]/30 text-slate-200'
                              : idx === pos.milestonesCompleted
                              ? 'bg-amber-950/30 border-amber-500/40 text-amber-200'
                              : 'bg-white/[0.02] border-white/5 text-slate-500'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-mono">Phase {idx + 1}</span>
                            {idx < pos.milestonesCompleted ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#10E760]" />
                            ) : idx === pos.milestonesCompleted ? (
                              <Clock className="w-3.5 h-3.5 text-amber-400" />
                            ) : null}
                          </div>
                          <div className="font-semibold text-white">{m.title}</div>
                          <div className="text-[10px] text-slate-400 mt-1">{m.date} · {m.status}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & SPV Legal Controls */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-white/5">
                    
                    {/* Auto-Reinvest Toggle */}
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <RefreshCw className="w-3.5 h-3.5 text-[#10E760]" />
                          Automatic Reinvestment
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {isAutoReinvest ? 'Compound into next verified deal' : 'Payout cash to escrow balance'}
                        </div>
                      </div>
                      <button
                        onClick={() => toggleReinvest(pos.id)}
                        className={`w-11 h-6 rounded-full p-1 transition-colors relative ${
                          isAutoReinvest ? 'bg-[#10E760]' : 'bg-white/10'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full bg-black transition-transform ${
                            isAutoReinvest ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Download K-1 / Audited Certificate */}
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-[#10E760]" />
                          Share Certificate & SPV Charter
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Legally executed PDF with digital signature
                        </div>
                      </div>
                      <button
                        onClick={() => alert(`Downloading SPV Certificate & Tax Summary for ${pos.title}`)}
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        title="Download Certificate"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Syndicate Operator Contact */}
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-[#10E760]" />
                          Deal Lead Channel
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Direct AMA room with founder & co-backers
                        </div>
                      </div>
                      <button
                        onClick={() => alert(`Opening private Syndicate channel for ${pos.title}`)}
                        className="px-3 py-1.5 rounded-xl bg-[#10E760]/20 text-[#10E760] font-bold text-xs hover:bg-[#10E760]/30 transition-colors"
                      >
                        Join AMA
                      </button>
                    </div>

                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
