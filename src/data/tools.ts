export interface ToolItem {
  id: string;
  name: string;
  desc: string;
  href: string;
  icon: string;
  featured?: boolean;
  badge?: string;
  category: string;
  status: 'ready' | 'in-progress' | 'coming-soon';
}

export interface Category {
  id: string;
  name: string;
  desc: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'simuladores',
    name: 'Simuladores y Finanzas Laborales',
    desc: 'Calculadoras y simuladores de beneficios laborales de Perú: CTS, gratificaciones, liquidación, sueldo neto, préstamos y AFP/ONP.',
    icon: 'calculator'
  },
  {
    id: 'redes',
    name: 'Redes sociales y mensajería',
    desc: 'Enlaces directos, tipografías para biografías, límites de caracteres y generadores de biografía.',
    icon: 'message-circle'
  },
  {
    id: 'sorteos',
    name: 'Sorteos y diversión',
    desc: 'Sorteos limpios, ruleta aleatoria, dados, generador de equipos y quién paga.',
    icon: 'gift'
  },
  {
    id: 'dinero',
    name: 'Dinero y compras',
    desc: 'División de cuentas, descuentos inteligentes, precio unitario y metas financieras.',
    icon: 'dollar-sign'
  },
  {
    id: 'fechas',
    name: 'Fechas y tiempo',
    desc: 'Edad exacta, días hábiles, cuentas regresivas compartibles y ciclos de sueño.',
    icon: 'calendar'
  },
  {
    id: 'estudio',
    name: 'Estudio y trabajo',
    desc: 'Calculadora de notas, citas APA, generador de firmas y utilidades de productividad.',
    icon: 'book-open'
  },
  {
    id: 'hogar',
    name: 'Hogar y vida diaria',
    desc: 'Cálculo de materiales, gasto eléctrico, combustible y recetas proporcionales.',
    icon: 'home'
  },
  {
    id: 'imagenes',
    name: 'Imágenes y multimedia',
    desc: 'Procesamiento directo en tu navegador: redimensión, recorte, metadatos y paletas.',
    icon: 'image'
  },
  {
    id: 'texto',
    name: 'Texto y utilidades básicas',
    desc: 'Herramientas esenciales de seguridad, audio y análisis de texto.',
    icon: 'file-text'
  }
];

