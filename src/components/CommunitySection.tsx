import React, { useState } from 'react';
import { COMMUNITY_POSTS } from '../data/mockData';
import { MessageSquare, Heart, Share2, Sparkles, Calendar, Users, Award, ShieldCheck, ArrowRight } from 'lucide-react';

interface CommunityProps {
  onJoinClick: () => void;
}

export const CommunitySection: React.FC<CommunityProps> = ({ onJoinClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [likesState, setLikesState] = useState<{ [id: string]: number }>({
    'post-1': 38,
    'post-2': 52,
    'post-3': 47,
    'post-4': 74,
  });
  const [hasLiked, setHasLiked] = useState<{ [id: string]: boolean }>({});

  const handleToggleLike = (postId: string) => {
    setHasLiked((prev) => {
      const alreadyLiked = !!prev[postId];
      setLikesState((prevLikes) => ({
        ...prevLikes,
        [postId]: alreadyLiked ? prevLikes[postId] - 1 : prevLikes[postId] + 1,
      }));
      return { ...prev, [postId]: !alreadyLiked };
    });
  };

  const filteredPosts = activeCategory === 'All'
    ? COMMUNITY_POSTS
    : COMMUNITY_POSTS.filter((post) => post.category === activeCategory);

  return (
    <section id="community" className="py-24 bg-[#0A140F] text-slate-100 relative overflow-hidden border-t border-[#10E760]/15">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[300px] bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10E760]/10 border border-[#10E760]/30 text-[#10E760] text-xs font-bold uppercase tracking-wider">
              VIBRANT PRIVATE NETWORK
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              A Living, Breathing Club.
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Real community activity, unvarnished project debriefs, milestone announcements, and co-investor syndicates that meet weekly across our private digital hub and global chapters.
            </p>
          </div>

          {/* Activity Status Badge */}
          <div className="flex items-center gap-2 text-xs text-emerald-300 bg-black/40 px-4 py-2.5 rounded-xl border border-white/10 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10E760] animate-pulse"></span>
            <span>184 Members active right now in live channels</span>
          </div>
        </div>

        {/* Content Layout: 2 Columns (Live Discussion Feed + Upcoming Masterminds / Chapter Gatherings) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Feed of Real Community Activity */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Filter pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {['All', 'Milestone', 'Deal Debrief', 'Mastermind'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-[#10E760] text-[#070D0A]'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Posts Stream */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[#0C1712] border border-white/10 hover:border-[#10E760]/30 transition-colors shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-10 h-10 rounded-full object-cover border border-[#10E760]/30"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{post.author}</span>
                          <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] text-emerald-400 font-medium">
                            {post.badge}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400">{post.authorRole}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="px-2 py-0.5 rounded-full bg-white/5 text-[10px]">
                        {post.category}
                      </span>
                      <span>{post.timeAgo}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                    {post.content}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-slate-400">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleToggleLike(post.id)}
                        className={`flex items-center gap-1.5 transition-colors ${
                          hasLiked[post.id] ? 'text-[#10E760]' : 'hover:text-white'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${hasLiked[post.id] ? 'fill-current' : ''}`} />
                        <span>{likesState[post.id]}</span>
                      </button>

                      <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.comments} comments</span>
                      </div>
                    </div>

                    {post.hasVerifiedDealBadge && (
                      <span className="flex items-center gap-1 text-[11px] text-[#10E760]">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Verified Deal Backer Access
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Masterminds, Member Map, and Chapters */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Upcoming Club Masterminds */}
            <div className="p-6 rounded-2xl bg-[#0C1712] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#10E760]" />
                  Club Masterminds & AMAs
                </h3>
                <span className="text-[10px] text-[#10E760] font-mono">Members Only</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-emerald-400 font-semibold">Thu, 17:00 CET</span>
                    <span className="text-slate-400">Zoom Live Room</span>
                  </div>
                  <div className="text-xs font-bold text-white">Cross-Border SPV Tax Structures</div>
                  <div className="text-[10px] text-slate-400">Host: Alexander Sterling (Partner @ Sterling & Croft)</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-emerald-400 font-semibold">Next Tue, 19:00 EST</span>
                    <span className="text-slate-400">Founder Pitch Clinic</span>
                  </div>
                  <div className="text-xs font-bold text-white">Reviewing 3 Pre-Launch Industrial Deals</div>
                  <div className="text-[10px] text-slate-400">Private screening before general platform release</div>
                </div>
              </div>

              <button
                onClick={onJoinClick}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white border border-white/10 transition-colors"
              >
                Request Mastermind Pass
              </button>
            </div>

            {/* Global Chapters Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#10241A] to-[#0A140F] border border-[#10E760]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#10E760] text-xs font-bold uppercase tracking-wider">
                <Users className="w-4 h-4" />
                Global In-Person Chapters
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Beyond screens: meet local syndicate members quarterly at private member dinners in <strong>London, Zurich, New York, Singapore, and Dubai</strong>.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] font-mono text-emerald-300">
                <span className="px-2 py-0.5 rounded bg-black/40">London</span>
                <span className="px-2 py-0.5 rounded bg-black/40">Zurich</span>
                <span className="px-2 py-0.5 rounded bg-black/40">New York</span>
                <span className="px-2 py-0.5 rounded bg-black/40">Austin</span>
                <span className="px-2 py-0.5 rounded bg-black/40">Dubai</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
