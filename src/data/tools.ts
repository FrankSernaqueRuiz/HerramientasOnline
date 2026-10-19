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
    id: 'redes-mensajeria',
    name: 'Redes sociales y mensajería',
    desc: 'Enlaces directos, tipografías para biografías, límites de caracteres y bio generators.',
    icon: 'message-circle'
  },
  {
    id: 'sorteos-diversion',
    name: 'Sorteos y diversión',
    desc: 'Sorteos limpios, ruleta aleatoria, dados, generador de equipos y quién paga.',
    icon: 'gift'
  },
  {
    id: 'dinero-compras',
    name: 'Dinero y compras',
    desc: 'División de cuentas, descuentos inteligentes, precio unitario y metas financieras.',
    icon: 'dollar-sign'
  },
  {
    id: 'fechas-tiempo',
    name: 'Fechas y tiempo',
    desc: 'Edad exacta, días hábiles, cuentas regresivas compartibles y ciclos de sueño.',
    icon: 'calendar'
  },
  {
    id: 'estudio-trabajo',
    name: 'Estudio y trabajo',
    desc: 'Calculadora de notas, citas APA, generador de firmas y utilidades de productividad.',
    icon: 'book-open'
  },
  {
    id: 'hogar-vida',
    name: 'Hogar y vida diaria',
    desc: 'Cálculo de materiales, gasto eléctrico, combustible y recetas proporcionales.',
    icon: 'home'
  },
  {
    id: 'imagenes-multimedia',
    name: 'Imágenes y multimedia',
    desc: 'Procesamiento directo en tu navegador: redimensión, recorte, metadatos y paletas.',
    icon: 'image'
  },
  {
    id: 'texto-utilidades',
    name: 'Texto y utilidades básicas',
    desc: 'Herramientas esenciales de seguridad, audio y análisis de texto.',
    icon: 'file-text'
  }
];

