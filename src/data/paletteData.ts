export interface LegalPalette {
  id: string;
  name: string;
  subtitle: string;
  accent: string;
  accentLight: string;
  accentDark: string;
  canvas: string;
  surface: string;
  textPrimary: string;
  border: string;
  psychology: string;
  bestFor: string;
}

export const LEGAL_PALETTES: LegalPalette[] = [
  {
    id: 'bronze',
    name: 'Oro Envejecido & Alabastro',
    subtitle: 'Prestigio Clásico & Bufete Boutique',
    accent: '#8B6F3E',
    accentLight: '#E8DFC8',
    accentDark: '#6E562F',
    canvas: '#FBFBFA',
    surface: '#FDFCFA',
    textPrimary: '#171715',
    border: '#E6E5DE',
    psychology: 'Transmite nobleza, tradición, solvencia patrimonial y distinción sin ostentación.',
    bestFor: 'Derecho societario, fusiones & adquisiciones (M&A), asesoría boutique a patrimonios y alta dirección.'
  },
  {
    id: 'navy',
    name: 'Azul Marino Imperial & Platino',
    subtitle: 'Autoridad Institucional & Confianza Corporativa',
    accent: '#1E3A8A',
    accentLight: '#DBEAFE',
    accentDark: '#172554',
    canvas: '#F8FAFC',
    surface: '#FFFFFF',
    textPrimary: '#0F172A',
    border: '#E2E8F0',
    psychology: 'El color más universal en el mundo jurídico internacional. Comunica seguridad jurídica, estabilidad, serenidad y rigor procesal inquebrantable.',
    bestFor: 'Derecho bancario, mercantil internacional, asesoría jurídica continua (igualas) y cumplimiento normativo (Compliance).'
  },
  {
    id: 'forest',
    name: 'Verde Bosque Noble & Salvia',
    subtitle: 'Serenidad, Ética & Empresa Familiar',
    accent: '#214E34',
    accentLight: '#D4E7DC',
    accentDark: '#163523',
    canvas: '#F8FAF8',
    surface: '#FCFDFC',
    textPrimary: '#13221B',
    border: '#DEE6E0',
    psychology: 'Evoca longevidad, crecimiento ordenado, equidad y respeto. Despierta confianza calmada y una atmósfera reflexiva.',
    bestFor: 'Planificación sucesoria, protocolos de empresa familiar, derecho inmobiliario, medioambiental y mediación extrajudicial.'
  },
  {
    id: 'burgundy',
    name: 'Burdeos / Borgoña & Travertino',
    subtitle: 'Firmeza Forense & Carácter Resolutivo',
    accent: '#742332',
    accentLight: '#F7D5DC',
    accentDark: '#531722',
    canvas: '#FDFBFC',
    surface: '#FFFFFF',
    textPrimary: '#1C1315',
    border: '#EAE0E3',
    psychology: 'Color histórico de las togas y sellos notariales. Comunica contundencia, pasión profesional, valentía procesal y alta dignidad forense.',
    bestFor: 'Litigación en tribunales, derecho penal económico, defensa de directivos y resolución de disputas de alta fricción.'
  },
  {
    id: 'obsidian',
    name: 'Monocromo Grafito & Acero',
    subtitle: 'Vanguardia Minimalista & Precisión Técnica',
    accent: '#475569',
    accentLight: '#E2E8F0',
    accentDark: '#1E293B',
    canvas: '#FAFAFA',
    surface: '#FFFFFF',
    textPrimary: '#09090B',
    border: '#E4E4E7',
    psychology: 'Enfoque moderno de claridad absoluta, sin distracciones. Proyecta agilidad, mentalidad analítica y precisión quirúrgica.',
    bestFor: 'Startups tecnológicas, propiedad intelectual, arbitraje comercial moderno y asesoría a fondos de capital riesgo.'
  }
];
