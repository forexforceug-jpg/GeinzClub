import React, { useState } from 'react';
import { PILLARS } from '../data/mockData';
import { Users, Hammer, TrendingUp, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

interface AboutProps {
  onJoinClick: () => void;
}

export const AboutWhatIsGeinzClub: React.FC<AboutProps> = ({ onJoinClick }) => {
  const [activePillarId, setActivePillarId] = useState<string>('connect');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-[#10E760]" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-[#10E760]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#10E760]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#10E760]" />;
      default:
        return <TrendingUp className="w-6 h-6 text-[#10E760]" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-[#F5F8F6] text-[#0A120E] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10E760]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/10 border border-emerald-800/20 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            THE GEINZCLUB MANIFESTO
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07120B] tracking-tight">
            More Than an Investment Platform.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            GeinzClub is a club of <strong className="text-emerald-950 font-semibold">money makers</strong> who share opportunities, knowledge, businesses, capital, connections, and experiences. We unite founders who execute, operators who scale, and investors who back real value.
          </p>
        </div>

        {/* 4 Visually Distinct Pillars: Connect, Build, Invest, Grow */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => {
            const isSelected = activePillarId === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`cursor-pointer rounded-2xl p-7 transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0A140F] text-white border-[#10E760] shadow-xl shadow-emerald-950/20 scale-[1.02]'
                    : 'bg-white text-[#0A120E] border-slate-200 hover:border-emerald-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top row with Icon and Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-[#10E760]/20 border border-[#10E760]/30' : 'bg-emerald-50 border border-emerald-100'
                    }`}>
                      {getIcon(pillar.iconName)}
                    </div>
                    <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full ${
                      isSelected ? 'bg-white/10 text-emerald-300' : 'bg-slate-100 text-emerald-800'
                    }`}>
                      {pillar.metric}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className={`font-display text-2xl font-bold mb-2 ${isSelected ? 'text-white' : 'text-[#0A120E]'}`}>
                    {pillar.title}
                  </h3>
                  <p className={`text-xs font-semibold mb-4 ${isSelected ? 'text-[#10E760]' : 'text-emerald-700'}`}>
                    {pillar.tagline}
                  </p>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                    {pillar.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-6 text-xs">
                    {pillar.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-[#10E760]' : 'text-emerald-600'}`} />
                        <span className={isSelected ? 'text-slate-200' : 'text-slate-700'}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-current/10 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-[#10E760]' : 'text-emerald-800'}>
                    {isSelected ? 'Active Pillar Focus' : 'Explore Pillar'}
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-[#10E760]' : 'text-slate-400'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside What is GeinzClub */}
        <div className="mt-14 p-8 rounded-2xl bg-[#091510] text-white border border-[#10E760]/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-emerald-950/20">
          <div className="space-y-1 text-left">
            <h4 className="font-display text-xl font-bold text-white">
              Not a Passive Audience. An Active Syndicate.
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              In GeinzClub, members don’t just watch deals pass by. They co-found, invest, sit on advisory boards, supply distribution channels, and share in real operational upside.
            </p>
          </div>
          <button
            onClick={onJoinClick}
            className="shrink-0 px-6 py-3 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-sm hover:bg-[#1cf36f] transition-colors shadow-lg shadow-[#10E760]/20"
          >
            Apply for Membership
          </button>
        </div>

      </div>
    </section>
  );
};
