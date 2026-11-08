import React from 'react';
import { ArrowRight, ShieldCheck, Scale, Award, Building2 } from 'lucide-react';
import { useDesign } from '../context/DesignContext';

interface HeroProps {
  onOpenBookingModal: () => void;
  onExploreSpecialties: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onExploreSpecialties }) => {
  const { designVariant, config } = useDesign();
  const isMinimalista = designVariant === 'minimalista';
  const isCorporativo = designVariant === 'corporativo';

  return (
    <section 
      id="inicio" 
      className={`relative pt-12 pb-20 md:pt-16 md:pb-28 border-b transition-colors ${
        isCorporativo
          ? 'bg-[#F8FAFC] border-[#CBD5E1]'
          : isMinimalista
          ? 'bg-[#FAFAFA] border-[#E4E4E7]'
          : 'bg-[#F8F7F4] border-[#DDD9D2]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Design-specific kicker */}
            <div className={`flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest font-medium mb-6 ${
              isCorporativo
                ? 'text-[#475569]'
                : isMinimalista
                ? 'text-[#71717A] font-semibold'
                : 'text-[#59636B]'
            }`}>
              {isCorporativo ? (
                <>
                  <span className="flex items-center gap-1.5 text-[#B45309] font-bold">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Firma Jurídica & Litigios Corporativos</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Sede Regional Latam</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#0F172A] font-semibold">Qore Latam Legal</span>
                </>
              ) : isMinimalista ? (
                <>
                  <span className="text-[#09090B] font-bold">ESTUDIO JURÍDICO</span>
                  <span aria-hidden="true">/</span>
                  <span>ELENA VALENZUELA</span>
                  <span aria-hidden="true">/</span>
                  <span>LIMA · LATAM</span>
                </>
              ) : (
                <>
                  <span>Marca Personal & Asesoría Integral</span>
                  <span aria-hidden="true">·</span>
                  <span>Elena Valenzuela</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#20364B] font-semibold">Qore Latam Legal</span>
                </>
              )}
            </div>

            {/* Display headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl leading-[1.12] mb-6 [text-wrap:balance] ${
              isMinimalista
                ? 'font-sans font-bold tracking-tighter text-[#09090B]'
                : isCorporativo
                ? 'font-serif font-medium tracking-tight text-[#0F172A]'
                : 'font-serif font-normal tracking-tight text-[#20364B]'
            }`}>
              {isCorporativo
                ? 'Estrategia jurídica de alto nivel, rigor corporativo y defensa patrimonial integral.'
                : isMinimalista
                ? 'Defensa técnica precisa, claridad normativa y compromiso directo.'
                : 'Defensa rigurosa, claridad jurídica y compromiso absoluto con su causa.'}
            </h1>

            {/* Subtitle */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-8 ${
              isCorporativo
                ? 'text-[#475569]'
                : isMinimalista
                ? 'text-[#71717A]'
                : 'text-[#59636B]'
            }`}>
              {isCorporativo
                ? 'Dirección letrada para directorios, empresas y patrimonios que requieren blindaje contractual, cumplimiento regulatorio estricto y resolución de controversias de alta complejidad.'
                : isMinimalista
                ? 'Acompañamiento legal directo sin burocracia ni intermediarios. Enfoque analítico y ejecución milimétrica para empresas, directivos y asuntos estratégicos.'
                : 'Acompañamiento legal de alto nivel para empresas, directivos y particulares. Asesoría estratégica donde cada detalle normativo cuenta y la discreción y honestidad de criterio son nuestra máxima prioridad.'}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                onClick={onOpenBookingModal}
                className={`inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase transition-all shadow-sm ${
                  isCorporativo
                    ? 'bg-[#0F172A] text-white hover:bg-[#1E293B] rounded-md'
                    : isMinimalista
                    ? 'bg-[#09090B] text-white hover:bg-[#27272A] rounded-none'
                    : 'bg-[#20364B] text-white hover:bg-[#182832] rounded-sm'
                }`}
              >
                <span>Solicitar Primera Consulta</span>
                <ArrowRight className={`w-4 h-4 ${
                  isCorporativo ? 'text-[#C28833]' : isMinimalista ? 'text-zinc-400' : 'text-[#A9824D]'
                }`} />
              </button>
              
              <button
                onClick={onExploreSpecialties}
                className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase bg-transparent transition-all border ${
                  isCorporativo
                    ? 'text-[#0F172A] border-[#CBD5E1] hover:bg-[#F1F5F9] rounded-md'
                    : isMinimalista
                    ? 'text-[#09090B] border-[#09090B] hover:bg-[#09090B] hover:text-white rounded-none'
                    : 'text-[#20364B] border-[#DDD9D2] hover:bg-[#EFEEE9] rounded-sm'
                }`}
              >
                <span>Explorar Especialidades</span>
              </button>
            </div>

            {/* Proof Metric Strip */}
            <div className={`pt-8 border-t grid grid-cols-2 sm:grid-cols-4 gap-6 ${
              isCorporativo
                ? 'border-[#CBD5E1] text-[#0F172A]'
                : isMinimalista
                ? 'border-[#E4E4E7] text-[#09090B]'
                : 'border-[#DDD9D2] text-[#20364B]'
            }`}>
              <div>
                <p className={`text-3xl font-medium tracking-tight tabular-nums ${
                  isMinimalista ? 'font-sans font-bold' : 'font-serif'
                }`}>
                  14+
                </p>
                <p className={`text-xs mt-1 font-medium leading-snug ${
                  isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                }`}>
                  Años de ejercicio profesional
                </p>
              </div>

              <div>
                <p className={`text-3xl font-medium tracking-tight tabular-nums ${
                  isMinimalista ? 'font-sans font-bold' : 'font-serif'
                }`}>
                  96%
                </p>
                <p className={`text-xs mt-1 font-medium leading-snug ${
                  isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                }`}>
                  Resoluciones favorables
                </p>
              </div>

              <div>
                <p className={`text-3xl font-medium tracking-tight tabular-nums ${
                  isMinimalista ? 'font-sans font-bold' : 'font-serif'
                }`}>
                  380+
                </p>
                <p className={`text-xs mt-1 font-medium leading-snug ${
                  isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                }`}>
                  Expedientes asesorados
                </p>
              </div>

              <div>
                <p className={`text-3xl font-medium tracking-tight tabular-nums ${
                  isMinimalista ? 'font-sans font-bold' : 'font-serif'
                }`}>
                  100%
                </p>
                <p className={`text-xs mt-1 font-medium leading-snug ${
                  isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                }`}>
                  Secreto profesional
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Lawyer Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className={`relative aspect-[3/4] overflow-hidden border shadow-xs ${
                isCorporativo
                  ? 'rounded-md bg-[#F1F5F9] border-[#CBD5E1]'
                  : isMinimalista
                  ? 'rounded-none bg-[#F4F4F5] border-[#E4E4E7]'
                  : 'rounded-sm bg-[#EFEEE9] border-[#DDD9D2]'
              }`}>
                <img
                  src="/src/assets/images/sharon-delgado-portrait.png"
                  alt="Sharon Delgado, abogada y consultora jurídica"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover object-top ${
                    isMinimalista ? 'grayscale-[20%] contrast-[1.05]' : ''
                  }`}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />

                {/* Scrim with attribution badge */}
                <div className={`absolute inset-x-0 bottom-0 p-6 text-white flex flex-col justify-end ${
                  isCorporativo
                    ? 'bg-gradient-to-t from-[#070F1B]/95 via-[#070F1B]/50 to-transparent'
                    : isMinimalista
                    ? 'bg-gradient-to-t from-black/90 via-black/40 to-transparent'
                    : 'bg-gradient-to-t from-[#182832]/90 via-[#182832]/40 to-transparent'
                }`}>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium mb-1">
                    {isCorporativo ? (
                      <span className="flex items-center gap-1 text-[#C28833] font-bold">
                        <Award className="w-3.5 h-3.5" />
                        <span>Socia Directora · LL.M.</span>
                      </span>
                    ) : (
                      <span className={`flex items-center gap-1 font-semibold ${
                        isMinimalista ? 'text-zinc-300' : 'text-[#A9824D]'
                      }`}>
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Letrada Titular</span>
                      </span>
                    )}
                  </div>
                  <h3 className={`text-xl text-white ${
                    isMinimalista ? 'font-sans font-bold tracking-tight' : 'font-serif font-medium'
                  }`}>
                    Elena Valenzuela
                  </h3>
                  <p className="text-xs text-white/85 mt-0.5">
                    Máster en Asesoría Jurídica de Empresas (LL.M.) · Mediadora Mercantil
                  </p>
                </div>
              </div>

              {/* Offset decorative border for non-minimalist */}
              {!isMinimalista && (
                <div className={`hidden sm:block absolute -bottom-3 -right-3 w-full h-full border -z-10 pointer-events-none ${
                  isCorporativo
                    ? 'border-[#CBD5E1] rounded-md'
                    : 'border-[#DDD9D2] rounded-sm'
                }`} />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
