import React, { useState } from 'react';
import { UserProfile } from '../../types';
import { 
  MessageSquare, 
  Send, 
  ThumbsUp, 
  Users, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Hash, 
  ShieldCheck,
  Video,
  MapPin,
  Clock
} from 'lucide-react';

interface SyndicateLoungeTabProps {
  user: UserProfile;
}

interface ForumMessage {
  id: string;
  author: string;
  role: string;
  avatar: string;
  channel: string;
  timeAgo: string;
  text: string;
  likes: number;
  userLiked?: boolean;
}

export const SyndicateLoungeTab: React.FC<SyndicateLoungeTabProps> = ({ user }) => {
  const [activeChannel, setActiveChannel] = useState('#deal-debriefs');
  const [messages, setMessages] = useState<ForumMessage[]>([
    {
      id: 'msg-1',
      author: 'Marcus Vance',
      role: 'CleanTech Operator & Angel',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      channel: '#deal-debriefs',
      timeAgo: '42m ago',
      text: 'Just finished reviewing the Solara Valencia grid synchronization report. 1.8MW rooftop array is tracking 3 weeks ahead of scheduled COD. Inverters passed high-voltage safety tests.',
      likes: 14,
    },
    {
      id: 'msg-2',
      author: 'Dr. Evelyn Wei',
      role: 'Family Office Principal',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      channel: '#tax-structuring',
      timeAgo: '2h ago',
      text: 'For members holding via Swiss or UK corporate entities: the Q3 SPV distributions are structured as return of capital, minimizing withholding tax liabilities under the DTA. Consult your tax counsel, but documents are in the Vault.',
      likes: 28,
    },
    {
      id: 'msg-3',
      author: 'Henrik van de Berg',
      role: 'Apex Logistics Founder',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      channel: '#founders-lounge',
      timeAgo: '5h ago',
      text: 'Hosting our Q3 Live Ops Clinic this Thursday for all GeinzClub backers. Will walk through the Scania electric truck telemetry and the automated cold-chain sensors.',
      likes: 31,
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [rsvpEvents, setRsvpEvents] = useState<{ [id: string]: boolean }>({
    'ev-1': true,
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMsg: ForumMessage = {
      id: `msg-${Date.now()}`,
      author: user.name,
      role: user.role,
      avatar: user.avatar,
      channel: activeChannel,
      timeAgo: 'Just now',
      text: inputMessage.trim(),
      likes: 0,
    };

    setMessages([newMsg, ...messages]);
    setInputMessage('');
  };

  const toggleLike = (id: string) => {
    setMessages(messages.map(m => {
      if (m.id === id) {
        const userLiked = !m.userLiked;
        return {
          ...m,
          userLiked,
          likes: userLiked ? m.likes + 1 : m.likes - 1,
        };
      }
      return m;
    }));
  };

  const toggleRsvp = (eventId: string) => {
    setRsvpEvents(prev => ({ ...prev, [eventId]: !prev[eventId] }));
  };

  const CHANNELS = [
    '#deal-debriefs',
    '#tax-structuring',
    '#founders-lounge',
    '#clean-energy-spv',
    '#general-syndicate'
  ];

  return (
    <div className="space-y-8">
      
      {/* Masterminds & Chapter Dinners Strip */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#10E760]" />
            <h3 className="font-display text-base font-bold text-white">
              Private Masterminds & Syndicate Gatherings
            </h3>
          </div>
          <span className="text-xs font-mono text-emerald-400">Exclusive to Verified Members</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Event 1 */}
          <div className="p-4 rounded-2xl bg-[#0C1712] border border-white/10 flex flex-col justify-between space-y-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-[#10E760] text-[10px] font-mono font-bold flex items-center gap-1">
                  <Video className="w-3 h-3" /> Live Zoom Clinic
                </span>
                <span className="text-[11px] font-mono text-slate-400">Thu, Oct 08 · 18:00 CET</span>
              </div>
              <h4 className="font-display font-bold text-white text-sm">
                Apex Cold-Chain Operational Review & Q3 Telemetry AMA
              </h4>
              <p className="text-xs text-slate-300">
                Direct Q&A with founder Henrik van de Berg on delivery route milestones, energy savings, and dividend models.
              </p>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-white/5 text-xs">
              <span className="text-slate-400 font-mono">48 Members Attending</span>
              <button
                onClick={() => toggleRsvp('ev-1')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                  rsvpEvents['ev-1']
                    ? 'bg-[#10E760] text-black'
                    : 'bg-white/10 hover:bg-white/15 text-white'
                }`}
              >
                {rsvpEvents['ev-1'] ? '✓ Confirmed (Seat Saved)' : 'RSVP Now'}
              </button>
            </div>
          </div>

          {/* Event 2 */}
          <div className="p-4 rounded-2xl bg-[#0C1712] border border-white/10 flex flex-col justify-between space-y-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 text-[10px] font-mono font-bold flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> In-Person Syndicate Dinner
                </span>
                <span className="text-[11px] font-mono text-slate-400">Fri, Oct 23 · 19:30 CET</span>
              </div>
              <h4 className="font-display font-bold text-white text-sm">
                Zurich Chapter Founders & Private Allocators Dinner
              </h4>
              <p className="text-xs text-slate-300">
                Private salon dining at Baur au Lac. Discussion on European energy resilience and physical collateralized SPVs.
              </p>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-white/5 text-xs">
              <span className="text-slate-400 font-mono">18 / 22 Seats Booked</span>
              <button
                onClick={() => toggleRsvp('ev-2')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                  rsvpEvents['ev-2']
                    ? 'bg-[#10E760] text-black'
                    : 'bg-white/10 hover:bg-white/15 text-white'
                }`}
              >
                {rsvpEvents['ev-2'] ? '✓ Confirmed (Seat Saved)' : 'Request Dinner Seat'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Syndicate Channels & Message Board */}
      <div className="rounded-3xl bg-[#0C1712] border border-white/10 overflow-hidden">
        
        {/* Channel Selection Bar */}
        <div className="p-4 bg-[#08120D] border-b border-white/10 flex items-center gap-2 overflow-x-auto">
          {CHANNELS.map((chan) => (
            <button
              key={chan}
              onClick={() => setActiveChannel(chan)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-colors flex items-center gap-1 ${
                activeChannel === chan
                  ? 'bg-[#10E760] text-black'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <Hash className="w-3 h-3" />
              <span>{chan.replace('#', '')}</span>
            </button>
          ))}
        </div>

        {/* Post Composition Box */}
        <div className="p-5 border-b border-white/5 bg-black/20">
          <form onSubmit={handleSendMessage} className="space-y-3">
            <div className="flex items-start gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-xl object-cover border border-[#10E760]/30 shrink-0 mt-1"
                referrerPolicy="no-referrer"
              />
              <textarea
                rows={2}
                required
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={`Share an operational note, diligence question, or update in ${activeChannel}...`}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-[#10E760]"
              />
            </div>
            <div className="flex justify-between items-center pl-11">
              <span className="text-[11px] text-slate-500 font-mono">
                Posting as <strong className="text-slate-300">{user.name}</strong> ({user.role})
              </span>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#10E760] text-black font-bold text-xs hover:bg-[#1cf36f] transition-colors flex items-center gap-1.5"
              >
                <span>Broadcast to Room</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

        {/* Message Feed */}
        <div className="p-5 space-y-4 divide-y divide-white/5">
          {messages.map((msg) => (
            <div key={msg.id} className="pt-4 first:pt-0 space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={msg.avatar}
                    alt={msg.author}
                    className="w-9 h-9 rounded-xl object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-white">{msg.author}</span>
                      <span className="text-[10px] font-mono text-[#10E760] bg-[#10E760]/10 px-1.5 py-0.2 rounded">
                        {msg.channel}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {msg.role} · {msg.timeAgo}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleLike(msg.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                    msg.userLiked
                      ? 'bg-emerald-950 text-[#10E760] border border-[#10E760]/30'
                      : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>{msg.likes}</span>
                </button>
              </div>

              <p className="text-xs text-slate-200 pl-12 leading-relaxed">
                {msg.text}
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
