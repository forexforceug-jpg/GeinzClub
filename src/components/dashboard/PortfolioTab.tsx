import React, { useState } from 'react';
import { UserProfile, MemberPosition, PayoutTransaction } from '../../types';
import { ASSET_ALLOCATION, MONTHLY_CASHFLOW } from '../../data/mockDashboardData';
import { 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  ShieldCheck, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Clock, 
  FileText, 
  Download, 
  CheckCircle2, 
  ChevronRight,
  PieChart,
  BarChart3,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

interface PortfolioTabProps {
  user: UserProfile;
  positions: MemberPosition[];
  transactions: PayoutTransaction[];
  onOpenDeposit: () => void;
  onNavigateTab: (tab: string) => void;
}

export const PortfolioTab: React.FC<PortfolioTabProps> = ({
  user,
  positions,
  transactions,
  onOpenDeposit,
  onNavigateTab,
}) => {
  const [filterType, setFilterType] = useState<string>('All');

  const filteredTransactions = filterType === 'All'
    ? transactions
    : transactions.filter((tx) => tx.type.includes(filterType));

  return (
    <div className="space-y-8">
      
      {/* Welcome & Next Dividend Alert Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-[#0C1E14] via-[#091710] to-[#08120D] border border-[#10E760]/30 p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-full bg-[#10E760]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#10E760]">
              <Clock className="w-3.5 h-3.5" />
              <span>UPCOMING DISTRIBUTION CALENDAR</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Next Payout: <span className="text-[#10E760] font-mono">$2,512.50</span> on Oct 01, 2026
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Q3 Commercial Solar Dividend from <strong className="text-white">Solara Commercial Solar Microgrid</strong>. Automatic settlement directly into your liquid escrow balance.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDeposit}
              className="px-4 py-2.5 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-xs hover:bg-[#1cf36f] transition-colors flex items-center gap-1.5 shadow-lg shadow-[#10E760]/20"
            >
              <span>+ Add Capital</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigateTab('positions')}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <span>View All Positions ({positions.length})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4 Key Portfolio Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="p-5 rounded-2xl bg-[#0C1712] border border-white/10 hover:border-[#10E760]/30 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="uppercase font-mono tracking-wider">Total Portfolio Value</span>
            <span className="p-1.5 rounded-lg bg-[#10E760]/10 text-[#10E760]">
              <TrendingUp className="w-4 h-4" />
            </span>
          </div>
          <div className="font-display text-2xl sm:text-3xl font-extrabold text-white font-mono">
            ${user.portfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="px-1.5 py-0.5 rounded bg-emerald-950 font-mono font-bold">+{user.blendedAPY}</span>
            <span className="text-slate-400">Blended Net Yield</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="p-5 rounded-2xl bg-[#0C1712] border border-white/10 hover:border-[#10E760]/30 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="uppercase font-mono tracking-wider">Active Deployments</span>
            <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
              <Layers className="w-4 h-4" />
            </span>
          </div>
          <div className="font-display text-2xl sm:text-3xl font-extrabold text-white font-mono">
            ${user.totalInvested.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-3 text-xs text-slate-400">
            Across <strong className="text-white">{positions.length} SPV Ventures</strong> in 4 Countries
          </div>
        </div>

        {/* Metric 3 */}
        <div className="p-5 rounded-2xl bg-[#0C1712] border border-white/10 hover:border-[#10E760]/30 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="uppercase font-mono tracking-wider">Cash Distributions Earned</span>
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <DollarSign className="w-4 h-4" />
            </span>
          </div>
          <div className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
            ${user.totalEarned.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-3 text-xs text-slate-400">
            100% realized and verifiable in escrow
          </div>
        </div>

        {/* Metric 4 */}
        <div className="p-5 rounded-2xl bg-[#0C1712] border border-white/10 hover:border-[#10E760]/30 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="uppercase font-mono tracking-wider">Liquid Cash in Escrow</span>
            <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
              <ShieldCheck className="w-4 h-4" />
            </span>
          </div>
          <div className="font-display text-2xl sm:text-3xl font-extrabold text-white font-mono">
            ${user.availableBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-3 flex items-center justify-between text-xs">
            <span className="text-slate-400">Zurich Cantonal</span>
            <button
              onClick={() => onNavigateTab('deal-room')}
              className="text-[#10E760] font-semibold hover:underline flex items-center gap-0.5"
            >
              Allocate <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Visual Charts: Asset Allocation & Cashflow Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Monthly Cashflow Dividends Stream (8 Cols) */}
        <div className="lg:col-span-8 p-6 rounded-3xl bg-[#0C1712] border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#10E760]" />
                <h3 className="font-display text-base font-bold text-white">
                  Monthly Cashflow & Distribution History
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Quarterly dividends, interest coupons, and revenue-share payouts credited to date.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="flex items-center gap-1 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#10E760]"></span> Realized
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <span className="w-2.5 h-2.5 rounded-sm bg-white/20"></span> Projected
              </span>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="h-48 pt-4 flex items-end justify-between gap-1.5 sm:gap-3 border-b border-white/10 pb-2">
            {MONTHLY_CASHFLOW.map((item, idx) => {
              const isEstimated = item.month.includes('Est.');
              const maxVal = 6000;
              const heightPercent = Math.min(100, Math.round((item.dividends / maxVal) * 100));

              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 group relative">
                  {/* Tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-10 bg-black/90 text-white text-[10px] font-mono px-2 py-1 rounded border border-white/20 whitespace-nowrap pointer-events-none z-20">
                    ${item.dividends.toLocaleString()}
                  </div>

                  {/* Bar */}
                  <div className="w-full bg-white/5 rounded-t-md h-36 flex items-end justify-center p-0.5">
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-full rounded-t-sm transition-all duration-500 ${
                        isEstimated
                          ? 'bg-gradient-to-t from-emerald-950 to-emerald-600/50 border border-emerald-400/40 border-dashed'
                          : 'bg-gradient-to-t from-[#086b2d] to-[#10E760]'
                      }`}
                    ></div>
                  </div>

                  {/* Label */}
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 text-center truncate w-full">
                    {item.month.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-1">
            <span className="font-mono">Realized Year-to-Date: <strong className="text-white">${user.totalEarned.toLocaleString()}</strong></span>
            <span className="font-mono text-emerald-400">Projected 2026 Year-End Total: <strong>$42,421.00</strong></span>
          </div>
        </div>

        {/* Right: Sector Diversification (4 Cols) */}
        <div className="lg:col-span-4 p-6 rounded-3xl bg-[#0C1712] border border-white/10 flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <PieChart className="w-4 h-4 text-[#10E760]" />
              <h3 className="font-display text-base font-bold text-white">
                Asset Diversification
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              Balanced allocation across non-correlated tangible industries.
            </p>
          </div>

          {/* Allocation Breakdown Bars */}
          <div className="space-y-3.5">
            {ASSET_ALLOCATION.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                    {item.sector}
                  </span>
                  <span className="font-mono text-slate-300">
                    ${item.amount.toLocaleString()} ({item.percentage}%)
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${item.percentage}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Smart Allocation suggestion */}
          <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300 space-y-1">
            <div className="text-[10px] font-mono text-[#10E760] uppercase">Smart Optimization</div>
            <p className="text-[11px] text-slate-400">
              Your portfolio is well-balanced. Next deal allocation recommended in <strong>CleanTech</strong> or <strong>Healthcare Logistics</strong>.
            </p>
          </div>
        </div>

      </div>

      {/* Ledger & Transactions Table */}
      <div className="p-6 rounded-3xl bg-[#0C1712] border border-white/10 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#10E760]" />
              Custody Escrow Ledger & Payout Log
            </h3>
            <p className="text-xs text-slate-400">
              Independently recorded transactions with Swiss banking audit reference numbers.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5">
            {['All', 'Dividend', 'Deposit', 'Deployment'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterType(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  filterType === cat
                    ? 'bg-[#10E760] text-[#070D0A]'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 uppercase font-mono text-[10px]">
                <th className="pb-3 font-semibold">Date</th>
                <th className="pb-3 font-semibold">Description / Asset</th>
                <th className="pb-3 font-semibold">Transaction Type</th>
                <th className="pb-3 font-semibold">Amount</th>
                <th className="pb-3 font-semibold">Audit Ref</th>
                <th className="pb-3 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-200">
              {filteredTransactions.map((tx) => {
                const isPositive = tx.amount > 0;
                return (
                  <tr key={tx.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 font-mono text-slate-400 whitespace-nowrap">{tx.date}</td>
                    <td className="py-3.5 font-medium text-white max-w-xs truncate">
                      {tx.opportunityTitle}
                    </td>
                    <td className="py-3.5 whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                        tx.type === 'Dividend Payout'
                          ? 'bg-emerald-950 text-[#10E760] border border-[#10E760]/30'
                          : tx.type === 'Cash Deposit'
                          ? 'bg-blue-950 text-blue-400 border border-blue-500/30'
                          : 'bg-white/5 text-slate-300'
                      }`}>
                        {tx.type}
                      </span>
                    </td>
                    <td className="py-3.5 font-mono font-bold whitespace-nowrap">
                      <span className={isPositive ? 'text-[#10E760]' : 'text-slate-300'}>
                        {isPositive ? '+' : ''}${Math.abs(tx.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </span>
                    </td>
                    <td className="py-3.5 font-mono text-[10px] text-slate-400 whitespace-nowrap">
                      {tx.referenceId}
                    </td>
                    <td className="py-3.5 text-right whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
