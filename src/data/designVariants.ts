export type DesignVariant = 'modelo' | 'minimalista' | 'corporativo';

export interface DesignVariantConfig {
  id: DesignVariant;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  colors: {
    canvas: string;
    canvasAlt: string;
    card: string;
    primary: string;
    primaryHover: string;
    secondary: string;
    accent: string;
    border: string;
    dark: string;
    badgeBg: string;
    badgeText: string;
  };
  typography: {
    headingFont: string; // 'font-serif' | 'font-sans'
    headingClass: string;
    kickerClass: string;
  };
  styles: {
    rounded: string;
    buttonRounded: string;
    cardBorder: string;
    headerClass: string;
    heroLayout: string;
    quoteIconClass: string;
  };
}

export const DESIGN_VARIANTS: Record<DesignVariant, DesignVariantConfig> = {
  modelo: {
    id: 'modelo',
    name: 'Diseño Modelo',
    shortName: 'Modelo',
    tagline: 'Editorial Boutique & Lujo Sereno',
    description: 'Paleta de neutros claros con marrón como color principal, tipografía serif clásica Cormorant Garamond y detalles discretos. Ideal para una asesoría cercana, moderna y clara.',
    colors: {
      canvas: '#F8F7F4',
      canvasAlt: '#EFEEE9',
      card: '#FFFFFF',
      primary: '#5B4C3D',
      primaryHover: '#463B2F',
      secondary: '#756D64',
      accent: '#756D64',
      border: '#DDD9D2',
      dark: '#463B2F',
      badgeBg: '#EFEEE9',
      badgeText: '#5B4C3D',
    },
    typography: {
      headingFont: 'font-serif',
      headingClass: 'font-serif font-normal tracking-tight',
      kickerClass: 'font-mono text-xs uppercase tracking-widest text-[#756D64]',
    },
    styles: {
      rounded: 'rounded-sm',
      buttonRounded: 'rounded-sm',
      cardBorder: 'border border-[#DDD9D2]',
      headerClass: 'bg-[#F8F7F4]/95 border-b border-[#DDD9D2]',
      heroLayout: 'editorial',
      quoteIconClass: 'text-[#756D64]',
    },
  },

  minimalista: {
    id: 'minimalista',
    name: 'Diseño Minimalista',
    shortName: 'Minimalista',
    tagline: 'Estilo Suizo & Máxima Claridad',
    description: 'Estética arquitectónica monocromática, tipografía sans geométrica nítida, líneas de corte milimétricas y amplio espacio en blanco. Enfoque moderno, directo y sin ornamentos.',
    colors: {
      canvas: '#FAFAFA',
      canvasAlt: '#F4F4F5',
      card: '#FFFFFF',
      primary: '#09090B',
      primaryHover: '#18181B',
      secondary: '#71717A',
      accent: '#18181B',
      border: '#E4E4E7',
      dark: '#09090B',
      badgeBg: '#F4F4F5',
      badgeText: '#09090B',
    },
    typography: {
      headingFont: 'font-sans',
      headingClass: 'font-sans font-semibold tracking-tighter',
      kickerClass: 'font-sans text-xs uppercase tracking-widest text-[#71717A] font-semibold',
    },
    styles: {
      rounded: 'rounded-none',
      buttonRounded: 'rounded-none',
      cardBorder: 'border border-[#E4E4E7]',
      headerClass: 'bg-[#FFFFFF]/95 border-b border-[#E4E4E7]',
      heroLayout: 'swiss',
      quoteIconClass: 'text-[#18181B]',
    },
  },

  corporativo: {
    id: 'corporativo',
    name: 'Diseño Corporativo',
    shortName: 'Corporativo',
    tagline: 'Firma Legal & Prestigio Institucional',
    description: 'Autoridad institucional con azul marino profundo, acentos en oro ámbar y tipografía de gran porte. Diseñado para representar solidez empresarial, litigios de alto impacto y asesoría a directorios.',
    colors: {
      canvas: '#F8FAFC',
      canvasAlt: '#F1F5F9',
      card: '#FFFFFF',
      primary: '#0F172A',
      primaryHover: '#1E293B',
      secondary: '#475569',
      accent: '#B45309',
      border: '#CBD5E1',
      dark: '#070F1B',
      badgeBg: '#FEF3C7',
      badgeText: '#92400E',
    },
    typography: {
      headingFont: 'font-serif',
      headingClass: 'font-serif font-medium tracking-tight',
      kickerClass: 'font-sans text-xs uppercase tracking-widest text-[#B45309] font-bold',
    },
    styles: {
      rounded: 'rounded-md',
      buttonRounded: 'rounded-md',
      cardBorder: 'border border-[#CBD5E1] shadow-xs',
      headerClass: 'bg-[#0F172A] text-white border-b border-[#1E293B]',
      heroLayout: 'executive',
      quoteIconClass: 'text-[#B45309]',
    },
  },
};
