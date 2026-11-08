import React, { useState } from 'react';
import { ArrowDown, ArrowRight, Menu, X } from 'lucide-react';
import { SPECIALTIES, Specialty } from '../data/legalData';

import logoImage from '../assets/images/sharon-delgado-logo-transparent.png';
import portraitImage from '../assets/images/sharon-delgado-portrait.png';
import consultationImage from '../assets/images/legal_consultation_detail_1793927756185.jpg';
import officeImage from '../assets/images/law_office_architecture_1793927756186.jpg';

interface WellspringLandingProps {
  onOpenBookingModal: () => void;
  onSelectSpecialty: (specialty: Specialty) => void;
}

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Áreas de práctica', href: '#servicios-juridicos' },
  { label: 'Enfoque', href: '#enfoque' },
  { label: 'En claro', href: '#bien-informada' },
  { label: 'Contacto', href: '#contacto' },
];

export const EditorialLegalLanding: React.FC<WellspringLandingProps> = ({
  onOpenBookingModal,
  onSelectSpecialty,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const featuredSpecialties = SPECIALTIES.slice(0, 6);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#DDD9D2] bg-[#F8F7F4]/95 backdrop-blur">
        <div className="mx-auto flex min-h-[92px] max-w-[1440px] items-center justify-between gap-8 px-6 py-4 sm:px-10 lg:px-14">
          <a href="#inicio" aria-label="Sharon Delgado, abogada y consultora jurídica — Inicio" className="group block w-[min(300px,62vw)] shrink-0">
            <img
              src={logoImage}
              alt="Sharon Delgado — Abogada y Consultora Jurídica"
              className="block h-auto w-full"
            />
          </a>

          <nav aria-label="Navegación principal" className="hidden items-center gap-6 xl:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="border-b border-transparent py-2 text-[13px] text-[#5B4C3D] transition-colors hover:border-[#5B4C3D] hover:text-[#756D64]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={onOpenBookingModal}
            className="hidden bg-[#5B4C3D] px-5 py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#F8F7F4] transition-colors hover:bg-[#463b2f] xl:inline-flex"
          >
            Agendar consulta
          </button>

          <button
            type="button"
            className="p-2 text-[#5B4C3D] xl:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <nav aria-label="Navegación móvil" className="border-t border-[#DDD9D2] bg-[#F8F7F4] px-6 py-5 xl:hidden">
            <div className="mx-auto flex max-w-[1440px] flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="py-3 text-sm text-[#5B4C3D]"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="mt-3 bg-[#5B4C3D] px-5 py-3 text-left text-[11px] font-medium uppercase tracking-[0.12em] text-[#F8F7F4]"
              >
                Agendar consulta
              </button>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="relative scroll-mt-24">
          <div className="relative h-[380px] overflow-hidden sm:h-[460px] lg:h-[600px]">
            <img
              src={portraitImage}
              alt="Retrato profesional de una abogada en su despacho"
              className="h-full w-full object-cover object-[50%_35%]"
            />
            <div className="absolute inset-0 bg-[#463b2f]/15" />
          </div>

          <div className="relative mx-auto -mt-24 max-w-5xl px-5 sm:-mt-32 sm:px-8">
            <div className="relative bg-[#FFFFFF] px-6 pb-12 pt-16 text-center shadow-[0_12px_55px_rgba(91,76,61,0.09)] sm:px-14 sm:pb-16 sm:pt-20 lg:px-24">
              <span className="absolute left-1/2 top-0 flex min-h-[68px] w-[min(90%,360px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#5B4C3D] px-5 text-[12px] font-medium uppercase tracking-[0.18em] text-[#F8F7F4] sm:min-h-[78px] sm:text-sm">
                Asesoría jurídica · litigios
              </span>
              <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-[#756D64]">
                Claridad para decisiones importantes
              </p>
              <h1 className="mx-auto max-w-3xl font-serif text-[38px] font-normal leading-[1.13] text-[#463b2f] sm:text-5xl lg:text-[60px]">
                Asesoría legal para la vida real y sus decisiones.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#756D64] sm:text-lg sm:leading-8">
                Acompañamiento estratégico para personas, empresas y directivos, con atención cercana y soluciones pensadas para cada situación.
              </p>
              <button
                onClick={onOpenBookingModal}
                className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 bg-[#5B4C3D] px-8 text-[11px] font-medium uppercase tracking-[0.14em] text-[#F8F7F4] transition-colors hover:bg-[#463b2f]"
              >
                Conversemos sobre su caso
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#sobre-mi"
                onClick={(event) => handleNavClick(event, '#sobre-mi')}
                className="mx-auto mt-7 flex w-fit items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#756D64] hover:text-[#463b2f]"
              >
                Conozca el estudio
                <ArrowDown className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="scroll-mt-24 bg-[#F8F7F4] py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="mx-auto w-full max-w-[470px]">
              <img
                src={portraitImage}
                alt="Retrato profesional de Sharon Delgado"
                className="aspect-[4/5] w-full object-cover object-center"
              />
            </div>
            <div className="max-w-xl">
              <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#756D64]">Una práctica cercana y estratégica</p>
              <h2 className="font-serif text-4xl font-normal leading-tight text-[#463b2f] sm:text-5xl">
                Hola, soy Sharon.
              </h2>
              <p className="mt-7 text-base leading-8 text-[#756D64]">
                Cada asunto tiene una historia y un contexto propios. Mi trabajo es escuchar, ordenar los desafíos y acompañar a cada cliente con criterio jurídico, comunicación clara y atención directa.
              </p>
              <p className="mt-4 text-base leading-8 text-[#756D64]">
                Desde la prevención contractual hasta la resolución de controversias, construimos una estrategia que responde a sus prioridades y a los objetivos que realmente importan.
              </p>
              <a
                href="#enfoque"
                onClick={(event) => handleNavClick(event, '#enfoque')}
                className="mt-8 inline-flex items-center gap-3 border-b border-[#DDD9D2] pb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#5B4C3D] hover:text-[#463b2f]"
              >
                Conozca nuestro enfoque
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="servicios-juridicos" className="scroll-mt-24 bg-[#FFFFFF] py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#756D64]">Áreas de práctica</p>
              <h2 className="font-serif text-4xl font-normal leading-tight text-[#463b2f] sm:text-5xl">
                Asesoría jurídica integral
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#756D64]">
                Un servicio coordinado en torno a sus relaciones, sus responsabilidades y los asuntos que requieren atención.
              </p>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
              <div className="grid gap-x-10 sm:grid-cols-2">
                {featuredSpecialties.map((specialty) => (
                  <button
                    key={specialty.id}
                    onClick={() => onSelectSpecialty(specialty)}
                    className="group border-t border-[#DDD9D2] py-5 text-left"
                  >
                    <span className="mb-2 block font-serif text-lg italic text-[#756D64]">{specialty.number}</span>
                    <span className="block font-serif text-xl leading-snug text-[#463b2f] transition-colors group-hover:text-[#756D64]">
                      {specialty.title}
                    </span>
                    <span className="mt-2 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-[#756D64]">
                      Conocer el servicio
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                ))}
              </div>
              <div className="relative">
                <img
                  src={consultationImage}
                  alt="Documento preparado para una revisión jurídica"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 border-b border-l border-[#DDD9D2] lg:block" />
              </div>
            </div>
          </div>
        </section>

        <section id="enfoque" className="scroll-mt-24 bg-[#EFEEE9] py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#756D64]">Nuestro enfoque</p>
              <h2 className="font-serif text-4xl font-normal leading-tight text-[#463b2f] sm:text-5xl">
                Un plan bien pensado empieza con una buena conversación.
              </h2>
            </div>
            <div className="border-l border-[#DDD9D2] pl-7 sm:pl-10">
              <p className="text-base leading-8 text-[#756D64]">
                Analizamos el contexto antes de recomendar un camino. Explicamos alternativas y próximos pasos en un lenguaje claro, y trabajamos con discreción en cada etapa del proceso.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {['Escucha atenta', 'Estrategia a medida', 'Comunicación clara'].map((principle) => (
                  <p key={principle} className="border-t border-[#DDD9D2] pt-3 font-serif text-lg text-[#5B4C3D]">
                    {principle}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="bien-informada" className="scroll-mt-24 overflow-hidden bg-[#F8F7F4] py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div className="relative">
              <img
                src={officeImage}
                alt="Espacio de reunión para conversar sobre decisiones jurídicas"
                className="aspect-[4/3] w-full object-cover"
              />
              <div aria-hidden="true" className="absolute -bottom-6 -right-6 hidden h-36 w-36 rounded-full border border-[#DDD9D2] lg:block" />
            </div>
            <div className="relative z-10">
              <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#756D64]">Ideas para decidir mejor</p>
              <h2 className="font-serif text-5xl font-normal leading-tight text-[#463b2f] sm:text-6xl">
                En claro<span className="italic text-[#756D64]">.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#756D64]">
                El lenguaje jurídico no debería ser una barrera. Aquí reunimos las áreas en las que podemos ayudarle a entender sus opciones y dar el siguiente paso con más claridad.
              </p>
              <div className="mt-8 space-y-3">
                {featuredSpecialties.slice(0, 3).map((specialty) => (
                  <button
                    key={specialty.id}
                    onClick={() => onSelectSpecialty(specialty)}
                    className="group flex w-full items-center justify-between border-t border-[#DDD9D2] py-4 text-left"
                  >
                    <span className="font-serif text-xl text-[#463b2f] transition-colors group-hover:text-[#756D64]">
                      {specialty.title}
                    </span>
                    <ArrowRight className="ml-4 h-4 w-4 shrink-0 text-[#5B4C3D] transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F7F4] py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl overflow-hidden bg-[#FFFFFF] lg:grid-cols-2">
            <img
              src={portraitImage}
              alt="Sharon Delgado en su espacio de trabajo"
              className="h-full min-h-[350px] w-full object-cover object-center"
            />
            <div className="flex flex-col items-start justify-center px-8 py-12 sm:px-14 sm:py-16">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#756D64]">¿Listo para empezar?</p>
              <h2 className="mt-5 font-serif text-4xl italic leading-tight text-[#463b2f] sm:text-5xl">
                Una buena decisión empieza conversando.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-[#756D64]">
                Cuéntenos qué necesita resolver. Revisaremos su situación y le ayudaremos a identificar un camino claro para avanzar.
              </p>
              <button
                onClick={onOpenBookingModal}
                className="mt-9 inline-flex min-h-14 items-center gap-4 bg-[#5B4C3D] px-8 text-[11px] font-medium uppercase tracking-[0.14em] text-[#F8F7F4] transition-colors hover:bg-[#463b2f]"
              >
                Agendar una consulta
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section aria-label="Ámbitos de atención" className="border-y border-[#DDD9D2] bg-[#FFFFFF] py-9 sm:py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 text-center sm:grid-cols-3 sm:px-10 sm:divide-x sm:divide-[#DDD9D2]">
            {['Empresas y negocios', 'Personas y familias', 'Directivos y patrimonio'].map((audience) => (
              <p key={audience} className="font-serif text-xl text-[#5B4C3D] sm:px-5 sm:text-2xl">
                {audience}
              </p>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
