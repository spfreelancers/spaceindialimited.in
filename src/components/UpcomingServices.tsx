import React from 'react';
import {
  Rocket,
  Clock,
  Scale,
  Building2,
  CheckCircle2,
  Users,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

interface UpcomingServicesProps {
  onOpenConsultation: (service?: string) => void;
}

export const UpcomingServices: React.FC<UpcomingServicesProps> = ({
  onOpenConsultation,
}) => {
  const upcomingProjects = [
    {
      id: 'debt-recovery',
      title: 'Debt Recovery Agency',
      subhead: 'Ethical B2B & Institutional Debt Resolution Framework',
      launchBadge: 'Frontier Launch • Upcoming',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      icon: Scale,
      gradient: 'from-cyan-500/20 via-blue-900/10 to-transparent',
      borderColor: 'border-cyan-500/30',
      description:
        'A next-generation corporate debt recovery and delinquent asset resolution mechanism. Operating with stringent RBI, SARFAESI, and IBC legal compliance, we bridge the gap between distressed lenders and delayed commercial receivables.',
      keyCapabilities: [
        'Ethical & Legal Amicable Mediation for non-performing commercial debts',
        'Cross-State Forensic Asset Tracing & Solvency Intelligence',
        'Pre-litigation arbitration and Lok Adalat settlement facilitation',
        'Corporate NPA portfolio restructuring assistance for financial institutions',
      ],
      marketProblem:
        'Over ₹2.5 Lakh Crore tied up in delayed MSME & corporate receivables across India.',
      solutionEdge:
        'AI-assisted skip tracing, legal compliance lockstep, and zero-reputational-risk recovery protocols.',
      readiness: '85%',
      targetSectors: ['Commercial Banks', 'NBFCs', 'MSME Suppliers', 'Wholesale Distributors'],
    },
    {
      id: 'real-estate',
      title: 'Real Estate Projects',
      subhead: 'MSME Industrial Infrastructure & Smart Commercial Corridors',
      launchBadge: 'Strategic Expansion • Upcoming',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      icon: Building2,
      gradient: 'from-amber-500/20 via-orange-900/10 to-transparent',
      borderColor: 'border-amber-500/30',
      description:
        'Pioneering structured real estate solutions tailored specifically for growing enterprises. From plug-and-play ZED-compliant industrial manufacturing clusters to grade-A warehousing hubs and modern commercial complexes.',
      keyCapabilities: [
        'ZED-Certified Industrial Parks with shared green utility grids & solar arrays',
        'High-velocity logistics parks with multi-modal highway connectivity',
        'End-to-end RERA compliance, title verification, and institutional funding',
        'Joint Development (JD) syndication for strategic land parcels',
      ],
      marketProblem:
        'Acute shortage of ready-to-move, compliance-cleared industrial land for MSMEs in emerging tier-2 hubs.',
      solutionEdge:
        'Single-window government clearance, integrated power/waste infrastructure, and pre-subsidized leasing models.',
      readiness: '70%',
      targetSectors: [
        'Manufacturing MSMEs',
        'E-Commerce Logistics',
        'Corporate Offices',
        'Institutional Investors',
      ],
    },
  ];

  const milestones = [
    {
      phase: 'Phase 1',
      status: 'Current Phase',
      title: 'Regulatory & Tech Infrastructure',
      detail:
        'Finalization of Debt Recovery legal framework, bureau API integrations, and RERA land due diligence.',
      highlight: true,
    },
    {
      phase: 'Phase 2',
      status: 'Imminent',
      title: 'Debt Recovery Agency Go-Live',
      detail:
        'Launch of pan-India commercial receivables mediation desk and bank portfolio recovery syndication.',
      highlight: false,
    },
    {
      phase: 'Phase 3',
      status: 'Upcoming',
      title: 'MSME Industrial Park Groundbreaking',
      detail:
        'Commencement of flagship plug-and-play green industrial cluster with integrated ZED utilities.',
      highlight: false,
    },
    {
      phase: 'Phase 4',
      status: 'Expansion',
      title: 'Integrated Enterprise Ecosystem',
      detail:
        'Complete union of credit recovery, funding, certification, and commercial infrastructure.',
      highlight: false,
    },
  ];

  return (
    <section id="upcoming-projects" className="py-20 relative z-10 border-t border-slate-800">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest">
            <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            <span>Horizon Horizons & Next-Gen Expansion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Upcoming Strategic <span className="cyan-gradient-text">Frontier Projects</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            SPACE India Limited is aggressively expanding its horizon into critical enterprise bottlenecks: corporate debt resolution and scalable industrial infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {upcomingProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className={`relative rounded-3xl bg-slate-900/80 border ${project.borderColor} p-8 backdrop-blur-xl flex flex-col justify-between overflow-hidden shadow-2xl transition-all hover:border-cyan-400/60`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${project.gradient} pointer-events-none`}
                />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span
                      className={`text-xs font-extrabold px-3 py-1 rounded-full border ${project.badgeColor} flex items-center gap-1.5`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      {project.launchBadge}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <span>Readiness:</span>
                      <span className="font-bold text-white">{project.readiness}</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700 text-cyan-400 flex-shrink-0 shadow-lg">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-0.5">
                        {project.subhead}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-rose-400 uppercase tracking-wider text-[10px]">
                        The Challenge:{' '}
                      </span>
                      <span className="text-slate-300">{project.marketProblem}</span>
                    </div>
                    <div>
                      <span className="font-bold text-emerald-400 uppercase tracking-wider text-[10px]">
                        SPACE Solution:{' '}
                      </span>
                      <span className="text-slate-300">{project.solutionEdge}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Planned Capabilities & Architecture:
                    </div>
                    {project.keyCapabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Beneficiary Sectors:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.targetSectors.map((sector, secIdx) => (
                        <span
                          key={secIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700 text-[11px] text-slate-300"
                        >
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenConsultation(`Early Interest: ${project.title}`)}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
                  >
                    <Users className="w-4 h-4" />
                    <span>Join Partner & Client Waitlist</span>
                  </button>
                  <button
                    onClick={() => onOpenConsultation(`Investor/Syndicate: ${project.title}`)}
                    className="py-3 px-4 rounded-xl bg-slate-800/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Syndicate Inquiry</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Milestones Horizontal Grid */}
        <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-8 backdrop-blur-md">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Expansion Timeline & Launch Milestones</span>
            </h3>
            <span className="text-xs text-amber-400 font-semibold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              FY 2026-2027 Execution Horizon
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {milestones.map((milestone, mIdx) => (
              <div
                key={mIdx}
                className={`p-4 rounded-xl border ${
                  milestone.highlight
                    ? 'bg-amber-500/10 border-amber-500/40'
                    : 'bg-slate-950/60 border-slate-800/80'
                } space-y-2`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-heading text-amber-400">
                    {milestone.phase}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {milestone.status}
                  </span>
                </div>
                <div className="font-semibold text-xs text-white">{milestone.title}</div>
                <div className="text-[11px] text-slate-400 leading-relaxed">
                  {milestone.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
