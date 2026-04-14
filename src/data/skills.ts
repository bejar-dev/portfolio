export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Skill {
  name: string;
  level: SkillLevel;
  iconName?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Astro', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'React', level: 'intermediate' },
      { name: 'Accesibilidad Web', level: 'intermediate' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Express', level: 'intermediate' },
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'Prisma', level: 'intermediate' },
      { name: 'APIs REST', level: 'advanced' }
    ]
  },
  {
    category: 'Herramientas',
    skills: [
      { name: 'Git y GitHub', level: 'advanced' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'CI/CD', level: 'intermediate' },
      { name: 'Figma', level: 'beginner' },
      { name: 'Testing', level: 'intermediate' }
    ]
  }
];
