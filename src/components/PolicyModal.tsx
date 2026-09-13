import React from 'react';
import { X, ShieldCheck, AlertTriangle, FileText } from 'lucide-react';

interface PolicyModalProps {
  policyName: string | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policyName, onClose }) => {
  if (!policyName) return null;

  const getContent = () => {
    switch (policyName) {
      case 'Risk Disclosure':
        return {
          title: 'Comprehensive Risk Disclosure Notice',
          icon: <AlertTriangle className="w-6 h-6 text-amber-400" />,
          body: (
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                <strong>1. Capital Risk & No Guarantee:</strong> Participation in private commercial ventures, syndicated equipment leases, debt notes, and equity placements involves substantial risk. You could lose some or all of your invested capital. GeinzClub does not guarantee capital preservation or projected returns.
              </p>
              <p>
                <strong>2. Illiquidity:</strong> Private investments are typically locked for the contractual duration specified in each deal prospectus (e.g. 20 to 36 months). There is no guaranteed secondary market, and members must only commit funds they do not require for immediate liquidity.
              </p>
              <p>
                <strong>3. Operational Dependency:</strong> Project yields depend directly upon the commercial execution and creditworthiness of the operating company, underlying customers, and macroeconomic conditions.
              </p>
              <p>
                <strong>4. Diversification Requirement:</strong> Members are strongly advised to allocate across multiple independent projects and asset classes rather than concentrating capital in a single business.
              </p>
            </div>
          )
        };
      case 'AML/KYC Policy':
        return {
          title: 'Anti-Money Laundering & Identity Verification (AML/KYC)',
          icon: <ShieldCheck className="w-6 h-6 text-[#10E760]" />,
          body: (
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                GeinzClub enforces institutional compliance standards to preserve club integrity and protect our community from illicit actors:
              </p>
              <p>
                <strong>1. Identity Verification:</strong> All prospective members must provide government-issued photo identification and proof of residential address prior to viewing confidential pitch books or executing allocations.
              </p>
              <p>
                <strong>2. Sanctions Screening:</strong> Automated continuous screening against international sanctions lists (OFAC, EU, UN, UK HMT).
              </p>
              <p>
                <strong>3. Source of Funds:</strong> High-value commitments require documentation demonstrating lawful capital origin and compliance with international banking regulations.
              </p>
            </div>
          )
        };
      default:
        return {
          title: policyName,
          icon: <FileText className="w-6 h-6 text-[#10E760]" />,
          body: (
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                This document outlines the operational and governance charter of GeinzClub. Members must respect community guidelines, maintain confidentiality regarding proprietary business data in deal rooms, and conduct honest, constructive discussions.
              </p>
              <p>
                For detailed legal inquiries or specific syndicate operating agreement questions, contact the GeinzClub legal registry at legal@geinzclub.com.
              </p>
            </div>
          )
        };
    }
  };

  const { title, icon, body } = getContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0B1510] border border-white/15 p-6 sm:p-8 text-slate-100 shadow-2xl shadow-black my-8 max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            {icon}
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
            {title}
          </h3>
        </div>

        <div className="border-t border-white/10 pt-4">
          {body}
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-xs hover:bg-[#1cf36f] transition-colors"
          >
            I Understand & Acknowledge
          </button>
        </div>

      </div>
    </div>
  );
};
