export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'Presente';
  description: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    company: 'BCP Consulting EIRL',
    role: 'Desarrollador Web WordPress / Astro + Responsable SEO y SEM',
    startDate: '2025-06',
    endDate: '2026-04',
    description: [
      'Desarrolle y mantuve sitios corporativos y comerciales en WordPress y Astro, priorizando rendimiento, estructura clara y enfoque mobile-first.',
      'Implemente SEO tecnico y on-page (arquitectura, metadatos, contenido y SEO local) para mejorar visibilidad en busquedas de alta intencion.',
      'Gestione campanas de Google Ads y configuracion de medicion con GA4, GTM y Search Console para dar seguimiento real al rendimiento.'
    ],
    technologies: [
      'WordPress',
      'Elementor',
      'WooCommerce',
      'Astro',
      'Tailwind CSS',
      'HTML',
      'CSS',
      'JavaScript',
      'Google Ads',
      'Google Analytics 4',
      'Google Tag Manager',
      'Google Search Console',
      'GitHub Actions'
    ]
  },
  {
    company: 'Creanding EIRL',
    role: 'Desarrollador WordPress',
    startDate: '2025-03',
    endDate: '2025-05',
    description: [
      'Participe en mejoras del sitio web de la agencia, enfocadas en rediseno de secciones clave y claridad visual.',
      'Optimice elementos que afectaban la velocidad de carga para mejorar la experiencia de navegacion.',
      'Actualice contenido institucional y de servicios para mantener consistencia de marca y mensaje comercial.'
    ],
    technologies: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript']
  },
  {
    company: 'Consigue Ventas EIRL',
    role: 'Desarrollador WordPress',
    startDate: '2024-09',
    endDate: '2025-01',
    description: [
      'Implemente sitios web completos en WordPress a partir de disenos UX/UI entregados por el equipo de la agencia.',
      'Maquete paginas institucionales y de servicios cuidando fidelidad visual, usabilidad y tiempos de entrega.',
      'Optimice imagenes y adapte contenido en espanol e ingles segun los requerimientos de cada cliente.'
    ],
    technologies: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript']
  }
];
