import React, { useState } from 'react';
import {
  Globe,
  Presentation,
  Sparkles,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';
import { Logo } from './Logo.tsx';

interface NavbarProps {
  currentView: 'web' | 'ppt';
  onToggleView: (view: 'web' | 'ppt') => void;
  onOpenConsultation: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onToggleView,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (currentView === 'ppt') {
      onToggleView('web');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#030612]/85 backdrop-blur-xl border-b border-amber-500/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div
          onClick={() => {
            if (currentView === 'ppt') onToggleView('web');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer transition-transform hover:scale-[1.02]"
        >
          <Logo size="md" />
        </div>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollToSection('ongoing-projects')}
            className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Ongoing Projects</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              6 Active
            </span>
          </button>
          <button
            onClick={() => scrollToSection('upcoming-projects')}
            className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Upcoming Projects</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              New
            </span>
          </button>
          <button
            onClick={() => scrollToSection('calculators')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Financial Calculators
          </button>
          <button
            onClick={() => scrollToSection('vision-story')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Vision & Leadership
          </button>
          <button
            onClick={() => scrollToSection('about-company')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            About Us
          </button>
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <div className="bg-slate-900/90 p-1 rounded-xl border border-amber-500/20 flex items-center shadow-inner">
            <button
              onClick={() => onToggleView('web')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                currentView === 'web'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Web Portal</span>
            </button>
            <button
              onClick={() => onToggleView('ppt')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                currentView === 'ppt'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Presentation className="w-3.5 h-3.5 text-cyan-300" />
              <span>PPT Deck Mode</span>
            </button>
          </div>

          <button
            onClick={() => onOpenConsultation()}
            className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs transition-transform active:scale-95 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 group-hover:from-amber-300 group-hover:to-amber-500 transition-all rounded-xl" />
            <div className="relative px-4 py-2 rounded-[11px] bg-[#030612] text-amber-300 group-hover:text-white group-hover:bg-transparent transition-all flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Pledge Assistance</span>
            </div>
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onToggleView(currentView === 'web' ? 'ppt' : 'web')}
            className="p-2 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-400 text-xs flex items-center gap-1 cursor-pointer"
          >
            {currentView === 'web' ? (
              <Presentation className="w-4 h-4" />
            ) : (
              <Globe className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b1e]/95 backdrop-blur-2xl border-b border-amber-500/20 px-6 py-5 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400">View Format:</span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  onToggleView('web');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1 rounded text-xs font-semibold ${
                  currentView === 'web' ? 'bg-amber-500 text-black' : 'text-slate-400'
                }`}
              >
                Website
              </button>
              <button
                onClick={() => {
                  onToggleView('ppt');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1 rounded text-xs font-semibold ${
                  currentView === 'ppt' ? 'bg-cyan-500 text-white' : 'text-slate-400'
                }`}
              >
                PPT Deck
              </button>
            </div>
          </div>

          <div className="grid gap-3 text-sm font-medium">
            <button
              onClick={() => scrollToSection('ongoing-projects')}
              className="text-left py-2 border-b border-slate-800/80 text-slate-200 hover:text-amber-400 flex items-center justify-between"
            >
              <span>Ongoing Projects (6 Services)</span>
              <ArrowRight className="w-4 h-4 text-amber-500" />
            </button>
            <button
              onClick={() => scrollToSection('upcoming-projects')}
              className="text-left py-2 border-b border-slate-800/80 text-slate-200 hover:text-amber-400 flex items-center justify-between"
            >
              <span>Upcoming Projects (Debt Recovery & Real Estate)</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
            <button
              onClick={() => scrollToSection('calculators')}
              className="text-left py-2 border-b border-slate-800/80 text-slate-200 hover:text-amber-400 flex items-center justify-between"
            >
              <span>Financial Calculators & Tools</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => scrollToSection('vision-story')}
              className="text-left py-2 border-b border-slate-800/80 text-slate-200 hover:text-amber-400 flex items-center justify-between"
            >
              <span>Vision & Leadership</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => scrollToSection('about-company')}
              className="text-left py-2 text-slate-200 hover:text-amber-400 flex items-center justify-between"
            >
              <span>Corporate Profile & Contact</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Pledge Assistance Now</span>
          </button>
        </div>
      )}
    </header>
  );
};
