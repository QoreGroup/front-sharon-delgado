import React, { useState } from 'react';
import { X, BookOpen, CheckCircle, Shield, Send, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/legalData';

interface LibroReclamacionesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LibroReclamacionesModal: React.FC<LibroReclamacionesModalProps> = ({ isOpen, onClose }) => {
  // Form State
  const [docType, setDocType] = useState('DNI');
  const [docNumber, setDocNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceDescription, setServiceDescription] = useState('Asesoría Jurídica / Servicios Legales');
  const [claimType, setClaimType] = useState<'reclamo' | 'queja'>('reclamo');
  const [claimDetail, setClaimDetail] = useState('');
  const [consumerRequest, setConsumerRequest] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [claimReceipt, setClaimReceipt] = useState<any>(null);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !docNumber.trim() || !email.trim() || !phone.trim() || !claimDetail.trim()) {
      setError('Por favor complete todos los campos obligatorios marcados con (*).');
      return;
    }
    if (!acceptTerms) {
      setError('Debe declarar que la información consignada es veraz.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      const year = new Date().getFullYear();
      const code = `REC-${year}-${Math.floor(1000 + Math.random() * 9000)}`;
      setClaimReceipt({
        code,
        date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
        fullName,
        docType,
        docNumber,
        email,
        phone,
        claimType,
        serviceDescription,
        claimDetail,
        consumerRequest
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setClaimReceipt(null);
    setDocNumber('');
    setFullName('');
    setAddress('');
    setPhone('');
    setEmail('');
    setClaimDetail('');
    setConsumerRequest('');
    setAcceptTerms(false);
    setError('');
  };

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
          aria-label="Cerrar libro de reclamaciones"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#756D64] mb-1 uppercase tracking-widest font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>LIBRO DE RECLAMACIONES VIRTUAL</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#5B4C3D] mb-2">
            Hoja de Reclamación Virtual
          </h3>
          <p className="text-xs sm:text-sm text-[#756D64] leading-relaxed">
            Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, ponemos a su disposición este canal virtual para el registro de quejas y reclamos.
          </p>
        </div>

        {isSubmitted && claimReceipt ? (
          <div className="py-4 animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-sm bg-[#EFEEE9] border border-[#DDD9D2] flex items-center justify-center text-[#5B4C3D] mb-6">
              <CheckCircle className="w-6 h-6" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-[#756D64] font-semibold">
              CONSTANCIA DE REGISTRO EMITIDA
            </span>

            <h4 className="font-serif text-2xl font-medium text-[#5B4C3D] mt-1 mb-2">
              Hoja de Reclamación N° {claimReceipt.code}
            </h4>
            <p className="text-xs text-[#756D64] mb-6">
              Fecha de registro: <strong>{claimReceipt.date}</strong> · Copia remitida a: <strong>{claimReceipt.email}</strong>
            </p>

            {/* Receipt Summary */}
            <div className="p-6 bg-[#F8F7F4] border border-[#DDD9D2] rounded-sm text-xs text-[#756D64] space-y-3 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-[#DDD9D2]">
                <div>
                  <span className="text-[#59636B] block">Consumidor Reclamante:</span>
                  <strong className="text-[#20364B]">{claimReceipt.fullName}</strong> ({claimReceipt.docType}: {claimReceipt.docNumber})
                </div>
                <div>
                  <span className="text-[#59636B] block">Contacto:</span>
                  <span className="text-[#20364B] font-medium">{claimReceipt.phone} · {claimReceipt.email}</span>
                </div>
              </div>

              <div className="pb-3 border-b border-[#DDD9D2]">
                <span className="text-[#59636B] block">Tipo de Disconformidad:</span>
                <span className="font-semibold uppercase tracking-wider text-[#20364B]">
                  {claimReceipt.claimType === 'reclamo' ? 'RECLAMO (Disconformidad con el servicio)' : 'QUEJA (Malestar en la atención)'}
                </span>
              </div>

              <div className="pb-3 border-b border-[#DDD9D2]">
                <span className="text-[#59636B] block">Detalle de los Hechos:</span>
                <p className="text-[#20364B] mt-1">{claimReceipt.claimDetail}</p>
              </div>

              {claimReceipt.consumerRequest && (
                <div>
                  <span className="text-[#59636B] block">Pedido del Consumidor:</span>
                  <p className="text-[#20364B] mt-1">{claimReceipt.consumerRequest}</p>
                </div>
              )}
            </div>

            <div className="p-4 bg-[#EFEEE9]/60 border border-[#DDD9D2] rounded-sm text-xs text-[#59636B] mb-6">
              <p className="font-semibold text-[#20364B] mb-1 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#A9824D]" />
                <span>Plazo legal de respuesta:</span>
              </p>
              <p>
                Conforme a la normativa legal vigente, el proveedor dará respuesta a su {claimReceipt.claimType} en un plazo no mayor a quince (15) días hábiles mediante comunicación escrita dirigida al correo electrónico consignado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#20364B] text-[#FFFFFF] rounded-sm hover:bg-[#182832]"
              >
                Cerrar Ventana
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider border border-[#DDD9D2] text-[#59636B] hover:bg-[#EFEEE9] rounded-sm"
              >
                Registrar otro reclamo
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Provider Data Box */}
            <div className="p-4 bg-[#EFEEE9]/60 border border-[#DDD9D2] rounded-sm text-xs text-[#59636B]">
              <p className="font-semibold text-[#20364B] uppercase tracking-wider text-[11px] mb-1">
                Datos del Proveedor del Servicio:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <span>Razón Social / Titular: </span>
                  <strong className="text-[#20364B]">{CONTACT_INFO.brandName}</strong>
                </div>
                <div>
                  <span>Correo Central: </span>
                  <strong className="text-[#20364B]">{CONTACT_INFO.email}</strong>
                </div>
                <div>
                  <span>Central de Contacto: </span>
                  <strong className="text-[#20364B]">{CONTACT_INFO.primaryPhoneDisplay} / {CONTACT_INFO.secondaryPhoneDisplay}</strong>
                </div>
                <div>
                  <span>Sede: </span>
                  <span className="text-[#20364B]">Atención Nacional y Regional Latam</span>
                </div>
              </div>
            </div>

            {/* Section 1: Consumer Identification */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#20364B] mb-3 pb-1 border-b border-[#DDD9D2]">
                1. Identificación del Consumidor Reclamante
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-[#20364B] mb-1">Tipo de Documento *</label>
                  <select
                    value={docType}
                    onChange={(e) => setDocType(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD9D2] rounded-sm focus:border-[#20364B] outline-none text-[#20364B]"
                  >
                    <option value="DNI">DNI</option>
                    <option value="Carné de Extranjería">Carné de Extranjería</option>
                    <option value="RUC">RUC</option>
                    <option value="Pasaporte">Pasaporte</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#20364B] mb-1">Número de Documento *</label>
                  <input
                    type="text"
                    value={docNumber}
                    onChange={(e) => setDocNumber(e.target.value)}
                    placeholder="Ej. 45892314"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD9D2] rounded-sm focus:border-[#20364B] outline-none text-[#20364B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-[#20364B] mb-1">Nombres y Apellidos / Razón Social *</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nombre completo del titular"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD9D2] rounded-sm focus:border-[#20364B] outline-none text-[#20364B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#20364B] mb-1">Domicilio</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Dirección fiscal o residencial"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD9D2] rounded-sm focus:border-[#20364B] outline-none text-[#20364B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#20364B] mb-1">Teléfono de Contacto *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="999 999 999"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD9D2] rounded-sm focus:border-[#20364B] outline-none text-[#20364B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#20364B] mb-1">Correo Electrónico (para remisión de constancia) *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD9D2] rounded-sm focus:border-[#20364B] outline-none text-[#20364B]"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Service Contracted */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#20364B] mb-3 pb-1 border-b border-[#DDD9D2]">
                2. Identificación del Servicio Contratado
              </h4>
              <div>
                <label className="block text-xs font-medium text-[#20364B] mb-1">Descripción del Servicio / Asunto Legal *</label>
                <input
                  type="text"
                  value={serviceDescription}
                  onChange={(e) => setServiceDescription(e.target.value)}
                  placeholder="Ej. Asesoría societaria, revisión contractual, etc."
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DDD9D2] rounded-sm focus:border-[#20364B] outline-none text-[#20364B]"
                />
              </div>
            </div>

            {/* Section 3: Claim / Complaint Details */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#20364B] mb-3 pb-1 border-b border-[#DDD9D2]">
                3. Detalle de la Reclamación
              </h4>

              {/* Claim vs Queja toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div
                  onClick={() => setClaimType('reclamo')}
                  className={`p-3 border rounded-sm cursor-pointer transition-all ${
                    claimType === 'reclamo'
                      ? 'bg-[#20364B] text-white border-[#20364B]'
                      : 'bg-white text-[#59636B] border-[#DDD9D2] hover:bg-[#EFEEE9]'
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider">Reclamo</p>
                  <p className={`text-[11px] mt-0.5 ${claimType === 'reclamo' ? 'text-white/80' : 'text-[#59636B]'}`}>
                    Disconformidad relacionada a los servicios prestados o contratados.
                  </p>
                </div>

                <div
                  onClick={() => setClaimType('queja')}
                  className={`p-3 border rounded-sm cursor-pointer transition-all ${
                    claimType === 'queja'
                      ? 'bg-[#20364B] text-white border-[#20364B]'
                      : 'bg-white text-[#59636B] border-[#DDD9D2] hover:bg-[#EFEEE9]'
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider">Queja</p>
                  <p className={`text-[11px] mt-0.5 ${claimType === 'queja' ? 'text-white/80' : 'text-[#59636B]'}`}>
                    Malestar o descontento respecto a la atención recibida por el personal.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#20364B] mb-1">
                    Detalle de los Hechos (Fundamento del {claimType}) *
                  </label>
                  <textarea
                    rows={4}
                    value={claimDetail}
                    onChange={(e) => setClaimDetail(e.target.value)}
                    placeholder="Describa con claridad los hechos ocurridos, fechas y motivos de su disconformidad..."
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD9D2] rounded-sm focus:border-[#20364B] outline-none text-[#20364B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#20364B] mb-1">
                    Pedido Concreto del Consumidor
                  </label>
                  <textarea
                    rows={2}
                    value={consumerRequest}
                    onChange={(e) => setConsumerRequest(e.target.value)}
                    placeholder="Indique qué solución o medida solicita respecto a su caso..."
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD9D2] rounded-sm focus:border-[#20364B] outline-none text-[#20364B]"
                  />
                </div>
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-2.5 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-0.5 rounded border-[#DDD9D2] text-[#20364B] accent-[#20364B]"
              />
              <label htmlFor="terms" className="text-xs text-[#59636B] leading-relaxed cursor-pointer">
                Declaro bajo juramento que los datos consignados en esta Hoja de Reclamación son verdaderos y autorizo la remisión de la constancia y respuesta correspondiente a mi correo electrónico. *
              </label>
            </div>

            {/* Submit button */}
            <div className="pt-4 border-t border-[#DDD9D2] flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#59636B] hover:text-[#20364B]"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold tracking-wider uppercase bg-[#5B4C3D] text-[#F8F7F4] rounded-sm hover:bg-[#463B2F] disabled:opacity-50 transition-all shadow-sm"
              >
                {isSubmitting ? (
                  <span>Registrando reclamo...</span>
                ) : (
                  <>
                    <span>Enviar Reclamación Virtual</span>
                    <Send className="w-3.5 h-3.5 text-[#A9824D]" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
