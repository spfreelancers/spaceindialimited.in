import React, { useState, useEffect } from 'react';
import {
  Calculator,
  TrendingUp,
  Award,
  FileSpreadsheet,
  Landmark,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface FinancialCalculatorsProps {
  initialTab?: string;
  onOpenConsultation: (service?: string) => void;
}

export const FinancialCalculators: React.FC<FinancialCalculatorsProps> = ({
  initialTab = 'credit',
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab || 'credit');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Tab 1: Credit Score Simulator
  const [currentScore, setCurrentScore] = useState<number>(560);
  const [hasSettledWrittenOff, setHasSettledWrittenOff] = useState<boolean>(true);
  const [hasDpdFlags, setHasDpdFlags] = useState<boolean>(true);
  const [hasDiscrepancies, setHasDiscrepancies] = useState<boolean>(false);

  const projectedScore = Math.min(
    790,
    currentScore +
      (hasSettledWrittenOff ? 90 : 40) +
      (hasDpdFlags ? 70 : 30) +
      (hasDiscrepancies ? 30 : 15)
  );
  const interestRateDrop = (currentScore < 650 ? 5.5 : 2.5).toFixed(1);

  // Tab 2: ZED Subsidy Calculator
  const [enterpriseScale, setEnterpriseScale] = useState<'micro' | 'small' | 'medium'>('micro');
  const [isSpecialCategory, setIsSpecialCategory] = useState<boolean>(true);
  const [zedTier, setZedTier] = useState<'bronze' | 'silver' | 'gold'>('silver');
  const [activeLoanPortfolio, setActiveLoanPortfolio] = useState<number>(50); // Lakhs

  let subsidyPercent =
    enterpriseScale === 'micro' ? 80 : enterpriseScale === 'small' ? 60 : 50;
  if (isSpecialCategory) {
    subsidyPercent = Math.min(90, subsidyPercent + 10);
  }

  const baseCertCost =
    zedTier === 'bronze' ? 10000 : zedTier === 'silver' ? 40000 : 90000;
  const subsidyAmount = (baseCertCost * subsidyPercent) / 100;
  const netClientCost = baseCertCost - subsidyAmount;
  const annualInterestSavings = activeLoanPortfolio * 100000 * 0.0075;

  // Tab 3: DPR & Subsidy Feasibility
  const [scheme, setScheme] = useState<'pmegp' | 'cgtmse' | 'mudra' | 'standup'>('pmegp');
  const [projectCost, setProjectCost] = useState<number>(25); // Lakhs
  const [unitLocation, setUnitLocation] = useState<'rural' | 'urban'>('rural');
  const [promoterType, setPromoterType] = useState<'special' | 'general'>('special');

  let marginMoneyPercent = 15;
  if (scheme === 'pmegp') {
    if (unitLocation === 'rural') {
      marginMoneyPercent = promoterType === 'special' ? 35 : 25;
    } else {
      marginMoneyPercent = promoterType === 'special' ? 25 : 15;
    }
  } else if (scheme === 'standup') {
    marginMoneyPercent = 15;
  } else {
    marginMoneyPercent = 0;
  }

  const ownContributionPercent = promoterType === 'special' ? 5 : 10;
  const ownContribution = (projectCost * ownContributionPercent) / 100;
  const subsidyGrant = (projectCost * marginMoneyPercent) / 100;
  const bankTermDebt = projectCost - ownContribution;

  // Tab 4: Commercial Loan DSA EMI Calculator
  const [loanAmount, setLoanAmount] = useState<number>(30); // Lakhs
  const [tenureYears, setTenureYears] = useState<number>(5);
  const [interestRate, setInterestRate] = useState<number>(9.5); // % p.a.

  const principal = loanAmount * 100000;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const monthlyEmi = Math.round(
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
  const totalRepayment = monthlyEmi * totalMonths;
  const totalInterest = totalRepayment - principal;

  return (
    <section id="calculators" className="py-20 relative z-10 bg-[#020510]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Simulate Your Financial Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Interactive Financial <span className="cosmic-gradient-text">Decision Engines</span>
          </h2>
          <p className="text-slate-400 text-base">
            Test your credit restoration projection, verify government ZED subsidies, estimate bankable project reports, and calculate commercial debt servicing.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('credit')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'credit'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-emerald-500/40'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Credit Score Repair Trajectory</span>
            </button>
            <button
              onClick={() => setActiveTab('zed')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'zed'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-amber-500/40'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>MSME ZED Subsidy Finder</span>
            </button>
            <button
              onClick={() => setActiveTab('dpr')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'dpr'
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-blue-500/40'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Govt Loan DPR & Subsidy</span>
            </button>
            <button
              onClick={() => setActiveTab('emi')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'emi'
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-purple-500/40'
              }`}
            >
              <Landmark className="w-4 h-4" />
              <span>Business Loan DSA EMI</span>
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl">
          {/* TAB 1: CREDIT REPAIR */}
          {activeTab === 'credit' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <span>CIBIL & Experian Score Rehabilitation Engine</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Simulate how our formal legal dispute filing and account normalization directly upgrades your credit tier.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300 font-medium">Your Current Credit Score:</span>
                    <span className="text-2xl font-extrabold text-amber-400 font-heading">
                      {currentScore}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="450"
                    max="720"
                    step="5"
                    value={currentScore}
                    onChange={(e) => setCurrentScore(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>450 (Critical)</span>
                    <span>580 (Distressed)</span>
                    <span>650 (Fair)</span>
                    <span>720 (Near Prime)</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Identify Active Negative Remarks on Bureau:
                  </div>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 cursor-pointer hover:border-slate-700">
                    <input
                      type="checkbox"
                      checked={hasSettledWrittenOff}
                      onChange={(e) => setHasSettledWrittenOff(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 accent-emerald-500"
                    />
                    <div>
                      <div className="text-xs font-semibold text-slate-200">
                        "Settled" or "Written-Off" Account Status Present
                      </div>
                      <div className="text-[11px] text-slate-400">
                        We negotiate for full NDC & convert status to "Closed" at the bureau.
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 cursor-pointer hover:border-slate-700">
                    <input
                      type="checkbox"
                      checked={hasDpdFlags}
                      onChange={(e) => setHasDpdFlags(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 accent-emerald-500"
                    />
                    <div>
                      <div className="text-xs font-semibold text-slate-200">
                        Days Past Due (DPD 30 - 90+ days) / Late Payment Flags
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Rectification of delayed reporting cycles and unfair penalties.
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 cursor-pointer hover:border-slate-700">
                    <input
                      type="checkbox"
                      checked={hasDiscrepancies}
                      onChange={(e) => setHasDiscrepancies(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 accent-emerald-500"
                    />
                    <div>
                      <div className="text-xs font-semibold text-slate-200">
                        Excessive Unapproved Enquiries / Identity Discrepancies
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Purging unauthorized hard pulls and mismatched PAN details.
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-black border border-emerald-500/30 text-center space-y-6 shadow-xl">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                    Projected Restoration Target
                  </span>
                  <div className="text-5xl sm:text-6xl font-extrabold font-heading text-emerald-400">
                    {projectedScore}+
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    Prime Sovereign Tier (Estimated 90-120 Days)
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left pt-2 border-t border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">
                      Score Increase
                    </div>
                    <div className="text-lg font-bold text-white font-heading">
                      +{projectedScore - currentScore} Pts
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">
                      Loan Rate Drop
                    </div>
                    <div className="text-lg font-bold text-emerald-400 font-heading">
                      ~{interestRateDrop}% p.a.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 text-left">
                  <CheckCircle2 className="w-4 h-4 inline mr-1.5 text-emerald-400" />
                  Qualifies your business for multi-crore CGTMSE collateral-free loans once score crosses 720.
                </div>

                <button
                  onClick={() => onOpenConsultation('Credit Score Recovery (Repair)')}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
                >
                  Initiate Forensic CIBIL Audit
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: ZED SUBSIDY FINDER */}
          {activeTab === 'zed' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" />
                    <span>Ministry of MSME ZED Certification Subsidy Calculator</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Calculate your entitlement under the Zero Defect Zero Effect scheme, including state & banking interest rebates.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Select Enterprise Scale (as per Udyam Registration):
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'micro' as const, label: 'Micro', sub: 'Inv < ₹1 Cr' },
                      { id: 'small' as const, label: 'Small', sub: 'Inv < ₹10 Cr' },
                      { id: 'medium' as const, label: 'Medium', sub: 'Inv < ₹50 Cr' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setEnterpriseScale(item.id)}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                          enterpriseScale === item.id
                            ? 'bg-amber-500/20 border-amber-500 text-white'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="text-xs font-bold">{item.label}</div>
                        <div className="text-[10px] text-slate-500">{item.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Target ZED Certification Tier:
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'bronze' as const, label: 'Bronze', desc: '5 Parameters' },
                      { id: 'silver' as const, label: 'Silver', desc: '14 Parameters' },
                      { id: 'gold' as const, label: 'Gold', desc: '20 Parameters' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setZedTier(item.id)}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                          zedTier === item.id
                            ? 'bg-amber-500/20 border-amber-500 text-white'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="text-xs font-bold">{item.label}</div>
                        <div className="text-[10px] text-slate-500">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isSpecialCategory}
                    onChange={(e) => setIsSpecialCategory(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 accent-amber-500"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-200">
                      Women-owned / SC / ST / NER / Himalayan Enterprise (+10% Bonus Subsidy)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Additional grant support authorized by the Ministry of MSME.
                    </div>
                  </div>
                </label>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-semibold">Active Bank Loan Portfolio:</span>
                    <span className="font-bold text-amber-400">₹{activeLoanPortfolio} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="300"
                    step="5"
                    value={activeLoanPortfolio}
                    onChange={(e) => setActiveLoanPortfolio(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-black border border-amber-500/40 text-center space-y-6 shadow-xl">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                    Govt Subsidy Entitlement
                  </span>
                  <div className="text-5xl sm:text-6xl font-extrabold font-heading text-amber-400">
                    {subsidyPercent}%
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    Reimbursed by Ministry of MSME
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left pt-2 border-t border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">
                      Govt Reimbursement
                    </div>
                    <div className="text-lg font-bold text-emerald-400 font-heading">
                      ₹{subsidyAmount.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">
                      Net Client Cost
                    </div>
                    <div className="text-lg font-bold text-white font-heading">
                      ₹{netClientCost.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 text-left space-y-1">
                  <div className="font-bold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Annual Bank Interest Savings:</span>
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    ~₹{Math.round(annualInterestSavings).toLocaleString()} / year
                  </div>
                  <div className="text-[10px] text-slate-400">
                    (Based on 0.75% typical bank concession on ZED certified units)
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation('MSME ZED Certifications')}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  Start ZED Certification Handholding
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: DPR & SUBSIDY */}
          {activeTab === 'dpr' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5 text-blue-400" />
                    <span>Govt Loan DPR & Subsidy Feasibility Modeler</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Calculate bankable capital structure under PMEGP, CGTMSE, Mudra, and Stand-Up India schemes.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Select Target Government Credit Scheme:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'pmegp' as const, label: 'PMEGP', cap: 'Up to 35% Subsidy' },
                      { id: 'cgtmse' as const, label: 'CGTMSE', cap: 'Collateral-Free' },
                      { id: 'mudra' as const, label: 'Mudra Tarun', cap: 'Up to ₹20L' },
                      { id: 'standup' as const, label: 'Stand-Up India', cap: '₹10L - ₹1 Cr' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setScheme(item.id)}
                        className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                          scheme === item.id
                            ? 'bg-blue-500/20 border-blue-500 text-white'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="text-xs font-bold">{item.label}</div>
                        <div className="text-[10px] text-slate-500">{item.cap}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-semibold">
                      Total Project Cost (Capex + Working Capital):
                    </span>
                    <span className="font-bold text-blue-400 font-heading text-lg">
                      ₹{projectCost} Lakhs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={projectCost}
                    onChange={(e) => setProjectCost(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>₹5 Lakhs</span>
                    <span>₹25 Lakhs</span>
                    <span>₹50 Lakhs</span>
                    <span>₹100 Lakhs</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold text-slate-300">Unit Location:</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setUnitLocation('rural')}
                        className={`flex-1 py-2 rounded-lg text-xs font-semibold border cursor-pointer ${
                          unitLocation === 'rural'
                            ? 'bg-blue-600 text-white border-blue-500'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        Rural (Max Subsidy)
                      </button>
                      <button
                        onClick={() => setUnitLocation('urban')}
                        className={`flex-1 py-2 rounded-lg text-xs font-semibold border cursor-pointer ${
                          unitLocation === 'urban'
                            ? 'bg-blue-600 text-white border-blue-500'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        Urban
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold text-slate-300">Promoter Category:</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setPromoterType('special')}
                        className={`flex-1 py-2 rounded-lg text-xs font-semibold border cursor-pointer ${
                          promoterType === 'special'
                            ? 'bg-blue-600 text-white border-blue-500'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        Special (SC/ST/Women)
                      </button>
                      <button
                        onClick={() => setPromoterType('general')}
                        className={`flex-1 py-2 rounded-lg text-xs font-semibold border cursor-pointer ${
                          promoterType === 'general'
                            ? 'bg-blue-600 text-white border-blue-500'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        General
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 via-slate-900 to-black border border-blue-500/40 text-center space-y-6 shadow-xl">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">
                    Govt Margin Money (Subsidy)
                  </span>
                  <div className="text-5xl font-extrabold font-heading text-blue-400">
                    ₹{subsidyGrant.toFixed(2)} L
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {marginMoneyPercent}% Grant under {scheme.toUpperCase()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left pt-2 border-t border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">
                      Your Contribution
                    </div>
                    <div className="text-lg font-bold text-white font-heading">
                      ₹{ownContribution.toFixed(2)} L ({ownContributionPercent}%)
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">
                      Bank Term Debt
                    </div>
                    <div className="text-lg font-bold text-amber-400 font-heading">
                      ₹{bankTermDebt.toFixed(2)} L
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 text-left">
                  <CheckCircle2 className="w-4 h-4 inline mr-1.5 text-blue-400" />
                  Includes full 5-Year CMA data, DSCR ratio modeling & CA vetted projection report.
                </div>

                <button
                  onClick={() => onOpenConsultation('Project Report building for Govt Loans')}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
                >
                  Generate Bankable DPR Report
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: EMI CALCULATOR */}
          {activeTab === 'emi' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-purple-400" />
                    <span>Commercial & MSME Loan DSA EMI Calculator</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Calculate monthly debt service commitments across our 40+ banking tie-ups.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-semibold">Sanction Amount:</span>
                    <span className="font-bold text-purple-400 font-heading text-lg">
                      ₹{loanAmount} Lakhs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="500"
                    step="5"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>₹5 L (Micro)</span>
                    <span>₹50 L (Unsecured)</span>
                    <span>₹2 Cr (Machinery)</span>
                    <span>₹5 Cr (CGTMSE)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-semibold">Repayment Tenure:</span>
                    <span className="font-bold text-white font-heading">
                      {tenureYears} Years ({tenureYears * 12} Months)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-semibold">Interest Rate:</span>
                    <span className="font-bold text-white font-heading">
                      {interestRate}% p.a.
                    </span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="18"
                    step="0.25"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-purple-950/40 via-slate-900 to-black border border-purple-500/40 text-center space-y-6 shadow-xl">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">
                    Estimated Monthly EMI
                  </span>
                  <div className="text-4xl sm:text-5xl font-extrabold font-heading text-purple-400">
                    ₹{monthlyEmi.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    Per Month for {tenureYears * 12} Months
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left pt-2 border-t border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">
                      Total Interest
                    </div>
                    <div className="text-base font-bold text-slate-200 font-heading">
                      ₹{Math.round(totalInterest / 100000).toFixed(2)} Lakhs
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">
                      Total Repayment
                    </div>
                    <div className="text-base font-bold text-amber-400 font-heading">
                      ₹{Math.round(totalRepayment / 100000).toFixed(2)} Lakhs
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300 text-left">
                  <CheckCircle2 className="w-4 h-4 inline mr-1.5 text-purple-400" />
                  We connect you directly with PSU & Private bank sanction desks with zero upfront broker fees.
                </div>

                <button
                  onClick={() => onOpenConsultation('Loan DSA')}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-purple-500/20 cursor-pointer"
                >
                  Apply via Loan DSA Desk
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
