import React, { useState } from 'react';
import { SPECIALTIES, Specialty } from '../data/legalData';
import { ArrowUpRight } from 'lucide-react';
import { useDesign } from '../context/DesignContext';

interface SpecialtiesSectionProps {
  onSelectSpecialty: (specialty: Specialty) => void;
  onOpenBookingForSpecialty: (specialtyTitle: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialty,
  onOpenBookingForSpecialty,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'empresas' | 'directivos' | 'particulares'>('all');
  const { designVariant } = useDesign();

  const isMinimalista = designVariant === 'minimalista';
  const isCorporativo = designVariant === 'corporativo';

  const filteredSpecialties = activeCategory === 'all' 
    ? SPECIALTIES 
    : SPECIALTIES.filter(s => s.category === activeCategory);

  return (
    <section 
      id="servicios-juridicos" 
      className={`py-20 md:py-28 border-b transition-colors ${
        isCorporativo
          ? 'bg-[#F8FAFC] border-[#CBD5E1]'
          : isMinimalista
          ? 'bg-[#FAFAFA] border-[#E4E4E7]'
          : 'bg-[#F8F7F4] border-[#DDD9D2]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`flex items-center gap-2 text-xs uppercase tracking-widest font-medium mb-3 ${
              isCorporativo ? 'text-[#B45309] font-bold' : isMinimalista ? 'text-[#71717A] font-semibold' : 'text-[#59636B]'
            }`}>
              <span>Servicios Jurídicos</span>
              <span aria-hidden="true">·</span>
              <span>Especialidades & Práctica Especializada</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl tracking-tight [text-wrap:balance] ${
              isMinimalista
                ? 'font-sans font-bold tracking-tighter text-[#09090B]'
                : isCorporativo
                ? 'font-serif font-medium text-[#0F172A]'
                : 'font-serif font-normal text-[#20364B]'
            }`}>
              Servicios Jurídicos & Especialidades
            </h2>
          </div>
          <p className={`text-sm sm:text-base max-w-md font-normal leading-relaxed ${
            isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
          }`}>
            Asistencia jurídica especializada para empresas, directivos y particulares. Prevención de contingencias, solidez contractual y defensa estratégica en controversias.
          </p>
        </div>

        {/* Category Filter - Segmented Control with Functional Buttons */}
        <div className={`flex flex-wrap items-center gap-2 mb-12 pb-4 border-b ${
          isCorporativo ? 'border-[#CBD5E1]' : isMinimalista ? 'border-[#E4E4E7]' : 'border-[#DDD9D2]'
        }`}>
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap ${
              isCorporativo
                ? activeCategory === 'all'
                  ? 'bg-[#0F172A] text-white rounded-md shadow-xs'
                  : 'text-[#475569] hover:bg-[#F1F5F9] rounded-md'
                : isMinimalista
                ? activeCategory === 'all'
                  ? 'bg-[#09090B] text-white rounded-none'
                  : 'text-[#71717A] hover:bg-[#F4F4F5] hover:text-[#09090B] rounded-none'
                : activeCategory === 'all'
                ? 'bg-[#20364B] text-white rounded-sm shadow-xs'
                : 'text-[#59636B] hover:text-[#20364B] hover:bg-[#EFEEE9] rounded-sm'
            }`}
          >
            Todas las Especialidades ({SPECIALTIES.length})
          </button>
          <button
            onClick={() => setActiveCategory('empresas')}
            className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap ${
              isCorporativo
                ? activeCategory === 'empresas'
                  ? 'bg-[#0F172A] text-white rounded-md shadow-xs'
                  : 'text-[#475569] hover:bg-[#F1F5F9] rounded-md'
                : isMinimalista
                ? activeCategory === 'empresas'
                  ? 'bg-[#09090B] text-white rounded-none'
                  : 'text-[#71717A] hover:bg-[#F4F4F5] hover:text-[#09090B] rounded-none'
                : activeCategory === 'empresas'
                ? 'bg-[#20364B] text-white rounded-sm shadow-xs'
                : 'text-[#59636B] hover:text-[#20364B] hover:bg-[#EFEEE9] rounded-sm'
            }`}
          >
            Empresas & Negocios
          </button>
          <button
            onClick={() => setActiveCategory('directivos')}
            className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap ${
              isCorporativo
                ? activeCategory === 'directivos'
                  ? 'bg-[#0F172A] text-white rounded-md shadow-xs'
                  : 'text-[#475569] hover:bg-[#F1F5F9] rounded-md'
                : isMinimalista
                ? activeCategory === 'directivos'
                  ? 'bg-[#09090B] text-white rounded-none'
                  : 'text-[#71717A] hover:bg-[#F4F4F5] hover:text-[#09090B] rounded-none'
                : activeCategory === 'directivos'
                ? 'bg-[#20364B] text-white rounded-sm shadow-xs'
                : 'text-[#59636B] hover:text-[#20364B] hover:bg-[#EFEEE9] rounded-sm'
            }`}
          >
            Alta Dirección & Ejecutivos
          </button>
          <button
            onClick={() => setActiveCategory('particulares')}
            className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap ${
              isCorporativo
                ? activeCategory === 'particulares'
                  ? 'bg-[#0F172A] text-white rounded-md shadow-xs'
                  : 'text-[#475569] hover:bg-[#F1F5F9] rounded-md'
                : isMinimalista
                ? activeCategory === 'particulares'
                  ? 'bg-[#09090B] text-white rounded-none'
                  : 'text-[#71717A] hover:bg-[#F4F4F5] hover:text-[#09090B] rounded-none'
                : activeCategory === 'particulares'
                ? 'bg-[#20364B] text-white rounded-sm shadow-xs'
                : 'text-[#59636B] hover:text-[#20364B] hover:bg-[#EFEEE9] rounded-sm'
            }`}
          >
            Particulares & Familias
          </button>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpecialties.map((specialty) => (
            <div
              key={specialty.id}
              className={`group flex flex-col justify-between p-8 bg-[#FFFFFF] border transition-all ${
                isCorporativo
                  ? 'border-[#CBD5E1] rounded-md hover:border-[#B45309] shadow-xs'
                  : isMinimalista
                  ? 'border-[#E4E4E7] rounded-none hover:border-[#09090B] shadow-none'
                  : 'border-[#DDD9D2] rounded-sm hover:border-[#A9824D]/60 shadow-xs'
              }`}
            >
              <div>
                {/* Number & category kicker */}
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className={`font-bold ${
                    isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                  }`}>
                    {isMinimalista ? `[${specialty.number}]` : specialty.number}
                  </span>
                  <span className={`font-sans text-[11px] uppercase tracking-wider font-medium ${
                    isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                  }`}>
                    {specialty.categoryLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-medium mb-2 leading-snug transition-colors ${
                  isMinimalista
                    ? 'font-sans font-bold text-[#09090B]'
                    : isCorporativo
                    ? 'font-serif text-[#0F172A] group-hover:text-[#B45309]'
                    : 'font-serif text-[#20364B] group-hover:text-[#A9824D]'
                }`}>
                  {specialty.title}
                </h3>

                {/* Subtitle */}
                <p className={`text-xs font-medium mb-4 italic ${
                  isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                }`}>
                  {specialty.subtitle}
                </p>

                {/* Summary */}
                <p className={`text-sm leading-relaxed mb-6 font-normal ${
                  isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                }`}>
                  {specialty.summary}
                </p>

                {/* Key Points */}
                <div className={`mb-6 space-y-2 border-t pt-4 ${
                  isCorporativo ? 'border-[#CBD5E1]' : isMinimalista ? 'border-[#E4E4E7]' : 'border-[#DDD9D2]'
                }`}>
                  <p className={`text-xs uppercase tracking-wider font-semibold mb-2 ${
                    isCorporativo ? 'text-[#0F172A]' : isMinimalista ? 'text-[#09090B]' : 'text-[#20364B]'
                  }`}>
                    Actuaciones habituales:
                  </p>
                  {specialty.keyServices.slice(0, 3).map((item, idx) => (
                    <div key={idx} className={`flex items-start gap-2 text-xs ${
                      isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                    }`}>
                      <span className={`font-bold leading-none mt-1 ${
                        isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                      }`}>―</span>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className={`pt-6 border-t flex items-center justify-between gap-3 ${
                isCorporativo ? 'border-[#CBD5E1]' : isMinimalista ? 'border-[#E4E4E7]' : 'border-[#DDD9D2]'
              }`}>
                <button
                  onClick={() => onSelectSpecialty(specialty)}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isCorporativo
                      ? 'text-[#0F172A] hover:text-[#B45309]'
                      : isMinimalista
                      ? 'text-[#09090B] hover:opacity-70'
                      : 'text-[#20364B] hover:text-[#A9824D]'
                  }`}
                >
                  <span>Ver alcance legal</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${
                    isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                  }`} />
                </button>

                <button
                  onClick={() => onOpenBookingForSpecialty(specialty.title)}
                  className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider border transition-all whitespace-nowrap ${
                    isCorporativo
                      ? 'text-[#0F172A] border-[#CBD5E1] hover:bg-[#0F172A] hover:text-white rounded-md'
                      : isMinimalista
                      ? 'text-[#09090B] border-[#09090B] hover:bg-[#09090B] hover:text-white rounded-none'
                      : 'text-[#20364B] border-[#DDD9D2] hover:bg-[#20364B] hover:text-white rounded-sm'
                  }`}
                >
                  Consultar caso
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct consultation callout strip */}
        <div className={`mt-14 p-8 border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs ${
          isCorporativo
            ? 'bg-[#F1F5F9] border-[#CBD5E1] rounded-md'
            : isMinimalista
            ? 'bg-[#F4F4F5] border-[#E4E4E7] rounded-none shadow-none'
            : 'bg-[#EFEEE9] border-[#DDD9D2] rounded-sm'
        }`}>
          <div className="max-w-2xl">
            <h4 className={`text-xl font-medium mb-1 ${
              isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif text-current'
            }`}>
              ¿Su asunto requiere un enfoque multidisciplinar o una valoración previa?
            </h4>
            <p className={`text-sm leading-relaxed ${
              isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
            }`}>
              Muchos expedientes combinan aspectos societarios, laborales y de derecho civil. Analizamos su caso en conjunto para ofrecerle una estrategia procesal sólida.
            </p>
          </div>
          <button
            onClick={() => onOpenBookingForSpecialty('Consulta General Multidisciplinar')}
            className={`px-6 py-3 text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap shrink-0 shadow-xs ${
              isCorporativo
                ? 'bg-[#0F172A] text-white hover:bg-[#1E293B] rounded-md'
                : isMinimalista
                ? 'bg-[#09090B] text-white hover:bg-[#27272A] rounded-none'
                : 'bg-[#20364B] text-white hover:bg-[#182832] rounded-sm'
            }`}
          >
            Solicitar Dictamen Preliminar
          </button>
        </div>

      </div>
    </section>
  );
};
