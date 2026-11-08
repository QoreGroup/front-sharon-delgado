import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, FAQS, SPECIALTIES } from '../data/legalData';
import { 
  Mail, 
  Phone, 
  Clock, 
  MessageSquare, 
  CheckCircle, 
  ChevronDown, 
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { useDesign } from '../context/DesignContext';

interface ContactSectionProps {
  initialSpecialty?: string;
  onOpenLibroReclamaciones?: () => void;
  onOpenPrivacyPolicy?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialSpecialty,
  onOpenLibroReclamaciones,
  onOpenPrivacyPolicy,
}) => {
  const { designVariant } = useDesign();
  const isMinimalista = designVariant === 'minimalista';
  const isCorporativo = designVariant === 'corporativo';

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialty, setSpecialty] = useState(initialSpecialty || 'Derecho Corporativo & Societario');
  const [modality, setModality] = useState<'videocall' | 'presencial'>('videocall');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('morning');
  const [caseSummary, setCaseSummary] = useState('');
  const [hasDocuments, setHasDocuments] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  // Validation & Submission State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    if (initialSpecialty) {
      setSpecialty(initialSpecialty);
    }
  }, [initialSpecialty]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Por favor indique su nombre completo.';
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      errs.email = 'Introduzca una dirección de correo electrónico válida.';
    }
    if (!phone.trim() || phone.length < 8) {
      errs.phone = 'Indique un teléfono de contacto válido.';
    }
    if (!caseSummary.trim() || caseSummary.length < 15) {
      errs.caseSummary = 'Por favor describa brevemente el contexto de su consulta (mínimo 15 caracteres).';
    }
    if (!privacyAccepted) {
      errs.privacy = 'Debe aceptar la cláusula de confidencialidad y tratamiento de datos.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({
        fullName,
        email,
        phone,
        specialty,
        modality,
        preferredDate: preferredDate || 'A coordinar con secretaría',
        preferredTime: preferredTime === 'morning' ? 'Mañanas (09:00 - 14:00)' : 'Tardes (16:00 - 19:30)',
        caseSummary,
        referenceId: `EXP-${Math.floor(100000 + Math.random() * 900000)}`
      });
    }, 700);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setCaseSummary('');
    setPrivacyAccepted(false);
    setErrors({});
  };

  return (
    <section 
      id="contacto" 
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
            isCorporativo ? 'text-[#B45309] font-bold' : isMinimalista ? 'text-[#71717A] font-semibold' : 'text-[#756D64]'
          }`}>
            <span>Atención Personalizada</span>
            <span aria-hidden="true">·</span>
            <span>Estricta Confidencialidad</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 [text-wrap:balance] ${
            isMinimalista
              ? 'font-sans font-bold tracking-tighter text-[#09090B]'
              : isCorporativo
              ? 'font-serif font-medium text-[#0F172A]'
              : 'font-serif font-normal text-[#5B4C3D]'
          }`}>
            Solicitud de Consulta Jurídica
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isCorporativo ? 'text-[#475569]' : isMinimalista ? 'text-[#71717A]' : 'text-[#756D64]'
          }`}>
            Plantéenos su situación con total seguridad. Todas las comunicaciones recibidas están blindadas por el Secreto Profesional. Le responderemos en un plazo máximo de 24 horas hábiles.
          </p>
        </div>

        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Column: Interactive Form */}
          <div className={`lg:col-span-7 bg-[#FFFFFF] border p-8 sm:p-10 shadow-xs ${
            isCorporativo
              ? 'border-[#CBD5E1] rounded-md'
              : isMinimalista
              ? 'border-[#E4E4E7] rounded-none shadow-none'
              : 'border-[#DDD9D2] rounded-sm'
          }`}>
            {isSubmitted ? (
              <div className="py-6 animate-in fade-in duration-300">
                <div className={`w-12 h-12 border flex items-center justify-center mb-6 ${
                  isCorporativo
                    ? 'bg-[#F1F5F9] border-[#CBD5E1] rounded-md text-[#B45309]'
                    : isMinimalista
                    ? 'bg-[#F4F4F5] border-[#E4E4E7] rounded-none text-[#09090B]'
                    : 'bg-[#EFEEE9] border-[#DDD9D2] rounded-sm text-[#5B4C3D]'
                }`}>
                  <CheckCircle className="w-6 h-6" />
                </div>
                
                <span className={`text-xs font-mono uppercase tracking-widest font-semibold ${
                  isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#5B4C3D]'
                }`}>
                  SOLICITUD REGISTRADA EXITOSAMENTE
                </span>
                
                <h3 className={`text-2xl sm:text-3xl font-medium mt-1 mb-4 ${
                  isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
                }`}>
                  Gracias, {submittedData?.fullName}
                </h3>
                
                <p className="text-sm opacity-85 leading-relaxed mb-6">
                  Hemos recibido su consulta con número de referencia <strong className="font-mono">{submittedData?.referenceId}</strong>. La letrada Sharon Delgado examinará los detalles personalmente y nos pondremos en contacto con usted en un plazo no superior a 24 horas hábiles para fijar la cita.
                </p>

                {/* Summary Card */}
                <div className={`p-6 border text-xs space-y-2 mb-8 ${
                  isCorporativo
                    ? 'bg-[#F8FAFC] border-[#CBD5E1] rounded-md text-[#475569]'
                    : isMinimalista
                    ? 'bg-[#FAFAFA] border-[#E4E4E7] rounded-none text-[#71717A]'
                    : 'bg-[#F8F7F4] border-[#DDD9D2] rounded-sm text-[#756D64]'
                }`}>
                  <p><strong>Especialidad:</strong> {submittedData?.specialty}</p>
                  <p><strong>Modalidad:</strong> {submittedData?.modality === 'videocall' ? 'Videollamada cifrada de alta seguridad' : 'Presencial en Despacho'}</p>
                  <p><strong>Preferencia horaria:</strong> {submittedData?.preferredTime} · {submittedData?.preferredDate}</p>
                  <p><strong>Correo de contacto:</strong> {submittedData?.email}</p>
                  <p><strong>Teléfono:</strong> {submittedData?.phone}</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={`${CONTACT_INFO.whatsappUrlPrimary}?text=${encodeURIComponent(`Hola Sharon, acabo de enviar mi consulta en la web con referencia ${submittedData?.referenceId}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors shadow-sm ${
                      isCorporativo
                        ? 'bg-[#0F172A] hover:bg-[#1E293B] rounded-md'
                        : isMinimalista
                        ? 'bg-[#09090B] hover:bg-[#27272A] rounded-none'
                        : 'bg-[#5B4C3D] hover:bg-[#463B2F] rounded-sm'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Avisar por WhatsApp</span>
                  </a>

                  <button
                    onClick={handleResetForm}
                    className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                      isCorporativo
                        ? 'border-[#CBD5E1] text-[#475569] hover:bg-[#F1F5F9] rounded-md'
                        : isMinimalista
                        ? 'border-[#E4E4E7] text-[#71717A] hover:bg-[#F4F4F5] rounded-none'
                        : 'border-[#DDD9D2] text-[#756D64] hover:bg-[#EFEEE9] rounded-sm'
                    }`}
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className={`text-2xl font-medium mb-2 ${
                    isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
                  }`}>
                    Datos del Asunto & Preferencias de Cita
                  </h3>
                  <p className="text-xs opacity-75">
                    Complete el formulario para recibir respuesta letrada directa.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Nombre y Apellidos *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="Ej. Rodrigo Álvarez de Toledo"
                    className={`w-full px-4 py-2.5 text-sm bg-white border outline-none transition-colors ${
                      isCorporativo ? 'rounded-md' : isMinimalista ? 'rounded-none' : 'rounded-sm'
                    } ${
                      errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-current/20 focus:border-current'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="nombre@empresa.com"
                      className={`w-full px-4 py-2.5 text-sm bg-white border outline-none transition-colors ${
                        isCorporativo ? 'rounded-md' : isMinimalista ? 'rounded-none' : 'rounded-sm'
                      } ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-current/20 focus:border-current'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Teléfono de Contacto *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="966 367 594"
                      className={`w-full px-4 py-2.5 text-sm bg-white border outline-none transition-colors ${
                        isCorporativo ? 'rounded-md' : isMinimalista ? 'rounded-none' : 'rounded-sm'
                      } ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-current/20 focus:border-current'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Specialty Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Materia o Especialidad Legal Principal
                  </label>
                  <select
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className={`w-full px-4 py-2.5 text-sm bg-white border outline-none transition-colors ${
                      isCorporativo ? 'rounded-md' : isMinimalista ? 'rounded-none' : 'rounded-sm'
                    } border-current/20 focus:border-current`}
                  >
                    {SPECIALTIES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Consulta Multidisciplinar">Otra materia / Consulta preliminar general</option>
                  </select>
                </div>

                {/* Modality Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Modalidad Deseada para la Consulta
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setModality('videocall')}
                      className={`p-3 text-left border transition-all ${
                        isCorporativo ? 'rounded-md' : isMinimalista ? 'rounded-none' : 'rounded-sm'
                      } ${
                        modality === 'videocall'
                          ? isCorporativo
                            ? 'bg-[#0F172A] text-white border-[#0F172A]'
                            : isMinimalista
                            ? 'bg-[#09090B] text-white border-[#09090B]'
                            : 'bg-[#5B4C3D] text-[#F8F7F4] border-[#5B4C3D]'
                          : 'bg-white text-current border-current/20 hover:bg-black/5'
                      }`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider">Videollamada Cifrada</p>
                      <p className={`text-[11px] mt-0.5 ${modality === 'videocall' ? 'text-white/80' : 'opacity-70'}`}>
                        Nacional & Internacional
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setModality('presencial')}
                      className={`p-3 text-left border transition-all ${
                        isCorporativo ? 'rounded-md' : isMinimalista ? 'rounded-none' : 'rounded-sm'
                      } ${
                        modality === 'presencial'
                          ? isCorporativo
                            ? 'bg-[#0F172A] text-white border-[#0F172A]'
                            : isMinimalista
                            ? 'bg-[#09090B] text-white border-[#09090B]'
                            : 'bg-[#5B4C3D] text-[#F8F7F4] border-[#5B4C3D]'
                          : 'bg-white text-current border-current/20 hover:bg-black/5'
                      }`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider">Presencial en Despacho</p>
                      <p className={`text-[11px] mt-0.5 ${modality === 'presencial' ? 'text-white/80' : 'opacity-70'}`}>
                        Sede Qore Latam
                      </p>
                    </button>
                  </div>
                </div>

                {/* Date & Time Preference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Fecha Estimada Preferida
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className={`w-full px-4 py-2 text-sm bg-white border border-current/20 focus:border-current outline-none ${
                        isCorporativo ? 'rounded-md' : isMinimalista ? 'rounded-none' : 'rounded-sm'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Franja Horaria
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className={`w-full px-4 py-2.5 text-sm bg-white border border-current/20 focus:border-current outline-none ${
                        isCorporativo ? 'rounded-md' : isMinimalista ? 'rounded-none' : 'rounded-sm'
                      }`}
                    >
                      <option value="morning">Mañanas (09:00 — 14:00)</option>
                      <option value="afternoon">Tardes (16:00 — 19:30)</option>
                    </select>
                  </div>
                </div>

                {/* Case Summary */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Breve Resumen de los Hechos o Consulta *
                  </label>
                  <textarea
                    rows={4}
                    value={caseSummary}
                    onChange={(e) => {
                      setCaseSummary(e.target.value);
                      if (errors.caseSummary) setErrors({ ...errors, caseSummary: '' });
                    }}
                    placeholder="Describa brevemente la situación, partes involucradas, plazos inminentes o el objetivo legal que desea alcanzar..."
                    className={`w-full px-4 py-2.5 text-sm bg-white border outline-none transition-colors ${
                      isCorporativo ? 'rounded-md' : isMinimalista ? 'rounded-none' : 'rounded-sm'
                    } ${
                      errors.caseSummary ? 'border-red-500 bg-red-50/20' : 'border-current/20 focus:border-current'
                    }`}
                  />
                  {errors.caseSummary && <p className="text-xs text-red-600 mt-1">{errors.caseSummary}</p>}
                </div>

                {/* Document Readiness Checkbox */}
                <div className={`flex items-start gap-3 p-3 border ${
                  isCorporativo
                    ? 'bg-[#F8FAFC] border-[#CBD5E1] rounded-md'
                    : isMinimalista
                    ? 'bg-[#FAFAFA] border-[#E4E4E7] rounded-none'
                    : 'bg-[#F8F7F4] border-[#DDD9D2] rounded-sm'
                }`}>
                  <input
                    type="checkbox"
                    id="hasDoc"
                    checked={hasDocuments}
                    onChange={(e) => setHasDocuments(e.target.checked)}
                    className="mt-0.5 rounded"
                  />
                  <label htmlFor="hasDoc" className="text-xs opacity-85 leading-relaxed cursor-pointer">
                    Dispongo de contratos, escrituras, cartas o notificaciones judiciales listas para enviar tras la primera toma de contacto.
                  </label>
                </div>

                {/* Privacy & Professional Secrecy Checkbox */}
                <div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={privacyAccepted}
                      onChange={(e) => {
                        setPrivacyAccepted(e.target.checked);
                        if (errors.privacy) setErrors({ ...errors, privacy: '' });
                      }}
                      className="mt-0.5 rounded"
                    />
                    <label htmlFor="privacy" className="text-xs opacity-85 leading-relaxed cursor-pointer">
                      He leído y acepto el tratamiento de mis datos de carácter confidencial bajo el estricto amparo del Secreto Profesional de la Abogacía y la política de privacidad. *
                    </label>
                  </div>
                  {errors.privacy && <p className="text-xs text-red-600 mt-1.5">{errors.privacy}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 px-6 text-xs font-semibold tracking-wider uppercase text-white transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 ${
                    isCorporativo
                      ? 'bg-[#0F172A] hover:bg-[#1E293B] rounded-md'
                      : isMinimalista
                      ? 'bg-[#09090B] hover:bg-[#27272A] rounded-none'
                      : 'bg-[#5B4C3D] hover:bg-[#463B2F] rounded-sm'
                  }`}
                >
                  {isSubmitting ? (
                    <span>Procesando solicitud confidencial...</span>
                  ) : (
                    <>
                      <span>Enviar Solicitud de Consulta</span>
                      <ShieldCheck className={`w-4 h-4 ${
                        isCorporativo ? 'text-[#C28833]' : isMinimalista ? 'text-zinc-400' : 'text-[#756D64]'
                      }`} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels, Desk Detail & Office Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Editorial Desk Image Card */}
            <div className={`overflow-hidden border bg-[#FFFFFF] shadow-xs ${
              isCorporativo
                ? 'border-[#CBD5E1] rounded-md'
                : isMinimalista
                ? 'border-[#E4E4E7] rounded-none shadow-none'
                : 'border-[#DDD9D2] rounded-sm'
            }`}>
              <div className={`aspect-[4/3] relative overflow-hidden ${
                isCorporativo ? 'bg-[#F1F5F9]' : isMinimalista ? 'bg-[#F4F4F5]' : 'bg-[#EFEEE9]'
              }`}>
                <img
                  src="/src/assets/images/legal_consultation_detail_1793927756185.jpg"
                  alt="Documentación contractual y protocolo de asesoría jurídica"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover ${isMinimalista ? 'grayscale-[15%]' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070F1B]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white">
                  <span>Práctica Jurídica · Qore Latam</span>
                  <span>Lima · Latam</span>
                </div>
              </div>

              <div className="p-6">
                <div className={`flex items-center gap-2 text-xs uppercase tracking-wider font-semibold mb-2 ${
                  isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#5B4C3D]'
                }`}>
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Protocolo de Custodia</span>
                </div>
                <h4 className={`text-lg font-medium mb-2 ${
                  isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
                }`}>
                  Compromiso de Respuesta en &lt;24 Horas
                </h4>
                <p className="text-xs opacity-80 leading-relaxed">
                  Evaluamos cada caso entrante con el máximo sigilo. Si su caso tiene un vencimiento judicial inminente, indíquelo expresamente en el resumen para activar el protocolo de urgencia.
                </p>
              </div>
            </div>

            {/* Direct Contact Channels Card */}
            <div className={`p-6 sm:p-8 bg-[#FFFFFF] border space-y-6 shadow-xs ${
              isCorporativo
                ? 'border-[#CBD5E1] rounded-md'
                : isMinimalista
                ? 'border-[#E4E4E7] rounded-none shadow-none'
                : 'border-[#DDD9D2] rounded-sm'
            }`}>
              <h4 className={`text-xl font-medium pb-3 border-b ${
                isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
              }`}>
                Canales de Contacto Directo
              </h4>

              {/* Direct Telephones */}
              <div className="flex items-start gap-3.5">
                <Phone className={`w-4 h-4 shrink-0 mt-1 ${
                  isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#5B4C3D]'
                }`} />
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider opacity-75 font-semibold mb-1">
                    Teléfonos de Contacto
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <a
                      href={CONTACT_INFO.primaryPhoneDirect}
                      className="text-sm font-semibold hover:opacity-80 transition-opacity"
                    >
                      {CONTACT_INFO.primaryPhoneDisplay}
                    </a>
                    <span className="opacity-40">/</span>
                    <a
                      href={CONTACT_INFO.secondaryPhoneDirect}
                      className="text-sm font-semibold hover:opacity-80 transition-opacity"
                    >
                      {CONTACT_INFO.secondaryPhoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Buttons */}
              <div className="flex items-start gap-3.5">
                <MessageSquare className={`w-4 h-4 shrink-0 mt-1 ${
                  isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#5B4C3D]'
                }`} />
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider opacity-75 font-semibold mb-2">
                    Acceso Directo a WhatsApp
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={`${CONTACT_INFO.whatsappUrlPrimary}?text=${encodeURIComponent('Hola, deseo realizar una consulta jurídica con Qore Latam Legal.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white transition-all ${
                        isCorporativo
                          ? 'bg-[#0F172A] hover:bg-[#1E293B] rounded-md'
                          : isMinimalista
                          ? 'bg-[#09090B] hover:bg-[#27272A] rounded-none'
                          : 'bg-[#5B4C3D] hover:bg-[#463B2F] rounded-sm'
                      }`}
                    >
                      <span>WhatsApp {CONTACT_INFO.primaryPhoneDisplay}</span>
                    </a>
                    <a
                      href={`${CONTACT_INFO.whatsappUrlSecondary}?text=${encodeURIComponent('Hola, deseo realizar una consulta jurídica con Qore Latam Legal.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold border transition-all ${
                        isCorporativo
                          ? 'border-[#CBD5E1] text-[#0F172A] hover:bg-[#F1F5F9] rounded-md'
                          : isMinimalista
                          ? 'border-[#09090B] text-[#09090B] hover:bg-[#F4F4F5] rounded-none'
                          : 'border-[#DDD9D2] text-[#5B4C3D] hover:bg-[#EFEEE9] rounded-sm'
                      }`}
                    >
                      <span>WhatsApp {CONTACT_INFO.secondaryPhoneDisplay}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <Mail className={`w-4 h-4 shrink-0 mt-1 ${
                  isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#5B4C3D]'
                }`} />
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-75 font-semibold mb-0.5">
                    Correo Electrónico
                  </p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm font-semibold hover:underline transition-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-current/10">
                <Clock className={`w-4 h-4 shrink-0 mt-1 ${
                  isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#09090B]' : 'text-[#5B4C3D]'
                }`} />
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-75 font-semibold mb-0.5">
                    Horario de Atención
                  </p>
                  <p className="text-xs opacity-80">
                    {CONTACT_INFO.officeHours}
                  </p>
                </div>
              </div>

              {/* Direct Links to Libro de Reclamaciones & Privacidad */}
              <div className="pt-4 border-t border-current/10 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="opacity-75">¿Desea registrar una queja o reclamo?</span>
                  <button
                    type="button"
                    onClick={onOpenLibroReclamaciones}
                    className="font-medium hover:underline"
                  >
                    Libro de Reclamaciones
                  </button>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="opacity-75">Tratamiento de datos personales:</span>
                  <button
                    type="button"
                    onClick={onOpenPrivacyPolicy}
                    className="font-medium hover:underline"
                  >
                    Política de Privacidad
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Legal FAQ Section */}
        <div className="pt-16 border-t border-current/10">
          <div className="max-w-3xl mb-12">
            <span className={`text-xs uppercase tracking-widest font-medium ${
              isCorporativo ? 'text-[#B45309]' : isMinimalista ? 'text-[#71717A]' : 'text-[#756D64]'
            }`}>
              Preguntas Frecuentes
            </span>
            <h3 className={`text-2xl sm:text-3xl font-medium mt-2 mb-3 ${
              isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
            }`}>
              Dudas habituales sobre honorarios y procedimiento
            </h3>
            <p className="text-sm opacity-80">
              Respuestas claras para que conozca con total certeza cómo abordaremos su encargo.
            </p>
          </div>

          <div className="max-w-4xl space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-[#FFFFFF] border overflow-hidden shadow-xs ${
                    isCorporativo
                      ? 'border-[#CBD5E1] rounded-md'
                      : isMinimalista
                      ? 'border-[#E4E4E7] rounded-none shadow-none'
                      : 'border-[#DDD9D2] rounded-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-black/5 transition-colors"
                  >
                    <span className={`text-lg font-medium ${
                      isMinimalista ? 'font-sans font-bold text-[#09090B]' : 'font-serif'
                    }`}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 opacity-70 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 opacity-100' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm opacity-85 leading-relaxed border-t border-current/10 bg-black/[0.02]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
