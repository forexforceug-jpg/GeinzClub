import React from 'react';
import { UserProfile } from '../../types';
import { 
  ShieldCheck, 
  FileText, 
  Download, 
  Lock, 
  CheckCircle2, 
  Building2, 
  Landmark,
  Key
} from 'lucide-react';

interface VaultTabProps {
  user: UserProfile;
}

export const VaultTab: React.FC<VaultTabProps> = ({ user }) => {
  const documents = [
    {
      category: 'Legal SPV Charters',
      title: 'Solara_Microgrid_SPV_Signed_Charter.pdf',
      date: 'Feb 15, 2026',
      size: '2.4 MB',
      hash: '0x88219...solara-spv',
      status: 'Legally Binding & Executed',
    },
    {
      category: 'Legal SPV Charters',
      title: 'Apex_CleanFleet_Senior_Secured_Lien.pdf',
      date: 'Jan 22, 2026',
      size: '3.8 MB',
      hash: '0x88219...apex-lien',
      status: 'Registered Commercial Lien',
    },
    {
      category: 'Tax & Audit',
      title: 'GeinzClub_Consolidated_2025_Tax_Pack_K1.pdf',
      date: 'Mar 30, 2026',
      size: '1.9 MB',
      hash: '0x88219...tax-k1-2025',
      status: 'Audited by Deloitte Switzerland',
    },
    {
      category: 'Custody & Banking',
      title: 'Zurich_Cantonal_Bank_Escrow_Trust_Confirmation.pdf',
      date: 'Jun 12, 2026',
      size: '1.2 MB',
      hash: '0x88219...zkb-custody',
      status: 'Verified In Trust',
    },
    {
      category: 'Accreditation',
      title: 'Qualified_Institutional_Investor_Certificate_L3.pdf',
      date: 'Nov 10, 2024',
      size: '850 KB',
      hash: '0x88219...accred-l3',
      status: 'Active & Verified',
    },
  ];

  const handleDownload = (docName: string) => {
    alert(`Downloading verified encrypted document: ${docName}`);
  };

  return (
    <div className="space-y-8">
      
      {/* Vault Status Header */}
      <div className="rounded-3xl bg-[#0B1711] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#10E760]">
            <Lock className="w-4 h-4" />
            <span>SWISS SECURE DOCUMENT CUSTODY</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Encrypted Syndicate Vault
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            All bilateral subscription agreements, registered physical asset liens, bankruptcy-remote SPV charters, and audited tax schedules are preserved under end-to-end cryptographic verification.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-xs space-y-2 shrink-0">
          <div className="flex items-center gap-2 text-emerald-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-[#10E760]" />
            <span>Custody: Zurich Cantonal SPV #9012</span>
          </div>
          <div className="text-slate-400 font-mono text-[11px]">
            Master Key ID: GC-VAULT-88219-CH
          </div>
        </div>
      </div>

      {/* Document Records Table */}
      <div className="rounded-3xl bg-[#0C1712] border border-white/10 p-6 space-y-4">
        <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
          <FileText className="w-4 h-4 text-[#10E760]" />
          Available Executed Legal Instruments ({documents.length})
        </h3>

        <div className="divide-y divide-white/5">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.01] px-2 rounded-xl transition-colors"
            >
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#10E760] shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-white hover:text-[#10E760] cursor-pointer" onClick={() => handleDownload(doc.title)}>
                      {doc.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                    <span className="text-[#10E760]">{doc.category}</span>
                    <span>·</span>
                    <span>{doc.date}</span>
                    <span>·</span>
                    <span>{doc.size}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-[#10E760]/20">
                  <CheckCircle2 className="w-3 h-3 text-[#10E760]" />
                  {doc.status}
                </span>

                <button
                  onClick={() => handleDownload(doc.title)}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#10E760]" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