export const ALL_TOOLS: ToolItem[] = [
  // Redes sociales y mensajería
  {
    id: 'enlace-whatsapp',
    name: 'Generador de enlace de WhatsApp',
    desc: 'Crea enlaces directos wa.me con mensaje predefinido, botón de copia y código QR instantáneo.',
    href: '/enlace-whatsapp',
    icon: 'message-circle',
    featured: true,
    category: 'redes-mensajeria',
    status: 'ready'
  },
  {
    id: 'fuentes-instagram',
    name: 'Fuentes estilizadas para redes',
    desc: 'Convierte texto a estilos Unicode (cursiva, negrita, gótica, círculos) para tu bio o post.',
    href: '/fuentes-instagram',
    icon: 'type',
    category: 'redes-mensajeria',
    status: 'ready'
  },
  {
    id: 'contador-caracteres-redes',
    name: 'Contador de caracteres por red social',
    desc: 'Verifica límites en tiempo real para X/Twitter, Instagram, TikTok, LinkedIn y Facebook.',
    href: '/contador-caracteres-redes',
    icon: 'hash',
    category: 'redes-mensajeria',
    status: 'ready'
  },
  {
    id: 'generador-bios-hashtags',
    name: 'Generador de bios y hashtags',
    desc: 'Sugerencias rápidas de biografías atractivas y hashtags relevantes según tu nicho y tono.',
    href: '/generador-bios-hashtags',
    icon: 'sparkles',
    category: 'redes-mensajeria',
    status: 'ready'
  },
  {
    id: 'generador-nombres',
    name: 'Generador de nombres creativos',
    desc: 'Ideas originales para negocios, proyectos, mascotas o nombres de usuario según estilo.',
    href: '/generador-nombres',
    icon: 'smile',
    category: 'redes-mensajeria',
    status: 'ready'
  },
  {
    id: 'limpiador-texto-pdf',
    name: 'Limpiador de texto copiado de PDF',
    desc: 'Elimina saltos de línea molestos, guiones cortados y espacios dobles con un clic.',
    href: '/limpiador-texto-pdf',
    icon: 'file-text',
    category: 'redes-mensajeria',
    status: 'ready'
  },

  // Sorteos y diversión
  {
    id: 'sorteador-redes',
    name: 'Sorteador para redes sociales',
    desc: 'Pega participantes, define número de ganadores y sortea con tarjeta lista para captura.',
    href: '/sorteador-redes',
    icon: 'gift',
    featured: true,
    category: 'sorteos-diversion',
    status: 'ready'
  },
  {
    id: 'ruleta-personalizable',
    name: 'Ruleta de decisiones',
    desc: 'Gira la ruleta interactiva con tus opciones personalizadas para resolver dudas al azar.',
    href: '/ruleta-personalizable',
    icon: 'refresh',
    category: 'sorteos-diversion',
    status: 'ready'
  },
  {
    id: 'equipos-aleatorios',
    name: 'Generador de equipos parejos',
    desc: 'Organiza grupos equilibrados a partir de una lista de nombres de forma imparcial.',
    href: '/equipos-aleatorios',
    icon: 'users',
    category: 'sorteos-diversion',
    status: 'ready'
  },
  {
    id: 'dado-moneda',
    name: 'Lanzador de dados y moneda 3D',
    desc: 'Lanza monedas (cara o cruz) o dados (D6, D20) con física y animación visual fluida.',
    href: '/dado-moneda',
    icon: 'zap',
    category: 'sorteos-diversion',
    status: 'ready'
  },
  {
    id: 'quien-paga-hoy',
    name: '¿Quién paga hoy?',
    desc: 'Elige quién invita la cuenta hoy entre amigos con animación de ruleta de nombres.',
    href: '/quien-paga-hoy',
    icon: 'dollar-sign',
    category: 'sorteos-diversion',
    status: 'ready'
  },

  // Dinero y compras
  {
    id: 'dividir-cuenta',
    name: 'Dividir la cuenta con propina',
    desc: 'Calcula lo que debe pagar cada persona, consumos individuales y propina distribuida.',
    href: '/dividir-cuenta',
    icon: 'dollar-sign',
    featured: true,
    category: 'dinero-compras',
    status: 'ready'
  },
  {
    id: 'calculadora-descuentos',
    name: 'Calculadora de descuentos',
    desc: 'Precios finales, ahorro neto y descuentos dobles/encadenados al instante.',
    href: '/calculadora-descuentos',
    icon: 'percent',
    category: 'dinero-compras',
    status: 'ready'
  },
  {
    id: 'comparador-precio-unidad',
    name: 'Comparador de precio por unidad',
    desc: 'Descubre cuál producto conviene más comparando precio por kilo, litro o unidad.',
    href: '/comparador-precio-unidad',
    icon: 'scale',
    category: 'dinero-compras',
    status: 'ready'
  },
  {
    id: 'valor-hora-trabajo',
    name: 'Valor real de tu hora de trabajo',
    desc: 'Calcula tus ingresos por hora real considerando tiempos de viaje y gastos fijos.',
    href: '/valor-hora-trabajo',
    icon: 'clock',
    category: 'dinero-compras',
    status: 'ready'
  },
  {
    id: 'meta-ahorro',
    name: 'Calculadora de meta de ahorro',
    desc: 'Planifica cuánto guardar semanal o mensualmente para alcanzar tu objetivo a tiempo.',
    href: '/meta-ahorro',
    icon: 'trending-up',
    category: 'dinero-compras',
    status: 'ready'
  },
  {
    id: 'bola-nieve-deudas',
    name: 'Planificador Bola de Nieve de deudas',
    desc: 'Organiza tus pagos por saldo o tasa para salir de deudas en el menor tiempo.',
    href: '/bola-nieve-deudas',
    icon: 'activity',
    category: 'dinero-compras',
    status: 'ready'
  },

  // Fechas y tiempo
  {
    id: 'calculadora-edad-exacta',
    name: 'Calculadora de edad exacta',
    desc: 'Averigua tu edad en años, meses, días, horas y cuenta regresiva para tu próximo cumpleaños.',
    href: '/calculadora-edad-exacta',
    icon: 'calendar',
    category: 'fechas-tiempo',
    status: 'ready'
  },
  {
    id: 'calculadora-fechas',
    name: 'Calculadora de fechas',
    desc: 'Calcula el tiempo exacto en años, meses y días entre fechas, o suma y resta días a cualquier fecha.',
    href: '/calculadora-fechas',
    icon: 'calendar',
    featured: true,
    category: 'fechas-tiempo',
    status: 'ready'
  },
  {
    id: 'dias-habiles-fechas',
    name: 'Días hábiles entre fechas (con feriados)',
    desc: 'Calcula días hábiles laborables excluyendo fines de semana y feriados oficiales por país.',
    href: '/dias-habiles-fechas',
    icon: 'calendar',
    featured: true,
    category: 'fechas-tiempo',
    status: 'ready'
  },
  {
    id: 'cuenta-regresiva',
    name: 'Cuenta regresiva con enlace compartible',
    desc: 'Crea una cuenta regresiva interactiva para cualquier evento y compártela por enlace.',
    href: '/cuenta-regresiva',
    icon: 'clock',
    featured: true,
    category: 'fechas-tiempo',
    status: 'ready'
  },
  {
    id: 'planificador-zonas-horarias',
    name: 'Planificador de zonas horarias',
    desc: 'Visualiza y coordina la mejor hora de reunión entre múltiples países y zonas horarias.',
    href: '/planificador-zonas-horarias',
    icon: 'globe',
    category: 'fechas-tiempo',
    status: 'ready'
  },
  {
    id: 'fecha-probable-parto',
    name: 'Calculadora de fecha probable de parto',
    desc: 'Estima la fecha de nacimiento y semanas de gestación según tu FUM.',
    href: '/fecha-probable-parto',
    icon: 'heart',
    category: 'fechas-tiempo',
    status: 'ready'
  },
  {
    id: 'ciclos-sueno',
    name: 'Calculadora de ciclos de sueño',
    desc: 'Horarios óptimos para dormir y despertar descansado según ciclos naturales de 90 min.',
    href: '/ciclos-sueno',
    icon: 'moon',
    featured: true,
    category: 'fechas-tiempo',
    status: 'ready'
  },
  {
    id: 'temporizador-pomodoro',
    name: 'Temporizador Pomodoro interactivo',
    desc: 'Mejora tu foco con intervalos de trabajo (25m) y descanso, con avisos sonoros.',
    href: '/temporizador-pomodoro',
    icon: 'clock',
    category: 'fechas-tiempo',
    status: 'ready'
  },

  // Estudio y trabajo
  {
    id: 'calculadora-que-nota-necesito',
    name: 'Calculadora “¿Qué nota necesito?”',
    desc: 'Introduce tus notas parciales y ponderaciones para saber qué nota necesitas en el final.',
    href: '/calculadora-que-nota-necesito',
    icon: 'award',
    featured: true,
    category: 'estudio-trabajo',
    status: 'ready'
  },
  {
    id: 'generador-citas-apa',
    name: 'Generador de citas APA 7ª edición',
    desc: 'Formatea referencias bibliográficas de libros, artículos y páginas web según normas APA.',
    href: '/generador-citas-apa',
    icon: 'book-open',
    category: 'estudio-trabajo',
    status: 'ready'
  },
  {
    id: 'planificador-horarios-clase',
    name: 'Planificador visual de horarios',
    desc: 'Diseña tu cronograma semanal de clases con colores y expórtalo como imagen.',
    href: '/planificador-horarios-clase',
    icon: 'calendar',
    category: 'estudio-trabajo',
    status: 'ready'
  },
  {
    id: 'generador-firma-correo',
    name: 'Generador de firmas para email',
    desc: 'Crea una firma profesional en HTML con foto, cargo y enlaces para Gmail u Outlook.',
    href: '/generador-firma-correo',
    icon: 'mail',
    category: 'estudio-trabajo',
    status: 'ready'
  },
  {
    id: 'registro-notas-profesor',
    name: 'Registro de notas para profesores',
    desc: 'Planilla de notas de alumnos con múltiples hojas, importación desde celda de Excel y exportación a Excel y PDF.',
    href: '/registro-notas-profesor',
    icon: 'award',
    featured: true,
    badge: 'Nuevo',
    category: 'estudio-trabajo',
    status: 'ready'
  },

  // Hogar y vida diaria
  {
    id: 'calculadora-pintura-ceramica',
    name: 'Calculadora de pintura y cerámica',
    desc: 'Calcula litros de pintura o cajas de piso requeridos con factor de desperdicio.',
    href: '/calculadora-pintura-ceramica',
    icon: 'home',
    category: 'hogar-vida',
    status: 'ready'
  },
  {
    id: 'costo-electricidad-electrodomesticos',
    name: 'Cálculo de luz por electrodoméstico',
    desc: 'Averigua el consumo mensual en kWh y costo en dinero de cada aparato en tu casa.',
    href: '/costo-electricidad-electrodomesticos',
    icon: 'zap',
    category: 'hogar-vida',
    status: 'ready'
  },
  {
    id: 'gasto-combustible-viaje',
    name: 'Calculadora de combustible de viaje',
    desc: 'Calcula el gasto total de gasolina según distancia, consumo del auto y división por pasajero.',
    href: '/gasto-combustible-viaje',
    icon: 'compass',
    category: 'hogar-vida',
    status: 'ready'
  },
  {
    id: 'escalador-recetas',
    name: 'Escalador de recetas de cocina',
    desc: 'Ajusta proporciones de ingredientes al cambiar el número de personas o porciones.',
    href: '/escalador-recetas',
    icon: 'coffee',
    category: 'hogar-vida',
    status: 'ready'
  },
  {
    id: 'conversor-tazas-gramos',
    name: 'Conversor de tazas a gramos',
    desc: 'Convierte medidas culinarias (harina, azúcar, líquidos, mantequilla) con precisión.',
    href: '/conversor-tazas-gramos',
    icon: 'scale',
    category: 'hogar-vida',
    status: 'ready'
  },

  // Imágenes (en el navegador)
  {
    id: 'redimensionar-imagenes',
    name: 'Redimensionar imágenes en línea',
    desc: 'Modifica ancho y alto en píxeles o porcentaje sin subir la foto a ningún servidor.',
    href: '/redimensionar-imagenes',
    icon: 'image',
    category: 'imagenes-multimedia',
    status: 'ready'
  },
  {
    id: 'recorte-foto-carnet',
    name: 'Recorte para foto de documento / carnet',
    desc: 'Encuadre rápido con relaciones de aspecto oficiales para pasaporte, DNI o carnet.',
    href: '/recorte-foto-carnet',
    icon: 'crop',
    category: 'imagenes-multimedia',
    status: 'ready'
  },
  {
    id: 'quitar-metadatos-exif',
    name: 'Limpiador de metadatos EXIF',
    desc: 'Borra ubicación GPS, modelo de cámara y datos privados antes de publicar tu imagen.',
    href: '/quitar-metadatos-exif',
    icon: 'shield',
    category: 'imagenes-multimedia',
    status: 'ready'
  },
  {
    id: 'convertir-heic-jpg',
    name: 'Convertidor HEIC a JPG / PNG',
    desc: 'Convierte fotos de iPhone (.heic) a JPG directamente en tu navegador de forma rápida y privada.',
    href: '/convertir-heic-jpg',
    icon: 'refresh',
    category: 'imagenes-multimedia',
    status: 'ready'
  },
  {
    id: 'paleta-colores-imagen',
    name: 'Extractor de paleta de colores',
    desc: 'Extrae los colores predominantes de cualquier imagen y copia sus códigos HEX al instante.',
    href: '/paleta-colores-imagen',
    icon: 'palette',
    category: 'imagenes-multimedia',
    status: 'ready'
  },

  // Herramientas previas existentes
  {
    id: 'contador-palabras',
    name: 'Contador de Palabras y Lectura',
    desc: 'Estadísticas precisas de palabras, caracteres y lectura. Admite documentos Word (.docx), PDF y texto.',
    href: '/contador-palabras',
    icon: 'file-text',
    category: 'texto-utilidades',
    status: 'ready'
  },
  {
    id: 'generador-contrasenas',
    name: 'Generador de Contraseñas',
    desc: 'Crea claves aleatorias de alta seguridad mediante criptografía nativa con medidor de fuerza.',
    href: '/generador-contrasenas',
    icon: 'shield',
    category: 'texto-utilidades',
    status: 'ready'
  },
  {
    id: 'texto-a-voz',
    name: 'Texto a Voz (MP3)',
    desc: 'Sintetiza texto con voces naturales y descarga el archivo MP3 directamente a tu dispositivo.',
    href: '/texto-a-voz',
    icon: 'volume',
    category: 'texto-utilidades',
    status: 'ready'
  },

  {
    id: 'generador-qr',
    name: 'Generador de Códigos QR',
    desc: 'Genera códigos QR de alta resolución listos para imprimir o compartir en formato PNG.',
    href: '/generador-qr',
    icon: 'qr',
    category: 'texto-utilidades',
    status: 'ready'
  }
];
