import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/legalData';
import { Shield, X, BookOpen, Mail, Phone, ExternalLink, Award, Building2 } from 'lucide-react';
import { useDesign } from '../context/DesignContext';

interface FooterProps {
  onOpenFigmaSpecs?: () => void;
  onOpenLibroReclamaciones?: () => void;
  onOpenPrivacyPolicy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenFigmaSpecs,
  onOpenLibroReclamaciones,
  onOpenPrivacyPolicy,
}) => {
  const [legalModalContent, setLegalModalContent] = useState<{ title: string; content: string } | null>(null);
  const { designVariant } = useDesign();

  const isMinimalista = designVariant === 'minimalista';
  const isCorporativo = designVariant === 'corporativo';

  const handleOpenLegalNotice = () => {
    setLegalModalContent({
      title: 'Aviso Legal & Información Corporativa',
      content: `1. Titularidad del Servicio:\n• Práctica Jurídica & Marca: ${CONTACT_INFO.brandName}\n• Correo Oficial: ${CONTACT_INFO.email}\n• Central de Atención: ${CONTACT_INFO.primaryPhoneDisplay} / ${CONTACT_INFO.secondaryPhoneDisplay}\n• Ámbito de Actuación: Práctica jurídica nacional y regional Latam.\n\n2. Condiciones de Uso:\nEl acceso y uso de este sitio web atribuye la condición de usuario, quien acepta las condiciones aquí establecidas. El contenido publicado tiene fines informativos y de orientación general, no constituyendo una relación abogado-cliente formal hasta la suscripción de la Hoja de Encargo o Contrato de Servicios correspondiente.\n\n3. Propiedad Intelectual:\nTodos los derechos sobre textos, marcas, diseño y contenidos están reservados.`
    });
  };

  return (
    <footer className={`pt-16 pb-12 border-t transition-colors ${
      isCorporativo
        ? 'bg-[#070F1B] text-[#F8FAFC] border-[#1E293B]'
        : isMinimalista
        ? 'bg-[#09090B] text-[#FAFAFA] border-[#27272A]'
        : 'bg-[#5B4C3D] text-[#F8F7F4] border-[#463B2F]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Credentials */}
          <div className="md:col-span-5">
            <h3 className={`text-2xl font-medium tracking-tight mb-1 text-white ${
              isMinimalista ? 'font-sans font-bold tracking-tight' : 'font-serif'
            }`}>
              Sharon Delgado
            </h3>
            <p className={`text-xs uppercase tracking-widest font-medium mb-4 ${
              isCorporativo ? 'text-[#C28833]' : isMinimalista ? 'text-zinc-400 font-semibold' : 'text-[#DDD9D2]'
            }`}>
              {isCorporativo ? 'Firma Legal & Litigios Corporativos' : 'Abogada y Consultora Jurídica'}
            </p>
            <p className="text-xs text-white/75 leading-relaxed max-w-sm mb-6">
              Acompañamiento legal especializado en derecho corporativo, contractual, alta dirección y resolución de controversias. Rigor técnico y defensa letrada personalizada.
            </p>
            
            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Phone className={`w-3.5 h-3.5 ${
                  isCorporativo ? 'text-[#C28833]' : isMinimalista ? 'text-zinc-300' : 'text-[#DDD9D2]'
                }`} />
                <span>Central: {CONTACT_INFO.primaryPhoneDisplay} / {CONTACT_INFO.secondaryPhoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className={`w-3.5 h-3.5 ${
                  isCorporativo ? 'text-[#C28833]' : isMinimalista ? 'text-zinc-300' : 'text-[#DDD9D2]'
                }`} />
                <span>Correo: {CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
              isCorporativo ? 'text-[#C28833]' : isMinimalista ? 'text-zinc-400 font-bold' : 'text-[#DDD9D2]'
            }`}>
              Secciones
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre mí</a>
              </li>
              <li>
                <a href="#servicios-juridicos" className="hover:text-white transition-colors">Servicios jurídicos</a>
              </li>
              <li>
                <a href="#enfoque" className="hover:text-white transition-colors">Nuestro enfoque</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">Contacto & WhatsApp</a>
              </li>
            </ul>
          </div>

          {/* Legal Compliance & Consumer Protection */}
          <div className="md:col-span-4">
            <h4 className={`text-xs font-semibold uppercase tracking-wider mb-4 flex items-center gap-2 ${
              isCorporativo ? 'text-[#C28833]' : isMinimalista ? 'text-zinc-400 font-bold' : 'text-[#DDD9D2]'
            }`}>
              <Shield className="w-3.5 h-3.5" />
              <span>Garantías Legales & Transparencia</span>
            </h4>
            <p className="text-xs text-white/75 leading-relaxed mb-4">
              Cumplimiento riguroso de la normativa sobre protección de datos personales, secreto profesional y protección al consumidor.
            </p>
            
            <div className="flex flex-col gap-2.5 text-xs text-white/80">
              <button
                onClick={onOpenLibroReclamaciones}
                className="flex items-center gap-2 hover:text-white transition-colors font-medium text-left"
              >
                <BookOpen className={`w-3.5 h-3.5 ${
                  isCorporativo ? 'text-[#C28833]' : isMinimalista ? 'text-zinc-300' : 'text-[#DDD9D2]'
                }`} />
                <span>Libro de Reclamaciones Virtual</span>
              </button>
              
              <button
                onClick={onOpenPrivacyPolicy}
                className="flex items-center gap-2 hover:text-white transition-colors text-left"
              >
                <Shield className="w-3.5 h-3.5 opacity-70" />
                <span>Política de Privacidad & Datos</span>
              </button>

              <button
                onClick={handleOpenLegalNotice}
                className="hover:text-white transition-colors text-left"
              >
                <span>Aviso Legal & Términos</span>
              </button>

              <button
                onClick={onOpenFigmaSpecs}
                className="hover:text-white transition-colors text-left flex items-center gap-1.5"
              >
                <span>Especificaciones de Diseño & Figma</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Sharon Delgado · Qore Latam. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenLibroReclamaciones}
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <BookOpen className="w-3 h-3" />
              <span>Libro de Reclamaciones</span>
            </button>
            <span>·</span>
            <button
              onClick={onOpenPrivacyPolicy}
              className="hover:text-white transition-colors"
            >
              Privacidad
            </button>
          </div>
        </div>

      </div>

      {/* Legal Notice Modal */}
      {legalModalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            onClick={() => setLegalModalContent(null)}
          />
          <div className={`relative bg-[#FFFFFF] p-6 sm:p-8 max-w-xl w-full border shadow-2xl z-10 ${
            isCorporativo
              ? 'text-[#0F172A] border-[#CBD5E1] rounded-md'
              : isMinimalista
              ? 'text-[#09090B] border-[#E4E4E7] rounded-none'
              : 'text-[#5B4C3D] border-[#DDD9D2] rounded-sm'
          }`}>
            <button
              onClick={() => setLegalModalContent(null)}
              className="absolute top-4 right-4 p-2 opacity-70 hover:opacity-100"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className={`text-xl font-medium mb-4 ${
              isMinimalista ? 'font-sans font-bold' : 'font-serif'
            }`}>
              {legalModalContent.title}
            </h3>
            <div className="text-xs opacity-80 leading-relaxed whitespace-pre-line max-h-[60vh] overflow-y-auto pr-2">
              {legalModalContent.content}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
