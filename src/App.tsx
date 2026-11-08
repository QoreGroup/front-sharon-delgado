/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DesignProvider } from './context/DesignContext';
import { EditorialLegalLanding } from './components/EditorialLegalLanding';
import { ContactSection } from './components/ContactSection';
import { SpecialtyModal } from './components/SpecialtyModal';
import { FigmaDesignSpecsModal } from './components/FigmaDesignSpecsModal';
import { LibroReclamacionesModal } from './components/LibroReclamacionesModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { Footer } from './components/Footer';
import { Specialty } from './data/legalData';

function AppContent() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [inquirySpecialty, setInquirySpecialty] = useState<string | undefined>(undefined);
  const [isFigmaModalOpen, setIsFigmaModalOpen] = useState(false);
  const [isLibroOpen, setIsLibroOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const scrollToContact = (specialtyTitle?: string) => {
    if (specialtyTitle) {
      setInquirySpecialty(specialtyTitle);
    }
    const target = document.querySelector('#contacto');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col antialiased bg-[#F8F7F4] text-[#5B4C3D] selection:bg-[#DDD9D2] selection:text-[#463b2f]">
      <EditorialLegalLanding
        onOpenBookingModal={() => scrollToContact()}
        onSelectSpecialty={setSelectedSpecialty}
      />

      <div className="flex-1">
        <ContactSection
          initialSpecialty={inquirySpecialty}
          onOpenLibroReclamaciones={() => setIsLibroOpen(true)}
          onOpenPrivacyPolicy={() => setIsPrivacyOpen(true)}
        />
      </div>

      <SpecialtyModal
        specialty={selectedSpecialty}
        onClose={() => setSelectedSpecialty(null)}
        onBookSpecialty={(title) => scrollToContact(title)}
      />

      <LibroReclamacionesModal
        isOpen={isLibroOpen}
        onClose={() => setIsLibroOpen(false)}
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <FigmaDesignSpecsModal
        isOpen={isFigmaModalOpen}
        onClose={() => setIsFigmaModalOpen(false)}
      />

      <Footer
        onOpenFigmaSpecs={() => setIsFigmaModalOpen(true)}
        onOpenLibroReclamaciones={() => setIsLibroOpen(true)}
        onOpenPrivacyPolicy={() => setIsPrivacyOpen(true)}
      />
    </div>
  );
}

export default function App() {
  return (
    <DesignProvider>
      <AppContent />
    </DesignProvider>
  );
}
