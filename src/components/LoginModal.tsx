import React, { useState } from 'react';
import { X, Lock, ArrowRight, ShieldCheck, User } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToJoin: () => void;
  onLoginSuccess: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ 
  isOpen, 
  onClose, 
  onSwitchToJoin,
  onLoginSuccess 
}) => {
  const [email, setEmail] = useState('david.kestler@member.geinzclub.internal');
  const [password, setPassword] = useState('••••••••••••');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      onLoginSuccess();
      onClose();
    }, 600);
  };

  const handleQuickDemo = () => {
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      onLoginSuccess();
      onClose();
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-md rounded-3xl bg-[#0C1611] border border-[#10E760]/30 p-6 sm:p-8 text-slate-100 shadow-2xl shadow-black/80">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          {/* Header */}
          <div className="space-y-1.5 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#10E760]/20 flex items-center justify-center text-[#10E760] font-bold text-xs">
                GC
              </div>
              <span className="text-xs font-mono font-bold text-[#10E760] uppercase tracking-wider">
                MEMBER PORTAL LOGIN
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              Welcome Back
            </h3>
            <p className="text-xs text-slate-400">
              Sign in to access your portfolio, live deal room allocations, operator desk, and member discussions.
            </p>
          </div>

          {/* Quick Demo Access banner */}
          <div className="mb-4 p-3 rounded-2xl bg-emerald-950/40 border border-[#10E760]/30 flex items-center justify-between">
            <div className="text-[11px] text-slate-300">
              <span className="text-[#10E760] font-bold font-mono">DEMO CREDENTIALS</span>
              <div className="text-slate-400">Vetted Operator: David Kestler</div>
            </div>
            <button
              type="button"
              onClick={handleQuickDemo}
              className="px-3 py-1.5 rounded-xl bg-[#10E760] hover:bg-[#1cf36f] text-black font-bold text-xs transition-colors"
            >
              1-Click Enter
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Verified Member Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-[#10E760]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-slate-300">
                  Security Passcode
                </label>
                <a href="#" className="text-[11px] text-[#10E760] hover:underline">
                  Forgot passcode?
                </a>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-[#10E760]"
              />
            </div>

            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#10E760]" />
                2FA Hardware Security Key
              </span>
              <span className="text-emerald-400 font-medium">Ready</span>
            </div>

            <button
              type="submit"
              disabled={isAuthenticating}
              className="w-full py-3 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-xs hover:bg-[#1cf36f] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#10E760]/20"
            >
              {isAuthenticating ? (
                <span>Authenticating Escrow Key...</span>
              ) : (
                <>
                  <span>Enter Member Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-slate-400">
            Not yet a verified member?{' '}
            <button
              onClick={() => {
                onClose();
                onSwitchToJoin();
              }}
              className="text-[#10E760] font-semibold hover:underline"
            >
              Apply for Membership
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
