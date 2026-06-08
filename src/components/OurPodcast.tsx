"use client";

import { useState, useEffect } from 'react';
import { Headphones, Play, Pause, Volume2, Calendar, Clock, BarChart2, Activity } from 'lucide-react';
import Image from 'next/image';

export default function OurPodcast() {
  const [activeEpisode, setActiveEpisode] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const episodes = [
    {
      title: "Cracking the 2026 Corporate Tax Code & Substantial Substance",
      host: "Advocate Tarik Al-Mehairi",
      duration: "24:32",
      totalSeconds: 1472,
      category: "REGULATORY TAXES",
      date: "May 29, 2026",
      summary: "Understand the detailed qualifications for the 0% corporate tax benefit inside major free zones, avoiding retail mainland trade traps, and structuring audited financial portfolios."
    },
    {
      title: "Dubai Free Zone Arbitrage: Meydan, IFZA or DMCC?",
      host: "Elena Rostova",
      duration: "18:45",
      totalSeconds: 1125,
      category: "JURISDICTION STRATEGY",
      date: "May 14, 2026",
      summary: "An objective financial study comparing direct setup costs, office physical lease obligations, multi-year registry discounts, and visa allocations across competing Dubai regions."
    },
    {
      title: "VIP Biometric Fast-tracks & 10-Year Golden Passports",
      host: "Faisal Al-Suwaidi",
      duration: "15:10",
      totalSeconds: 910,
      category: "EXECUTIVE RESIDENCY",
      date: "Apr 28, 2026",
      summary: "A logistical walkthrough outlining how executive startup founders, high-income managers, and HNW developers secure independent residency approvals within hours."
    }
  ];

  // Simulating the track playing progress countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= episodes[activeEpisode].totalSeconds) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeEpisode]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  const currentEpisodeDetails = episodes[activeEpisode];
  const progressPercent = (currentTime / currentEpisodeDetails.totalSeconds) * 100;

  return (
    <section id="our_podcast" className="py-16 bg-[#FBFBFD] font-sans text-left border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center space-x-1.5 bg-gold-500/10 text-gold-500 px-3 py-1 bg-zinc-50 rounded-full font-mono text-[9.5px] font-bold uppercase tracking-widest border border-gold-500/10">
              <Headphones className="w-3.5 h-3.5 text-gold-500" />
              <span>Scale Partners Podcast</span>
            </span>
            <h2 className="text-[30px] sm:text-[36px] font-sans font-light text-zinc-900 tracking-tight leading-snug">
              Our Podcast: Doing Business in Dubai
            </h2>
            <p className="text-[14px] text-zinc-500">
              Tune in to audio briefings, strategic debates, and exclusive interviews with senior legal officers, banking directors, and government liaisons.
            </p>
          </div>
        </div>

        {/* Podcast Player Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* List of episodes (Left) */}
          <div className="lg:col-span-7 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block mb-1">
                CHOOSE AN EPISODE TO PLAY
              </span>
              {episodes.map((ep, idx) => {
                const isActive = activeEpisode === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveEpisode(idx);
                      setCurrentTime(0);
                    }}
                    className={`p-4 sm:p-5 text-left rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isActive 
                        ? 'bg-white border-transparent shadow-[0_15px_40px_rgba(18,183,106,0.06)] ring-1 ring-zinc-100' 
                        : 'bg-zinc-50/50 border-zinc-200 hover:border-zinc-300 hover:bg-white'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-[10px] font-mono">
                        <span className="font-bold text-gold-500">{ep.category}</span>
                        <span className="text-zinc-300">•</span>
                        <span className="text-zinc-450">{ep.date}</span>
                      </div>
                      <h4 className="text-[14px] sm:text-[14.5px] font-bold text-zinc-900 leading-tight">
                        {ep.title}
                      </h4>
                      <p className="text-[11.5px] text-zinc-400">
                        Hosted by: <strong className="font-semibold text-zinc-650">{ep.host}</strong>
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center space-x-2.5">
                      <span className="text-[11px] font-mono text-zinc-400">{ep.duration}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isActive && isPlaying ? 'bg-emerald-500 text-white animate-pulse' : 'bg-zinc-200 text-zinc-700 hover:bg-gold-500 hover:text-white'
                      }`}>
                        {isActive && isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 translate-x-0.5" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-[11.5px] text-zinc-400 bg-white/50 border border-zinc-200/50 rounded-xl p-3 inline-flex items-center gap-2 mt-4 select-none">
              <Volume2 className="w-4 h-4 text-gold-500" />
              <span>Available on Spotify, Apple Podcasts, and major corporate advisory archives.</span>
            </div>
          </div>

          {/* Premium Visual Player Board (Right) */}
          <div className="lg:col-span-5 bg-zinc-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden text-left shadow-xl">
            
            {/* Ambient decorative glow effect */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gold-500/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="space-y-6 relative z-10 w-full">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
                  📻 LIVE STREAM ADVISOR
                </span>
                {isPlaying && (
                  <span className="flex items-center space-x-1 text-[10px] font-mono text-emerald-400">
                    <Activity className="w-3.5 h-3.5 animate-spin" />
                    <span>PLAYING SESSION</span>
                  </span>
                )}
              </div>

              {/* Cover Art Preview */}
              <div className="bg-gradient-to-tr from-zinc-800 to-zinc-950 border border-white/10 aspect-video rounded-2xl flex flex-col items-center justify-center space-y-3 relative overflow-hidden">
                <Image 
                  src="/assets/podcast_studio_dubai.png" 
                  alt="Podcast Studio Dubai" 
                  fill 
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 flex flex-col items-center text-center p-4">
                  <div className={`p-4 bg-white/10 border border-white/20 text-gold-500 rounded-2.5xl mb-2.5 transition-transform ${
                    isPlaying ? 'scale-105' : ''
                  }`}>
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <strong className="text-[12.5px] font-mono text-emerald-300 uppercase block tracking-wider leading-none">
                    {currentEpisodeDetails.category}
                  </strong>
                  <span className="text-[11px] text-zinc-300 mt-1">Host: {currentEpisodeDetails.host}</span>
                </div>
                
                {/* Visualizer bars */}
                {isPlaying && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-end space-x-1 h-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((bar) => (
                      <div 
                        key={bar} 
                        className="w-1 bg-gold-500 rounded-t"
                        style={{
                          height: `${Math.random() * 80 + 20}%`,
                          animation: `bounce 1s ease-in-out infinite alternate`,
                          animationDelay: `${bar * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Title & Host Copy */}
              <div className="space-y-2">
                <h4 className="text-[16px] font-semibold text-white tracking-wide leading-tight">
                  {currentEpisodeDetails.title}
                </h4>
                <p className="text-[12px] text-zinc-300 leading-relaxed font-light font-sans">
                  {currentEpisodeDetails.summary}
                </p>
              </div>
            </div>

            {/* Media Controller Bar */}
            <div className="space-y-4 pt-6 mt-6 border-t border-white/10 relative z-10">
              
              {/* Progress Bar scrubber */}
              <div className="space-y-1.5">
                <div className="relative h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gold-500 transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>{formatTime(currentTime)}</span>
                  <span>{currentEpisodeDetails.duration}</span>
                </div>
              </div>

              {/* Control Action Trigger */}
              <div className="flex items-center justify-between">
                <div className="text-[11px] text-zinc-400 font-mono">
                  <span>Sovereign Authority Brief</span>
                </div>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-6 py-2.5 bg-gold-500 hover:bg-[#0B2E16] text-white font-bold rounded-xl space-x-1.5 transition-all flex items-center cursor-pointer active:scale-95"
                >
                  {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white translate-x-0.5" />}
                  <span>{isPlaying ? "Pause Briefing" : "Listen Now"}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bounce visualizer animation stylesheet */}
      <style>{`
        @keyframes bounce {
          0% { transform: scaleY(0.3); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
