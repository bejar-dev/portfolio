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
    company: 'Nova Pixel Studio',
    role: 'Frontend Developer',
    startDate: '2022-02',
    endDate: '2024-06',
    description: [
      'Disene y construI interfaces para productos SaaS con enfoque mobile-first.',
      'Mejore el rendimiento de carga inicial en un 35% optimizando imagenes y CSS.',
      'Colabore con UX para consolidar un sistema de componentes reutilizables.'
    ],
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'Vite']
  },
  {
    company: 'Orbita Labs',
    role: 'Full Stack Developer',
    startDate: '2024-07',
    endDate: 'Presente',
    description: [
      'Lidero el desarrollo de APIs y paneles internos para equipos operativos.',
      'Implemente autenticacion segura y trazabilidad de eventos en servicios clave.',
      'Participo en decisiones de arquitectura y estandares de calidad de codigo.'
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Prisma', 'Astro']
  }
];
