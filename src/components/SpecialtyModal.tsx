import React from 'react';
import { Specialty } from '../data/legalData';
import { X, CheckCircle2, Clock, FileCheck, ArrowRight } from 'lucide-react';
import { useDesign } from '../context/DesignContext';

interface SpecialtyModalProps {
  specialty: Specialty | null;
  onClose: () => void;
  onBookSpecialty: (specialtyTitle: string) => void;
}

export const SpecialtyModal: React.FC<SpecialtyModalProps> = ({
  specialty,
  onClose,
  onBookSpecialty,
}) => {
  const { designVariant } = useDesign();
  const isMinimalista = designVariant === 'minimalista';
  const isCorporativo = designVariant === 'corporativo';

  if (!specialty) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 backdrop-blur-xs transition-opacity ${
          isCorporativo ? 'bg-[#070F1B]/80' : isMinimalista ? 'bg-black/80' : 'bg-[#463B2F]/75'
        }`} 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className={`relative bg-[#FFFFFF] border max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-6 sm:p-10 animate-in fade-in zoom-in-95 duration-200 ${
        isCorporativo
          ? 'border-[#CBD5E1] rounded-md text-[#0F172A]'
          : isMinimalista
          ? 'border-[#E4E4E7] rounded-none text-[#09090B]'
          : 'border-[#DDD9D2] rounded-sm text-[#5B4C3D]'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 text-xs font-mono mb-2">
            <span className={`font-semibold ${
              isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#756D64]'
            }`}>{isMinimalista ? `[${specialty.number}]` : specialty.number}</span>
            <span>·</span>
            <span className="font-sans uppercase tracking-wider font-medium opacity-80">
              {specialty.categoryLabel}
            </span>
          </div>

          <h3 className={`text-2xl sm:text-3xl font-medium mb-1 ${
            isMinimalista ? 'font-sans font-bold tracking-tight text-[#09090B]' : 'font-serif'
          }`}>
            {specialty.title}
          </h3>
          <p className="text-xs opacity-75 italic">
            {specialty.subtitle}
          </p>
        </div>

        {/* Summary */}
        <div className={`p-4 border text-sm leading-relaxed mb-6 ${
          isCorporativo
            ? 'bg-[#F1F5F9] border-[#CBD5E1] rounded-md text-[#475569]'
            : isMinimalista
            ? 'bg-[#F4F4F5] border-[#E4E4E7] rounded-none text-[#71717A]'
            : 'bg-[#F8F7F4] border-[#DDD9D2] rounded-sm text-[#756D64]'
        }`}>
          {specialty.summary}
        </div>

        {/* Content Tabs / Sections */}
        <div className="space-y-6 text-xs opacity-90">
          {/* Key Services */}
          <div>
            <h4 className={`text-xs font-semibold uppercase tracking-wider mb-2.5 flex items-center gap-2 ${
              isMinimalista ? 'font-sans font-bold' : ''
            }`}>
              <CheckCircle2 className={`w-3.5 h-3.5 ${
                isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#756D64]'
              }`} />
              <span>Alcance & Actuaciones Específicas:</span>
            </h4>
            <ul className="space-y-1.5 pl-5 list-disc opacity-80">
              {specialty.keyServices.map((service, idx) => (
                <li key={idx} className="leading-relaxed">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Typical Cases */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <FileCheck className={`w-3.5 h-3.5 ${
                isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#756D64]'
              }`} />
              <span>Casos Típicos Atendidos:</span>
            </h4>
            <div className="space-y-2">
              {specialty.typicalCases.map((c, idx) => (
                <div key={idx} className={`p-2.5 border ${
                  isCorporativo
                    ? 'bg-[#F8FAFC] border-[#CBD5E1] rounded-md'
                    : isMinimalista
                    ? 'bg-[#FAFAFA] border-[#E4E4E7] rounded-none'
                    : 'bg-[#F8F7F4] border-[#DDD9D2] rounded-sm'
                }`}>
                  <strong>Precedente {idx + 1}: </strong>
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & Timelines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-current/10">
            <div>
              <p className="font-semibold uppercase tracking-wider mb-1">
                Entregables Documentales:
              </p>
              <ul className="space-y-1 opacity-80">
                {specialty.deliverables.map((d, idx) => (
                  <li key={idx}>· {d}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Clock className={`w-3.5 h-3.5 ${
                  isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#756D64]'
                }`} />
                <span>Tiempo de Ejecución:</span>
              </p>
              <p className="opacity-80 leading-relaxed">
                {specialty.durationEstimate}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="mt-8 pt-6 border-t border-current/10 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider opacity-75 hover:opacity-100 transition-opacity"
          >
            Cerrar
          </button>

          <button
            onClick={() => {
              onClose();
              onBookSpecialty(specialty.title);
            }}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-white transition-all shadow-sm ${
              isCorporativo
                ? 'bg-[#0F172A] hover:bg-[#1E293B] rounded-md'
                : isMinimalista
                ? 'bg-[#09090B] hover:bg-[#27272A] rounded-none'
                : 'bg-[#5B4C3D] hover:bg-[#463B2F] rounded-sm'
            }`}
          >
            <span>Consultar sobre {specialty.title.split('&')[0]}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${
              isCorporativo ? 'text-[#C28833]' : isMinimalista ? 'text-zinc-400' : 'text-[#DDD9D2]'
            }`} />
          </button>
        </div>

      </div>
    </div>
  );
};
