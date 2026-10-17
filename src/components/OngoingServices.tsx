import React, { useState } from 'react';
import {
  Sparkles,
  Award,
  TrendingUp,
  FileSpreadsheet,
  ShieldCheck,
  Landmark,
  Umbrella,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  BarChart3,
} from 'lucide-react';

interface OngoingServicesProps {
  onOpenConsultation: (service?: string) => void;
  onOpenCalculator: (tab: string) => void;
}

export const OngoingServices: React.FC<OngoingServicesProps> = ({
  onOpenConsultation,
  onOpenCalculator,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const services = [
    {
      id: 'zed',
      category: 'compliance',
      title: 'MSME ZED Certifications',
      tagline: 'Zero Defect Zero Effect Scheme',
      badge: 'Up to 80% Govt Subsidy',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      icon: Award,
      accentColor: 'from-amber-500 to-amber-700',
      iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      description:
        'Official handholding for MSMEs to achieve Bronze, Silver, and Gold ZED ratings under the Ministry of MSME, Govt of India. Enhance manufacturing quality, eliminate defects, and unlock massive financial perks.',
      highlights: [
        'Up to 80% reimbursement on certification cost for Micro enterprises',
        '0.50% to 1.00% concession on bank loan interest rates',
        'Preference in Government e-Marketplace (GeM) public tenders',
        'Special financial assistance for zero-waste & green energy technology',
      ],
      process: ['Desktop Assessment', 'Gap Analysis', 'Site Audit', 'Certificate Issuance'],
      calculatorTab: 'zed',
      calculatorLabel: 'Calculate ZED Subsidy',
    },
    {
      id: 'credit-recovery',
      category: 'finance',
      title: 'Credit Score Recovery (Repair)',
      tagline: 'Commercial & Individual CIBIL Rehabilitation',
      badge: 'Score Restoration',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      icon: TrendingUp,
      accentColor: 'from-emerald-500 to-teal-700',
      iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      description:
        'Comprehensive forensic credit repair for individuals and business entities struggling with degraded CIBIL, Experian, or CRIF High Mark scores. We resolve erroneous DPDs, settlements, and dispute deadlocks.',
      highlights: [
        'Audit of written-off, settled, and overdue credit accounts',
        'Formal dispute resolution with RBI-regulated credit bureaus',
        'Negotiation for NDC (No Dues Certificate) and loan account closure',
        'Rebuilding credit trajectory from sub-600 to 750+ prime status',
      ],
      process: ['Forensic Bureau Audit', 'Legal Grievance Filing', 'Settlement Rectification', 'Score Calibration'],
      calculatorTab: 'credit',
      calculatorLabel: 'Simulate Score Recovery',
    },
    {
      id: 'project-reports',
      category: 'finance',
      title: 'Project Report Building for Govt Loans',
      tagline: 'Bankable DPRs & CMA Data Formulation',
      badge: 'PMEGP & CGTMSE Ready',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      icon: FileSpreadsheet,
      accentColor: 'from-blue-500 to-indigo-700',
      iconBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      description:
        'Preparation of detailed, bank-compliant Detailed Project Reports (DPR) and Credit Monitoring Arrangement (CMA) data engineered to meet stringent PSU bank criteria and national subsidy schemes.',
      highlights: [
        'PMEGP, Mudra, Stand-Up India, and PMFME subsidy scheme alignment',
        'Thorough financial viability, DSCR, IRR, Break-even & Cashflow modeling',
        'Chartered Accountant vetted financial projections for 5 to 7 years',
        'Direct coordination with bank branch managers and credit sanction officers',
      ],
      process: ['Business Feasibility Study', 'CMA & Ratio Analysis', 'DPR Formulation', 'Bank Sanction Support'],
      calculatorTab: 'dpr',
      calculatorLabel: 'Estimate DPR Feasibility',
    },
    {
      id: 'iso-audit',
      category: 'compliance',
      title: 'ISO Lead Audit & Certification',
      tagline: 'Global Standards & Regulatory Assurance',
      badge: 'Accredited Registrars',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      icon: ShieldCheck,
      accentColor: 'from-indigo-500 to-purple-700',
      iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      description:
        'End-to-end guidance and certified Lead Auditor verification across global management standards. Empower your brand with recognized certifications that unlock international export and tender eligibility.',
      highlights: [
        'ISO 9001:2015 (Quality), ISO 14001 (Environment), ISO 45001 (Safety)',
        'ISO 27001 (Information Security) & ISO 22000 (Food Safety Systems)',
        'Pre-audit internal gap assessments and full compliance documentation',
        'Official surveillance audits and multi-year renewal maintenance',
      ],
      process: ['Gap Analysis', 'Standard Operating SOPs', 'Internal Lead Audit', 'Registrar Certification'],
      calculatorTab: 'consult',
      calculatorLabel: 'Request Audit Consultation',
    },
    {
      id: 'loan-dsa',
      category: 'finance',
      title: 'Loan DSA (Direct Selling Agent)',
      tagline: 'Multi-Bank Debt Syndication Network',
      badge: '40+ Lenders Network',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      icon: Landmark,
      accentColor: 'from-purple-500 to-pink-700',
      iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      description:
        'Direct selling agent partnership with premier public banks, private sector banks, and top NBFCs. We facilitate seamless credit flow, collateral-free CGTMSE loans, machinery loans, and cash credit limits.',
      highlights: [
        'Unsecured MSME Business Loans up to ₹50 Lakhs with swift turnaround',
        'Working Capital Limits: Cash Credit (CC) & Overdraft (OD) facilities',
        'Collateral-free CGTMSE loans up to ₹5 Crores for manufacturing & services',
        'Machinery Term Loans & Loan Against Property (LAP) at competitive rates',
      ],
      process: ['Eligibility Diagnostics', 'Multi-Bank Submission', 'Underwriting Follow-up', 'Sanction & Disbursal'],
      calculatorTab: 'emi',
      calculatorLabel: 'Calculate Business EMI',
    },
    {
      id: 'insurance',
      category: 'risk',
      title: 'Insurance Agency',
      tagline: 'Enterprise Risk Shield & Asset Protection',
      badge: '360° Risk Mitigation',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      icon: Umbrella,
      accentColor: 'from-rose-500 to-orange-700',
      iconBg: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      description:
        'Strategic insurance risk management safeguarding enterprise continuity. From safeguarding corporate assets to key personnel insurance and comprehensive liability protection against catastrophic volatility.',
      highlights: [
        'Standard Fire & Special Perils Insurance for factories, plant & inventory',
        'Marine & Transit Insurance for raw materials and finished goods supply chains',
        'Keyman Insurance for business founders, directors, and critical executives',
        'Corporate Group Mediclaim & Workmen Compensation policies',
      ],
      process: ['Risk Profiling', 'Underwriter Bidding', 'Policy Customization', 'Dedicated Claim Desk'],
      calculatorTab: 'consult',
      calculatorLabel: 'Get Corporate Quote',
    },
  ];

  const filteredServices = services.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section
      id="ongoing-projects"
      className="py-20 relative z-10 border-t border-amber-500/10 bg-[#030612]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Active Financial & Advisory Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Our 6 Pillars of <span className="cosmic-gradient-text">Ongoing Assistance</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Engineered to propel Indian MSMEs from operational vulnerability to financial resilience and global competitiveness.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {[
              { id: 'all', label: 'All 6 Services' },
              { id: 'compliance', label: 'ZED & ISO Compliance' },
              { id: 'finance', label: 'Credit & Bank Loans' },
              { id: 'risk', label: 'Insurance & Risk' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-black shadow-md shadow-amber-500/25'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-amber-500/40 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 backdrop-blur-xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div
                      className={`p-3 rounded-xl border ${service.iconBg} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${service.badgeColor}`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">
                      {service.tagline}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400/90">
                      Core Advantages:
                    </div>
                    {service.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Assistance Flow:
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 flex-wrap">
                      {service.process.map((step, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span className="px-1.5 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">
                            {step}
                          </span>
                          {sIdx < service.process.length - 1 && (
                            <ChevronRight className="w-3 h-3 text-amber-500/60" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 space-y-2">
                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/15 cursor-pointer"
                  >
                    <span>Engage {service.title.split(' ')[0]} Specialist</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      if (service.calculatorTab === 'consult') {
                        onOpenConsultation(service.title);
                      } else {
                        onOpenCalculator(service.calculatorTab);
                      }
                    }}
                    className="w-full py-2 px-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{service.calculatorLabel}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
