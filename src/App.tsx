/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Presentation, Globe, Sparkles } from 'lucide-react';
import { CosmicBackground } from './components/CosmicBackground.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { OngoingServices } from './components/OngoingServices.tsx';
import { FinancialCalculators } from './components/FinancialCalculators.tsx';
import { UpcomingServices } from './components/UpcomingServices.tsx';
import { VisionStory } from './components/VisionStory.tsx';
import { Footer } from './components/Footer.tsx';
import { PptDeck } from './components/PptDeck.tsx';
import { ConsultationModal } from './components/ConsultationModal.tsx';

export default function App() {
  const [currentView, setCurrentView] = useState<'web' | 'ppt'>('web');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationService, setConsultationService] = useState<string>('MSME ZED Certifications');
  const [calculatorTab, setCalculatorTab] = useState<string>('credit');

  const handleOpenConsultation = (service?: string) => {
    if (service) {
      setConsultationService(service);
    }
    setIsConsultationOpen(true);
  };

  const handleOpenCalculator = (tab: string) => {
    setCalculatorTab(tab);
    const el = document.getElementById('calculators');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030612] text-slate-100 relative selection:bg-amber-500 selection:text-black">
      <CosmicBackground />

      {currentView === 'ppt' ? (
        <PptDeck
          onSwitchToWeb={() => setCurrentView('web')}
          onOpenConsultation={handleOpenConsultation}
        />
      ) : (
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar
            currentView={currentView}
            onToggleView={setCurrentView}
            onOpenConsultation={handleOpenConsultation}
          />

          <main className="flex-1">
            <Hero
              onToggleView={setCurrentView}
              onOpenConsultation={handleOpenConsultation}
            />

            <OngoingServices
              onOpenConsultation={handleOpenConsultation}
              onOpenCalculator={handleOpenCalculator}
            />

            <FinancialCalculators
              initialTab={calculatorTab}
              onOpenConsultation={handleOpenConsultation}
            />

            <UpcomingServices onOpenConsultation={handleOpenConsultation} />

            <VisionStory />
          </main>

          <Footer
            onOpenConsultation={handleOpenConsultation}
            onToggleView={setCurrentView}
          />

          {/* Floating Actions on Bottom Right */}
          <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
            <button
              onClick={() => setCurrentView(currentView === 'web' ? 'ppt' : 'web')}
              className="px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-amber-500/40 text-xs font-bold text-amber-300 backdrop-blur-xl shadow-xl flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
            >
              {currentView === 'web' ? (
                <>
                  <Presentation className="w-4 h-4 text-cyan-400" />
                  <span>View PPT Prototype Deck</span>
                </>
              ) : (
                <>
                  <Globe className="w-4 h-4 text-amber-400" />
                  <span>Back to Website</span>
                </>
              )}
            </button>

            <button
              onClick={() => handleOpenConsultation()}
              className="p-3 rounded-full bg-amber-500 hover:bg-amber-400 text-black shadow-xl shadow-amber-500/25 transition-transform hover:scale-105 cursor-pointer"
              title="Pledge Assistance Consultation"
            >
              <Sparkles className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={consultationService}
      />
    </div>
  );
}
