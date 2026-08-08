/**
 * Bitácora Northern — feed cronológico.
 * REGLA: las entradas nuevas van AL PRINCIPIO del array (más reciente arriba).
 * at = fecha/hora ISO con zona -03:00 (Uruguay).
 */
window.BITACORA_CHANGELOG = [
  {
    at: "2026-08-08T17:20:00-03:00",
    module: "Contratos",
    moduleHref: "propuestas/contratos.html",
    title: "Logo en admin, título del sistema y roles Admin/Operador",
    status: "done",
    details: [
      "El panel de administración muestra el logo Northern y el título del sistema de contratos",
      "Desde usuarios se pueden crear operadores o administradores con PIN",
      "Los administradores creados entran con correo + PIN al panel de gestión",
    ],
  },
  {
    at: "2026-08-08T16:45:00-03:00",
    module: "Contratos",
    moduleHref: "propuestas/contratos.html",
    title: "Administrador, usuarios con PIN y reportes de plataforma",
    status: "done",
    details: [
      "El administrador crea operadores con correo y PIN de 4 dígitos",
      "Los operadores ingresan y usan el panel completo de contratos",
      "El administrador ve reportes globales: envíos, aceptaciones y auditoría",
    ],
  },

  {
    at: "2026-08-08T16:35:00-03:00",
    module: "Contratos",
    moduleHref: "propuestas/contratos.html",
    title: "Evidencia legible del navegador en aceptación y auditoría",
    status: "done",
    details: [
      "El navegador se muestra claro (por ejemplo Google Chrome o Brave) en la evidencia",
      "La auditoría del panel incluye navegador e IP en cada paso del responsable",
      "El comprobante PDF se descarga con un nombre entendible (contrato + responsable)",
    ],
  },

  {
    at: "2026-08-08T16:34:00-03:00",
    module: "Contratos",
    moduleHref: "propuestas/contratos.html",
    title: "Página pública: logo completo y Responsable de PAGO",
    status: "done",
    details: [
      "Logo institucional visible completo en la página de aceptación",
      "Formulario etiquetado como Responsable de PAGO (ya no como tutor)",
    ],
  },
  {
    at: "2026-08-08T16:33:00-03:00",
    module: "Contratos",
    moduleHref: "propuestas/contratos.html",
    title: "Enlaces sin nombre ni código de alumno",
    status: "done",
    details: [
      "Al generar el enlace ya no se piden nombre ni código del alumno",
      "La vista pública y el listado de envíos quedan alineados con ese criterio",
    ],
  },
  {
    at: "2026-08-08T16:14:00-03:00",
    module: "Bitácora",
    moduleHref: "index.html",
    title: "Resumen con última implementación arriba",
    status: "done",
    details: [
      "Feed cronológico como en la bitácora Dani, con la entrada más reciente destacada",
      "Landing, Contratos y Uniformes filtran solo sus implementaciones",
      "Se mantiene la paleta institucional Northern",
    ],
  },

  {
    at: "2026-08-08T12:00:00-03:00",
    module: "Landing",
    moduleHref: "propuestas/landing.html",
    title: "Sección Staff corporativa con formulario de postulación",
    status: "done",
    details: [
      "Bloque Staff en la landing con estilo corporativo",
      "Formulario de postulación para interesados",
    ],
  },
  {
    at: "2026-08-07T18:00:00-03:00",
    module: "Uniformes",
    moduleHref: "propuestas/uniformes.html",
    title: "Propuesta: gestor de uniformes e indumentaria",
    status: "proposal",
    details: [
      "Panel de stock, vidriera en la landing y compras online",
      "Presupuesto de desarrollo USD 700; soporte incluido en la mensualidad vigente",
    ],
  },
  {
    at: "2026-08-07T16:30:00-03:00",
    module: "Bitácora",
    moduleHref: "index.html",
    title: "Hub público de actualizaciones y propuestas",
    status: "done",
    details: [
      "Sitio estático en GitHub Pages para seguimiento institucional",
      "Sidebar con Actualizaciones y Propuestas",
    ],
  },
  {
    at: "2026-08-06T17:00:00-03:00",
    module: "Contratos",
    moduleHref: "propuestas/contratos.html",
    title: "Despliegue en servidor (Docker) y branding Northern",
    status: "done",
    details: [
      "Publicación del MVP en servidor con Docker",
      "Branding Northern en panel administrativo y página pública",
    ],
  },
  {
    at: "2026-08-06T15:00:00-03:00",
    module: "Contratos",
    moduleHref: "propuestas/contratos.html",
    title: "Comprobante PDF, hash SHA-256 y auditoría",
    status: "done",
    details: [
      "Comprobante PDF exportable de la aceptación",
      "Hash SHA-256 del contrato almacenado",
      "Auditoría de abrir, ver PDF y aceptar",
    ],
  },
  {
    at: "2026-08-06T12:00:00-03:00",
    module: "Contratos",
    moduleHref: "propuestas/contratos.html",
    title: "Enlaces únicos y aceptación como Responsable de PAGO",
    status: "done",
    details: [
      "Enlaces únicos con expiración opcional",
      "Flujo público de aceptación como Responsable de PAGO",
    ],
  },
  {
    at: "2026-08-05T16:00:00-03:00",
    module: "Contratos",
    moduleHref: "propuestas/contratos.html",
    title: "Panel administrativo y catálogo de contratos",
    status: "done",
    details: [
      "Panel administrativo con acceso seguro",
      "Catálogo de contratos PDF o Word",
      "Conversión Word → PDF (no editable)",
    ],
  },
  {
    at: "2026-08-04T17:00:00-03:00",
    module: "Landing",
    moduleHref: "propuestas/landing.html",
    title: "Panel admin, fotos por Google Drive y publicación",
    status: "done",
    details: [
      "Panel para editar contenido, secciones e imágenes",
      "Fotos mediante enlaces públicos de Google Drive",
      "Publicación del sitio en producción",
    ],
  },
  {
    at: "2026-08-04T14:00:00-03:00",
    module: "Landing",
    moduleHref: "propuestas/landing.html",
    title: "Footer, contacto, WhatsApp y páginas de contenido (CMS)",
    status: "done",
    details: [
      "Footer, datos de contacto y botón WhatsApp",
      "Páginas de contenido administrables desde el CMS",
    ],
  },
  {
    at: "2026-08-03T16:00:00-03:00",
    module: "Landing",
    moduleHref: "propuestas/landing.html",
    title: "Locales, espacios y countdown The Final Show",
    status: "done",
    details: [
      "Sección de locales y espacios",
      "Countdown — The Final Show",
    ],
  },
  {
    at: "2026-08-03T13:00:00-03:00",
    module: "Landing",
    moduleHref: "propuestas/landing.html",
    title: "Equipo, proyecto institucional y Más allá del aula",
    status: "done",
    details: [
      "Equipo multidisciplinario",
      "Proyecto institucional",
      "Más allá del aula (Instagram)",
    ],
  },
  {
    at: "2026-08-02T16:00:00-03:00",
    module: "Landing",
    moduleHref: "propuestas/landing.html",
    title: "Lenguas extranjeras, talleres y Educación Física",
    status: "done",
    details: [
      "Lenguas extranjeras con pestañas",
      "Talleres",
      "Educación Física",
    ],
  },
  {
    at: "2026-08-02T12:00:00-03:00",
    module: "Landing",
    moduleHref: "propuestas/landing.html",
    title: "Misión y Visión, niveles, estadísticas y Lo que nos define",
    status: "done",
    details: [
      "Misión y Visión / niveles educativos",
      "Estadísticas de la comunidad",
      "Lo que nos define",
    ],
  },
  {
    at: "2026-08-01T15:00:00-03:00",
    module: "Landing",
    moduleHref: "propuestas/landing.html",
    title: "Landing pública, splash, anuncios y carrusel hero",
    status: "done",
    details: [
      "Landing pública responsive, splash y animaciones",
      "Barra de anuncios y navegación editable",
      "Carrusel hero",
    ],
  },
];
