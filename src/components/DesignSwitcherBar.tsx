import React from 'react';
import { useDesign } from '../context/DesignContext';
import { DesignVariant, DESIGN_VARIANTS } from '../data/designVariants';
import { SlidersHorizontal, Sparkles, Check, Info } from 'lucide-react';

export const DesignSwitcherBar: React.FC = () => {
  const { designVariant, setDesignVariant, config } = useDesign();

  return (
    <aside 
      aria-label="Selector de Diseño de Página Web" 
      className={`border-b transition-colors z-50 py-2.5 px-4 sm:px-8 text-xs ${
        designVariant === 'corporativo'
          ? 'bg-[#070F1B] text-[#E2E8F0] border-[#1E293B]'
          : designVariant === 'minimalista'
          ? 'bg-[#18181B] text-[#FAFAFA] border-[#27272A]'
          : 'bg-[#182832] text-[#F8F7F4] border-[#253947]'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Title & Explanatory Tagline */}
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-6 h-6 rounded bg-white/10 text-white shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold uppercase tracking-wider text-[11px] text-white">
              Selector de Diseño:
            </span>
            <span className="text-white/70 hidden sm:inline">·</span>
            <span className="text-white/80 text-[11px] font-normal truncate">
              {config.tagline}
            </span>
          </div>
        </div>

        {/* Right: The Requested <select> element + quick switcher buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          
          {/* Main <select> dropdown as explicitly requested */}
          <div className="relative flex items-center gap-1.5 flex-1 sm:flex-initial">
            <label htmlFor="design-variant-select" className="sr-only sm:not-sr-only text-[11px] text-white/70 font-medium">
              Estilo:
            </label>
            <select
              id="design-variant-select"
              value={designVariant}
              onChange={(e) => setDesignVariant(e.target.value as DesignVariant)}
              className="w-full sm:w-auto px-3 py-1.5 text-xs font-semibold rounded bg-white/10 hover:bg-white/20 border border-white/20 text-white focus:outline-none focus:ring-1 focus:ring-white/50 transition-colors cursor-pointer"
            >
              <option value="modelo" className="bg-[#182832] text-white">
                Diseño Modelo (Editorial Boutique)
              </option>
              <option value="minimalista" className="bg-[#18181B] text-white">
                Diseño Minimalista (Swiss Modern)
              </option>
              <option value="corporativo" className="bg-[#070F1B] text-white">
                Diseño Corporativo (Firma Institucional)
              </option>
            </select>
          </div>

          {/* Quick Clickable Buttons for Instant Visual Feedback */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded border border-white/10">
            {(Object.keys(DESIGN_VARIANTS) as DesignVariant[]).map((vKey) => {
              const item = DESIGN_VARIANTS[vKey];
              const isActive = designVariant === vKey;
              return (
                <button
                  key={vKey}
                  type="button"
                  onClick={() => setDesignVariant(vKey)}
                  className={`px-2.5 py-1 text-[11px] font-medium tracking-wide rounded transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white text-[#0F172A] font-semibold shadow-xs'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {isActive && <Check className="w-3 h-3 text-[#0F172A]" />}
                  <span>{item.shortName}</span>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </aside>
  );
};
