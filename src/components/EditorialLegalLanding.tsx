import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Menu, X, MessageCircle,
  Scale, ShieldCheck, Gavel, Search, Users, MapPin, Clock3,
  Instagram, Linkedin, Facebook, ChevronLeft, ChevronRight, Quote
} from 'lucide-react';
import readXlsxFile from 'read-excel-file/browser';

import heroImage from '../assets/images/sharon-delgado-portrait.JPEG';
import brandLogo from '../assets/images/sharon-delgado-logo-transparent.png';
import profileImage from '../assets/images/sharon-analizando.JPG.jpeg';
import readingImage from '../assets/images/sharon-leyendo.PNG';
import casualImage from '../assets/images/sharon-casual.jpeg';
import notificationsImage from '../assets/images/sharon-revisando-notificaciones.JPEG';
import thinkingImage from '../assets/images/sharon-pensando.jpeg';
import observingImage from '../assets/images/sharon-observando-2.JPEG';

const WHATSAPP = 'https://wa.me/51999829797';
const SOCIALS = {
  facebook: 'https://www.facebook.com/share/1CHQxDKLpi/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/sharon_delgado_/',
  linkedin: 'https://www.linkedin.com/in/sharon-katherine-delgado-lobato-b7a9b6300/'
};

const services = [
  'Defensa y representación en procesos judiciales laborales',
  'Reposición por despido incausado, fraudulento o nulo',
  'Indemnización por despido arbitrario',
  'Reconocimiento de vínculo laboral',
  'Desnaturalización de contratos laborales y de locación de servicios',
  'Pago de beneficios sociales y remuneraciones',
  'Procesos por actos de hostilidad laboral',
  'Indemnización por daños y perjuicios derivados de la relación laboral',
  'Solicitud y defensa de medidas cautelares',
  'Asesoría y consultoría jurídico-laboral'
];

const gallery = [
  { src: readingImage, alt: 'Sharon Delgado revisando documentación jurídica', className: 'md:col-span-1 md:row-span-2' },
  { src: notificationsImage, alt: 'Sharon Delgado revisando notificaciones', className: 'md:col-span-1' },
  { src: thinkingImage, alt: 'Sharon Delgado en un momento de análisis', className: 'md:col-span-1' },
  { src: casualImage, alt: 'Retrato profesional de Sharon Delgado', className: 'md:col-span-1' },
  { src: observingImage, alt: 'Sharon Delgado trabajando en su escritorio', className: 'md:col-span-1' }
];

const testimonialsPerView = 3;

interface Testimonial {
  name: string;
  quote: string;
  isExample: boolean;
}

const normalizeText = (value: unknown) =>
  String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();

const parseTestimonials = (rows: (string | number | boolean | Date | null)[][]): Testimonial[] => {
  const [header, ...dataRows] = rows;
  if (!header) throw new Error('La hoja está vacía.');

  const nameColumn = header.findIndex((value) => normalizeText(value) === 'nombre');
  const quoteColumn = header.findIndex((value) => normalizeText(value) === 'opinion');
  const typeColumn = header.findIndex((value) => normalizeText(value) === 'tipo');
  if (nameColumn < 0 || quoteColumn < 0 || typeColumn < 0) {
    throw new Error('La primera fila debe incluir las columnas Nombre, Opinión y Tipo.');
  }

  const parsed = dataRows.flatMap((row, index) => {
    if (row.every((value) => value === null || String(value).trim() === '')) return [];

    const name = String(row[nameColumn] ?? '').trim();
    const quote = String(row[quoteColumn] ?? '').trim();
    const type = normalizeText(row[typeColumn]);
    if (!name || !quote || !type) {
      throw new Error(`Completa Nombre, Opinión y Tipo en la fila ${index + 2}.`);
    }
    if (type !== 'ejemplo' && type !== 'cliente') {
      throw new Error(`El Tipo de la fila ${index + 2} debe ser “Ejemplo” o “Cliente”.`);
    }

    return [{ name, quote, isExample: type === 'ejemplo' }];
  });

  if (parsed.length === 0) throw new Error('La hoja no contiene opiniones.');
  return parsed;
};

