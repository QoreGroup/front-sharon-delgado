import React, { useState } from 'react';
import { TESTIMONIALS, SUCCESS_CASES } from '../data/legalData';
import { Quote, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';
import { useDesign } from '../context/DesignContext';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'empresarial' | 'directivos' | 'inmobiliario' | 'civil'>('all');
  const { designVariant } = useDesign();

  const isMinimalista = designVariant === 'minimalista';
  const isCorporativo = designVariant === 'corporativo';

  const filteredList = selectedFilter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === selectedFilter);

  const featured = TESTIMONIALS[0];

  return (
    <section 
      id="casos-de-exito" 
      className={`py-20 md:py-28 border-b transition-colors ${
        isCorporativo
          ? 'bg-[#F1F5F9] border-[#CBD5E1]'
          : isMinimalista
          ? 'bg-[#F4F4F5] border-[#E4E4E7]'
          : 'bg-[#EFEEE9] border-[#DDD9D2]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className={`flex items-center gap-2 text-xs uppercase tracking-widest font-medium mb-3 ${
              isCorporativo ? 'text-[#B45309] font-bold' : isMinimalista ? 'text-[#71717A] font-semibold' : 'text-[#59636B]'
            }`}>
              <span>Experiencia Profesional & Precedentes</span>
              <span aria-hidden="true">·</span>
              <span>Rigor Probado</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl tracking-tight [text-wrap:balance] ${
              isMinimalista
                ? 'font-sans font-bold tracking-tighter text-[#09090B]'
                : isCorporativo
                ? 'font-serif font-medium text-[#0F172A]'
                : 'font-serif font-normal text-[#20364B]'
            }`}>
              Experiencia y Casos de Éxito
            </h2>
          </div>
          <p className={`text-sm sm:text-base max-w-md font-normal leading-relaxed ${
            isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
          }`}>
            Presentación de experiencia profesional consolidada, casos autorizados para publicación con reserva de identidad y testimonios de directivos y empresas.
          </p>
        </div>

        {/* 1. Casos de Éxito Autorizados para Publicación */}
        <div className="mb-20">
          <div className={`flex items-center justify-between mb-8 pb-3 border-b ${
            isCorporativo ? 'border-[#CBD5E1]' : isMinimalista ? 'border-[#E4E4E7]' : 'border-[#DDD9D2]'
          }`}>
            <div>
              <span className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
                isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
              }`}>
                PRECEDENTES DOCUMENTADOS
              </span>
              <h3 className={`text-2xl font-medium mt-0.5 ${
                isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif text-current'
              }`}>
                Casos Autorizados para Publicación
              </h3>
            </div>
            <span className="text-xs opacity-75 font-mono hidden sm:inline">
              Confidencialidad amparada bajo consentimiento formal
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SUCCESS_CASES.map((item) => (
              <div
                key={item.id}
                className={`p-8 bg-[#FFFFFF] border flex flex-col justify-between transition-all shadow-xs ${
                  isCorporativo
                    ? 'border-[#CBD5E1] rounded-md hover:border-[#B45309]'
                    : isMinimalista
                    ? 'border-[#E4E4E7] rounded-none hover:border-[#09090B] shadow-none'
                    : 'border-[#DDD9D2] rounded-sm hover:border-[#A9824D]/60'
                }`}
              >
                <div>
                  {/* Top unboxed tags */}
                  <div className="flex items-center justify-between text-xs opacity-80 mb-3">
                    <span className={`font-mono font-semibold ${
                      isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                    }`}>{item.code}</span>
                    <span className="flex items-center gap-1.5 text-emerald-800 text-[11px] font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Autorizado para publicación</span>
                    </span>
                  </div>

                  <h4 className={`text-xl font-medium mb-2 leading-snug ${
                    isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
                  }`}>
                    {item.title}
                  </h4>
                  <p className="text-xs opacity-80 mb-4">
                    {item.area} · <strong className="font-semibold">{item.sector}</strong>
                  </p>

                  <div className="space-y-3 text-xs mb-6">
                    <div className={`p-3 border ${
                      isCorporativo
                        ? 'bg-[#F8FAFC] border-[#CBD5E1] rounded-md'
                        : isMinimalista
                        ? 'bg-[#FAFAFA] border-[#E4E4E7] rounded-none'
                        : 'bg-[#F8F7F4] border-[#DDD9D2] rounded-sm'
                    }`}>
                      <span className="font-semibold block mb-1">El Desafío Jurídico:</span>
                      <p className="leading-relaxed opacity-85">{item.challenge}</p>
                    </div>

                    <div className={`p-3 border ${
                      isCorporativo
                        ? 'bg-[#F1F5F9] border-[#CBD5E1] rounded-md'
                        : isMinimalista
                        ? 'bg-[#F4F4F5] border-[#E4E4E7] rounded-none'
                        : 'bg-[#EFEEE9]/60 border-[#DDD9D2] rounded-sm'
                    }`}>
                      <span className="font-semibold block mb-1">Estrategia Aplicada:</span>
                      <p className="leading-relaxed opacity-85">{item.legalStrategy}</p>
                    </div>
                  </div>
                </div>

                <div className={`pt-4 border-t ${
                  isCorporativo ? 'border-[#CBD5E1]' : isMinimalista ? 'border-[#E4E4E7]' : 'border-[#DDD9D2]'
                }`}>
                  <span className="text-[11px] uppercase tracking-wider opacity-75 font-medium block mb-1">
                    Resultado Obtenido:
                  </span>
                  <p className={`text-base font-medium leading-snug ${
                    isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
                  }`}>
                    {item.quantifiedResult}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Featured Testimonial Pull-Quote */}
        <div className={`mb-16 p-8 sm:p-12 bg-[#FFFFFF] border relative overflow-hidden shadow-xs ${
          isCorporativo
            ? 'border-[#CBD5E1] rounded-md'
            : isMinimalista
            ? 'border-[#E4E4E7] rounded-none shadow-none'
            : 'border-[#DDD9D2] rounded-sm'
        }`}>
          <Quote className={`w-16 h-16 absolute top-6 right-6 pointer-events-none opacity-20 ${
            isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#20364B]'
          }`} />
          
          <div className="max-w-3xl relative z-10">
            <div className={`flex items-center gap-2 text-xs uppercase tracking-wider font-semibold mb-4 ${
              isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
            }`}>
              <span>Testimonio Destacado</span>
              <span aria-hidden="true">·</span>
              <span className="font-normal opacity-80">{featured.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">{featured.year}</span>
            </div>

            <p className={`text-xl sm:text-2xl lg:text-3xl leading-snug mb-8 [text-wrap:balance] ${
              isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif font-normal text-current'
            }`}>
              "{featured.quote}"
            </p>

            <div className={`pt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              isCorporativo ? 'border-[#CBD5E1]' : isMinimalista ? 'border-[#E4E4E7]' : 'border-[#DDD9D2]'
            }`}>
              <div>
                <h4 className={`text-lg font-medium ${
                  isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
                }`}>
                  {featured.author}
                </h4>
                <p className="text-xs opacity-75">
                  {featured.role} · <span className="font-medium">{featured.organization}</span>
                </p>
              </div>

              <div className="text-xs opacity-85 max-w-xs text-left sm:text-right">
                <span className="font-semibold">Resultado: </span>
                {featured.outcome}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Category Filters */}
        <div className={`flex flex-wrap items-center gap-2 mb-10 pb-3 border-b ${
          isCorporativo ? 'border-[#CBD5E1]' : isMinimalista ? 'border-[#E4E4E7]' : 'border-[#DDD9D2]'
        }`}>
          {[
            { id: 'all', label: `Todos los Testimonios (${TESTIMONIALS.length})` },
            { id: 'empresarial', label: 'Empresas & Negocios' },
            { id: 'directivos', label: 'Alta Dirección' },
            { id: 'inmobiliario', label: 'Inmobiliario & Patrimonio' },
            { id: 'civil', label: 'Profesionales' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
                selectedFilter === tab.id
                  ? isCorporativo
                    ? 'bg-[#0F172A] text-white rounded-md'
                    : isMinimalista
                    ? 'bg-[#09090B] text-white rounded-none'
                    : 'bg-[#20364B] text-white rounded-sm'
                  : isCorporativo
                  ? 'text-[#475569] hover:bg-[#F1F5F9] rounded-md'
                  : isMinimalista
                  ? 'text-[#71717A] hover:bg-[#FFFFFF] hover:text-[#09090B] rounded-none'
                  : 'text-[#59636B] hover:text-[#20364B] hover:bg-[#FFFFFF] rounded-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredList.map((t) => (
            <div
              key={t.id}
              className={`p-8 bg-[#FFFFFF] border flex flex-col justify-between transition-all shadow-xs ${
                isCorporativo
                  ? 'border-[#CBD5E1] rounded-md hover:border-[#B45309]'
                  : isMinimalista
                  ? 'border-[#E4E4E7] rounded-none hover:border-[#09090B] shadow-none'
                  : 'border-[#DDD9D2] rounded-sm hover:border-[#A9824D]/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs opacity-75 mb-4">
                  <span className="font-medium">{t.categoryLabel}</span>
                  <span className="font-mono text-[11px]">{t.year}</span>
                </div>

                <p className={`text-sm leading-relaxed mb-6 font-normal italic ${
                  isMinimalista ? 'font-sans text-[#09090B]' : ''
                }`}>
                  "{t.quote}"
                </p>

                <div className={`p-3 text-xs mb-6 border ${
                  isCorporativo
                    ? 'bg-[#F8FAFC] border-[#CBD5E1] rounded-md text-[#475569]'
                    : isMinimalista
                    ? 'bg-[#FAFAFA] border-[#E4E4E7] rounded-none text-[#71717A]'
                    : 'bg-[#F8F7F4] border-[#DDD9D2] rounded-sm text-[#59636B]'
                }`}>
                  <span className="font-medium">Contexto del caso: </span>
                  {t.context}
                </div>
              </div>

              <div className={`pt-4 border-t ${
                isCorporativo ? 'border-[#CBD5E1]' : isMinimalista ? 'border-[#E4E4E7]' : 'border-[#DDD9D2]'
              }`}>
                <h4 className={`text-base font-medium ${
                  isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
                }`}>
                  {t.author}
                </h4>
                <p className="text-xs opacity-75 mt-0.5">
                  {t.role} · <span className="font-medium">{t.organization}</span>
                </p>
                <div className={`text-[11px] font-medium mt-2 ${
                  isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                }`}>
                  Resultado: {t.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Strip */}
        <div className={`mt-16 pt-10 border-t grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left ${
          isCorporativo ? 'border-[#CBD5E1]' : isMinimalista ? 'border-[#E4E4E7]' : 'border-[#DDD9D2]'
        }`}>
          <div>
            <p className={`text-3xl font-medium tabular-nums ${
              isMinimalista ? 'font-sans font-bold' : 'font-serif'
            }`}>
              99%
            </p>
            <p className="text-xs opacity-75 mt-1">
              Satisfacción documentada en encuestas de cierre de expediente
            </p>
          </div>

          <div>
            <p className={`text-3xl font-medium tabular-nums ${
              isMinimalista ? 'font-sans font-bold' : 'font-serif'
            }`}>
              85%
            </p>
            <p className="text-xs opacity-75 mt-1">
              De nuevos clientes acuden recomendados por clientes anteriores
            </p>
          </div>

          <div className="flex items-center justify-center sm:justify-start">
            <button
              onClick={onOpenBooking}
              className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-6 py-3 transition-colors shadow-sm ${
                isCorporativo
                  ? 'bg-[#0F172A] text-white hover:bg-[#1E293B] rounded-md'
                  : isMinimalista
                  ? 'bg-[#09090B] text-white hover:bg-[#27272A] rounded-none'
                  : 'bg-[#20364B] text-white hover:bg-[#182832] rounded-sm'
              }`}
            >
              <span>Consultar Viabilidad de su Caso</span>
              <ArrowRight className={`w-3.5 h-3.5 ${
                isCorporativo ? 'text-[#C28833]' : isMinimalista ? 'text-zinc-400' : 'text-[#A9824D]'
              }`} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
