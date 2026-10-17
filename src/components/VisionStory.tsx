import React from 'react';
import { Sparkles, Shield, Compass, HeartHandshake } from 'lucide-react';

export const VisionStory: React.FC = () => {
  return (
    <section
      id="vision-story"
      className="py-24 relative z-10 border-t border-amber-500/15 bg-gradient-to-b from-[#030612] via-[#070d24] to-[#030612] overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-500/30 via-cyan-500/20 to-purple-500/30 blur-xl opacity-70" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl bg-slate-950">
                <img
                  src="/assets/space_guardian-3vSbuyvN.jpg"
                  alt="SPACE - The Celestial Guardian Archetype"
                  className="w-full h-auto object-cover filter contrast-105"
                />
                <div className="p-4 bg-slate-950/95 border-t border-amber-500/30 text-center space-y-1">
                  <div className="text-xs uppercase tracking-widest font-extrabold text-amber-400">
                    “SPACE” • Cosmic Guardian
                  </div>
                  <div className="text-[11px] text-slate-400 italic">
                    Symbolizing visionary leadership, protective stewardship, and unyielding assistance across Indian commerce.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>The Guiding Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Why <span className="cosmic-gradient-text">“SPACE”</span> Leads Our Journey
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                In ancient cosmology, celestial guardians watched over exploratory voyagers venturing into uncharted realms. In today's hyper-dynamic economic ecosystem, Indian entrepreneurs face a financial cosmos just as vast, complex, and unpredictable.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-amber-400">SPACE India Limited</strong> was founded with a singular, unshakeable pledge:{' '}
                <span className="text-white font-semibold">“PLEDGE TO ASSIST”</span>. We serve as the institutional anchor for business founders—providing the technical precision for ZED green ratings, the forensic resolve for credit revival, and the muscle for multi-crore capital syndication.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 hover:border-amber-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-white">Sovereign Protection</div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Shielding enterprises from predatory interest traps, credit bureau anomalies, and compliance risks.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-white">Precision Navigation</div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Navigating the labyrinth of government schemes, PMEGP subsidies, and bank credit committees.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 hover:border-emerald-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-white">Pledge to Assist</div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  A high-touch advisory model where no client is left behind, from rural artisans to industrial conglomerates.
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border-l-4 border-amber-400 text-xs text-slate-300 italic">
              “The cosmos rewards order, precision, and courage. At SPACE India Limited, we turn complex regulatory and banking frameworks into a launchpad for your enterprise.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
