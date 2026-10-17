import React, { useState, useEffect } from 'react';
import {
  Globe,
  FileText,
  Pause,
  Play,
  Printer,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Shield,
  Compass,
  Award,
  TrendingUp,
  FileSpreadsheet,
  ShieldCheck,
  Landmark,
  Umbrella,
  Scale,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { Logo } from './Logo.tsx';

interface PptDeckProps {
  onSwitchToWeb: () => void;
  onOpenConsultation: (service?: string) => void;
}

export const PptDeck: React.FC<PptDeckProps> = ({
  onSwitchToWeb,
  onOpenConsultation,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const totalSlides = 10;

  const slideTitles = [
    '01. Corporate Identity & Title',
    '02. Vision & Cosmic Philosophy',
    '03. Portfolio Architecture Overview',
    '04. Ongoing: MSME ZED Certifications',
    '05. Ongoing: Credit Score Recovery (Repair)',
    '06. Ongoing: Govt Loan Project Reports (DPR)',
    '07. Ongoing: ISO Lead Audit & Certification',
    '08. Ongoing: Loan DSA & Insurance Agency',
    '09. Upcoming: Debt Recovery & Real Estate',
    '10. Strategic Partnership & Contact',
  ];

  const presenterNotes = [
    'Presenter Note: Welcome stakeholders. Introduce SPACE India Limited as a premier financial and corporate handholding powerhouse. Emphasize the solar-space motif and our core pledge: "PLEDGE TO ASSIST".',
    'Presenter Note: Explain the philosophical inspiration of SPACE as the celestial navigator steering enterprises through complex institutional banking, credit repair, and MSME regulations.',
    'Presenter Note: Walk through the two macro horizons: 6 active, income-generating ongoing services, and 2 high-growth upcoming frontiers launching in 2026.',
    'Presenter Note: Highlight how MSME ZED unlocks up to 80% government reimbursement and 0.5-1.0% annual interest rate concessions from major banks.',
    'Presenter Note: Focus on the huge demand for credit repair. Detail our forensic RBI-compliant dispute filing that moves sub-600 scores to 750+ prime status.',
    'Presenter Note: Discuss our bankable DPR preparation for PMEGP, CGTMSE, Mudra, and Stand-Up India with full CMA data and CA vetting.',
    'Presenter Note: Emphasize ISO 9001, 14001, 27001, and 45001 implementation with pre-audit gap assessments and accredited certification.',
    'Presenter Note: Highlight our multi-bank DSA network spanning 40+ lenders and our comprehensive 360-degree commercial insurance protection shield.',
    'Presenter Note: Present the two upcoming projects: Ethical corporate debt recovery, and MSME industrial real estate.',
    'Presenter Note: Close with summary metrics (₹450+ Cr syndicated, 1,200+ clients) and invite direct partnership inquiries and consultation booking.',
  ];

  // Autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleFullscreen = () => {
    if (isFullscreen) {
      if (document.exitFullscreen) document.exitFullscreen();
      setIsFullscreen(false);
    } else {
      const el = document.documentElement;
      if (el.requestFullscreen) el.requestFullscreen();
      setIsFullscreen(true);
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#030612] text-slate-100 flex flex-col ${
        isFullscreen ? 'p-0' : 'p-3 sm:p-6'
      }`}
    >
      {/* Top Toolbar */}
      <div className="no-print max-w-7xl mx-auto w-full mb-4 flex items-center justify-between flex-wrap gap-3 bg-slate-900/90 border border-amber-500/20 px-4 py-2.5 rounded-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="cursor-pointer" onClick={onSwitchToWeb}>
            <Logo size="sm" showTagline={false} />
          </div>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <div className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>
              Slide {currentSlide + 1} of {totalSlides}
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <select
            value={currentSlide}
            onChange={(e) => setCurrentSlide(Number(e.target.value))}
            className="bg-slate-950 border border-slate-700 text-xs font-medium text-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-400 cursor-pointer"
          >
            {slideTitles.map((title, idx) => (
              <option key={idx} value={idx}>
                {title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
              showNotes
                ? 'bg-amber-500 text-black border-amber-400'
                : 'bg-slate-950 text-slate-300 border-slate-800 hover:text-white'
            }`}
            title="Toggle Presenter Notes"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Notes</span>
          </button>

          <button
            onClick={() => setIsAutoplay(!isAutoplay)}
            className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
              isAutoplay
                ? 'bg-emerald-500 text-black border-emerald-400'
                : 'bg-slate-950 text-slate-300 border-slate-800 hover:text-white'
            }`}
            title="Auto-play slides"
          >
            {isAutoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isAutoplay ? 'Pause' : 'Autoplay'}</span>
          </button>

          <button
            onClick={() => window.print()}
            className="p-2 rounded-lg text-xs font-semibold bg-slate-950 text-slate-300 border border-slate-800 hover:text-white flex items-center gap-1.5 cursor-pointer"
            title="Print or Save Presentation as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export / Print</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg text-xs font-semibold bg-slate-950 text-slate-300 border border-slate-800 hover:text-white cursor-pointer"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={onSwitchToWeb}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-400 text-black flex items-center gap-1.5 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Live Web View</span>
          </button>
        </div>
      </div>

      {/* Main Slide Card Viewport */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] bg-gradient-to-br from-[#040817] via-[#070e28] to-[#020510] border-2 border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between p-6 sm:p-12 transition-all">
          <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Slide Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-amber-500/20 pb-4">
            <div className="flex items-center gap-3">
              <Logo size="sm" />
            </div>
            <div className="text-right">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                PROTOTYPE WEBSITE PRESENTATION
              </span>
              <div className="text-[10px] text-slate-400">
                SPACE India Limited • Financial Solutions
              </div>
            </div>
          </div>

          {/* Slide Body */}
          <div className="relative z-10 flex-1 py-4 sm:py-6 flex flex-col justify-center">
            {/* SLIDE 0 */}
            {currentSlide === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 border border-amber-500/35 backdrop-blur-md shadow-lg shadow-amber-500/10 inline-flex items-center">
                      <Logo size="md" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-widest">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Corporate Prototype Presentation</span>
                    </div>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                    <span className="cosmic-gradient-text block">SPACE India Limited</span>
                    <span className="text-white text-xl sm:text-3xl font-semibold mt-1 block">
                      Pledge To Assist
                    </span>
                  </h1>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    A multi-disciplinary financial navigation and corporate advisory institution. Supporting Indian MSMEs and enterprises with Government ZED Certifications, Forensic Credit Recovery, Bankable DPRs, ISO Lead Audits, Loan Syndication, and Insurance Risk Shields.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/30">
                      <div className="text-[11px] uppercase font-bold text-amber-400">Ongoing Portfolio</div>
                      <div className="text-sm font-semibold text-white">6 Core Financial Pillars</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30">
                      <div className="text-[11px] uppercase font-bold text-cyan-400">Upcoming Horizons</div>
                      <div className="text-sm font-semibold text-white">Debt Recovery & Real Estate</div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl max-w-sm">
                    <img
                      src="/assets/space_guardian-3vSbuyvN.jpg"
                      alt="SPACE Cosmic Visual"
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-2.5 bg-slate-950/90 text-center text-[11px] text-amber-300 font-bold border-t border-amber-500/30">
                      “SPACE” • Guiding The Financial Cosmos
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 1 */}
            {currentSlide === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
                <div className="md:col-span-5 flex justify-center">
                  <div className="rounded-2xl overflow-hidden border border-amber-500/40 shadow-xl max-w-xs">
                    <img
                      src="/assets/space_guardian-3vSbuyvN.jpg"
                      alt="SPACE Cosmic Symbol"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-7 space-y-4">
                  <div className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
                    Slide 02 • Guiding Philosophy
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                    The “SPACE” Celestial Vision & Cosmic Mandate
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Just as the cosmic guardian rides the celestial eagle across galactic storms, SPACE India Limited shields businesses from predatory lending, credit bureau paralysis, and regulatory hurdles.
                  </p>
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                      <Shield className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Sovereign Business Defense</div>
                        <div className="text-[11px] text-slate-400">
                          Resolving credit bureau disputes, protecting promoter ratings, and rectifying account discrepancies.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                      <Compass className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Government Scheme Mastery</div>
                        <div className="text-[11px] text-slate-400">
                          Unlocking up to 80% ZED subsidies and 35% PMEGP margin money grants for enterprises.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 2 */}
            {currentSlide === 2 && (
              <div className="space-y-4 h-full flex flex-col justify-center">
                <div className="text-center space-y-1">
                  <div className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
                    Slide 03 • Portfolio Architecture
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Complete Spectrum of Institutional Assistance
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                  {[
                    { title: 'MSME ZED Cert.', icon: Award, tag: 'Ongoing', desc: 'Bronze/Silver/Gold 80% subsidy' },
                    { title: 'Credit Score Repair', icon: TrendingUp, tag: 'Ongoing', desc: 'CIBIL / Experian restoration' },
                    { title: 'Govt Loan DPRs', icon: FileSpreadsheet, tag: 'Ongoing', desc: 'PMEGP, Mudra & CGTMSE' },
                    { title: 'ISO Lead Audit', icon: ShieldCheck, tag: 'Ongoing', desc: '9001, 14001, 27001, 45001' },
                    { title: 'Loan DSA Syndication', icon: Landmark, tag: 'Ongoing', desc: '40+ Banks, CC/OD & Term debt' },
                    { title: 'Insurance Agency', icon: Umbrella, tag: 'Ongoing', desc: 'Keyman & Commercial perils' },
                    { title: 'Debt Recovery Agency', icon: Scale, tag: 'Upcoming', desc: 'Ethical B2B receivables resolution' },
                    { title: 'Real Estate Projects', icon: Building2, tag: 'Upcoming', desc: 'Industrial MSME clusters' },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    const isUpcoming = item.tag.includes('Upcoming');
                    return (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border ${
                          isUpcoming
                            ? 'bg-cyan-950/30 border-cyan-500/40'
                            : 'bg-slate-900/80 border-amber-500/30'
                        } space-y-1.5`}
                      >
                        <div className="flex items-center justify-between">
                          <Icon className={`w-4 h-4 ${isUpcoming ? 'text-cyan-400' : 'text-amber-400'}`} />
                          <span
                            className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                              isUpcoming
                                ? 'bg-cyan-500/20 text-cyan-300'
                                : 'bg-amber-500/20 text-amber-300'
                            }`}
                          >
                            {item.tag}
                          </span>
                        </div>
                        <div className="text-xs font-bold text-white truncate">{item.title}</div>
                        <div className="text-[10px] text-slate-400">{item.desc}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* SLIDE 3 */}
            {currentSlide === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
                <div className="md:col-span-7 space-y-3">
                  <div className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
                    Ongoing Project 01 • Quality & Sustainability
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    MSME ZED Certifications (Zero Defect, Zero Effect)
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    National initiative spearheaded by the Ministry of MSME to foster world-class manufacturing competitiveness while mitigating environmental footprints.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      <span>
                        <strong>Up to 80% Subsidy</strong> on certification fees for Micro enterprises (+10% for Women/SC/ST).
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      <span>
                        <strong>0.50% - 1.00% Concession</strong> on bank loan interest rates across partner banks.
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      <span>Tender priority on the Government e-Marketplace (GeM) portal.</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-4">
                  <Award className="w-10 h-10 text-amber-400 mx-auto" />
                  <div className="text-3xl font-extrabold text-amber-400 font-heading">
                    80% - 90%
                  </div>
                  <div className="text-xs text-slate-300">Government Reimbursement Coverage</div>
                  <div className="p-3 rounded-xl bg-slate-950/80 text-xs text-slate-300 text-left">
                    SPACE India Limited provides full gap-audit, documentation, portal submission, and registrar clearance.
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 4 */}
            {currentSlide === 4 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
                <div className="md:col-span-7 space-y-3">
                  <div className="text-xs uppercase font-extrabold tracking-widest text-emerald-400">
                    Ongoing Project 02 • Credit Rehabilitation
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Credit Score Recovery & Bureau Dispute Rectification
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Forensic audit and legal representation for business promoters and commercial entities burdened by low CIBIL, Experian, or CRIF scores.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Formal removal of erroneous Days Past Due (DPD) and unauthorized hard enquiries.</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Conversion of damaging “Settled” or “Written-Off” tags to “Closed” with No Dues Certificate.</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Rebuilding score trajectory to 750+ within 90 to 120 days.</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                  <TrendingUp className="w-10 h-10 text-emerald-400 mx-auto" />
                  <div className="text-3xl font-extrabold text-emerald-400 font-heading">
                    580 → 765+
                  </div>
                  <div className="text-xs text-slate-300">Average Verified Turnaround Trajectory</div>
                  <div className="p-3 rounded-xl bg-slate-950/80 text-xs text-slate-300 text-left">
                    Reduces commercial borrowing interest rates by 3% to 6% p.a., unlocking immediate credit limits.
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 5 */}
            {currentSlide === 5 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
                <div className="md:col-span-7 space-y-3">
                  <div className="text-xs uppercase font-extrabold tracking-widest text-blue-400">
                    Ongoing Project 03 • Bankable Documentation
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Detailed Project Report (DPR) Building for Govt Loans
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Engineering institutional-grade financial project reports compliant with PSU bank credit appraisal committees and state subsidy bodies.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      <span>PMEGP Subsidy DPRs unlocking up to 35% margin money grants.</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      <span>Full Credit Monitoring Arrangement (CMA) data & DSCR sensitivity analysis.</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      <span>Chartered Accountant vetted financial projections for 5 to 7 operational years.</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-center space-y-4">
                  <FileSpreadsheet className="w-10 h-10 text-blue-400 mx-auto" />
                  <div className="text-3xl font-extrabold text-blue-400 font-heading">
                    35% Subsidy
                  </div>
                  <div className="text-xs text-slate-300">PMEGP Rural / Special Entitlement</div>
                  <div className="p-3 rounded-xl bg-slate-950/80 text-xs text-slate-300 text-left">
                    Over 850+ sanction-approved project reports delivered across manufacturing, processing, and services.
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 6 */}
            {currentSlide === 6 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
                <div className="md:col-span-7 space-y-3">
                  <div className="text-xs uppercase font-extrabold tracking-widest text-indigo-400">
                    Ongoing Project 04 • Global Assurance
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    ISO Lead Audit & Global Standards Certification
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Accredited Lead Auditor verification enabling Indian enterprises to satisfy mandatory international supply chain, export, and tender requirements.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                      <span>
                        <strong>ISO 9001:2015</strong> (Quality Management) &{' '}
                        <strong>ISO 14001</strong> (Environmental Management).
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                      <span>
                        <strong>ISO 27001</strong> (Information Security) &{' '}
                        <strong>ISO 45001</strong> (Occupational Health & Safety).
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                      <span>Complete pre-audit gap remediation, SOP formulation, and accredited registrar clearance.</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-center space-y-4">
                  <ShieldCheck className="w-10 h-10 text-indigo-400 mx-auto" />
                  <div className="text-3xl font-extrabold text-indigo-400 font-heading">
                    98.4%
                  </div>
                  <div className="text-xs text-slate-300">First-Time Audit Pass Rate</div>
                  <div className="p-3 rounded-xl bg-slate-950/80 text-xs text-slate-300 text-left">
                    Recognized credentials that qualify domestic companies for high-value defense, rail, and export contracts.
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 7 */}
            {currentSlide === 7 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
                <div className="p-5 rounded-2xl bg-purple-500/10 border border-purple-500/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <Landmark className="w-6 h-6 text-purple-400" />
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                      Ongoing Project 05
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Loan DSA Syndication</h3>
                  <p className="text-xs text-slate-300">
                    Direct Selling Agent alliance with 40+ leading public & private banks.
                  </p>
                  <ul className="text-xs text-slate-300 space-y-1.5 pt-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      <span>Unsecured MSME Business Loans up to ₹50 Lakhs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      <span>Collateral-Free CGTMSE Limits up to ₹5 Crores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      <span>Working Capital CC/OD & Machinery Term Debt</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <Umbrella className="w-6 h-6 text-rose-400" />
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                      Ongoing Project 06
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Insurance Agency</h3>
                  <p className="text-xs text-slate-300">
                    Comprehensive enterprise risk management and continuity protection.
                  </p>
                  <ul className="text-xs text-slate-300 space-y-1.5 pt-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                      <span>Commercial Fire & Special Perils (Factory / Stock)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                      <span>Keyman Insurance for Founders & Key Executives</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                      <span>Marine Transit, D&O Liability & Group Mediclaim</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* SLIDE 8 */}
            {currentSlide === 8 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
                <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <Scale className="w-6 h-6 text-cyan-400" />
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                      Upcoming • New Frontier
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Debt Recovery Agency</h3>
                  <p className="text-xs text-slate-300">
                    Ethical, legal, and tech-driven corporate delinquent receivables resolution framework.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-300 pt-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>RBI, SARFAESI & IBC lockstep compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Cross-state forensic asset tracing intelligence</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Pre-litigation mediation & amicable settlement</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <Building2 className="w-6 h-6 text-amber-400" />
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                      Upcoming • Strategic Expansion
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Real Estate Projects</h3>
                  <p className="text-xs text-slate-300">
                    Plug-and-play ZED-certified industrial clusters, smart logistics, and commercial complexes.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-300 pt-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>Green utility grids & shared solar power</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>Multi-modal highway connected logistics parks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>RERA-compliant land acquisition & JD syndication</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 9 */}
            {currentSlide === 9 && (
              <div className="text-center max-w-3xl mx-auto space-y-5 h-full flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase mx-auto">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pledge To Assist</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Join Hands with <span className="cosmic-gradient-text">SPACE India Limited</span>
                </h2>
                <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                  Whether you are seeking ZED certification subsidies, credit score recovery, bankable DPR formulations, or partnering in upcoming debt recovery & real estate ventures.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-xl font-bold font-heading text-amber-400">₹450+ Cr</div>
                    <div className="text-[11px] text-slate-400">Capital Syndicated</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-xl font-bold font-heading text-emerald-400">1,200+</div>
                    <div className="text-[11px] text-slate-400">MSMEs Handheld</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-xl font-bold font-heading text-cyan-400">Pan-India</div>
                    <div className="text-[11px] text-slate-400">Operational Reach</div>
                  </div>
                </div>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => onOpenConsultation('Executive Presentation Inquiry')}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
                  >
                    <span>Schedule Executive Meeting</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onSwitchToWeb}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-all cursor-pointer"
                  >
                    Explore Interactive Live Website
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Slide Footer */}
          <div className="relative z-10 flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] text-slate-400">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-amber-400">SPACE India Limited</span>
              <span>•</span>
              <a
                href="mailto:officials@spaceindialimited.in"
                className="hover:text-amber-400"
              >
                officials@spaceindialimited.in
              </a>
              <span>•</span>
              <a
                href="tel:+917873079730"
                className="text-emerald-400 hover:text-emerald-300 font-medium"
              >
                +91 78730 79730
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-500 hidden sm:inline">Confidential Corporate Overview</span>
              <span className="font-bold text-white">
                Slide {currentSlide + 1} / {totalSlides}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Presenter Notes Box */}
      {showNotes && (
        <div className="no-print max-w-7xl mx-auto w-full mt-3 p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs text-amber-200">
          <div className="font-bold uppercase tracking-wider text-[10px] text-amber-400 mb-1 flex items-center gap-1.5">
            <FileText className="w-3 h-3" />
            <span>Presenter Notes:</span>
          </div>
          <div className="text-slate-300">{presenterNotes[currentSlide]}</div>
        </div>
      )}

      {/* Slide Navigation Bottom Controls */}
      <div className="no-print max-w-7xl mx-auto w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 p-3 rounded-2xl">
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
          <button
            onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
            disabled={currentSlide === 0}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              currentSlide === 0
                ? 'opacity-40 cursor-not-allowed bg-slate-800 text-slate-500'
                : 'bg-slate-800 hover:bg-slate-700 text-white'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          <span className="text-xs font-semibold text-slate-400 px-2 sm:hidden">
            {currentSlide + 1} / {totalSlides}
          </span>
          <button
            onClick={() => setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1))}
            disabled={currentSlide === totalSlides - 1}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              currentSlide === totalSlides - 1
                ? 'opacity-40 cursor-not-allowed bg-slate-800 text-slate-500'
                : 'bg-amber-500 hover:bg-amber-400 text-black'
            }`}
          >
            <span>Next Slide</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentSlide === idx
                  ? 'w-7 bg-amber-400 shadow-sm shadow-amber-400/50'
                  : 'w-2.5 bg-slate-700 hover:bg-slate-500'
              }`}
              title={`Jump to Slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="text-[11px] text-slate-500 hidden lg:block">
          Use <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">←</kbd>{' '}
          <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">→</kbd> or{' '}
          <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">Space</kbd>
        </div>
      </div>
    </div>
  );
};
