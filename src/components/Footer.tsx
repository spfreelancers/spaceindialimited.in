import React from 'react';
import { Mail, Phone, CodeXml } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface FooterProps {
  onOpenConsultation: (service?: string) => void;
  onToggleView: (view: 'web' | 'ppt') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenConsultation,
  onToggleView,
}) => {
  return (
    <footer
      id="about-company"
      className="relative z-10 bg-[#02040d] border-t border-amber-500/20 pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Creed */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" />
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              <strong className="text-slate-200">SPACE India Limited</strong> is India's dedicated
              corporate assist and institutional financial advisory company. We pledge to empower
              MSMEs and enterprises through regulatory certifications, forensic credit recovery,
              bank syndication, and scalable industrial infrastructure.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-amber-500/20 text-xs text-slate-300 space-y-1">
              <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                Our Corporate Creed:
              </div>
              <div className="italic text-slate-300">
                “PLEDGE TO ASSIST — Guiding enterprises through every frontier of the financial universe.”
              </div>
            </div>
          </div>

          {/* Column 2: Ongoing Pillars */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Ongoing Projects (6 Pillars)
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onOpenConsultation('MSME ZED Certifications')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  MSME ZED Certifications (Govt Subsidies)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Credit Score Recovery (Repair)')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Credit Score Recovery & Dispute Rectification
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Project Report building for Govt Loans')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Govt Loan Project Reports (PMEGP / CMA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('ISO Lead Audit & Certification')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  ISO Lead Audit (9001, 14001, 27001, 45001)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Loan DSA')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Loan DSA (Direct Selling Agent for 40+ Banks)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Insurance Agency')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Corporate & Commercial Insurance Agency
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Upcoming Frontiers */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Upcoming Frontiers
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onOpenConsultation('Upcoming: Debt Recovery Agency')}
                  className="hover:text-cyan-400 transition-colors text-left flex items-center gap-1 cursor-pointer"
                >
                  <span>Debt Recovery Agency</span>
                  <span className="text-[9px] px-1 bg-cyan-500/20 text-cyan-300 rounded">
                    Upcoming
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Upcoming: Real Estate Projects')}
                  className="hover:text-cyan-400 transition-colors text-left flex items-center gap-1 cursor-pointer"
                >
                  <span>Real Estate Projects</span>
                  <span className="text-[9px] px-1 bg-amber-500/20 text-amber-300 rounded">
                    Upcoming
                  </span>
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Presentation View:
              </h5>
              <button
                onClick={() => onToggleView('ppt')}
                className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-cyan-300 transition-all text-center block cursor-pointer"
              >
                Open Prototype PPT Deck
              </button>
            </div>
          </div>

          {/* Column 4: Corporate Desk */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Corporate Desk & Inquiries
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Direct Advisory Inquiries:</div>
                  <a
                    href="mailto:officials@spaceindialimited.in"
                    className="text-amber-400 hover:underline break-all"
                  >
                    officials@spaceindialimited.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Client Hotline:</div>
                  <a
                    href="tel:+917873079730"
                    className="text-slate-200 hover:text-amber-400 transition-colors font-medium tracking-wide"
                  >
                    +91 78730 79730
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CodeXml className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Developed By:</div>
                  <div className="text-slate-300 font-medium">SP Freelancers</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation()}
                className="w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Pledge Assistance Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            © 2026 <strong>SPACE India Limited</strong>. All rights reserved.
          </div>
          <div className="flex flex-col sm:items-end items-center text-slate-400 font-medium">
            <span className="text-amber-400/90 font-semibold tracking-wide">
              SuryaPutra Alliance of Consultant Entity (SPACE) India Limited
            </span>
            <span className="text-[10px] text-slate-500 font-normal tracking-wider">
              Since 2023
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
