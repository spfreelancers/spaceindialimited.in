import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Presentation,
  Compass,
  Award,
  TrendingUp,
  FileSpreadsheet,
  ShieldCheck,
  Landmark,
  Umbrella,
  CheckCircle2,
} from 'lucide-react';
import { Logo } from './Logo.tsx';

interface HeroProps {
  onToggleView: (view: 'web' | 'ppt') => void;
  onOpenConsultation: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onToggleView,
  onOpenConsultation,
}) => {
  const serviceBadges = [
    {
      title: 'MSME ZED Certifications',
      icon: Award,
      color: 'text-amber-400',
      border: 'border-amber-500/30',
    },
    {
      title: 'Credit Score Recovery',
      icon: TrendingUp,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
    },
    {
      title: 'Govt Loan Project Reports',
      icon: FileSpreadsheet,
      color: 'text-blue-400',
      border: 'border-blue-500/30',
    },
    {
      title: 'ISO Lead Audit & Cert.',
      icon: ShieldCheck,
      color: 'text-indigo-400',
      border: 'border-indigo-500/30',
    },
    {
      title: 'Loan DSA Syndication',
      icon: Landmark,
      color: 'text-purple-400',
      border: 'border-purple-500/30',
    },
    {
      title: 'Corporate Insurance',
      icon: Umbrella,
      color: 'text-rose-400',
      border: 'border-rose-500/30',
    },
  ];

  return (
    <section className="relative pt-8 pb-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-indigo-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 backdrop-blur-md shadow-lg shadow-amber-500/5">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span className="text-xs font-semibold text-amber-300">PLEDGE TO ASSIST</span>
            <span className="text-slate-500 text-xs">|</span>
            <span className="text-xs text-slate-300">
              India's Comprehensive Financial & MSME Growth Advisory
            </span>
            <span className="text-xs font-bold text-cyan-400 hidden sm:inline-flex items-center gap-1 ml-1">
              • ISO & ZED Specialists
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/90 border border-amber-500/35 backdrop-blur-xl shadow-xl shadow-amber-500/10 inline-flex items-center">
                <Logo size="lg" />
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12]">
                <span className="block text-slate-100">Navigating the</span>
                <span className="cosmic-gradient-text block">Financial Cosmos</span>
                <span className="block text-2xl sm:text-3xl xl:text-4xl font-semibold text-slate-300 mt-2">
                  For India's Next Generation of Enterprises
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal pt-2">
                <strong className="text-amber-300 font-semibold">SPACE India Limited</strong> stands
                as your steadfast celestial navigator across institutional finance. From securing up
                to{' '}
                <span className="text-slate-100 font-medium">80% MSME ZED subsidies</span> and
                revitalizing distressed credit scores to bankable government DPRs, multi-crore Loan
                DSA syndication, and accredited ISO audits.
              </p>
            </div>

            {/* Specialized 6 Projects Quick Row */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-3 flex items-center justify-center lg:justify-start gap-2">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>6 Specialized Ongoing Projects</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-xl mx-auto lg:mx-0">
                {serviceBadges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border ${badge.border} backdrop-blur-sm text-left hover:bg-slate-800/80 transition-all`}
                    >
                      <Icon className={`w-4 h-4 flex-shrink-0 ${badge.color}`} />
                      <span className="text-xs font-semibold text-slate-200 truncate">
                        {badge.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenConsultation()}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/20 hover:from-amber-300 hover:to-amber-500 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
                <span>Request Financial Assistance</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onToggleView('ppt')}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 font-semibold text-sm hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-cyan-900/20 cursor-pointer"
              >
                <Presentation className="w-4 h-4 text-cyan-400" />
                <span>Open Prototype PPT Deck</span>
              </button>
            </div>

            {/* Metric Counters */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-heading cosmic-gradient-text">
                  ₹450+ Cr
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  Loans & Capital Syndicated
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-heading text-emerald-400">
                  1,200+
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  MSMEs & ZED Certified
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-heading text-cyan-400">
                  40+
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  Banking & PSU Partners
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Visual Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl border border-amber-500/20 pointer-events-none animate-pulse-glow" />
              <div className="absolute -inset-8 rounded-3xl border border-cyan-500/10 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-slate-900/90 shadow-2xl shadow-amber-500/15 group">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                  <img
                    src="/assets/space_guardian-3vSbuyvN.jpg"
                    alt="SPACE - Celestial Guardian of Indian Enterprises"
                    className="w-full h-full object-cover object-top filter brightness-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030612] via-transparent to-black/30" />

                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-amber-500/40 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                      The Celestial Guardian
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-cyan-400/30 rounded-full px-3 py-1 text-[11px] font-semibold text-cyan-300">
                    “SPACE” Celestial Vision
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-b from-slate-900/90 to-[#070b1e] border-t border-amber-500/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                        <span>Pledge to Assist</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-semibold border border-amber-500/30">
                          Guiding Vision
                        </span>
                      </h3>
                      <p className="text-xs text-slate-400">
                        Steering businesses through turbulent economic currents with celestial clarity.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-1 border-t border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>Zero-Failure Compliance</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>Ethical Debt & Credit Defense</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Maximum Govt Subsidies</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      <span>Pan-India DSA Network</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
