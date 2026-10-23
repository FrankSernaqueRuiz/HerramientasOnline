import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://utiliaonline.com',
  integrations: [sitemap()],
  redirects: {
    // Redirecciones de categorías antiguas
    '/categoria/redes-mensajeria': '/redes',
    '/categoria/sorteos-diversion': '/sorteos',
    '/categoria/dinero-compras': '/dinero',
    '/categoria/fechas-tiempo': '/fechas',
    '/categoria/estudio-trabajo': '/estudio',
    '/categoria/hogar-vida': '/hogar',
    '/categoria/imagenes-multimedia': '/imagenes',
    '/categoria/texto-utilidades': '/texto',

    // Redirecciones de herramientas a sus nuevas carpetas
    '/enlace-whatsapp': '/redes/enlace-whatsapp',
    '/fuentes-instagram': '/redes/fuentes-instagram',
    '/contador-caracteres-redes': '/redes/contador-caracteres-redes',
    '/generador-bios-hashtags': '/redes/generador-bios-hashtags',
    '/generador-nombres': '/redes/generador-nombres',
    '/limpiador-texto-pdf': '/redes/limpiador-texto-pdf',

    '/sorteador-redes': '/sorteos/sorteador-redes',
    '/ruleta-personalizable': '/sorteos/ruleta-personalizable',
    '/equipos-aleatorios': '/sorteos/equipos-aleatorios',
    '/dado-moneda': '/sorteos/dado-moneda',
    '/quien-paga-hoy': '/sorteos/quien-paga-hoy',

    '/dividir-cuenta': '/dinero/dividir-cuenta',
    '/calculadora-descuentos': '/dinero/calculadora-descuentos',
    '/comparador-precio-unidad': '/dinero/comparador-precio-unidad',
    '/valor-hora-trabajo': '/dinero/valor-hora-trabajo',
    '/meta-ahorro': '/dinero/meta-ahorro',
    '/bola-nieve-deudas': '/dinero/bola-nieve-deudas',

    '/calculadora-edad-exacta': '/fechas/calculadora-edad-exacta',
    '/calculadora-fechas': '/fechas/calculadora-fechas',
    '/dias-habiles-fechas': '/fechas/dias-habiles-fechas',
    '/cuenta-regresiva': '/fechas/cuenta-regresiva',
    '/planificador-zonas-horarias': '/fechas/planificador-zonas-horarias',
    '/fecha-probable-parto': '/fechas/fecha-probable-parto',
    '/ciclos-sueno': '/fechas/ciclos-sueno',
    '/temporizador-pomodoro': '/fechas/temporizador-pomodoro',

    '/calculadora-que-nota-necesito': '/estudio/calculadora-que-nota-necesito',
    '/generador-citas-apa': '/estudio/generador-citas-apa',
    '/planificador-horarios-clase': '/estudio/planificador-horarios-clase',
    '/generador-firma-correo': '/estudio/generador-firma-correo',
    '/registro-notas-profesor': '/estudio/registro-notas-profesor',

    '/calculadora-pintura-ceramica': '/hogar/calculadora-pintura-ceramica',
    '/costo-electricidad-electrodomesticos': '/hogar/costo-electricidad-electrodomesticos',
    '/gasto-combustible-viaje': '/hogar/gasto-combustible-viaje',
    '/escalador-recetas': '/hogar/escalador-recetas',
    '/conversor-tazas-gramos': '/hogar/conversor-tazas-gramos',

    '/redimensionar-imagenes': '/imagenes/redimensionar-imagenes',
    '/recorte-foto-carnet': '/imagenes/recorte-foto-carnet',
    '/quitar-metadatos-exif': '/imagenes/quitar-metadatos-exif',
    '/convertir-heic-jpg': '/imagenes/convertir-heic-jpg',
    '/paleta-colores-imagen': '/imagenes/paleta-colores-imagen',

    '/contador-palabras': '/texto/contador-palabras',
    '/generador-contrasenas': '/texto/generador-contrasenas',
    '/texto-a-voz': '/texto/texto-a-voz',
    '/generador-qr': '/texto/generador-qr'
  }
});