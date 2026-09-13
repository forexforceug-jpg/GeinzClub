import React from 'react';
import { MEMBER_STORIES } from '../data/mockData';
import { Quote, CheckCircle2, Star, TrendingUp } from 'lucide-react';

interface MemberStoriesProps {
  onJoinClick: () => void;
}

export const MemberStories: React.FC<MemberStoriesProps> = ({ onJoinClick }) => {
  return (
    <section className="py-24 bg-[#F5F8F6] text-[#0A120E] relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/10 border border-emerald-800/20 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            AUTHENTIC TESTIMONIALS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07120B] tracking-tight">
            Stories from the Club.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Real founders who funded their factories, real investors who exited blind pool funds, and real professionals who turned deal flow into compounding equity.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBER_STORIES.map((story) => (
            <div
              key={story.id}
              className="rounded-3xl bg-white border border-slate-200 hover:border-emerald-500/50 p-7 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Quote Icon & Archetype Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-emerald-900 text-xs font-semibold">
                    {story.archetype}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="font-display text-lg font-bold text-[#07120B] leading-snug">
                  “{story.headline}”
                </h3>

                {/* Main Quote */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {story.quote}
                </p>

                {/* Metric pill */}
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100/80 flex items-center justify-between text-xs">
                  <span className="text-emerald-800 font-medium">{story.stats.label}:</span>
                  <span className="font-bold text-emerald-950 font-mono">{story.stats.value}</span>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-display font-bold text-sm text-[#07120B] flex items-center gap-1">
                    {story.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-xs text-emerald-800 font-medium">{story.role}</div>
                  <div className="text-[11px] text-slate-500">{story.company} · Member since {story.memberSince}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
