import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Palette, Type } from 'lucide-react';

interface FigmaDesignSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeThemeId?: string;
  onSelectTheme?: (themeId: string) => void;
}

export const FigmaDesignSpecsModal: React.FC<FigmaDesignSpecsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'guide' | 'json'>('tokens');
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);

  if (!isOpen) return null;

  const previewUrl = window.location.origin;

  const paletteTokens = [
    { label: 'Fondo principal', name: 'Neutro claro', hex: '#F8F7F4', role: 'Canvas general y secciones primarias' },
    { label: 'Fondos alternativos', name: 'Gris cálido claro', hex: '#EFEEE9', role: 'Fondos alternativos para ritmo visual' },
    { label: 'Tarjetas y formularios', name: 'Blanco puro', hex: '#FFFFFF', role: 'Superficies elevadas, inputs y modales' },
    { label: 'Texto principal y botones', name: 'Marrón principal', hex: '#5B4C3D', role: 'Titulares de alto contraste y botones de acción' },
    { label: 'Pie de página y oscuro', name: 'Marrón profundo', hex: '#463B2F', role: 'Footer y capas profundas' },
    { label: 'Texto secundario', name: 'Gris cálido', hex: '#756D64', role: 'Párrafos de prosa y descripciones secundarias' },
    { label: 'Acentos e iconos', name: 'Gris cálido', hex: '#756D64', role: 'Acentos discretos e iconografía' },
    { label: 'Bordes estructurales', name: 'Gris claro', hex: '#DDD9D2', role: 'Divisores y contornos de tarjetas' },
  ];

  const figmaTokens = {
    name: "Elena Valenzuela · Qore Latam Legal Design System",
    version: "2.0.0",
    colorPalette: {
      fondoPrincipal: { value: "#F8F7F4", description: "Neutro claro (Canvas general)" },
      fondoAlternativo: { value: "#EFEEE9", description: "Gris cálido claro (Secciones alternas)" },
      tarjetasFormularios: { value: "#FFFFFF", description: "Blanco (Cards & inputs)" },
      textoPrincipalBotones: { value: "#5B4C3D", description: "Marrón principal (Headings & buttons)" },
      pieDePaginaOscuro: { value: "#463B2F", description: "Marrón profundo (Footer & dark surfaces)" },
      textoSecundario: { value: "#756D64", description: "Gris cálido (Prose text)" },
      acentosIconos: { value: "#756D64", description: "Gris cálido (Accents & details)" },
      bordes: { value: "#DDD9D2", description: "Gris claro (Borders & dividers)" },
    },
    typography: {
      fontFamily: {
        serif: { value: "Cormorant Garamond, Georgia, serif" },
        sans: { value: "Plus Jakarta Sans, sans-serif" }
      },
      fontSize: {
        hero: { value: "56px", lineHeight: "1.12" },
        h2: { value: "40px", lineHeight: "1.2" },
        h3: { value: "24px", lineHeight: "1.3" },
        body: { value: "15px", lineHeight: "1.65" },
        metadata: { value: "12px", lineHeight: "1.4" }
      }
    },
    layout: {
      contentContainer: "1280px (max-w-7xl)",
      columns: 12,
      gutter: "32px",
      padding: "24px mobile / 80px desktop"
    }
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(previewUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(figmaTokens, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#463B2F]/75 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FFFFFF] border border-[#DDD9D2] rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-6 sm:p-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#756D64] hover:text-[#5B4C3D] hover:bg-[#EFEEE9] rounded-sm transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 text-xs text-[#756D64] font-mono mb-1 uppercase tracking-widest font-semibold">
            <span>SISTEMA DE DISEÑO & TOKENS FIGMA</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#5B4C3D] mb-2">
            Paleta de Color Oficial & Especificaciones
          </h3>
          <p className="text-xs sm:text-sm text-[#756D64]">
            Guía de tokens de diseño consistente con la paleta de 8 colores, tipografía editorial y exportación vectorial a Figma.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#DDD9D2]">
          <button
            onClick={() => setActiveTab('tokens')}
            className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors ${
              activeTab === 'tokens'
                ? 'bg-[#5B4C3D] text-[#FFFFFF]'
                : 'text-[#756D64] hover:bg-[#EFEEE9] hover:text-[#5B4C3D]'
            }`}
          >
            1. Paleta de 8 Colores
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors ${
              activeTab === 'guide'
                ? 'bg-[#5B4C3D] text-[#FFFFFF]'
                : 'text-[#756D64] hover:bg-[#EFEEE9] hover:text-[#5B4C3D]'
            }`}
          >
            2. Importar a Figma
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors ${
              activeTab === 'json'
                ? 'bg-[#5B4C3D] text-[#FFFFFF]'
                : 'text-[#756D64] hover:bg-[#EFEEE9] hover:text-[#5B4C3D]'
            }`}
          >
            3. Tokens JSON
          </button>
        </div>

        {/* Tab 1: The 8-token Palette */}
        {activeTab === 'tokens' && (
          <div className="space-y-6 text-xs text-[#756D64]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-xs uppercase tracking-wider text-[#5B4C3D] flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#756D64]" />
                  <span>Tokens de Color Implementados</span>
                </h4>
                <span className="text-[11px] text-[#756D64]">8 tokens armonizados</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {paletteTokens.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#FFFFFF] border border-[#DDD9D2] rounded-sm flex items-center gap-3 shadow-xs"
                  >
                    <div
                      className="w-10 h-10 rounded-sm border border-[#DDD9D2] shrink-0 shadow-inner"
                      style={{ backgroundColor: p.hex }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] uppercase tracking-wider text-[#756D64] font-semibold">{p.label}</span>
                        <code className="text-xs font-mono font-bold text-[#5B4C3D]">{p.hex}</code>
                      </div>
                      <p className="text-xs font-medium text-[#5B4C3D] truncate">{p.name}</p>
                      <p className="text-[11px] text-[#756D64] truncate">{p.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="pt-4 border-t border-[#DDD9D2]">
              <h4 className="font-semibold text-xs uppercase tracking-wider text-[#5B4C3D] mb-3 flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5 text-[#756D64]" />
                <span>Tipografía Editorial Jurídica</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#EFEEE9]/60 border border-[#DDD9D2] rounded-sm">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#756D64] font-semibold">
                    Display / Titulares
                  </span>
                  <h5 className="font-serif text-2xl font-medium text-[#5B4C3D] mt-1 mb-1">
                    Cormorant Garamond
                  </h5>
                  <p className="text-xs text-[#756D64]">
                    Weights: Regular 400, Medium 500. Proporciona distinción letrada, sobriedad y solemnidad jurídica.
                  </p>
                </div>

                <div className="p-4 bg-[#EFEEE9]/60 border border-[#DDD9D2] rounded-sm">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#756D64] font-semibold">
                    Cuerpo / Controles / UI
                  </span>
                  <h5 className="font-sans text-xl font-semibold text-[#5B4C3D] mt-1 mb-1">
                    Plus Jakarta Sans
                  </h5>
                  <p className="text-xs text-[#756D64]">
                    Weights: Regular 400, Medium 500, SemiBold 600. Garantiza lectura nítida en contratos y formularios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Figma Import Guide */}
        {activeTab === 'guide' && (
          <div className="space-y-6 text-xs text-[#756D64]">
            <div className="p-5 bg-[#EFEEE9]/60 border border-[#DDD9D2] rounded-sm">
              <h4 className="font-serif text-lg font-medium text-[#5B4C3D] mb-2">
                URL de esta web lista para importar:
              </h4>
              <p className="text-xs text-[#756D64] mb-3">
                Copia esta URL y pégala en el plugin oficial de Figma para convertir toda la página en marcos Auto-Layout y vectores editables:
              </p>
              
              <div className="flex items-center gap-2 p-2.5 bg-white border border-[#DDD9D2] rounded-sm">
                <input
                  type="text"
                  readOnly
                  value={previewUrl}
                  className="flex-1 text-xs font-mono text-[#5B4C3D] bg-transparent outline-none truncate"
                />
                <button
                  onClick={handleCopyUrl}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#5B4C3D] text-[#FFFFFF] rounded-sm hover:bg-[#463B2F] transition-colors whitespace-nowrap shadow-sm"
                >
                  {copiedUrl ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>¡Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar URL</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-xs uppercase tracking-wider text-[#5B4C3D]">
                Pasos para abrir en Figma:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-[#FFFFFF] border border-[#DDD9D2] rounded-sm shadow-xs">
                  <span className="font-mono text-xs text-[#756D64] font-semibold block mb-1">PASO 1</span>
                  <p className="font-medium text-[#5B4C3D] mb-1">Abre tu archivo en Figma</p>
                  <p className="text-[11px] text-[#756D64] leading-relaxed">
                    Crea un lienzo nuevo en blanco en Figma o abre tu biblioteca de diseño existente.
                  </p>
                </div>

                <div className="p-4 bg-[#FFFFFF] border border-[#DDD9D2] rounded-sm shadow-xs">
                  <span className="font-mono text-xs text-[#756D64] font-semibold block mb-1">PASO 2</span>
                  <p className="font-medium text-[#5B4C3D] mb-1">Ejecuta el plugin</p>
                  <p className="text-[11px] text-[#756D64] leading-relaxed">
                    Presiona <code className="bg-[#EFEEE9] px-1 py-0.5 rounded text-[#5B4C3D]">Ctrl/Cmd + P</code> y busca <strong>html.to.design</strong> (o Builder.io).
                  </p>
                </div>

                <div className="p-4 bg-[#FFFFFF] border border-[#DDD9D2] rounded-sm shadow-xs">
                  <span className="font-mono text-xs text-[#756D64] font-semibold block mb-1">PASO 3</span>
                  <p className="font-medium text-[#5B4C3D] mb-1">Pega la URL e importa</p>
                  <p className="text-[11px] text-[#756D64] leading-relaxed">
                    Pega la URL copiada. El plugin recreará automáticamente el Navbar, Hero, Especialidades y Contacto con Auto-Layout completo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: JSON Tokens for Token Studio / Figma Variables */}
        {activeTab === 'json' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#756D64]">
                Tokens estructurados según la paleta consistente:
              </span>
              <button
                onClick={handleCopyJson}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#5B4C3D] text-[#FFFFFF] rounded-sm hover:bg-[#463B2F] transition-colors shadow-sm"
              >
                {copiedJson ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Tokens JSON</span>
                  </>
                )}
              </button>
            </div>

            <pre className="p-4 bg-[#463B2F] text-[#F8F7F4] text-[11px] font-mono rounded-sm max-h-72 overflow-y-auto leading-relaxed border border-[#DDD9D2]">
              {JSON.stringify(figmaTokens, null, 2)}
            </pre>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-[#DDD9D2] flex items-center justify-between">
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#5B4C3D] hover:text-[#756D64] hover:underline font-medium"
          >
            <span>Abrir web en ventana independiente</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#756D64]" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#5B4C3D] text-[#FFFFFF] rounded-sm hover:bg-[#463B2F]"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
