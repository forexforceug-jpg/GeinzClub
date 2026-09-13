import React, { useState } from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';
import { UserPlus, ShieldCheck, Search, Sliders, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onJoinClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onJoinClick }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserPlus':
        return <UserPlus className="w-5 h-5 text-[#10E760]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#10E760]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#10E760]" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 text-[#10E760]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#10E760]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#10E760]" />;
    }
  };

  const selectedStepData = HOW_IT_WORKS_STEPS.find((s) => s.step === activeStep) || HOW_IT_WORKS_STEPS[0];

  return (
    <section id="how-it-works" className="py-24 bg-[#080E0B] text-slate-100 relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10E760]/10 border border-[#10E760]/30 text-[#10E760] text-xs font-bold uppercase tracking-wider">
            STEP-BY-STEP PROCESS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A frictionless, verified pathway from application to co-investing in real cashflow businesses.
          </p>
        </div>

        {/* 5-Step Connected Journey */}
        <div className="mt-16">
          
          {/* Desktop Connected Progress Bar */}
          <div className="relative hidden lg:block mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#10E760] to-emerald-400 -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${((activeStep - 1) / 4) * 100}%` }}
            ></div>

            <div className="relative z-10 flex items-center justify-between">
              {HOW_IT_WORKS_STEPS.map((step) => {
                const isActive = activeStep === step.step;
                const isPast = activeStep > step.step;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStep(step.step)}
                    className="flex flex-col items-center group focus:outline-none"
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-base transition-all duration-300 ${
                      isActive
                        ? 'bg-[#10E760] text-[#070D0A] shadow-lg shadow-[#10E760]/40 scale-110 ring-4 ring-[#10E760]/20'
                        : isPast
                        ? 'bg-emerald-950 text-[#10E760] border border-[#10E760]/40'
                        : 'bg-[#0E1813] text-slate-400 border border-white/10 group-hover:border-white/30'
                    }`}>
                      {isPast ? <CheckCircle2 className="w-6 h-6" /> : `0${step.step}`}
                    </div>
                    <span className={`mt-3 text-xs font-semibold max-w-[130px] text-center transition-colors ${
                      isActive ? 'text-[#10E760]' : 'text-slate-400 group-hover:text-slate-200'
                    }`}>
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards for All 5 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {HOW_IT_WORKS_STEPS.map((step) => {
              const isSelected = activeStep === step.step;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#10241A] to-[#0D1B13] border-[#10E760] shadow-xl shadow-[#10E760]/10'
                      : 'bg-[#0B1510] border-white/5 hover:border-white/15 hover:bg-[#0D1B13]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#10E760]/15 border border-[#10E760]/30 flex items-center justify-center">
                        {getStepIcon(step.iconName)}
                      </div>
                      <span className="font-display font-bold text-sm text-slate-500">
                        0{step.step}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {step.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-medium text-emerald-400">
                    <span>{isSelected ? 'Inspecting Step' : 'Click to preview'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-[#10E760]' : 'text-slate-500'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Step Expanded Spotlight Panel */}
          <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#0F2218] via-[#0B1711] to-[#070D0A] border border-[#10E760]/30 p-6 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#10E760] font-semibold uppercase tracking-wider">
                  <span>Step 0{selectedStepData.step} in Detail</span>
                  <span>·</span>
                  <span>{selectedStepData.title}</span>
                </div>
                <h4 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {selectedStepData.shortDesc}
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {selectedStepData.details}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={onJoinClick}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#10E760] text-[#070D0A] font-bold text-sm hover:bg-[#1cf36f] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#10E760]/20"
                >
                  <span>Start with Step 1</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center text-xs text-slate-400">
                  Verification typically completed within 24 hours.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