export const ALL_TOOLS: ToolItem[] = [
  // Simuladores y Finanzas Laborales (NUEVA SECCIÓN)
  {
    id: 'calculadora-cts',
    name: 'Calculadora de CTS',
    desc: 'Calcula tu Compensación por Tiempo de Servicios (mayo o noviembre) con 1/6 de gratificación, faltas e historial de meses y días.',
    href: '/simuladores/calculadora-cts',
    icon: 'calculator',
    featured: true,
    badge: 'Perú',
    category: 'simuladores',
    status: 'ready'
  },
  {
    id: 'calculadora-gratificaciones',
    name: 'Calculadora de Gratificaciones',
    desc: 'Calcula tu gratificación legal de Fiestas Patrias (julio) o Navidad (diciembre) con bonificación extraordinaria (9% EsSalud / 6.75% EPS).',
    href: '/simuladores/calculadora-gratificaciones',
    icon: 'gift',
    featured: true,
    badge: 'Perú',
    category: 'simuladores',
    status: 'ready'
  },
  {
    id: 'calculadora-vacaciones',
    name: 'Calculadora de Vacaciones Truncas / Récord',
    desc: 'Calcula vacaciones no gozadas, vacaciones truncas por meses y días e indemnización vacacional (triple vacacional) por régimen laboral.',
    href: '/simuladores/calculadora-vacaciones',
    icon: 'calendar',
    featured: false,
    badge: 'Laboral',
    category: 'simuladores',
    status: 'ready'
  },
  {
    id: 'calculadora-indemnizacion-despido',
    name: 'Calculadora de Indemnización por Despido',
    desc: 'Estima la indemnización legal por despido arbitrario e injustificado según régimen laboral (indeterminado, plazo fijo o MYPE).',
    href: '/simuladores/calculadora-indemnizacion-despido',
    icon: 'shield',
    featured: true,
    badge: 'Legal',
    category: 'simuladores',
    status: 'ready'
  },
  {
    id: 'calculadora-liquidacion',
    name: 'Calculadora de Liquidación de Beneficios Sociales',
    desc: 'Cálculo integral al cese: CTS, gratificación trunca, vacaciones no gozadas, indemnización y sueldo pendiente con boleta imprimible.',
    href: '/simuladores/calculadora-liquidacion',
    icon: 'file-text',
    featured: true,
    badge: 'Completa',
    category: 'simuladores',
    status: 'ready'
  },
  {
    id: 'calculadora-sueldo-neto',
    name: 'Calculadora de Sueldo Neto (AFP/ONP y Renta 5ta)',
    desc: 'Calcula tu sueldo líquido en mano con deducciones de ONP o AFP (Prima, Integra, Profuturo, Habitat) y retención Sunat de Renta 5ta.',
    href: '/simuladores/calculadora-sueldo-neto',
    icon: 'dollar-sign',
    featured: true,
    badge: 'Multipaís',
    category: 'simuladores',
    status: 'ready'
  },
  {
    id: 'calculadora-horas-extras',
    name: 'Calculadora de Horas Extras',
    desc: 'Calcula el valor exacto de tus horas suplementarias con recargo legal del 25% (primeras 2h), 35% adicional y 100% en feriados.',
    href: '/simuladores/calculadora-horas-extras',
    icon: 'clock',
    featured: false,
    badge: 'Laboral',
    category: 'simuladores',
    status: 'ready'
  },
  {
    id: 'calculadora-utilidades',
    name: 'Calculadora de Utilidades',
    desc: 'Estima el reparto legal de utilidades de los trabajadores (D.Leg. 892) por sector de empresa, días laborados y total de remuneraciones.',
    href: '/simuladores/calculadora-utilidades',
    icon: 'pie-chart',
    featured: false,
    badge: 'D.Leg. 892',
    category: 'simuladores',
    status: 'ready'
  },
  {
    id: 'calculadora-asignacion-familiar',
    name: 'Calculadora de Asignación Familiar',
    desc: 'Conoce el monto legal de la asignación familiar (10% de la RMV), requisitos y cómo impacta en tu CTS, gratificaciones y liquidación.',
    href: '/simuladores/calculadora-asignacion-familiar',
    icon: 'users',
    featured: false,
    badge: 'Ley 26790',
    category: 'simuladores',
    status: 'ready'
  },
  {
    id: 'calculadora-intereses-cts',
    name: 'Calculadora de Intereses de CTS y Depósitos',
    desc: 'Simula el crecimiento de tu fondo de CTS o depósito a plazo fijo con interés compuesto anual, semestral y comparador de tasas TEA.',
    href: '/simuladores/calculadora-intereses-cts',
    icon: 'trending-up',
    featured: false,
    badge: 'Finanzas',
    category: 'simuladores',
    status: 'ready'
  },
  {
    id: 'simulador-prestamos',
    name: 'Simulador de Préstamos y Créditos',
    desc: 'Calcula cuotas fijas (método francés) o decrecientes (método alemán) con cronograma completo de amortización mes a mes y desgravamen.',
    href: '/simuladores/simulador-prestamos',
    icon: 'dollar-sign',
    featured: true,
    badge: 'Crédito',
    category: 'simuladores',
    status: 'ready'
  },
  {
    id: 'calculadora-finiquito',
    name: 'Calculadora de Finiquito Laboral',
    desc: 'Calcula el finiquito de contrato de trabajo por renuncia o término de contrato con boleta oficial de finiquito lista para imprimir.',
    href: '/simuladores/calculadora-finiquito',
    icon: 'briefcase',
    featured: false,
    badge: 'Recibo',
    category: 'simuladores',
    status: 'ready'
  },
  {
    id: 'comparador-afp-onp',
    name: 'Comparador de Aportes AFP vs ONP',
    desc: 'Compara lado a lado el Sistema Privado de Pensiones (AFP) y el Sistema Nacional (ONP): aportes, rentabilidad, herencia y proyección de retiro.',
    href: '/simuladores/comparador-afp-onp',
    icon: 'scale',
    featured: true,
    badge: 'Comparador',
    category: 'simuladores',
    status: 'ready'
  },

  // Redes sociales y mensajería
  {
    id: 'enlace-whatsapp',
    name: 'Generador de enlace de WhatsApp',
    desc: 'Crea enlaces directos wa.me con mensaje predefinido, botón de copia y código QR instantáneo.',
    href: '/redes/enlace-whatsapp',
    icon: 'message-circle',
    featured: true,
    category: 'redes',
    status: 'ready'
  },
  {
    id: 'fuentes-instagram',
    name: 'Fuentes estilizadas para redes',
    desc: 'Convierte texto a estilos Unicode (cursiva, negrita, gótica, círculos) para tu bio o post.',
    href: '/redes/fuentes-instagram',
    icon: 'type',
    category: 'redes',
    status: 'ready'
  },
  {
    id: 'contador-caracteres-redes',
    name: 'Contador de caracteres por red social',
    desc: 'Verifica límites en tiempo real para X/Twitter, Instagram, TikTok, LinkedIn y Facebook.',
    href: '/redes/contador-caracteres-redes',
    icon: 'hash',
    category: 'redes',
    status: 'ready'
  },
  {
    id: 'generador-bios-hashtags',
    name: 'Generador de bios y hashtags',
    desc: 'Sugerencias rápidas de biografías atractivas y hashtags relevantes según tu nicho y tono.',
    href: '/redes/generador-bios-hashtags',
    icon: 'sparkles',
    category: 'redes',
    status: 'ready'
  },
  {
    id: 'generador-nombres',
    name: 'Generador de nombres creativos',
    desc: 'Ideas originales para negocios, proyectos, mascotas o nombres de usuario según estilo.',
    href: '/redes/generador-nombres',
    icon: 'smile',
    category: 'redes',
    status: 'ready'
  },
  {
    id: 'limpiador-texto-pdf',
    name: 'Limpiador de texto copiado de PDF',
    desc: 'Elimina saltos de línea molestos, guiones cortados y espacios dobles con un clic.',
    href: '/redes/limpiador-texto-pdf',
    icon: 'file-text',
    category: 'redes',
    status: 'ready'
  },

  // Sorteos y diversión
  {
    id: 'sorteador-redes',
    name: 'Sorteador para redes sociales',
    desc: 'Pega participantes, define número de ganadores y sortea con tarjeta lista para captura.',
    href: '/sorteos/sorteador-redes',
    icon: 'gift',
    featured: true,
    category: 'sorteos',
    status: 'ready'
  },
  {
    id: 'ruleta-personalizable',
    name: 'Ruleta de decisiones',
    desc: 'Gira la ruleta interactiva con tus opciones personalizadas para resolver dudas al azar.',
    href: '/sorteos/ruleta-personalizable',
    icon: 'refresh',
    category: 'sorteos',
    status: 'ready'
  },
  {
    id: 'equipos-aleatorios',
    name: 'Generador de equipos parejos',
    desc: 'Organiza grupos equilibrados a partir de una lista de nombres de forma imparcial.',
    href: '/sorteos/equipos-aleatorios',
    icon: 'users',
    category: 'sorteos',
    status: 'ready'
  },
  {
    id: 'dado-moneda',
    name: 'Lanzador de dados y moneda 3D',
    desc: 'Lanza monedas (cara o cruz) o dados (D6, D20) con física y animación visual fluida.',
    href: '/sorteos/dado-moneda',
    icon: 'zap',
    category: 'sorteos',
    status: 'ready'
  },
  {
    id: 'quien-paga-hoy',
    name: '¿Quién paga hoy?',
    desc: 'Elige quién invita la cuenta hoy entre amigos con animación de ruleta de nombres.',
    href: '/sorteos/quien-paga-hoy',
    icon: 'dollar-sign',
    category: 'sorteos',
    status: 'ready'
  },

  // Dinero y compras
  {
    id: 'dividir-cuenta',
    name: 'Dividir la cuenta con propina',
    desc: 'Calcula lo que debe pagar cada persona, consumos individuales y propina distribuida.',
    href: '/dinero/dividir-cuenta',
    icon: 'dollar-sign',
    featured: true,
    category: 'dinero',
    status: 'ready'
  },
  {
    id: 'calculadora-descuentos',
    name: 'Calculadora de descuentos',
    desc: 'Precios finales, ahorro neto y descuentos dobles/encadenados al instante.',
    href: '/dinero/calculadora-descuentos',
    icon: 'percent',
    category: 'dinero',
    status: 'ready'
  },
  {
    id: 'comparador-precio-unidad',
    name: 'Comparador de precio por unidad',
    desc: 'Descubre cuál producto conviene más comparando precio por kilo, litro o unidad.',
    href: '/dinero/comparador-precio-unidad',
    icon: 'scale',
    category: 'dinero',
    status: 'ready'
  },
  {
    id: 'valor-hora-trabajo',
    name: 'Valor real de tu hora de trabajo',
    desc: 'Calcula tus ingresos por hora real considerando tiempos de viaje y gastos fijos.',
    href: '/dinero/valor-hora-trabajo',
    icon: 'clock',
    category: 'dinero',
    status: 'ready'
  },
  {
    id: 'meta-ahorro',
    name: 'Calculadora de meta de ahorro',
    desc: 'Planifica cuánto guardar semanal o mensualmente para alcanzar tu objetivo a tiempo.',
    href: '/dinero/meta-ahorro',
    icon: 'trending-up',
    category: 'dinero',
    status: 'ready'
  },
  {
    id: 'bola-nieve-deudas',
    name: 'Planificador Bola de Nieve de deudas',
    desc: 'Organiza tus pagos por saldo o tasa para salir de deudas en el menor tiempo.',
    href: '/dinero/bola-nieve-deudas',
    icon: 'activity',
    category: 'dinero',
    status: 'ready'
  },

  // Fechas y tiempo
  {
    id: 'calculadora-edad-exacta',
    name: 'Calculadora de edad exacta',
    desc: 'Averigua tu edad en años, meses, días, horas y cuenta regresiva para tu próximo cumpleaños.',
    href: '/fechas/calculadora-edad-exacta',
    icon: 'calendar',
    category: 'fechas',
    status: 'ready'
  },
  {
    id: 'calculadora-fechas',
    name: 'Calculadora de fechas',
    desc: 'Calcula el tiempo exacto en años, meses y días entre fechas, o suma y resta días a cualquier fecha.',
    href: '/fechas/calculadora-fechas',
    icon: 'calendar',
    featured: true,
    category: 'fechas',
    status: 'ready'
  },
  {
    id: 'dias-habiles-fechas',
    name: 'Días hábiles entre fechas (con feriados)',
    desc: 'Calcula días hábiles laborables excluyendo fines de semana y feriados oficiales por país.',
    href: '/fechas/dias-habiles-fechas',
    icon: 'calendar',
    featured: true,
    category: 'fechas',
    status: 'ready'
  },
  {
    id: 'cuenta-regresiva',
    name: 'Cuenta regresiva con enlace compartible',
    desc: 'Crea una cuenta regresiva interactiva para cualquier evento y compártela por enlace.',
    href: '/fechas/cuenta-regresiva',
    icon: 'clock',
    featured: true,
    category: 'fechas',
    status: 'ready'
  },
  {
    id: 'planificador-zonas-horarias',
    name: 'Planificador de zonas horarias',
    desc: 'Visualiza y coordina la mejor hora de reunión entre múltiples países y zonas horarias.',
    href: '/fechas/planificador-zonas-horarias',
    icon: 'globe',
    category: 'fechas',
    status: 'ready'
  },
  {
    id: 'fecha-probable-parto',
    name: 'Calculadora de fecha probable de parto',
    desc: 'Estima la fecha de nacimiento y semanas de gestación según tu FUM.',
    href: '/fechas/fecha-probable-parto',
    icon: 'heart',
    category: 'fechas',
    status: 'ready'
  },
  {
    id: 'ciclos-sueno',
    name: 'Calculadora de ciclos de sueño',
    desc: 'Horarios óptimos para dormir y despertar descansado según ciclos naturales de 90 min.',
    href: '/fechas/ciclos-sueno',
    icon: 'moon',
    featured: true,
    category: 'fechas',
    status: 'ready'
  },
  {
    id: 'temporizador-pomodoro',
    name: 'Temporizador Pomodoro interactivo',
    desc: 'Mejora tu foco con intervalos de trabajo (25m) y descanso, con avisos sonoros.',
    href: '/fechas/temporizador-pomodoro',
    icon: 'clock',
    category: 'fechas',
    status: 'ready'
  },

  // Estudio y trabajo
  {
    id: 'calculadora-que-nota-necesito',
    name: 'Calculadora “¿Qué nota necesito?”',
    desc: 'Introduce tus notas parciales y ponderaciones para saber qué nota necesitas en el final.',
    href: '/estudio/calculadora-que-nota-necesito',
    icon: 'award',
    featured: true,
    category: 'estudio',
    status: 'ready'
  },
  {
    id: 'generador-citas-apa',
    name: 'Generador de citas APA 7ª edición',
    desc: 'Formatea referencias bibliográficas de libros, artículos y páginas web según normas APA.',
    href: '/estudio/generador-citas-apa',
    icon: 'book-open',
    category: 'estudio',
    status: 'ready'
  },
  {
    id: 'planificador-horarios-clase',
    name: 'Planificador visual de horarios',
    desc: 'Diseña tu cronograma semanal de clases con colores y expórtalo como imagen.',
    href: '/estudio/planificador-horarios-clase',
    icon: 'calendar',
    category: 'estudio',
    status: 'ready'
  },
  {
    id: 'generador-firma-correo',
    name: 'Generador de firmas para email',
    desc: 'Crea una firma profesional en HTML con foto, cargo y enlaces para Gmail u Outlook.',
    href: '/estudio/generador-firma-correo',
    icon: 'mail',
    category: 'estudio',
    status: 'ready'
  },
  {
    id: 'registro-notas-profesor',
    name: 'Registro de notas para profesores',
    desc: 'Planilla de notas de alumnos con múltiples hojas, importación desde celda de Excel y exportación a Excel y PDF.',
    href: '/estudio/registro-notas-profesor',
    icon: 'award',
    featured: true,
    badge: 'Nuevo',
    category: 'estudio',
    status: 'ready'
  },

  // Hogar y vida diaria
  {
    id: 'calculadora-pintura-ceramica',
    name: 'Calculadora de pintura y cerámica',
    desc: 'Calcula litros de pintura o cajas de piso requeridos con factor de desperdicio.',
    href: '/hogar/calculadora-pintura-ceramica',
    icon: 'home',
    category: 'hogar',
    status: 'ready'
  },
  {
    id: 'costo-electricidad-electrodomesticos',
    name: 'Cálculo de luz por electrodoméstico',
    desc: 'Averigua el consumo mensual en kWh y costo en dinero de cada aparato en tu casa.',
    href: '/hogar/costo-electricidad-electrodomesticos',
    icon: 'zap',
    category: 'hogar',
    status: 'ready'
  },
  {
    id: 'gasto-combustible-viaje',
    name: 'Calculadora de combustible de viaje',
    desc: 'Calcula el gasto total de gasolina según distancia, consumo del auto y división por pasajero.',
    href: '/hogar/gasto-combustible-viaje',
    icon: 'compass',
    category: 'hogar',
    status: 'ready'
  },
  {
    id: 'escalador-recetas',
    name: 'Escalador de recetas de cocina',
    desc: 'Ajusta proporciones de ingredientes al cambiar el número de personas o porciones.',
    href: '/hogar/escalador-recetas',
    icon: 'coffee',
    category: 'hogar',
    status: 'ready'
  },
  {
    id: 'conversor-tazas-gramos',
    name: 'Conversor de tazas a gramos',
    desc: 'Convierte medidas culinarias (harina, azúcar, líquidos, mantequilla) con precisión.',
    href: '/hogar/conversor-tazas-gramos',
    icon: 'scale',
    category: 'hogar',
    status: 'ready'
  },

  // Imágenes (en el navegador)
  {
    id: 'redimensionar-imagenes',
    name: 'Redimensionar imágenes en línea',
    desc: 'Modifica ancho y alto en píxeles o porcentaje sin subir la foto a ningún servidor.',
    href: '/imagenes/redimensionar-imagenes',
    icon: 'image',
    category: 'imagenes',
    status: 'ready'
  },
  {
    id: 'recorte-foto-carnet',
    name: 'Recorte para foto de documento / carnet',
    desc: 'Encuadre rápido con relaciones de aspecto oficiales para pasaporte, DNI o carnet.',
    href: '/imagenes/recorte-foto-carnet',
    icon: 'crop',
    category: 'imagenes',
    status: 'ready'
  },
  {
    id: 'quitar-metadatos-exif',
    name: 'Limpiador de metadatos EXIF',
    desc: 'Borra ubicación GPS, modelo de cámara y datos privados antes de publicar tu imagen.',
    href: '/imagenes/quitar-metadatos-exif',
    icon: 'shield',
    category: 'imagenes',
    status: 'ready'
  },
  {
    id: 'convertir-heic-jpg',
    name: 'Convertidor HEIC a JPG / PNG',
    desc: 'Convierte fotos de iPhone (.heic) a JPG directamente en tu navegador de forma rápida y privada.',
    href: '/imagenes/convertir-heic-jpg',
    icon: 'refresh',
    category: 'imagenes',
    status: 'ready'
  },
  {
    id: 'paleta-colores-imagen',
    name: 'Extractor de paleta de colores',
    desc: 'Extrae los colores predominantes de cualquier imagen y copia sus códigos HEX al instante.',
    href: '/imagenes/paleta-colores-imagen',
    icon: 'palette',
    category: 'imagenes',
    status: 'ready'
  },

  // Texto y utilidades básicas
  {
    id: 'contador-palabras',
    name: 'Contador de Palabras y Lectura',
    desc: 'Estadísticas precisas de palabras, caracteres y lectura. Admite documentos Word (.docx), PDF y texto.',
    href: '/texto/contador-palabras',
    icon: 'file-text',
    category: 'texto',
    status: 'ready'
  },
  {
    id: 'generador-contrasenas',
    name: 'Generador de Contraseñas',
    desc: 'Crea claves aleatorias de alta seguridad mediante criptografía nativa con medidor de fuerza.',
    href: '/texto/generador-contrasenas',
    icon: 'shield',
    category: 'texto',
    status: 'ready'
  },
  {
    id: 'texto-a-voz',
    name: 'Texto a Voz',
    desc: 'Sintetiza texto con voces del navegador de forma rápida, privada y con controles de tono y velocidad.',
    href: '/texto/texto-a-voz',
    icon: 'volume',
    category: 'texto',
    status: 'ready'
  },
  {
    id: 'generador-qr',
    name: 'Generador de Códigos QR',
    desc: 'Genera códigos QR de alta resolución listos para imprimir o compartir en formato PNG.',
    href: '/texto/generador-qr',
    icon: 'qr',
    category: 'texto',
    status: 'ready'
  }
];
