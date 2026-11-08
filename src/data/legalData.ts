export interface Specialty {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'empresas' | 'particulares' | 'directivos';
  categoryLabel: string;
  summary: string;
  keyServices: string[];
  typicalCases: string[];
  deliverables: string[];
  durationEstimate: string;
}

export interface ServiceModality {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  idealFor: string;
  features: string[];
  billingModel: string;
}

export interface CareerMilestone {
  period: string;
  role: string;
  institution: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface SuccessCase {
  id: string;
  code: string;
  title: string;
  area: string;
  sector: string;
  challenge: string;
  legalStrategy: string;
  outcome: string;
  quantifiedResult: string;
  year: string;
  isAuthorized: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  organization: string;
  category: 'empresarial' | 'inmobiliario' | 'directivos' | 'civil';
  categoryLabel: string;
  quote: string;
  context: string;
  outcome: string;
  year: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const SPECIALTIES: Specialty[] = [
  {
    id: 'corporativo',
    number: '01',
    title: 'Derecho Corporativo & Societario',
    subtitle: 'Estructuración jurídica empresarial y acuerdos mercantiles de alto impacto',
    category: 'empresas',
    categoryLabel: 'Empresas & Negocios',
    summary: 'Asesoramiento integral a sociedades mercantiles en todas las fases de su ciclo vital, desde su constitución y rondas de financiación hasta fusiones, adquisiciones (M&A) y reestructuraciones corporativas.',
    keyServices: [
      'Constitución de sociedades mercantiles y filiales corporativas',
      'Pactos de socios, sindicación de voto y acuerdos parasociales',
      'Secretaría de Directorio y gobierno corporativo',
      'Operaciones de M&A (fusiones, escisiones y compraventas de empresas)',
      'Due Diligence legal integral previa a adquisiciones o inversiones'
    ],
    typicalCases: [
      'Entrada de fondos de inversión garantizando derechos de minorías',
      'Resolución de discrepancias entre socios fundadores sin liquidar la sociedad',
      'Venta estratégica de activos societarios o participaciones mayoritarias'
    ],
    deliverables: [
      'Pacto de socios blindado con cláusulas drag-along, tag-along y buy-sell',
      'Informe de Due Diligence con matriz de riesgos y contingencias',
      'Actas notariales y protocolización registral completa'
    ],
    durationEstimate: 'De 2 semanas (pactos) a 3 meses (M&A complejos)'
  },
  {
    id: 'contractual',
    number: '02',
    title: 'Derecho Contractual & Negociación',
    subtitle: 'Blindaje jurídico preventivo y diseño de acuerdos de valor estratégico',
    category: 'empresas',
    categoryLabel: 'Empresas & Negocios',
    summary: 'Redacción, auditoría y negociación de contratos civiles y mercantiles complejos. Nuestro enfoque preventivo neutraliza contingencias futuras y asegura la viabilidad económica y legal de los acuerdos.',
    keyServices: [
      'Contratos mercantiles de distribución, agencia, franquicia y suministro',
      'Acuerdos de confidencialidad (NDA) y protección de secretos comerciales',
      'Contratos tecnológicos, licencias de software y cesión de propiedad intelectual',
      'Auditoría y revisión de cláusulas limitativas de responsabilidad y penalizaciones',
      'Resolución contractual por incumplimiento y reclamación de daños'
    ],
    typicalCases: [
      'Renegociación de suministros internacionales ante alteraciones sobrevenidas',
      'Blindaje de contratos de prestación de servicios para startups tecnológicas',
      'Defensa frente a cláusulas abusivas en contratos marco de adhesión'
    ],
    deliverables: [
      'Contratos a medida con redacción en doble columna (español/inglés)',
      'Dictamen de riesgos contractuales con semáforo de contingencias',
      'Protocolo de ejecución y cláusulas de salida escalonada'
    ],
    durationEstimate: '3 a 7 días hábiles según complejidad'
  },
  {
    id: 'litigios',
    number: '03',
    title: 'Litigación Estratégica & Arbitraje',
    subtitle: 'Defensa procesal firme y soluciones negociadas ante conflictos complejos',
    category: 'empresas',
    categoryLabel: 'Empresas & Directivos',
    summary: 'Representación letrada ante tribunales de justicia civiles y mercantiles, así como en cortes arbitrales y centros de mediación. Análisis previo de viabilidad con honestidad deontológica absoluta.',
    keyServices: [
      'Demandas de reclamación de cantidad y responsabilidad contractual',
      'Impugnación de acuerdos societarios y acciones de responsabilidad',
      'Medidas cautelares urgentes (embargos preventivos, anotaciones registrales)',
      'Arbitraje comercial institucional y mediación especializada',
      'Ejecución de resoluciones judiciales y títulos ejecutivos'
    ],
    typicalCases: [
      'Recuperación de acreencias comerciales de alto importe para empresas',
      'Defensa de directores societarios frente a acciones de derivación de responsabilidad',
      'Litigios sobre vicios ocultos en transmisiones patrimoniales'
    ],
    deliverables: [
      'Dictamen previo de viabilidad procesal con análisis coste-beneficio',
      'Estrategia de defensa o demanda procesal fundamentada',
      'Acompañamiento personal de la letrada en todas las audiencias y vistas'
    ],
    durationEstimate: 'Sujeto a tiempos judiciales (con seguimiento mensual)'
  },
  {
    id: 'laboral',
    number: '04',
    title: 'Derecho Laboral para Directivos & Empresas',
    subtitle: 'Protección contractual de alta dirección y gestión de relaciones laborales',
    category: 'directivos',
    categoryLabel: 'Alta Dirección & Empresas',
    summary: 'Asesoramiento especializado en relaciones laborales de Alta Dirección, blindajes indemnizatorios, no competencia postcontractual y reestructuración empresarial preventiva.',
    keyServices: [
      'Contratos de Alta Dirección: pactos de exclusividad y blindajes indemnizatorios',
      'Pactos de no competencia postcontractual y no captación de talento',
      'Defensa en desvinculaciones y conciliaciones laborales ejecutivas',
      'Planes de incentivos a largo plazo, phantom shares y stock options',
      'Inspecciones de trabajo y procedimientos de mediación'
    ],
    typicalCases: [
      'Salida negociada de directores generales con acuerdo de confidencialidad e indemnización óptima',
      'Implementación de esquemas de retención de talento clave en medianas empresas',
      'Auditoría laboral preventiva previa a transacciones corporativas'
    ],
    deliverables: [
      'Contratos ejecutivos blindados con armonización jurídica y fiscal',
      'Actas de conciliación extrajudicial con validez de cosa juzgada',
      'Informes periciales de cálculo de liquidaciones e indemnizaciones'
    ],
    durationEstimate: 'Inmediato (consultas) o 2-4 semanas (negociación)'
  },
  {
    id: 'patrimonial',
    number: '05',
    title: 'Planificación Patrimonial & Sucesoria',
    subtitle: 'Preservación, ordenación y transmisión ordenada del patrimonio familiar',
    category: 'particulares',
    categoryLabel: 'Particulares & Familias',
    summary: 'Diseño de estructuras jurídicas para la protección del patrimonio personal y empresarial, ordenación sucesoria, protocolos de empresa familiar y liquidación hereditaria sin fricción contenciosa.',
    keyServices: [
      'Testamentos y disposiciones sucesorias de última voluntad',
      'Protocolos de Empresa Familiar para garantizar el relevo generacional ordenado',
      'Liquidación de herencias complejas y mediación entre coherederos',
      'Donaciones y optimización jurídica de la transmisión patrimonial',
      'Liquidación de regímenes económico-matrimoniales y capitulaciones'
    ],
    typicalCases: [
      'Transmisión generacional de grupo empresarial familiar sin bloqueo operativo',
      'Partición hereditaria con bienes en múltiples jurisdicciones',
      'Blindaje patrimonial ante contingencias societarias de miembros familiares'
    ],
    deliverables: [
      'Cuaderno particional formalizado ante notaría pública',
      'Protocolo familiar vinculante consensuado entre ramas familiares',
      'Trámite integral de adjudicación e inscripción de bienes'
    ],
    durationEstimate: '4 a 8 semanas según número de coherederos y activos'
  },
  {
    id: 'inmobiliario',
    number: '06',
    title: 'Derecho Inmobiliario & Urbanístico',
    subtitle: 'Seguridad jurídica en transacciones de inmuebles de alto valor',
    category: 'particulares',
    categoryLabel: 'Particulares & Empresas',
    summary: 'Supervisión legal integral en operaciones de adquisición, venta, arrendamiento financiero y saneamiento físico-legal de activos inmobiliarios comerciales y residenciales.',
    keyServices: [
      'Auditoría legal y registral del inmueble (estudio de títulos, cargas y gravámenes)',
      'Contratos de arras, opciones de compra y transferencias notariales',
      'Arrendamientos comerciales, corporativos y residenciales de alto nivel',
      'Extinción de condominios y divisiones de copropiedad',
      'Saneamiento registral, inmatriculaciones y rectificación de linderos'
    ],
    typicalCases: [
      'Compraventa segura de inmueble corporativo con cargas previas',
      'Resolución pacífica de copropiedades indivisas sin remate judicial',
      'Contratos de arrendamiento comercial con cláusulas escalonadas'
    ],
    deliverables: [
      'Informe de estudio de títulos y contingencias municipales/registrales',
      'Borrador de minuta contractual y coordinación presencial con notaría',
      'Inscripción fehaciente en el Registro de la Propiedad'
    ],
    durationEstimate: '2 a 4 semanas hasta firma de escritura pública'
  }
];

export const SERVICES: ServiceModality[] = [
  {
    id: 'diagnostico',
    number: '01',
    title: 'Dictamen & Diagnóstico Jurídico Inicial',
    tagline: 'Claridad analítica antes de tomar decisiones trascendentales',
    description: 'Estudio exhaustivo de la situación fáctica y legal de su asunto. Analizamos antecedentes, documentación y jurisprudencia para emitir un informe de viabilidad escrito con recomendaciones estratégicas y mapa de riesgos.',
    idealFor: 'Asuntos con duda sobre viabilidad judicial, contratos antes de la firma, o inicio de conflictos.',
    features: [
      'Reunión preparatoria de 60 minutos (presencial o videollamada cifrada)',
      'Revisión y examen minucioso de documentación relevante del caso',
      'Dictamen jurídico por escrito en un plazo garantizado de 48 a 72 horas',
      'Hoja de ruta estratégica con estimación de costes y plazos reales'
    ],
    billingModel: 'Honorarios cerrados y fijos (deducibles si se contrata la defensa posterior)'
  },
  {
    id: 'retainer',
    number: '02',
    title: 'Asesoría Jurídica Continua (Iguala Mensual)',
    tagline: 'El respaldo letrado permanente que su empresa necesita',
    description: 'Servicio de departamento legal externo para empresas, startups y directivos. Acompañamiento cotidiano con respuesta ágil, revisión de acuerdos recurrentes y prevención activa de contingencias legales.',
    idealFor: 'Empresas activas sin abogado en plantilla o que requieren refuerzo especializado continuo.',
    features: [
      'Línea directa prioritaria por teléfono y canal confidencial de mensajería',
      'Revisión y redacción ilimitada de contratos comerciales habituales',
      'Asistencia a juntas directivas o comités ejecutivos clave',
      'Auditoría preventiva trimestral y actualización normativa'
    ],
    billingModel: 'Cuota mensual fija predecible sin costes imprevistos ni horas ocultas'
  },
  {
    id: 'defensa',
    number: '03',
    title: 'Dirección Letrada Procesal & Arbitraje',
    tagline: 'Representación judicial rigurosa y comprometida con el resultado',
    description: 'Asunción integral de la defensa o pretensión en litigios civiles, mercantiles y arbitrales. Planificación procesal milimétrica, preparación rigurosa de medios probatorios e intervención directa en audiencias.',
    idealFor: 'Procedimientos judiciales en curso, interposición de demandas o defensa ante reclamaciones.',
    features: [
      'Elaboración meticulosa de demandas, contestaciones y escritos procesales',
      'Dirección letrada presencial en audiencias preliminares y de juzgamiento',
      'Recursos de apelación y casación ante instancias superiores',
      'Informes periódicos de estado procesal con copia de resoluciones'
    ],
    billingModel: 'Presupuesto escalonado por fases procesales con eventual cuota de éxito pactada'
  },
  {
    id: 'mediacion',
    number: '04',
    title: 'Negociación Estratégica & Resolución Extrajudicial',
    tagline: 'Acuerdos inteligentes que preservan relaciones y evitan costes de litigio',
    description: 'Intervención letrada en mesas de negociación complejas para resolver disputas entre socios, empresas colaboradoras o familiares antes de llegar al juzgado. Máxima confidencialidad y rigor formal.',
    idealFor: 'Disputas societarias, particiones hereditarias conflictivas o controversias contractuales clave.',
    features: [
      'Diseño previo de estrategia de negociación de suma positiva',
      'Gestión de sesiones de negociación multilateral con protocolo neutral',
      'Redacción de transacción extrajudicial con mérito ejecutivo',
      'Preservación del secreto profesional y de la reputación de las partes'
    ],
    billingModel: 'Tarifa por sesión de negociación o presupuesto global de cierre'
  }
];

export const SUCCESS_CASES: SuccessCase[] = [
  {
    id: 'case-1',
    code: 'EXP-AUT-2024-01',
    title: 'Reestructuración Societaria y Ronda de Inversión Internacional',
    area: 'Derecho Corporativo & M&A',
    sector: 'Tecnología & Logística',
    challenge: 'Entrada de un fondo de venture capital internacional exigiendo dilución asimétrica de fundadores y cláusulas desproporcionadas de responsabilidad solidaria.',
    legalStrategy: 'Diseño de un pacto de socios con sindicación de voto, mecanismos de drag-along condicionado y limitación cuantitativa de reps & warranties respaldada en cuenta escrow.',
    outcome: 'Cierre favorable de la ronda de inversión preservando el control de gestión en manos de los socios fundadores y formalización de estatutos en plazo récord.',
    quantifiedResult: 'Inversión asegurada de USD 4.2M con 100% de cláusulas críticas blindadas',
    year: '2024',
    isAuthorized: true
  },
  {
    id: 'case-2',
    code: 'EXP-AUT-2024-02',
    title: 'Resolución Extrajudicial de Conflicto Societario en Red Sanitaria',
    area: 'Mediación & Disputas Societarias',
    sector: 'Salud & Servicios Médicos',
    challenge: 'Bloqueo directivo total entre socios al 50% con amenaza inminente de paralización operativa y demanda de disolución judicial forzosa.',
    legalStrategy: 'Implementación de protocolo de mediación confidencial y valoración técnica de activos para estructurar una escisión patrimonial simétrica no litigiosa.',
    outcome: 'Acuerdo transaccional con firma notarial que permitió la continuidad operativa de ambas ramas sin un solo día de suspensión en la atención a pacientes.',
    quantifiedResult: 'Ahorro estimado de más de 18 meses de litigio judicial y 75% en costes procesales',
    year: '2024',
    isAuthorized: true
  },
  {
    id: 'case-3',
    code: 'EXP-AUT-2025-01',
    title: 'Blindaje e Indemnización de Alta Dirección en Sector Financiero',
    area: 'Derecho Laboral Ejecutivo',
    sector: 'Banca & Finanzas',
    challenge: 'Terminación intempestiva del vínculo de un Gerente Central con intento de desconocer bonificaciones plurianuales devengadas y pacto de no competencia leonino.',
    legalStrategy: 'Preparación de dictamen de contingencia probatoria, requerimiento notarial previo y negociación directa con la asesoría jurídica corporativa de la entidad.',
    outcome: 'Suscripción de acta de conciliación con pago íntegro de la liquidación, indemnización acordada y liberación inmediata del pacto restrictivo de ejercicio profesional.',
    quantifiedResult: '100% de la compensación económica satisfecha en un plazo de 14 días',
    year: '2025',
    isAuthorized: true
  },
  {
    id: 'case-4',
    code: 'EXP-AUT-2024-03',
    title: 'Saneamiento y Compraventa Inmobiliaria de Complejo Comercial',
    area: 'Derecho Inmobiliario',
    sector: 'Real Estate & Retail',
    challenge: 'Adquisición de un inmueble comercial de alta gama afectado por anotaciones de demanda registral, servidumbres no regularizadas y cargas municipales pendientes.',
    legalStrategy: 'Auditoría legal y registral (Title Due Diligence), negociación de cláusula de retención de precio en notaría y saneamiento acelerado de cargas ante registros públicos.',
    outcome: 'Inscripción registral limpia sin vicios a nombre del nuevo comprador con entrega pacífica de la posesión.',
    quantifiedResult: 'Transacción por USD 3.8M formalizada con seguridad jurídica total',
    year: '2024',
    isAuthorized: true
  }
];

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    period: '2021 — Presente',
    role: 'Socia Fundadora & Directora de Práctica Jurídica',
    institution: 'Qore Latam Legal / Elena Valenzuela Abogados',
    location: 'Práctica Nacional & Regional Latam',
    description: 'Dirección letrada de práctica boutique con foco en derecho societario, alta dirección, litigación estratégica y patrimonio. Atención directa a cada expediente, asegurando máximo rigor técnico y absoluta confidencialidad.',
    achievements: [
      'Más de 380 expedientes asesorados con un 96% de acuerdos y resoluciones favorables',
      'Asesoramiento continuado a más de 25 empresas en régimen de iguala jurídica corporativa',
      'Intervención en transacciones de compraventa de participaciones y activos por más de USD 45M'
    ]
  },
  {
    period: '2016 — 2021',
    role: 'Socia del Área Mercantil & Contratación Internacional',
    institution: 'Estudio Jurídico García-Heredia & Asociados',
    location: 'Área Corporativa',
    description: 'Liderazgo de equipo de letrados en operaciones corporativas cross-border, redacción de pactos parasociales y resolución extrajudicial de conflictos mercantiles de alta complejidad.',
    achievements: [
      'Dirección legal de 14 adquisiciones societarias y 6 fusiones por absorción',
      'Reconocimiento por destreza en negociación contractual compleja y gobierno corporativo',
      'Docente invitada en programas de posgrado sobre gobernanza societaria y contratos mercantiles'
    ]
  },
  {
    period: '2011 — 2016',
    role: 'Abogada Asociada Senior (Litigación Civil y Mercantil)',
    institution: 'Alonso & Montero Legal',
    location: 'Área Procesal',
    description: 'Práctica procesal intensa con intervención continua en audiencias judiciales. Redacción de recursos procesales, medidas cautelares y demandas de reclamación de cantidad empresarial.',
    achievements: [
      'Más de 120 audiencias orales dirigidas en tribunales civiles y comerciales',
      'Consolidación de doctrina favorable en materia de cláusulas resolutorias y cumplimiento contractual'
    ]
  }
];

