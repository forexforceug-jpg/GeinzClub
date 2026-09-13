import React, { useState } from 'react';
import { MEMBER_ARCHETYPES } from '../data/mockData';
import { Briefcase, Building, TrendingUp, LineChart, Award, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

interface BuiltAroundPeopleProps {
  onJoinClick: () => void;
}

export const BuiltAroundPeople: React.FC<BuiltAroundPeopleProps> = ({ onJoinClick }) => {
  const [selectedArchetypeId, setSelectedArchetypeId] = useState<string>('entrepreneurs');

  const getArchetypeIcon = (id: string) => {
    switch (id) {
      case 'entrepreneurs':
        return <Briefcase className="w-5 h-5" />;
      case 'business-owners':
        return <Building className="w-5 h-5" />;
      case 'investors':
        return <TrendingUp className="w-5 h-5" />;
      case 'traders':
        return <LineChart className="w-5 h-5" />;
      case 'professionals':
        return <Award className="w-5 h-5" />;
      case 'builders':
        return <Wrench className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const currentArchetype = MEMBER_ARCHETYPES.find((a) => a.id === selectedArchetypeId) || MEMBER_ARCHETYPES[0];

  return (
    <section id="members" className="py-24 bg-[#080E0B] text-slate-100 relative overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#10E760]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-950/30 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10E760]/10 border border-[#10E760]/30 text-[#10E760] text-xs font-bold uppercase tracking-wider">
            COMMUNITY ARCHITECTURE
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built Around People.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            GeinzClub is not a faceless financial exchange. It is a collective of operators, founders, and capital allocators who know that true wealth compounds through <strong className="text-white font-semibold">expertise, relationships, and deal access</strong> as much as capital.
          </p>
        </div>

        {/* 6 Archetype Selection Tabs */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {MEMBER_ARCHETYPES.map((arch) => {
            const isSelected = selectedArchetypeId === arch.id;
            return (
              <button
                key={arch.id}
                onClick={() => setSelectedArchetypeId(arch.id)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#10E760] text-[#070D0A] border-[#10E760] shadow-xl shadow-[#10E760]/20 font-bold scale-[1.02]'
                    : 'bg-[#0E1712] text-slate-300 border-white/5 hover:border-white/20 hover:bg-[#132219]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-black/10' : 'bg-white/5 text-[#10E760]'}`}>
                    {getArchetypeIcon(arch.id)}
                  </div>
                  <span className={`text-[10px] uppercase font-mono tracking-wider ${isSelected ? 'text-[#070D0A]' : 'text-slate-500'}`}>
                    {arch.badge}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold tracking-tight">
                    {arch.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Archetype Deep-Dive Display Card */}
        <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#0D1C14] via-[#091510] to-[#060D09] border border-[#10E760]/30 p-7 sm:p-10 shadow-2xl shadow-black/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Archetype Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#10E760] uppercase tracking-wider">
                  <span>{currentArchetype.badge} Profile</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {currentArchetype.title}: {currentArchetype.tagline}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {currentArchetype.description}
                </p>
              </div>

              {/* What they bring vs What they get */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* What they bring */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2.5">
                  <div className="text-xs font-bold text-[#10E760] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10E760]"></span>
                    What They Contribute
                  </div>
                  <ul className="space-y-2 text-xs text-slate-200">
                    {currentArchetype.whatTheyBring.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10E760] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What they get */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2.5">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    What They Gain in the Club
                  </div>
                  <ul className="space-y-2 text-xs text-slate-200">
                    {currentArchetype.whatTheyGet.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

            {/* Right Column: Representative Member Spotlight */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 space-y-5">
                <div className="text-xs uppercase font-mono text-slate-400 tracking-wider">
                  Representative Club Member
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={currentArchetype.exampleMember.avatar}
                    alt={currentArchetype.exampleMember.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-[#10E760]/40 shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-display text-lg font-bold text-white flex items-center gap-1.5">
                      {currentArchetype.exampleMember.name}
                      <span className="w-2 h-2 rounded-full bg-[#10E760]"></span>
                    </div>
                    <div className="text-xs text-[#10E760] font-medium">
                      {currentArchetype.exampleMember.role}
                    </div>
                    <div className="text-xs text-slate-400">
                      {currentArchetype.exampleMember.company}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-xs text-slate-300 italic">
                  “The highest-return investments in my life never came from brokers. They came from fellow operators sitting in the same room sharing what they were building.”
                </div>

                <button
                  onClick={onJoinClick}
                  className="w-full py-3 px-4 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-xs hover:bg-[#1cf36f] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Apply as an {currentArchetype.title.slice(0, -1)}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
