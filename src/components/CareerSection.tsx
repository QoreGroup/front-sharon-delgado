import React from 'react';
import { CAREER_MILESTONES, ACADEMIC_CREDENTIALS, ETHICAL_PRINCIPLES } from '../data/legalData';
import { Award, Check, Landmark, ShieldCheck } from 'lucide-react';
import { useDesign } from '../context/DesignContext';

export const CareerSection: React.FC = () => {
  const { designVariant } = useDesign();
  const isMinimalista = designVariant === 'minimalista';
  const isCorporativo = designVariant === 'corporativo';

  return (
    <section 
      id="sobre-mi" 
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
        <div className="max-w-3xl mb-16">
          <div className={`flex items-center gap-2 text-xs uppercase tracking-widest font-medium mb-3 ${
            isCorporativo
              ? 'text-[#B45309] font-bold'
              : isMinimalista
              ? 'text-[#71717A] font-semibold'
              : 'text-[#59636B]'
          }`}>
            <span>Sobre mí</span>
            <span aria-hidden="true">·</span>
            <span>Formación Académica & Experiencia</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 [text-wrap:balance] ${
            isMinimalista
              ? 'font-sans font-bold tracking-tighter text-[#09090B]'
              : isCorporativo
              ? 'font-serif font-medium text-[#0F172A]'
              : 'font-serif font-normal text-[#20364B]'
          }`}>
            Trayectoria Profesional, Formación & Experiencia
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
          }`}>
            Más de catorce años dedicados a la asesoría corporativa, contractual y la defensa en tribunales y mesas de negociación. Rigor en el estudio normativo, templanza estratégica y compromiso deontológico inquebrantable.
          </p>
        </div>

        {/* Boardroom Photo & Bio Feature */}
        <div className={`mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFFFFF] border p-6 sm:p-10 shadow-xs ${
          isCorporativo
            ? 'border-[#CBD5E1] rounded-md'
            : isMinimalista
            ? 'border-[#E4E4E7] rounded-none shadow-none'
            : 'border-[#DDD9D2] rounded-sm'
        }`}>
          <div className="lg:col-span-6">
            <div className={`relative aspect-[16/10] overflow-hidden border ${
              isCorporativo
                ? 'rounded-md bg-[#F1F5F9] border-[#CBD5E1]'
                : isMinimalista
                ? 'rounded-none bg-[#F4F4F5] border-[#E4E4E7]'
                : 'rounded-sm bg-[#EFEEE9] border-[#DDD9D2]'
            }`}>
              <img
                src="/src/assets/images/law_office_architecture_1793927756186.jpg"
                alt="Sede de reuniones y biblioteca jurídica del despacho"
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover ${isMinimalista ? 'grayscale-[15%]' : ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070F1B]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-[11px] text-white font-medium tracking-wide">
                Salón de Juntas & Sala de Negociación Estratégica
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className={`text-xs uppercase tracking-widest font-semibold mb-2 ${
              isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
            }`}>
              Filosofía de Ejercicio
            </span>
            <h3 className={`text-2xl mb-4 ${
              isMinimalista
                ? 'font-sans font-bold tracking-tight text-[#09090B]'
                : isCorporativo
                ? 'font-serif font-medium text-[#0F172A]'
                : 'font-serif font-medium text-[#20364B]'
            }`}>
              "El mejor pleito es el que se gana antes de entrar en sala; cuando la sala es inevitable, la preparación debe ser milimétrica."
            </h3>
            <p className={`text-sm leading-relaxed mb-4 ${
              isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
            }`}>
              Tras formarme en despachos de primer nivel y liderar transacciones corporativas de gran escala, consolido mi práctica con una premisa ineludible: ofrecer el rigor técnico de las grandes firmas con la cercanía, agilidad y devoción personalizada que solo un despacho boutique puede brindar.
            </p>
            <div className={`pt-4 border-t flex flex-wrap items-center gap-6 text-xs ${
              isCorporativo ? 'border-[#CBD5E1] text-[#475569]' : isMinimalista ? 'border-[#E4E4E7] text-[#71717A]' : 'border-[#DDD9D2] text-[#59636B]'
            }`}>
              <div className="flex items-center gap-2">
                <ShieldCheck className={`w-4 h-4 ${
                  isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                }`} />
                <span className="font-medium text-current">Colegiatura Profesional Activa</span>
              </div>
              <div className="flex items-center gap-2">
                <Landmark className={`w-4 h-4 ${
                  isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                }`} />
                <span className="font-medium text-current">Atención Nacional & Regional Latam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="mb-20">
          <h3 className={`text-2xl font-medium mb-8 pb-3 border-b ${
            isCorporativo
              ? 'font-serif text-[#0F172A] border-[#CBD5E1]'
              : isMinimalista
              ? 'font-sans font-bold text-[#09090B] border-[#E4E4E7]'
              : 'font-serif text-[#20364B] border-[#DDD9D2]'
          }`}>
            Hitos y Responsabilidades Profesionales
          </h3>

          <div className="space-y-6">
            {CAREER_MILESTONES.map((milestone, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 bg-[#FFFFFF] border transition-colors shadow-xs ${
                  isCorporativo
                    ? 'border-[#CBD5E1] rounded-md hover:border-[#B45309]'
                    : isMinimalista
                    ? 'border-[#E4E4E7] rounded-none hover:border-[#09090B] shadow-none'
                    : 'border-[#DDD9D2] rounded-sm hover:border-[#A9824D]/60'
                }`}
              >
                <div className="md:col-span-3">
                  <span className={`font-mono text-xs font-semibold block mb-1 ${
                    isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                  }`}>
                    {milestone.period}
                  </span>
                  <p className={`text-xs uppercase tracking-wider font-medium ${
                    isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                  }`}>
                    {milestone.location}
                  </p>
                </div>

                <div className="md:col-span-9">
                  <h4 className={`text-xl font-medium mb-1 ${
                    isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif text-current'
                  }`}>
                    {milestone.role}
                  </h4>
                  <p className={`text-xs font-medium mb-3 ${
                    isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                  }`}>
                    {milestone.institution}
                  </p>
                  <p className={`text-sm leading-relaxed mb-4 ${
                    isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                  }`}>
                    {milestone.description}
                  </p>

                  <div className={`space-y-1.5 pt-3 border-t ${
                    isCorporativo ? 'border-[#CBD5E1]' : isMinimalista ? 'border-[#E4E4E7]' : 'border-[#DDD9D2]'
                  }`}>
                    {milestone.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className={`flex items-start gap-2 text-xs ${
                        isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                      }`}>
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                        }`} />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Credentials & Honors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <span className={`text-xs uppercase tracking-widest font-medium ${
              isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
            }`}>
              Formación de Excelencia
            </span>
            <h3 className={`text-2xl sm:text-3xl font-medium mt-2 mb-4 ${
              isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
            }`}>
              Titulación & Acreditaciones
            </h3>
            <p className={`text-sm leading-relaxed mb-6 ${
              isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
            }`}>
              Una sólida base teórica forjada en las instituciones académicas de mayor prestigio jurídico, complementada con formación continuada en jurisprudencia y técnicas procesales.
            </p>
            <div className={`p-4 border text-xs space-y-2 ${
              isCorporativo
                ? 'bg-[#F1F5F9] border-[#CBD5E1] rounded-md text-[#475569]'
                : isMinimalista
                ? 'bg-[#F4F4F5] border-[#E4E4E7] rounded-none text-[#71717A]'
                : 'bg-[#EFEEE9] border-[#DDD9D2] rounded-sm text-[#59636B]'
            }`}>
              <p className={`font-semibold ${
                isCorporativo ? 'text-[#0F172A]' : isMinimalista ? 'text-[#09090B]' : 'text-[#20364B]'
              }`}>
                Idiomas de Trabajo Profesional:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                <span>Español (Nativo)</span>
                <span>·</span>
                <span>Inglés (Profesional / Jurídico)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {ACADEMIC_CREDENTIALS.map((cred, idx) => (
              <div
                key={idx}
                className={`p-5 bg-[#FFFFFF] border flex items-start gap-4 shadow-xs ${
                  isCorporativo
                    ? 'border-[#CBD5E1] rounded-md'
                    : isMinimalista
                    ? 'border-[#E4E4E7] rounded-none shadow-none'
                    : 'border-[#DDD9D2] rounded-sm'
                }`}
              >
                <div className={`w-10 h-10 border flex items-center justify-center shrink-0 ${
                  isCorporativo
                    ? 'bg-[#F1F5F9] border-[#CBD5E1] rounded-md text-[#B45309]'
                    : isMinimalista
                    ? 'bg-[#F4F4F5] border-[#E4E4E7] rounded-none text-[#09090B]'
                    : 'bg-[#EFEEE9] border-[#DDD9D2] rounded-sm text-[#A9824D]'
                }`}>
                  <Award className="w-5 h-5 text-current" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`font-mono text-xs font-semibold ${
                      isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                    }`}>{cred.year}</span>
                    <span className="text-xs text-current/50">·</span>
                    <span className="text-xs text-current font-medium">{cred.institution}</span>
                  </div>
                  <h4 className={`text-lg font-medium leading-snug ${
                    isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
                  }`}>
                    {cred.title}
                  </h4>
                  <p className="text-xs opacity-80 mt-1 italic">
                    {cred.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Principles Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className={`text-xs uppercase tracking-widest font-medium ${
              isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
            }`}>
              Compromiso Inquebrantable
            </span>
            <h3 className={`text-2xl sm:text-3xl font-medium mt-2 mb-2 ${
              isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
            }`}>
              Pilares Deontológicos
            </h3>
            <p className="text-xs sm:text-sm text-current opacity-80">
              Principios que guían cada consulta, escrito procesal y negociación en nuestro despacho.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ETHICAL_PRINCIPLES.map((pillar, idx) => (
              <div 
                key={idx} 
                className={`p-6 bg-[#FFFFFF] border shadow-xs ${
                  isCorporativo
                    ? 'border-[#CBD5E1] rounded-md'
                    : isMinimalista
                    ? 'border-[#E4E4E7] rounded-none shadow-none'
                    : 'border-[#DDD9D2] rounded-sm'
                }`}
              >
                <h4 className={`text-lg font-medium mb-2 ${
                  isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
                }`}>
                  {pillar.title}
                </h4>
                <p className="text-xs opacity-80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
