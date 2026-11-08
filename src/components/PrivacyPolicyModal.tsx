import React from 'react';
import { X, Shield, Lock } from 'lucide-react';
import { CONTACT_INFO } from '../data/legalData';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#463B2F]/75 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FFFFFF] border border-[#DDD9D2] rounded-sm max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl z-10 p-6 sm:p-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#756D64] hover:text-[#5B4C3D] hover:bg-[#EFEEE9] rounded-sm transition-colors"
          aria-label="Cerrar política de privacidad"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#756D64] mb-1 uppercase tracking-widest font-semibold">
            <Shield className="w-3.5 h-3.5" />
            <span>PROTECCIÓN DE DATOS PERSONALES</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#5B4C3D] mb-2">
            Política de Privacidad & Tratamiento de Datos
          </h3>
          <p className="text-xs sm:text-sm text-[#756D64] leading-relaxed">
            Información detallada sobre el tratamiento, custodia y derechos de protección de sus datos personales conforme a la normativa legal vigente y el Secreto Profesional de la Abogacía.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-xs text-[#756D64] leading-relaxed pr-2">
          
          <div className="p-4 bg-[#F8F7F4] border border-[#DDD9D2] rounded-sm">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#5B4C3D] mb-2 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#756D64]" />
              <span>1. Responsable del Tratamiento de los Datos</span>
            </h4>
            <p>
              El presente sitio web y la práctica profesional son operados bajo la titularidad de <strong className="text-[#5B4C3D]">{CONTACT_INFO.brandName}</strong>.
            </p>
            <div className="mt-2 text-xs space-y-1">
              <p>• Correo electrónico oficial: <strong className="text-[#5B4C3D]">{CONTACT_INFO.email}</strong></p>
              <p>• Líneas de atención y consultas: <strong className="text-[#5B4C3D]">{CONTACT_INFO.primaryPhoneDisplay} / {CONTACT_INFO.secondaryPhoneDisplay}</strong></p>
              <p>• Ámbito de actuación: Práctica jurídica nacional y regional (Qore Latam).</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#5B4C3D] mb-2">
              2. Finalidades del Tratamiento de Datos
            </h4>
            <p className="mb-2">
              Los datos personales facilitados a través de formularios de contacto, solicitudes de consulta jurídica, comunicaciones por WhatsApp o correo electrónico son tratados con las siguientes finalidades:
            </p>
            <ul className="space-y-1.5 pl-4 list-disc text-[#756D64]">
              <li>Atención, evaluación fáctica y respuesta técnico-legal a las consultas planteadas por clientes o potenciales clientes.</li>
              <li>Elaboración de presupuestos cerrados, hojas de encargo profesional y acuerdos de servicios jurídicos.</li>
              <li>Ejecución de la dirección letrada, defensa procesal, auditoría contractual o mediación encomendada.</li>
              <li>Cumplimiento de obligaciones legales, fiscales y deontológicas inherentes al ejercicio de la abogacía.</li>
              <li>Gestión del Libro de Reclamaciones Virtual conforme a las disposiciones legales aplicables.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#5B4C3D] mb-2">
              3. Principio de Confidencialidad y Secreto Profesional
            </h4>
            <p>
              Todos los datos, documentos, antecedentes y comunicaciones transmitidos al despacho gozan del amparo inviolable del <strong className="text-[#5B4C3D]">Secreto Profesional de la Abogacía</strong>. Esta tutela legal garantiza que ninguna información será revelada, transferida ni cedida a terceros bajo ninguna circunstancia, excepto en caso de mandato judicial expreso o por requerimiento de la defensa procesal expresamente instruida por el cliente.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#5B4C3D] mb-2">
              4. Medidas de Seguridad y Custodia
            </h4>
            <p>
              Implementamos rigurosos estándares técnicos, organizativos y de seguridad digital (comunicaciones cifradas SSL/TLS, almacenamiento seguro en la nube y acceso restringido) para evitar la alteración, pérdida, tratamiento o acceso no autorizado a su información sensible.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#5B4C3D] mb-2">
              5. Ejercicio de Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
            </h4>
            <p className="mb-2">
              Como titular de sus datos personales, tiene derecho en todo momento a acceder a los mismos, rectificarlos cuando sean inexactos, solicitar su supresión cuando ya no sean necesarios para los fines contratados, u oponerse al tratamiento de los mismos.
            </p>
            <div className="p-3 bg-[#F8F7F4] border border-[#DDD9D2] rounded-sm text-xs">
              <p className="font-medium text-[#5B4C3D] mb-1">Para ejercer sus derechos ARCO:</p>
              <p>Remita una comunicación escrita indicando su nombre completo y derecho a ejercer a:</p>
              <p className="mt-1 font-mono text-[#5B4C3D] font-semibold">
                {CONTACT_INFO.email}
              </p>
              <p className="mt-1 text-[11px] text-[#756D64]">
                Plazo de respuesta: Máximo diez (10) días hábiles conforme a ley.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#5B4C3D] mb-2">
              6. Plazo de Conservación de Datos
            </h4>
            <p>
              Los datos personales se conservarán mientras dure la relación profesional y, posteriormente, durante los plazos legalmente exigidos por las normas procesales, fiscales y de responsabilidad civil profesional aplicables.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-[#DDD9D2] flex items-center justify-between">
          <div className="text-xs text-[#756D64]">
            Última actualización: Noviembre 2026
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#5B4C3D] text-[#F8F7F4] rounded-sm hover:bg-[#463B2F] transition-colors shadow-sm"
          >
            Aceptar & Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