const nav = [
  ['Inicio', '#inicio'],
  ['Sobre mí', '#sobre-mi'],
  ['Servicios', '#servicios'],
  ['Enfoque', '#enfoque'],
  ['Opiniones', '#opiniones'],
  ['Contacto', '#contacto']
] as const;

export const EditorialLegalLanding: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeTestimonialPage, setActiveTestimonialPage] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);
  const [testimonialLoadError, setTestimonialLoadError] = useState<string | null>(null);
  const testimonialTouchStartX = useRef<number | null>(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (
      isTestimonialPaused ||
      testimonials.length < 2 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return;

    const intervalId = window.setInterval(() => {
      setActiveTestimonialPage((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isTestimonialPaused, testimonials.length]);

  useEffect(() => {
    let isCurrent = true;

    const loadTestimonials = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}opiniones.xlsx`, { cache: 'no-store' });
        if (!response.ok) throw new Error(`No se pudo leer public/opiniones.xlsx (HTTP ${response.status}).`);

        const [sheet] = await readXlsxFile(await response.blob());
        if (!sheet) throw new Error('El archivo Excel no contiene hojas.');

        const loadedTestimonials = parseTestimonials(sheet.data);
        if (isCurrent) setTestimonials(loadedTestimonials);
      } catch (error) {
        console.error('Error al cargar las opiniones desde public/opiniones.xlsx:', error);
        if (isCurrent) {
          setTestimonialLoadError('No se pudieron cargar las opiniones. Revisa el archivo public/opiniones.xlsx y sus columnas Nombre, Opinión y Tipo.');
        }
      } finally {
        if (isCurrent) setIsLoadingTestimonials(false);
      }
    };

    void loadTestimonials();
    return () => { isCurrent = false; };
  }, []);

  const goTo = (href: string) => {
    closeMenu();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const showPreviousTestimonial = () => {
    setActiveTestimonialPage((current) => (current - 1 + testimonials.length) % testimonials.length);
  };
  const showNextTestimonial = () => {
    setActiveTestimonialPage((current) => (current + 1) % testimonials.length);
  };
  const handleTestimonialTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    testimonialTouchStartX.current = event.changedTouches[0]?.clientX ?? null;
    setIsTestimonialPaused(true);
  };
  const handleTestimonialTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = testimonialTouchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    testimonialTouchStartX.current = null;

    if (startX !== null && endX !== undefined) {
      const distance = endX - startX;
      if (Math.abs(distance) > 40) {
        if (distance < 0) showNextTestimonial();
        else showPreviousTestimonial();
      }
    }

    setIsTestimonialPaused(false);
  };
  const handleTestimonialTouchCancel = () => {
    testimonialTouchStartX.current = null;
    setIsTestimonialPaused(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#DDD6CB] bg-[#F8F6F1]/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-[82px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-9 lg:px-14">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); goTo('#inicio'); }} className="flex shrink-0 items-center">
            <img src={brandLogo} alt="Sharon Delgado, abogada y consultora jurídica" className="h-auto w-[220px] sm:w-[270px]" />
          </a>

          <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} onClick={(e) => { e.preventDefault(); goTo(href); }}
                className="border-b border-transparent py-2 text-[12px] uppercase tracking-[0.13em] text-[#625548] transition hover:border-[#8D7964] hover:text-[#352D26]">
                {label}
              </a>
            ))}
          </nav>

          <a href={WHATSAPP} target="_blank" rel="noreferrer"
            className="hidden items-center gap-2 bg-[#4C4034] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-[#352D26] lg:inline-flex">
            <MessageCircle size={14} /> Escríbeme
          </a>

          <button type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)} className="p-2 text-[#4C4034] lg:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <nav aria-label="Navegación móvil" className="border-t border-[#DDD6CB] bg-[#F8F6F1] px-5 py-4 lg:hidden">
            <div className="mx-auto flex max-w-[1440px] flex-col">
              {nav.map(([label, href]) => (
                <a key={href} href={href} onClick={(e) => { e.preventDefault(); goTo(href); }}
                  className="border-b border-[#E6E0D7] py-3 text-sm text-[#4C4034]">{label}</a>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noreferrer" onClick={closeMenu}
                className="mt-4 flex items-center justify-center gap-2 bg-[#4C4034] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white">
                <MessageCircle size={15} /> Contactar por WhatsApp
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="scroll-mt-24 bg-[#F8F6F1]">
          <div className="relative min-h-[610px] overflow-hidden sm:min-h-[700px]">
            <img src={heroImage} alt="Sharon Delgado, abogada y consultora jurídica" className="absolute inset-0 h-full w-full object-cover object-[50%_28%]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F1]/[0.98] via-[#F8F6F1]/90 to-[#F8F6F1]/20" />
            <div className="relative mx-auto flex min-h-[610px] max-w-[1440px] items-center px-6 py-20 sm:min-h-[700px] sm:px-12 lg:px-20">
              <div className="max-w-2xl text-[#40362D]">
                <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8D7052] sm:text-xs">
                  <span className="h-px w-10 bg-[#A88A69]" /> Derecho laboral · Litigación
                </p>
                <h1 className="font-serif text-[43px] font-normal leading-[1.08] tracking-tight sm:text-6xl lg:text-[76px]">
                  Excelencia jurídica y compromiso en cada defensa
                </h1>
                <p className="mt-7 max-w-xl text-base leading-8 text-[#5E5145] sm:text-lg">
                  Defensa y asesoría jurídico-laboral con análisis estratégico, atención personalizada y rigor técnico en cada caso.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href={WHATSAPP} target="_blank" rel="noreferrer"
                    className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#4C4034] px-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#F8F6F1] transition hover:bg-[#352D26]">
                    <MessageCircle size={16} /> Solicitar asesoría
                  </a>
                  <a href="#servicios" onClick={(e) => { e.preventDefault(); goTo('#servicios'); }}
                    className="inline-flex min-h-14 items-center justify-center gap-3 border border-[#8D7964] px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4C4034] transition hover:bg-[#4C4034]/[0.06]">
                    Conocer servicios <ArrowDown size={15} />
                  </a>
                </div>
                <p className="mt-8 text-[10px] uppercase tracking-[0.18em] text-[#706256]">Atención a nivel nacional · Presencial y virtual</p>
              </div>
            </div>
          </div>
          <div className="mx-auto -mt-px grid max-w-[1440px] grid-cols-1 border-b border-[#DED6CA] bg-[#F8F6F1] sm:grid-cols-3">
            <div className="flex items-center justify-center gap-3 border-b border-[#DED6CA] px-5 py-6 sm:border-b-0 sm:border-r">
              <Scale className="text-[#8B765F]" size={20} /><span className="text-[10px] uppercase tracking-[0.17em] text-[#625548]">Especialización laboral</span>
            </div>
            <div className="flex items-center justify-center gap-3 border-b border-[#DED6CA] px-5 py-6 sm:border-b-0 sm:border-r">
              <MapPin className="text-[#8B765F]" size={20} /><span className="text-[10px] uppercase tracking-[0.17em] text-[#625548]">Lima · Cajamarca · Perú</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-5 py-6">
              <Clock3 className="text-[#8B765F]" size={20} /><span className="text-[10px] uppercase tracking-[0.17em] text-[#625548]">Atención previa cita</span>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="scroll-mt-24 bg-[#F2EEE7] py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="relative mx-auto w-full max-w-[490px]">
              <img src={profileImage} alt="Sharon Delgado analizando documentación jurídica" className="aspect-[4/5] w-full object-cover object-center" />
              <div className="absolute -bottom-5 -right-5 -z-0 h-28 w-28 border-b border-r border-[#A8947C]" />
              <span className="absolute -bottom-4 left-5 bg-[#4C4034] px-5 py-3 text-[9px] uppercase tracking-[0.18em] text-white">Rigor · Estrategia · Compromiso</span>
            </div>
            <div className="relative z-10 max-w-2xl">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927D66]">Perfil profesional</p>
              <h2 className="font-serif text-4xl font-normal leading-tight text-[#352D26] sm:text-5xl">Una defensa construida desde el análisis y la estrategia</h2>
              <p className="mt-7 text-[15px] leading-8 text-[#6E6256]">
                Soy Sharon Delgado, abogada y consultora jurídica, colegiada en el Ilustre Colegio de Abogados de Cajamarca (ICAC), con experiencia en el ámbito judicial, la litigación y la consultoría jurídica.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-[#6E6256]">
                Mi trayectoria se caracteriza por una sólida capacidad de análisis, rigurosidad académica y un perfil competitivo. He obtenido reconocimientos en concursos de litigación oral (2023) e investigación jurídica (2024), destacando por mis habilidades de argumentación, razonamiento jurídico y dominio de la técnica procesal.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-[#6E6256]">
                Cuento con experiencia en el ámbito judicial y en el patrocinio de procesos laborales, lo que me permite abordar las controversias desde una visión integral, combinando el razonamiento judicial con el diseño de estrategias procesales.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-[#6E6256]">
                En el ámbito académico he desarrollado investigaciones jurídicas y publicado artículos especializados, con especial interés en el análisis jurisprudencial y el desarrollo del conocimiento jurídico. En 2022 fui presentada como escritora peruana en la revista literaria venezolana <em>Letralia, Tierra de Letras</em>.
              </p>
              <div className="mt-8 border-l-2 border-[#A8947C] pl-5">
                <p className="font-serif text-xl italic leading-relaxed text-[#4C4034]">«Excelencia jurídica y compromiso en cada defensa».</p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="scroll-mt-24 bg-[#FBFAF7] py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927D66]">Áreas de práctica</p>
              <h2 className="font-serif text-4xl font-normal leading-tight text-[#352D26] sm:text-5xl">Servicios jurídicos en materia laboral</h2>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-[#6E6256]">
                Asesoría, patrocinio y defensa en controversias derivadas de las relaciones de trabajo, con evaluación estratégica de cada situación.
              </p>
            </div>

            <div className="grid gap-x-12 md:grid-cols-2">
              {services.map((service, index) => (
                <a key={service} href={`${WHATSAPP}?text=${encodeURIComponent(`Hola, Sharon. Quisiera recibir información sobre el servicio: ${service}.`)}`}
                  target="_blank" rel="noreferrer"
                  className="group flex gap-5 border-t border-[#DED6CA] py-6 transition-colors hover:border-[#8B765F]">
                  <span className="pt-1 font-serif text-lg italic text-[#A18C74]">{String(index + 1).padStart(2, '0')}</span>
                  <span className="flex-1">
                    <span className="block font-serif text-xl leading-snug text-[#40362D] transition-colors group-hover:text-[#927D66]">{service}</span>
                    <span className="mt-3 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#927D66]">Consultar por WhatsApp <ArrowUpRight size={13} /></span>
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center gap-3 bg-[#4C4034] px-8 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#352D26]">
                Conversar sobre mi caso <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section id="enfoque" className="scroll-mt-24 bg-[#E9E2D7] py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927D66]">Forma de trabajo</p>
              <h2 className="font-serif text-4xl font-normal leading-tight text-[#352D26] sm:text-5xl">Cada caso merece una estrategia propia</h2>
              <p className="mt-6 text-[15px] leading-8 text-[#6E6256]">
                La práctica profesional se fundamenta en el análisis estratégico de cada caso, la atención personalizada y la defensa responsable de los derechos e intereses de cada cliente.
              </p>
              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                <div className="border-t border-[#BFB09D] pt-4">
                  <Search className="mb-3 text-[#927D66]" size={22} />
                  <h3 className="font-serif text-xl text-[#40362D]">Análisis riguroso</h3>
                  <p className="mt-2 text-sm leading-7 text-[#6E6256]">Estudio de los hechos, el marco jurídico y los elementos relevantes de cada asunto.</p>
                </div>
                <div className="border-t border-[#BFB09D] pt-4">
                  <Gavel className="mb-3 text-[#927D66]" size={22} />
                  <h3 className="font-serif text-xl text-[#40362D]">Estrategia procesal</h3>
                  <p className="mt-2 text-sm leading-7 text-[#6E6256]">Preparación y desarrollo de una defensa coherente con las particularidades del caso.</p>
                </div>
                <div className="border-t border-[#BFB09D] pt-4">
                  <Users className="mb-3 text-[#927D66]" size={22} />
                  <h3 className="font-serif text-xl text-[#40362D]">Atención personalizada</h3>
                  <p className="mt-2 text-sm leading-7 text-[#6E6256]">Comunicación directa y orientación según las necesidades de cada cliente.</p>
                </div>
                <div className="border-t border-[#BFB09D] pt-4">
                  <ShieldCheck className="mb-3 text-[#927D66]" size={22} />
                  <h3 className="font-serif text-xl text-[#40362D]">Compromiso profesional</h3>
                  <p className="mt-2 text-sm leading-7 text-[#6E6256]">Defensa responsable de los derechos e intereses confiados.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={thinkingImage} alt="Sharon Delgado reflexionando sobre un asunto jurídico" className="aspect-[4/5] w-full object-cover object-center" />
              <div className="absolute -bottom-5 -left-5 hidden h-28 w-28 border-b border-l border-[#A8947C] lg:block" />
            </div>
          </div>
        </section>

        <section id="opiniones" role="region" aria-roledescription="carrusel" aria-label="Opiniones de clientes" className="scroll-mt-24 bg-[#F8F6F1] py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6 sm:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927D66]">La experiencia de mis clientes</p>
              <h2 className="font-serif text-4xl font-normal leading-tight text-[#352D26] sm:text-5xl">Opiniones que inspiran confianza</h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6E6256]">Cada experiencia refleja el valor de una atención cercana, clara y comprometida.</p>
            </div>

            <div
              onMouseEnter={() => setIsTestimonialPaused(true)}
              onMouseLeave={() => setIsTestimonialPaused(false)}
              onFocusCapture={() => setIsTestimonialPaused(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setIsTestimonialPaused(false);
                }
              }}
            >
              {isLoadingTestimonials ? (
                <p role="status" className="mt-10 py-16 text-center text-sm text-[#6E6256]">Cargando opiniones…</p>
              ) : testimonialLoadError ? (
                <p role="alert" className="mt-10 border border-[#DED6CA] bg-[#FBFAF7] px-6 py-10 text-center text-sm leading-7 text-[#6E6256]">{testimonialLoadError}</p>
              ) : (
                <>
                  <div
                  aria-live="off"
                  onTouchStart={handleTestimonialTouchStart}
                  onTouchEnd={handleTestimonialTouchEnd}
                  onTouchCancel={handleTestimonialTouchCancel}
                  className="mt-10 flex min-h-[300px] flex-wrap items-stretch justify-center gap-5 touch-pan-y"
                  >
                  {Array.from({ length: Math.min(testimonialsPerView, testimonials.length) }, (_, index) => {
                    const testimonialIndex = (activeTestimonialPage + index) % testimonials.length;
                    const testimonial = testimonials[testimonialIndex];

                    return (
                      <article key={testimonial.name} role="group" aria-roledescription="opinión"
                        aria-label={`Opinión ${testimonialIndex + 1} de ${testimonials.length}`}
                        className={`w-full flex-col border border-[#DED6CA] bg-[#FBFAF7] px-7 py-8 shadow-[0_16px_50px_-36px_rgba(53,45,38,0.45)] transition-all duration-300 ease-out motion-reduce:transition-none hover:-translate-y-2 hover:border-[#BFB09D] hover:shadow-[0_24px_60px_-32px_rgba(53,45,38,0.55)] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.875rem)] ${index === 0 ? 'flex' : index === 1 ? 'hidden sm:flex' : 'hidden lg:flex'}`}>
                        <Quote aria-hidden="true" className="mb-5 text-[#A8947C]" size={27} />
                        <blockquote className="flex flex-1 flex-col">
                          <p className="font-serif text-xl leading-relaxed text-[#40362D]">
                            «{testimonial.quote}»
                          </p>
                          <footer className="mt-7 border-t border-[#E6E0D7] pt-5">
                            <p className="font-semibold text-[#4C4034]">{testimonial.name}</p>
                            <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#927D66]">{testimonial.isExample ? 'Cliente de ejemplo' : 'Opinión de cliente'}</p>
                          </footer>
                        </blockquote>
                      </article>
                    );
                  })}
                  </div>

                  {testimonials.length > 1 && (
                  <div className="mt-7 flex items-center justify-center gap-5">
                    <button type="button" onClick={showPreviousTestimonial} aria-label="Mostrar opinión anterior"
                      className="flex h-11 w-11 items-center justify-center border border-[#CFC4B5] text-[#4C4034] transition hover:bg-[#4C4034] hover:text-white">
                      <ChevronLeft size={20} />
                    </button>
                    <div className="flex items-center gap-2" aria-label={`Vista ${activeTestimonialPage + 1} de ${testimonials.length}`}>
                      {testimonials.map((testimonial, index) => (
                        <button key={`${testimonial.name}-${index}`} type="button" onClick={() => setActiveTestimonialPage(index)}
                          aria-label={`Mostrar vista desde la opinión de ${testimonial.name}`}
                          aria-current={activeTestimonialPage === index ? 'true' : undefined}
                          className={`h-2.5 rounded-full transition-all ${activeTestimonialPage === index ? 'w-7 bg-[#4C4034]' : 'w-2.5 bg-[#CFC4B5] hover:bg-[#927D66]'}`} />
                      ))}
                    </div>
                    <button type="button" onClick={showNextTestimonial} aria-label="Mostrar opinión siguiente"
                      className="flex h-11 w-11 items-center justify-center border border-[#CFC4B5] text-[#4C4034] transition hover:bg-[#4C4034] hover:text-white">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  )}
                </>
              )}
            </div>

            {testimonials.some((testimonial) => testimonial.isExample) && (
              <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-6 text-[#806F5D]">
                La hoja incluye opiniones de ejemplo. Reemplázalas por testimonios reales y autorizados antes de publicar y cambia su Tipo a «Cliente».
              </p>
            )}
          </div>
        </section>

        <section id="galeria" className="bg-[#FBFAF7] py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927D66]">En el ejercicio profesional</p>
                <h2 className="font-serif text-4xl font-normal text-[#352D26] sm:text-5xl">Una mirada a mi trabajo</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#6E6256]">Imágenes de trabajo y perfil profesional de Sharon Delgado.</p>
            </div>
            <div className="grid auto-rows-[230px] grid-cols-2 gap-3 sm:auto-rows-[280px] sm:gap-5 md:grid-cols-3">
              {gallery.map((item, index) => (
                <div key={item.alt} className={`overflow-hidden bg-[#E9E2D7] ${item.className}`}>
                  <img src={item.src} alt={item.alt} loading="lazy" className={`h-full w-full object-cover transition duration-700 hover:scale-[1.035] ${index === 0 ? 'object-[50%_30%]' : 'object-center'}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#4C4034] py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 sm:px-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D9C7AF]">Atención a nivel nacional</p>
              <h2 className="max-w-3xl font-serif text-4xl font-normal leading-tight sm:text-5xl">Conversemos sobre la situación que necesitas resolver</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75">Atención presencial en Lima y Cajamarca, y atención virtual según las necesidades del cliente. Las citas se coordinan previamente.</p>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#E9DDCC] px-7 text-[10px] font-bold uppercase tracking-[0.15em] text-[#352D26] transition hover:bg-white">
              <MessageCircle size={16} /> Escribir por WhatsApp
            </a>
          </div>
        </section>

        <section id="contacto" className="scroll-mt-24 bg-[#F2EEE7] py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927D66]">Contacto y consultas</p>
              <h2 className="font-serif text-4xl font-normal text-[#352D26] sm:text-5xl">Estoy aquí para escucharte</h2>
              <p className="mt-5 text-[15px] leading-8 text-[#6E6256]">Para coordinar una consulta, escríbeme por WhatsApp. La atención se realiza de lunes a viernes, previa coordinación de cita.</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="border border-[#DED6CA] bg-[#FBFAF7] p-7 text-center transition hover:border-[#927D66]">
                <MessageCircle className="mx-auto mb-4 text-[#927D66]" size={24} />
                <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#927D66]">WhatsApp de trabajo</span>
                <span className="mt-2 block font-serif text-xl text-[#40362D]">+51 999 829 797</span>
              </a>
              <div className="border border-[#DED6CA] bg-[#FBFAF7] p-7 text-center">
                <MapPin className="mx-auto mb-4 text-[#927D66]" size={24} />
                <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#927D66]">Ámbito de atención</span>
                <span className="mt-2 block font-serif text-xl text-[#40362D]">Todo el Perú</span>
                <span className="mt-1 block text-xs text-[#6E6256]">Presencial en Lima y Cajamarca</span>
              </div>
              <div className="border border-[#DED6CA] bg-[#FBFAF7] p-7 text-center">
                <Clock3 className="mx-auto mb-4 text-[#927D66]" size={24} />
                <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#927D66]">Horario</span>
                <span className="mt-2 block font-serif text-xl text-[#40362D]">Lunes a viernes</span>
                <span className="mt-1 block text-xs text-[#6E6256]">Previa coordinación de cita</span>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href={SOCIALS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-12 w-12 items-center justify-center border border-[#CFC4B5] text-[#4C4034] transition hover:bg-[#4C4034] hover:text-white"><Facebook size={18} /></a>
              <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-12 w-12 items-center justify-center border border-[#CFC4B5] text-[#4C4034] transition hover:bg-[#4C4034] hover:text-white"><Instagram size={18} /></a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-12 w-12 items-center justify-center border border-[#CFC4B5] text-[#4C4034] transition hover:bg-[#4C4034] hover:text-white"><Linkedin size={18} /></a>
            </div>
            <p className="mt-4 text-center text-[10px] uppercase tracking-[0.15em] text-[#927D66]">Sígueme en redes sociales</p>
          </div>
        </section>
      </main>

      <footer className="bg-[#302820] px-6 py-12 text-[#F8F6F1] sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-3xl">Sharon Delgado</p>
            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#CDBCA7]">Abogada · Consultora Jurídica</p>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/65">Excelencia jurídica y compromiso en cada defensa.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.14em] text-white/75">
            {nav.map(([label, href]) => <a key={href} href={href} onClick={(e) => { e.preventDefault(); goTo(href); }} className="transition hover:text-white">{label}</a>)}
          </div>
        </div>
        <div className="mx-auto mt-9 max-w-6xl border-t border-white/15 pt-6 text-[10px] text-white/45">
          © {new Date().getFullYear()} Sharon Delgado. Todos los derechos reservados.
        </div>
      </footer>

      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#267A4B] text-white shadow-lg transition hover:scale-105 hover:bg-[#1F663E]">
        <MessageCircle size={25} />
      </a>
    </>
  );
};
