export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Skill {
  name: string;
  level: SkillLevel;
  iconName?: string;
}

export interface SkillCategory {
  category: string;
  categoryIcon: 'Code2' | 'Palette' | 'Server' | 'Rocket' | 'BarChart3' | 'PenTool';
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Core Frontend',
    categoryIcon: 'Code2',
    skills: [
      { name: 'Astro', level: 'advanced', iconName: 'astro-icon' },
      { name: 'TypeScript', level: 'advanced', iconName: 'typescript' },
      { name: 'Tailwind CSS', level: 'advanced', iconName: 'tailwindcss' },
      { name: 'HTML5', level: 'advanced', iconName: 'html' },
      { name: 'CSS3', level: 'advanced', iconName: 'css3' },
      { name: 'JavaScript', level: 'advanced', iconName: 'javascript' }
    ]
  },
  {
    category: 'Backend & APIs',
    categoryIcon: 'Server',
    skills: [
      { name: 'Node.js', level: 'advanced', iconName: 'nodejs' },
      { name: 'APIs REST', level: 'advanced', iconName: 'javascript' }
    ]
  },
  {
    category: 'DevOps & Deployment',
    categoryIcon: 'Rocket',
    skills: [
      { name: 'Git', level: 'advanced', iconName: 'git' },
      { name: 'GitHub', level: 'advanced', iconName: 'github' },
      { name: 'Docker', level: 'intermediate', iconName: 'docker' }
    ]
  },
  {
    category: 'Marketing Tech',
    categoryIcon: 'BarChart3',
    skills: [
      { name: 'Google Analytics', level: 'intermediate', iconName: 'google-analytics' },
      { name: 'Google Tag Manager', level: 'intermediate', iconName: 'google-tag-manager' },
      { name: 'Google Ads', level: 'intermediate', iconName: 'google-ads' },
      { name: 'Search Console', level: 'beginner', iconName: 'google-search-console' }
    ]
  },
  {
    category: 'Design & Prototyping',
    categoryIcon: 'PenTool',
    skills: [
      { name: 'Figma', level: 'intermediate', iconName: 'figma' },
      { name: 'Canva', level: 'beginner', iconName: 'canva-icon' }
    ]
  }
];
