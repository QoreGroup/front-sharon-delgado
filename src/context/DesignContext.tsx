import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { DesignVariant, DesignVariantConfig, DESIGN_VARIANTS } from '../data/designVariants';

interface DesignContextType {
  designVariant: DesignVariant;
  setDesignVariant: (variant: DesignVariant) => void;
  config: DesignVariantConfig;
}

const DesignContext = createContext<DesignContextType | undefined>(undefined);

export const DesignProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [designVariant, setDesignVariantState] = useState<DesignVariant>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('abogada_design_variant') as DesignVariant;
      if (saved && DESIGN_VARIANTS[saved]) {
        return saved;
      }
    }
    return 'modelo';
  });

  const setDesignVariant = (variant: DesignVariant) => {
    setDesignVariantState(variant);
    if (typeof window !== 'undefined') {
      localStorage.setItem('abogada_design_variant', variant);
      document.documentElement.setAttribute('data-design', variant);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-design', designVariant);
  }, [designVariant]);

  const config = DESIGN_VARIANTS[designVariant];

  return (
    <DesignContext.Provider value={{ designVariant, setDesignVariant, config }}>
      {children}
    </DesignContext.Provider>
  );
};

export const useDesign = (): DesignContextType => {
  const context = useContext(DesignContext);
  if (!context) {
    throw new Error('useDesign must be used within a DesignProvider');
  }
  return context;
};
