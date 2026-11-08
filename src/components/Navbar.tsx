import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import { useDesign } from '../context/DesignContext';
import { DesignVariant } from '../data/designVariants';

interface NavbarProps {
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { designVariant, setDesignVariant, config } = useDesign();

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Servicios jurídicos', href: '#servicios-juridicos' },
    { label: 'Casos de éxito', href: '#casos-de-exito' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Dynamic styling based on design variant
  const isMinimalista = designVariant === 'minimalista';
  const isCorporativo = designVariant === 'corporativo';

  return (
    <header 
      className={`sticky top-0 z-40 transition-colors backdrop-blur-md ${
        isCorporativo
          ? 'bg-[#0F172A]/98 text-white border-b border-[#1E293B]'
          : isMinimalista
          ? 'bg-white/98 text-[#09090B] border-b border-[#E4E4E7]'
          : 'bg-[#F8F7F4]/95 text-[#20364B] border-b border-[#DDD9D2]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a 
          href="#inicio" 
          className={`text-2xl tracking-tight transition-opacity whitespace-nowrap shrink-0 flex items-baseline gap-2 ${
            isMinimalista 
              ? 'font-sans font-bold tracking-tighter text-[#09090B]' 
              : isCorporativo
              ? 'font-serif font-medium tracking-tight text-white'
              : 'font-serif font-medium tracking-tight text-[#20364B]'
          }`}
        >
          <span>Elena Valenzuela</span>
          <span className={`text-[11px] font-sans uppercase tracking-widest hidden sm:inline ${
            isCorporativo
              ? 'text-[#C28833] font-semibold'
              : isMinimalista
              ? 'text-[#71717A] font-semibold'
              : 'text-[#59636B] font-medium'
          }`}>
            · <span className={isCorporativo ? 'text-[#C28833]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'}>
              {isCorporativo ? 'Corporate Law Firm' : 'Qore Latam Legal'}
            </span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className={`hidden lg:flex items-center gap-8 text-[13px] tracking-wide uppercase font-medium ${
          isCorporativo 
            ? 'text-slate-300' 
            : isMinimalista 
            ? 'text-zinc-600 font-semibold' 
            : 'text-[#59636B]'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`transition-colors relative py-1 whitespace-nowrap shrink-0 ${
                isCorporativo
                  ? 'hover:text-white hover:border-b hover:border-[#C28833]'
                  : isMinimalista
                  ? 'hover:text-[#09090B] hover:border-b hover:border-[#09090B]'
                  : 'hover:text-[#20364B] hover:border-b hover:border-[#20364B]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: CTA & Compact In-Nav Selector */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          {/* Quick Select inside header for convenience */}
          <div className="flex items-center gap-1.5 text-xs">
            <select
              aria-label="Seleccionar diseño web"
              value={designVariant}
              onChange={(e) => setDesignVariant(e.target.value as DesignVariant)}
              className={`px-2.5 py-1.5 text-[11px] font-medium rounded border transition-colors cursor-pointer outline-none ${
                isCorporativo
                  ? 'bg-slate-800/80 text-white border-slate-700 hover:border-slate-500'
                  : isMinimalista
                  ? 'bg-zinc-100 text-zinc-900 border-zinc-300 hover:border-zinc-400 rounded-none'
                  : 'bg-white text-[#20364B] border-[#DDD9D2] hover:border-[#20364B]'
              }`}
            >
              <option value="modelo">Diseño: Modelo</option>
              <option value="minimalista">Diseño: Minimalista</option>
              <option value="corporativo">Diseño: Corporativo</option>
            </select>
          </div>

          <button
            onClick={onOpenBookingModal}
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap shrink-0 shadow-sm ${
              isCorporativo
                ? 'bg-[#B45309] text-white hover:bg-[#92400E] rounded-md'
                : isMinimalista
                ? 'bg-[#09090B] text-white hover:bg-[#27272A] rounded-none'
                : 'bg-[#20364B] text-white hover:bg-[#182832] rounded-sm'
            }`}
          >
            <span>Agendar Consulta</span>
            <ArrowUpRight className={`w-3.5 h-3.5 ${
              isCorporativo ? 'text-amber-200' : isMinimalista ? 'text-zinc-400' : 'text-[#A9824D]'
            }`} />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-colors ${
              isCorporativo ? 'text-white' : 'text-[#20364B]'
            }`}
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-6 py-6 shadow-lg animate-in fade-in duration-200 ${
          isCorporativo 
            ? 'bg-[#0F172A] border-slate-800 text-white' 
            : isMinimalista 
            ? 'bg-white border-zinc-200 text-[#09090B]' 
            : 'bg-[#F8F7F4] border-[#DDD9D2] text-[#20364B]'
        }`}>
          {/* Mobile Design Selector */}
          <div className="mb-4 pb-4 border-b border-white/10">
            <label className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
              Elegir Diseño:
            </label>
            <select
              value={designVariant}
              onChange={(e) => setDesignVariant(e.target.value as DesignVariant)}
              className="w-full px-3 py-2 text-xs rounded border bg-transparent"
            >
              <option value="modelo">Diseño Modelo (Editorial Boutique)</option>
              <option value="minimalista">Diseño Minimalista (Swiss Modern)</option>
              <option value="corporativo">Diseño Corporativo (Firma Institucional)</option>
            </select>
          </div>

          <nav className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 border-b border-current/10 hover:opacity-80 transition-opacity"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className={`w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase transition-all ${
                  isCorporativo
                    ? 'bg-[#B45309] text-white rounded-md'
                    : isMinimalista
                    ? 'bg-[#09090B] text-white rounded-none'
                    : 'bg-[#20364B] text-white rounded-sm'
                }`}
              >
                <span>Agendar Consulta</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
