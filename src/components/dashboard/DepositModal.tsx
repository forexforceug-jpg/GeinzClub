import React, { useState } from 'react';
import { 
  X, 
  Wallet, 
  ArrowRight, 
  CheckCircle2, 
  Landmark, 
  Coins, 
  ShieldCheck, 
  Copy, 
  Check
} from 'lucide-react';

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddFunds: (amount: number, method: string) => void;
}

export const DepositModal: React.FC<DepositModalProps> = ({
  isOpen,
  onClose,
  onAddFunds,
}) => {
  const [method, setMethod] = useState<'wire' | 'usdc'>('wire');
  const [amount, setAmount] = useState<number>(25000);
  const [copied, setCopied] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount <= 0) return;

    onAddFunds(amount, method === 'wire' ? 'Zurich Cantonal Wire' : 'USDC Smart Escrow');
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0C1611] border border-[#10E760]/30 p-6 sm:p-8 text-slate-100 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#10E760]/20 border border-[#10E760] text-[#10E760] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Funds Credited to Liquid Escrow
            </h3>
            <p className="text-xs text-slate-300">
              +${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })} has been deposited to your account balance.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[10px] font-mono text-[#10E760] uppercase tracking-wider">
                CAPITAL TOP-UP & ESCROW INGRESS
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-0.5">
                Deposit Capital
              </h3>
              <p className="text-xs text-slate-400">
                Deposit liquid reserves into your verified member wallet for immediate deal allocation.
              </p>
            </div>

            {/* Method Toggle */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setMethod('wire')}
                className={`p-3 rounded-2xl border text-xs font-semibold flex items-center gap-2.5 transition-all ${
                  method === 'wire'
                    ? 'bg-[#10E760]/15 border-[#10E760] text-white'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <Landmark className={`w-4 h-4 ${method === 'wire' ? 'text-[#10E760]' : ''}`} />
                <div className="text-left">
                  <div>Swiss Bank Wire</div>
                  <div className="text-[10px] text-slate-400 font-normal">Fedwire / SWIFT / SEPA</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setMethod('usdc')}
                className={`p-3 rounded-2xl border text-xs font-semibold flex items-center gap-2.5 transition-all ${
                  method === 'usdc'
                    ? 'bg-[#10E760]/15 border-[#10E760] text-white'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <Coins className={`w-4 h-4 ${method === 'usdc' ? 'text-[#10E760]' : ''}`} />
                <div className="text-left">
                  <div>Institutional USDC</div>
                  <div className="text-[10px] text-slate-400 font-normal">Instant settlement</div>
                </div>
              </button>
            </div>

            {/* Amount */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 block">
                Deposit Amount ($ USD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-slate-400 font-mono text-lg">$</span>
                <input
                  type="number"
                  required
                  min={1000}
                  step={1000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full pl-9 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-lg font-bold focus:outline-none focus:border-[#10E760]"
                />
              </div>

              <div className="flex gap-2 pt-1">
                {[10000, 25000, 50000, 100000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset)}
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300"
                  >
                    +${preset.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Escrow Details */}
            {method === 'wire' ? (
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Escrow Bank:</span>
                  <strong className="text-white font-mono">Zurich Cantonal Bank (ZKB)</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">IBAN:</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[#10E760] font-mono">CH93 0070 0110 0021 8821 9</span>
                    <button
                      type="button"
                      onClick={() => handleCopy('CH93 0070 0110 0021 8821 9')}
                      className="p-1 hover:text-white text-slate-400"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-[#10E760]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Reference Note:</span>
                  <span className="text-slate-200 font-mono">GC-88219-KESTLER</span>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Escrow Contract:</span>
                  <span className="text-[#10E760] font-mono text-[11px]">0x88219...CustodyEscrow</span>
                </div>
                <div className="text-slate-400 text-[11px]">
                  Send ERC-20 or Arbitrum native USDC. Automatically converted and credited 1:1.
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-xs hover:bg-[#1cf36f] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#10E760]/20"
            >
              <span>Confirm & Credit Escrow Deposit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