export const ACADEMIC_CREDENTIALS = [
  {
    year: '2010',
    title: 'Licenciatura en Derecho',
    institution: 'Facultad de Derecho',
    note: 'Graduada con Mención de Honor y Premio Extraordinario Fin de Carrera'
  },
  {
    year: '2012',
    title: 'Máster en Asesoría Jurídica de Empresas (LL.M.)',
    institution: 'IE Law School',
    note: 'Especialidad en fusiones societarias, fiscalidad corporativa y pactos de socios'
  },
  {
    year: '2015',
    title: 'Diploma de Alta Especialización en Litigación & Práctica Forense',
    institution: 'Escuela de Práctica Jurídica',
    note: 'Técnicas avanzadas de interrogatorio judicial, prueba pericial y recursos extraordinarios'
  },
  {
    year: '2019',
    title: 'Acreditación Oficial de Mediadora Civil y Mercantil',
    institution: 'Registro Oficial de Mediadores',
    note: 'Inscrita oficialmente para la resolución extrajudicial y pacífica de controversias comerciales'
  }
];

export const ETHICAL_PRINCIPLES = [
  {
    title: 'Honestidad de Criterio',
    description: 'Si un caso carece de viabilidad jurídica, se lo advertiremos desde el primer minuto. Jamás alentamos litigios innecesarios ni prometemos resultados que la ley no ampare.'
  },
  {
    title: 'Transparencia Presupuestaria Total',
    description: 'Cada actuación cuenta con hoja de encargo previa con honorarios fijados por escrito, sin sorpresas ni costes sobrevenidos imprevistos.'
  },
  {
    title: 'Secreto Profesional Absoluto',
    description: 'Estricto cumplimiento del deber de confidencialidad legal. Sus datos y documentos gozan de la máxima custodia profesional y almacenamiento cifrado.'
  },
  {
    title: 'Atención Personalizada sin Delegación Opaca',
    description: 'Su asunto no será transferido a pasantes anónimos. Es dirigido directamente por la letrada titular con línea de comunicación fluida y constante.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Santiago Menéndez de Luarca',
    role: 'CEO & Fundador',
    organization: 'Kroma Logistics Technologies',
    category: 'empresarial',
    categoryLabel: 'Sector Tecnológico & Logística',
    quote: 'La claridad mental y el rigor analítico de Elena cambiaron por completo el rumbo de nuestra ronda de inversión. Negoció un pacto de socios milimétrico que protegió a los fundadores frente a cláusulas de dilución abusivas.',
    context: 'Ronda de inversión internacional y blindaje de derechos societarios de minorías',
    outcome: 'Cierre del acuerdo en 3 semanas con 100% de cláusulas críticas ratificadas',
    year: '2025'
  },
  {
    id: 'test-2',
    author: 'Dra. Carmen Valls Queralt',
    role: 'Directora Médica & Socia Propietaria',
    organization: 'Centro Médico Especializado',
    category: 'civil',
    categoryLabel: 'Profesionales & Sociedades',
    quote: 'Frente a una discrepancia societaria que amenazaba con paralizar el centro, su capacidad de mediación y firmeza jurídica nos permitió alcanzar una salida negociada sin pisar los tribunales. Nos ahorró meses de angustia y un coste económico desorbitado.',
    context: 'Disolución pacífica de vínculo entre socios fundadores con activos sanitarios',
    outcome: 'Acuerdo extrajudicial con firma en notaría y continuidad operativa total',
    year: '2024'
  },
  {
    id: 'test-3',
    author: 'Marcos Benítez Arribas',
    role: 'Ex-Director Financiero (CFO)',
    organization: 'Grupo Inmobiliario Nexus',
    category: 'directivos',
    categoryLabel: 'Alta Dirección',
    quote: 'Cuando una compañía intenta aplicar una interpretación lesiva a un contrato de alta dirección, necesitas al mejor letrado a tu lado. Elena estructuró una defensa implacable que condujo a una indemnización íntegra sin necesidad de llegar a juicio.',
    context: 'Resolución de contrato ejecutivo de Alta Dirección con blindaje de no competencia',
    outcome: 'Indemnización completa acordada en conciliación y liberación de pacto lesivo',
    year: '2025'
  },
  {
    id: 'test-4',
    author: 'Beatriz Soler Vidal',
    role: 'Administradora Única',
    organization: 'Patrimonial Marítima',
    category: 'inmobiliario',
    categoryLabel: 'Bienes Inmuebles & Patrimonio',
    quote: 'Su auditoría previa detectó contingencias registrales y cargas urbanísticas que habrían supuesto una pérdida patrimonial enorme. Su asesoramiento en la posterior compraventa nos brindó una tranquilidad impagable.',
    context: 'Adquisición de activo inmobiliario comercial singular',
    outcome: 'Subsanación previa de cargas y firma notarial sin contingencias',
    year: '2024'
  },
  {
    id: 'test-5',
    author: 'Javier Olazábal Rivas',
    role: 'Managing Partner',
    organization: 'Iberian Retail Venture',
    category: 'empresarial',
    categoryLabel: 'Empresarial & Contratos',
    quote: 'Contar con Elena en régimen de iguala jurídica mensual ha sido la mejor decisión operativa para nuestra firma. Revisión ágil de contratos comerciales y una disponibilidad que no encontramos en macrodespachos.',
    context: 'Asesoría jurídica corporativa continuada (Retainer permanente)',
    outcome: 'Reducción del 70% en tiempos de negociación con proveedores clave',
    year: '2026'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Consultas & Honorarios',
    question: '¿Cómo funciona la primera consulta de evaluación jurídica?',
    answer: 'La primera consulta tiene una duración de 60 minutos y puede celebrarse en nuestro despacho o por videollamada cifrada. En ella analizamos los hechos, examinamos la documentación esencial y le entregamos un dictamen preliminar verbal con la estrategia aconsejada. Si posteriormente encarga el asunto al despacho, el importe de esta primera sesión se deduce íntegramente de la minuta final.'
  },
  {
    category: 'Consultas & Honorarios',
    question: '¿Cómo se determinan los honorarios y cuándo se pagan?',
    answer: 'Antes de iniciar cualquier trámite, formalizamos una Hoja de Encargo Profesional con presupuesto cerrado y desglosado. Dependiendo de la naturaleza del asunto, trabajamos bajo honorarios fijos por proyecto, cuotas mensuales de iguala para empresas, o presupuestos escalonados por fases procesales. Nunca habrá sorpresas ni costes ocultos.'
  },
  {
    category: 'Confidencialidad',
    question: '¿Qué garantías de confidencialidad y secreto profesional existen?',
    answer: 'Todas las comunicaciones, consultas y documentos compartidos están amparados por el Secreto Profesional más riguroso y la normativa de protección de datos personales. Empleamos sistemas de almacenamiento cifrado y no compartimos datos con terceros bajo ninguna circunstancia.'
  },
  {
    category: 'Ámbito Geográfico',
    question: '¿Atiende asuntos a nivel nacional y regional?',
    answer: 'Sí. Ejercemos la defensa y dirección letrada en todo el territorio nacional, tanto presencialmente ante los tribunales correspondientes como telemáticamente para asesoramiento corporativo, contractual y societario a clientes de toda la región (Qore Latam).'
  },
  {
    category: 'Tiempos de Respuesta',
    question: '¿Cuál es el tiempo de respuesta habitual ante una duda o urgencia?',
    answer: 'Nuestros clientes disponen de un compromiso de respuesta en menos de 24 horas hábiles. Para urgencias procesales o notificaciones con plazo breve, disponemos de canales prioritarios por WhatsApp directo y telefonía.'
  }
];

export const CONTACT_INFO = {
  lawyerName: 'Sharon Delgado',
  barNumber: 'Colegiada Profesional Activa',
  brandName: 'Sharon Delgado · Abogada y Consultora Jurídica',
  officeAddress: 'Atención Nacional & Regional Latam (Previa Cita)',
  primaryPhone: '966367594',
  primaryPhoneDisplay: '966 367 594',
  primaryPhoneDirect: 'tel:+51966367594',
  secondaryPhone: '989631679',
  secondaryPhoneDisplay: '989 631 679',
  secondaryPhoneDirect: 'tel:+51989631679',
  phoneDisplay: '966 367 594 / 989 631 679',
  phoneDirect: 'tel:+51966367594',
  whatsappDisplay: '966 367 594',
  whatsappUrl: 'https://wa.me/51966367594',
  whatsappUrlPrimary: 'https://wa.me/51966367594',
  whatsappUrlSecondary: 'https://wa.me/51989631679',
  email: 'contacto@qorelatam.com',
  officeHours: 'Lunes a Viernes: 9:00 — 18:30 | Sábados: 9:00 — 13:00 (Previa cita)',
  languages: ['Español (Nativo)', 'English (Professional Proficiency)']
};
