import React, { useState } from 'react';
import { SERVICES } from '../data/legalData';
import { ArrowUpRight, Check, Clock, FileText, Shield } from 'lucide-react';
import { useDesign } from '../context/DesignContext';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  // Interactive Assessment Estimator State
  const [clientType, setClientType] = useState<'empresa' | 'particular' | 'directivo'>('empresa');
  const [urgency, setUrgency] = useState<'estandar' | 'urgente' | 'continuo'>('estandar');
  const [modality, setModality] = useState<'presencial' | 'videocall'>('videocall');
  const { designVariant } = useDesign();

  const isMinimalista = designVariant === 'minimalista';
  const isCorporativo = designVariant === 'corporativo';

  // Compute recommendations dynamically
  const getRecommendation = () => {
    if (urgency === 'continuo') {
      return {
        service: 'Asesoría Jurídica Continua (Iguala Mensual)',
        timeline: 'Activación en 24h con disponibilidad prioritaria',
        format: 'Iguala mensual con tarifa plana predecible',
        includes: 'Revisión continua de contratos, consultas ilimitadas y blindaje preventivo',
      };
    }
    if (clientType === 'empresa') {
      return {
        service: urgency === 'urgente' ? 'Dictamen de Urgencia Societario / Contractual' : 'Dictamen & Diagnóstico Jurídico Inicial',
        timeline: urgency === 'urgente' ? '24 a 48 horas hábiles' : '48 a 72 horas hábiles',
        format: 'Presupuesto cerrado deducible de posteriores actuaciones',
        includes: 'Auditoría documental previa, reunión estratégica de 60 min e informe por escrito',
      };
    }
    if (clientType === 'directivo') {
      return {
        service: 'Asesoramiento Estratégico para Alta Dirección',
        timeline: '48 horas hábiles',
        format: 'Honorarios cerrados con análisis previo de blindaje',
        includes: 'Revisión de cláusulas de exclusividad, no competencia e indemnización de salida',
      };
    }
    return {
      service: 'Consulta de Orientación Jurídica & Viabilidad',
      timeline: urgency === 'urgente' ? '24 horas' : '48 horas',
      format: 'Consulta con informe verbal y hoja de ruta escrita',
      includes: 'Examen de escrituras, contratos o notificaciones judiciales recibidas',
    };
  };

  const currentRec = getRecommendation();

  return (
    <section className={`py-20 md:py-28 border-b transition-colors ${
      isCorporativo
        ? 'bg-[#F1F5F9] border-[#CBD5E1]'
        : isMinimalista
        ? 'bg-[#F4F4F5] border-[#E4E4E7]'
        : 'bg-[#EFEEE9] border-[#DDD9D2]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className={`flex items-center gap-2 text-xs uppercase tracking-widest font-medium mb-3 ${
              isCorporativo ? 'text-[#B45309] font-bold' : isMinimalista ? 'text-[#71717A] font-semibold' : 'text-[#59636B]'
            }`}>
              <span>Modalidades de Contratación</span>
              <span aria-hidden="true">·</span>
              <span>Metodología</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl tracking-tight [text-wrap:balance] ${
              isMinimalista
                ? 'font-sans font-bold tracking-tighter text-[#09090B]'
                : isCorporativo
                ? 'font-serif font-medium text-[#0F172A]'
                : 'font-serif font-normal text-[#20364B]'
            }`}>
              Modalidades de Ejercicio Profesional
            </h2>
          </div>
          <p className={`text-sm sm:text-base max-w-md font-normal leading-relaxed ${
            isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
          }`}>
            Estructuras de servicio transparentes adaptadas a la envergadura del asunto, con presupuestos previos fijados por escrito sin sorpresas.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`p-8 sm:p-10 bg-[#FFFFFF] border flex flex-col justify-between transition-all ${
                isCorporativo
                  ? 'border-[#CBD5E1] rounded-md hover:border-[#B45309] shadow-xs'
                  : isMinimalista
                  ? 'border-[#E4E4E7] rounded-none hover:border-[#09090B] shadow-none'
                  : 'border-[#DDD9D2] rounded-sm hover:border-[#A9824D]/60 shadow-xs'
              }`}
            >
              <div>
                {/* Number & Tagline */}
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className={`font-bold ${
                    isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                  }`}>
                    {isMinimalista ? `[${service.number}]` : service.number}
                  </span>
                  <span className={`font-sans text-[11px] uppercase tracking-wider font-medium ${
                    isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                  }`}>
                    {service.billingModel.split(' ')[0]} {service.billingModel.split(' ')[1]}
                  </span>
                </div>

                <h3 className={`text-2xl font-medium mb-2 leading-snug ${
                  isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif text-current'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-xs italic mb-4 ${
                  isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                }`}>
                  {service.tagline}
                </p>

                <p className={`text-sm leading-relaxed mb-6 font-normal ${
                  isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                }`}>
                  {service.description}
                </p>

                {/* Features List */}
                <div className={`space-y-2.5 mb-6 pt-4 border-t ${
                  isCorporativo ? 'border-[#CBD5E1]' : isMinimalista ? 'border-[#E4E4E7]' : 'border-[#DDD9D2]'
                }`}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-start gap-2.5 text-xs ${
                      isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
                    }`}>
                      <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                        isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                      }`} />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={`p-3 text-xs mb-6 border ${
                  isCorporativo
                    ? 'bg-[#F1F5F9] border-[#CBD5E1] rounded-md text-[#475569]'
                    : isMinimalista
                    ? 'bg-[#F4F4F5] border-[#E4E4E7] rounded-none text-[#71717A]'
                    : 'bg-[#F8F7F4] border-[#DDD9D2] rounded-sm text-[#59636B]'
                }`}>
                  <span className={`font-semibold ${
                    isCorporativo ? 'text-[#0F172A]' : isMinimalista ? 'text-[#09090B]' : 'text-[#20364B]'
                  }`}>Honorarios: </span>
                  {service.billingModel}
                </div>
              </div>

              <div className={`pt-4 border-t ${
                isCorporativo ? 'border-[#CBD5E1]' : isMinimalista ? 'border-[#E4E4E7]' : 'border-[#DDD9D2]'
              }`}>
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-wider uppercase transition-all shadow-xs ${
                    isCorporativo
                      ? 'bg-[#0F172A] text-white hover:bg-[#1E293B] rounded-md'
                      : isMinimalista
                      ? 'bg-[#09090B] text-white hover:bg-[#27272A] rounded-none'
                      : 'bg-[#20364B] text-white hover:bg-[#182832] rounded-sm'
                  }`}
                >
                  <span>Solicitar {service.title.split('&')[0].trim()}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${
                    isCorporativo ? 'text-[#C28833]' : isMinimalista ? 'text-zinc-400' : 'text-[#A9824D]'
                  }`} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Roadmap: 4 Steps */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className={`text-xs uppercase tracking-widest font-medium ${
              isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
            }`}>
              Transparencia Procesal
            </span>
            <h3 className={`text-2xl sm:text-3xl font-medium mt-2 mb-3 ${
              isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
            }`}>
              ¿Cómo trabajamos su expediente?
            </h3>
            <p className="text-sm opacity-80">
              Un protocolo riguroso en cuatro etapas que garantiza control, previsión económica y tranquilidad jurídica continua.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01. FASE PREVIA', title: 'Contacto & Secreto', desc: 'Recepción del caso bajo estricto secreto profesional. Firma de acuerdo NDA de confidencialidad antes de compartir documentos sensibles.' },
              { num: '02. ESTUDIO TÉCNICO', title: 'Auditoría & Viabilidad', desc: 'Análisis fáctico y normativo exhaustivo. Determinación honesta de probabilidades de éxito y detección de contingencias colaterales.' },
              { num: '03. FORMALIZACIÓN', title: 'Hoja de Encargo', desc: 'Presupuesto cerrado por escrito. Definición milimétrica de hitos, actuaciones cubiertas y calendario de ejecución previo a cualquier cobro.' },
              { num: '04. DEFENSA ACTIVA', title: 'Dirección Letrada', desc: 'Intervención directa en negociaciones y audiencias con informes regulares sobre el avance y estado de cada actuación.' },
            ].map((step, idx) => (
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
                <span className={`font-mono text-xs font-bold block mb-2 ${
                  isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                }`}>
                  {step.num}
                </span>
                <h4 className={`text-lg font-medium mb-2 ${
                  isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
                }`}>
                  {step.title}
                </h4>
                <p className="text-xs opacity-80 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Consultation Evaluator */}
        <div className={`p-8 sm:p-10 bg-[#FFFFFF] border shadow-xs ${
          isCorporativo
            ? 'border-[#CBD5E1] rounded-md'
            : isMinimalista
            ? 'border-[#E4E4E7] rounded-none shadow-none'
            : 'border-[#DDD9D2] rounded-sm'
        }`}>
          <div className="max-w-3xl mb-8">
            <span className={`text-xs uppercase tracking-widest font-medium ${
              isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#71717A]' : 'text-[#59636B]'
            }`}>
              Herramienta de Orientación
            </span>
            <h3 className={`text-2xl sm:text-3xl font-medium mt-2 mb-3 ${
              isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
            }`}>
              Orientador de Consulta Jurídica
            </h3>
            <p className="text-sm opacity-80">
              Configure su perfil y necesidad para conocer el formato de consulta recomendado, tiempos de respuesta estimados y alcance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Client Profile */}
              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                  isCorporativo ? 'text-[#0F172A]' : isMinimalista ? 'text-[#09090B]' : 'text-[#20364B]'
                }`}>
                  1. Perfil del Solicitante:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'empresa', label: 'Empresa / Pyme' },
                    { id: 'directivo', label: 'Alta Dirección' },
                    { id: 'particular', label: 'Particular / Familia' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setClientType(btn.id as any)}
                      className={`py-2 px-3 text-xs font-semibold border transition-all ${
                        clientType === btn.id
                          ? isCorporativo
                            ? 'bg-[#0F172A] text-white border-[#0F172A] rounded-md'
                            : isMinimalista
                            ? 'bg-[#09090B] text-white border-[#09090B] rounded-none'
                            : 'bg-[#20364B] text-white border-[#20364B] rounded-sm'
                          : isCorporativo
                          ? 'bg-white text-[#475569] border-[#CBD5E1] hover:bg-[#F1F5F9] rounded-md'
                          : isMinimalista
                          ? 'bg-white text-[#71717A] border-[#E4E4E7] hover:bg-[#F4F4F5] rounded-none'
                          : 'bg-white text-[#59636B] border-[#DDD9D2] hover:bg-[#EFEEE9] rounded-sm'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Urgency */}
              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                  isCorporativo ? 'text-[#0F172A]' : isMinimalista ? 'text-[#09090B]' : 'text-[#20364B]'
                }`}>
                  2. Urgencia del Requerimiento:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'estandar', label: 'Planificación (48-72h)' },
                    { id: 'urgente', label: 'Plazo Urgente (24h)' },
                    { id: 'continuo', label: 'Apoyo Mensual' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setUrgency(btn.id as any)}
                      className={`py-2 px-3 text-xs font-semibold border transition-all ${
                        urgency === btn.id
                          ? isCorporativo
                            ? 'bg-[#0F172A] text-white border-[#0F172A] rounded-md'
                            : isMinimalista
                            ? 'bg-[#09090B] text-white border-[#09090B] rounded-none'
                            : 'bg-[#20364B] text-white border-[#20364B] rounded-sm'
                          : isCorporativo
                          ? 'bg-white text-[#475569] border-[#CBD5E1] hover:bg-[#F1F5F9] rounded-md'
                          : isMinimalista
                          ? 'bg-white text-[#71717A] border-[#E4E4E7] hover:bg-[#F4F4F5] rounded-none'
                          : 'bg-white text-[#59636B] border-[#DDD9D2] hover:bg-[#EFEEE9] rounded-sm'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modality */}
              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                  isCorporativo ? 'text-[#0F172A]' : isMinimalista ? 'text-[#09090B]' : 'text-[#20364B]'
                }`}>
                  3. Modalidad de Encuentro:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'videocall', label: 'Videollamada Cifrada' },
                    { id: 'presencial', label: 'Presencial en Despacho' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setModality(btn.id as any)}
                      className={`py-2 px-3 text-xs font-semibold border transition-all ${
                        modality === btn.id
                          ? isCorporativo
                            ? 'bg-[#0F172A] text-white border-[#0F172A] rounded-md'
                            : isMinimalista
                            ? 'bg-[#09090B] text-white border-[#09090B] rounded-none'
                            : 'bg-[#20364B] text-white border-[#20364B] rounded-sm'
                          : isCorporativo
                          ? 'bg-white text-[#475569] border-[#CBD5E1] hover:bg-[#F1F5F9] rounded-md'
                          : isMinimalista
                          ? 'bg-white text-[#71717A] border-[#E4E4E7] hover:bg-[#F4F4F5] rounded-none'
                          : 'bg-white text-[#59636B] border-[#DDD9D2] hover:bg-[#EFEEE9] rounded-sm'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Evaluator Dynamic Result Card */}
            <div className={`lg:col-span-5 p-6 border ${
              isCorporativo
                ? 'bg-[#F1F5F9] border-[#CBD5E1] rounded-md'
                : isMinimalista
                ? 'bg-[#F4F4F5] border-[#E4E4E7] rounded-none'
                : 'bg-[#EFEEE9] border-[#DDD9D2] rounded-sm'
            }`}>
              <span className={`text-[11px] uppercase tracking-wider font-bold block mb-1 ${
                isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
              }`}>
                Propuesta de Abordaje Recomendada
              </span>
              <h4 className={`text-xl font-medium mb-3 ${
                isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif text-current'
              }`}>
                {currentRec.service}
              </h4>

              <div className="space-y-3 text-xs opacity-90 mb-6">
                <div className="flex items-start gap-2">
                  <Clock className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                    isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                  }`} />
                  <span><strong>Tiempo estimado:</strong> {currentRec.timeline}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                    isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                  }`} />
                  <span><strong>Modalidad:</strong> {modality === 'videocall' ? 'Videollamada Segura' : 'Presencial (Previa Cita)'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                    isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#A9824D]'
                  }`} />
                  <span><strong>Incluye:</strong> {currentRec.includes}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(`${currentRec.service} (${modality === 'videocall' ? 'Videollamada' : 'Presencial'})`)}
                className={`w-full py-3 px-4 text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-xs ${
                  isCorporativo
                    ? 'bg-[#0F172A] text-white hover:bg-[#1E293B] rounded-md'
                    : isMinimalista
                    ? 'bg-[#09090B] text-white hover:bg-[#27272A] rounded-none'
                    : 'bg-[#20364B] text-white hover:bg-[#182832] rounded-sm'
                }`}
              >
                <span>Agendar con estas opciones</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${
                  isCorporativo ? 'text-[#C28833]' : isMinimalista ? 'text-zinc-400' : 'text-[#A9824D]'
                }`} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
