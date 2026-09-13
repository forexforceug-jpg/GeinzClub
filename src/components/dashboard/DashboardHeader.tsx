import React from 'react';
import { UserProfile } from '../../types';
import { 
  ShieldCheck, 
  Wallet, 
  PlusCircle, 
  ExternalLink, 
  LogOut, 
  Layers, 
  Bell, 
  CheckCircle2, 
  Building2, 
  TrendingUp,
  Landmark,
  ChevronDown
} from 'lucide-react';

interface DashboardHeaderProps {
  user: UserProfile;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenDeposit: () => void;
  onViewLandingPage: () => void;
  onLogout: () => void;
  unreadNotifications: number;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  user,
  activeTab,
  setActiveTab,
  onOpenDeposit,
  onViewLandingPage,
  onLogout,
  unreadNotifications,
}) => {
  return (
    <header className="bg-[#070D0A] border-b border-white/10 sticky top-0 z-40">
      {/* Top Banner / Network Strip */}
      <div className="bg-[#0A140F] border-b border-white/5 px-4 sm:px-6 lg:px-8 py-1.5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#10E760]">
              <span className="w-2 h-2 rounded-full bg-[#10E760] animate-pulse"></span>
              <strong className="font-semibold text-white">GeinzClub Private Syndicate Network</strong>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <Landmark className="w-3 h-3 text-[#10E760]" />
              Custody: Zurich Cantonal Escrow SPV #9012
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="bg-emerald-950/80 text-emerald-300 border border-[#10E760]/30 px-2 py-0.5 rounded-full font-mono">
              Member ID: {user.memberId}
            </span>
            <button
              onClick={onViewLandingPage}
              className="hover:text-white flex items-center gap-1 text-slate-400 transition-colors"
              title="View Public Landing Page"
            >
              <span>Public Site</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Logo & Member Identity */}
          <div className="flex items-center gap-4">
            <div 
              onClick={onViewLandingPage}
              className="cursor-pointer flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#10E760] to-[#0A8738] flex items-center justify-center p-0.5 shadow-md shadow-[#10E760]/20">
                <div className="w-full h-full bg-[#070D0A] rounded-[9px] flex items-center justify-center">
                  <span className="font-display font-black text-lg text-[#10E760]">GC</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-base tracking-tight text-white flex items-center gap-1">
                  GEINZ<span className="text-[#10E760]">CLUB</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.2 rounded border border-[#10E760]/30 ml-1">
                    PORTAL
                  </span>
                </div>
              </div>
            </div>

            <div className="h-7 w-px bg-white/10 hidden sm:block"></div>

            {/* Member Profile Avatar & Verified Badge */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-9 h-9 rounded-xl object-cover border border-[#10E760]/40"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#10E760] border-2 border-[#070D0A] flex items-center justify-center">
                  <CheckCircle2 className="w-2.5 h-2.5 text-black" />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm text-white">{user.name}</span>
                  <span className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono text-[#10E760] bg-[#10E760]/10 px-1.5 py-0.5 rounded">
                    <ShieldCheck className="w-3 h-3" />
                    KYC L3
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  {user.tier} · {user.country}
                </div>
              </div>
            </div>
          </div>

          {/* Balances & Fast Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-1 md:pb-0">
            {/* Liquid Balance Pill */}
            <div className="bg-[#0E1B14] border border-[#10E760]/25 rounded-2xl px-3.5 py-2 flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-xl bg-[#10E760]/15 flex items-center justify-center text-[#10E760]">
                <Wallet className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-slate-400">Available Liquid</div>
                <div className="font-mono font-bold text-sm sm:text-base text-white">
                  ${user.availableBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
              </div>
              <button
                onClick={onOpenDeposit}
                className="ml-1 p-1.5 rounded-lg bg-[#10E760] hover:bg-[#1cf36f] text-black transition-colors"
                title="Deposit Capital into Escrow"
              >
                <PlusCircle className="w-4 h-4" />
              </button>
            </div>

            {/* Total Portfolio Value Pill */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl px-3.5 py-2 hidden lg:flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-slate-400">Portfolio Value</div>
                <div className="font-mono font-bold text-sm sm:text-base text-emerald-300">
                  ${user.portfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>

            {/* Quick Logout button */}
            <button
              onClick={onLogout}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-rose-400 border border-white/5 transition-colors shrink-0"
              title="Sign Out of Session"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Operational Navigation Tabs */}
        <div className="mt-4 pt-2 border-t border-white/5 flex items-center gap-1.5 overflow-x-auto text-xs font-semibold no-scrollbar">
          {[
            { id: 'portfolio', label: 'Portfolio & Yields', count: null },
            { id: 'positions', label: 'Active Positions', count: 4 },
            { id: 'deal-room', label: 'Deal Room / Allocate', count: 4 },
            { id: 'operator-desk', label: 'Submit Business (Operator)', count: 2 },
            { id: 'syndicate', label: 'Syndicate Lounge & Debriefs', count: 'Live' },
            { id: 'vault', label: 'Vault & Custody', count: null },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#10E760] text-[#070D0A] font-bold shadow-lg shadow-[#10E760]/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== null && (
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      isActive
                        ? 'bg-black text-white'
                        : 'bg-white/10 text-emerald-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
