import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, UserCheck, Sparkles, Building, Briefcase, TrendingUp } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [archetype, setArchetype] = useState<string>('Investor');
  const [capitalGoal, setCapitalGoal] = useState<string>('$50k – $250k');
  const [investmentMode, setInvestmentMode] = useState<string>('Both / Flexible');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [country, setCountry] = useState<string>('United Kingdom');
  const [isAccredited, setIsAccredited] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#0B1510] border border-[#10E760]/30 p-6 sm:p-8 text-slate-100 shadow-2xl shadow-black/80 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="space-y-1 pr-8">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#10E760]/10 text-[#10E760] text-[10px] font-mono font-bold uppercase tracking-wider">
                MEMBERSHIP APPLICATION · STEP {step} OF 3
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Join GeinzClub
              </h3>
              <p className="text-xs text-slate-400">
                A private syndicate of vetted entrepreneurs, business owners, and capital allocators.
              </p>
            </div>

            {/* Step Progress Dots */}
            <div className="flex items-center gap-2 my-5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    step >= s ? 'bg-[#10E760]' : 'bg-white/10'
                  }`}
                />
              ))}
            </div>

            {/* STEP 1: Archetype Selection */}
            {step === 1 && (
              <div className="space-y-4">
                <label className="text-xs font-semibold text-slate-300 block">
                  Select your primary role in the club:
                </label>

                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { title: 'Investor', desc: 'Deploying capital into real deals' },
                    { title: 'Entrepreneur', desc: 'Building scalable companies' },
                    { title: 'Business Owner', desc: 'Operating established enterprises' },
                    { title: 'Trader', desc: 'Allocating market yield & hedging' },
                    { title: 'Professional', desc: 'Legal, M&A, CPA & structural specialist' },
                    { title: 'Builder', desc: 'Engineering & technical product lead' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.title}
                      onClick={() => setArchetype(item.title)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        archetype === item.title
                          ? 'bg-[#10E760]/15 border-[#10E760] text-white'
                          : 'bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="text-xs font-bold text-white flex items-center justify-between">
                        <span>{item.title}</span>
                        {archetype === item.title && (
                          <Check className="w-3.5 h-3.5 text-[#10E760]" />
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">{item.desc}</div>
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-2.5 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-xs hover:bg-[#1cf36f] transition-colors flex items-center gap-1.5"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Capital Goals & Strategy */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    Annual Capital Deployment Ambition:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['$10k – $50k', '$50k – $250k', '$250k – $1M', '$1M+ / Family Office'].map((tier) => (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setCapitalGoal(tier)}
                        className={`p-2.5 rounded-xl text-center text-xs font-semibold border transition-all ${
                          capitalGoal === tier
                            ? 'bg-[#10E760] text-[#070D0A] font-bold border-[#10E760]'
                            : 'bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    Preferred Allocation Architecture:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Smart Allocation', 'Manual Investing', 'Both / Flexible'].map((mode) => (
                      <button
                        type="button"
                        key={mode}
                        onClick={() => setInvestmentMode(mode)}
                        className={`p-2.5 rounded-xl text-center text-xs font-semibold border transition-all ${
                          investmentMode === mode
                            ? 'bg-emerald-500 text-[#070D0A] font-bold border-emerald-400'
                            : 'bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-2.5 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-xs hover:bg-[#1cf36f] transition-colors flex items-center gap-1.5"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact & KYC Readiness */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alexander Croft"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-[#10E760]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-[#10E760]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Country of Tax Residence
                  </label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="United Kingdom, Germany, UAE, United States..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-[#10E760]"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="accredited"
                    checked={isAccredited}
                    onChange={(e) => setIsAccredited(e.target.checked)}
                    className="rounded border-white/20 text-[#10E760] focus:ring-0"
                  />
                  <label htmlFor="accredited" className="text-[11px] text-slate-300">
                    I confirm I am an accredited/sophisticated investor or active commercial operator.
                  </label>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-xs hover:bg-[#1cf36f] transition-colors flex items-center gap-1.5 shadow-lg shadow-[#10E760]/20"
                  >
                    <span>Submit Application</span>
                    <ShieldCheck className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#10E760]/20 border border-[#10E760] text-[#10E760] flex items-center justify-center mx-auto shadow-lg shadow-[#10E760]/30">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold text-white">
                Application Received!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Welcome, {fullName || 'Member'}. Your application for the <strong>{archetype}</strong> cohort has been securely queued.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-xs text-slate-300 text-left space-y-2 max-w-sm mx-auto font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Applicant ID:</span>
                <span className="text-[#10E760]">GC-APP-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Role Track:</span>
                <span>{archetype}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Allocation Model:</span>
                <span>{investmentMode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">KYC Status:</span>
                <span className="text-emerald-400">Review within 24h</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-xs hover:bg-[#1cf36f] transition-colors"
            >
              Return to Landing Page
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
