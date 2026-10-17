import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'MSME ZED Certifications',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    service: defaultService,
    turnover: '₹50 Lakhs - ₹2 Crores',
    city: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [docketNumber, setDocketNumber] = useState<string>('');

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const docket = `SPACE-${Math.floor(100000 + Math.random() * 900000)}`;
    setDocketNumber(docket);
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#070b1e] border-2 border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600" />
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Assistance Pledge Initiated!</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Thank you, <strong className="text-amber-400">{formData.fullName}</strong>. Your consultation docket for <strong className="text-white">{formData.service}</strong> has been logged into the SPACE India Limited dispatch system.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/30 max-w-sm mx-auto space-y-1">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">
                Docket Tracking Reference:
              </div>
              <div className="text-xl font-bold font-heading text-amber-400 tracking-wider">
                {docketNumber}
              </div>
              <div className="text-[10px] text-emerald-400 font-semibold flex items-center justify-center gap-1 pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Assigned to Senior Financial Specialist</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all cursor-pointer"
              >
                Return to Overview
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-2">
              <Logo size="sm" />
              <h3 className="text-2xl font-bold text-white tracking-tight pt-1">
                Pledge Assistance Request
              </h3>
              <p className="text-xs text-slate-400">
                Connect directly with our corporate advisory desk. A specialized lead consultant will review your business requirements within 2 business hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Enterprise / Firm Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Industries Pvt Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="corporate@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Project / Service Required *</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none cursor-pointer"
                >
                  <option value="MSME ZED Certifications">
                    MSME ZED Certifications (Bronze / Silver / Gold)
                  </option>
                  <option value="Credit Score Recovery (Repair)">
                    Credit Score Recovery (Repair & Bureau Disputes)
                  </option>
                  <option value="Project Report building for Govt Loans">
                    Project Report Building for Govt Loans (PMEGP / Mudra / CGTMSE)
                  </option>
                  <option value="ISO Lead Audit & Certification">
                    ISO Lead Audit & Certification (9001, 14001, 27001, 45001)
                  </option>
                  <option value="Loan DSA">
                    Loan DSA (Unsecured, Machinery, Working Capital)
                  </option>
                  <option value="Insurance Agency">
                    Insurance Agency (Keyman, Fire, Transit, Group Health)
                  </option>
                  <option value="Debt Recovery Agency">
                    Upcoming: Debt Recovery Agency (Corporate Receivables)
                  </option>
                  <option value="Real Estate Projects">
                    Upcoming: Real Estate Projects (Industrial Clusters)
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Annual Turnover / Fund Size</label>
                  <select
                    value={formData.turnover}
                    onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none cursor-pointer"
                  >
                    <option value="Under ₹50 Lakhs">Under ₹50 Lakhs</option>
                    <option value="₹50 Lakhs - ₹2 Crores">₹50 Lakhs - ₹2 Crores</option>
                    <option value="₹2 Crores - ₹10 Crores">₹2 Crores - ₹10 Crores</option>
                    <option value="₹10 Crores - ₹50 Crores">₹10 Crores - ₹50 Crores</option>
                    <option value="₹50 Crores+">₹50 Crores+</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">City / State</label>
                  <input
                    type="text"
                    placeholder="e.g. Cuttack, Odisha"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Specific Objectives / Notes</label>
                <textarea
                  rows={2}
                  placeholder="Describe your current bottleneck (e.g. CIBIL score 570, need PMEGP ₹25L DPR, applying for ZED Silver)..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Submit Assistance Request</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
