import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const experienceGroups = [
  'bcp-consulting-eirl',
  'consigue-ventas-eirl',
  'creanding-eirl',
  'orbita-labs',
  'independiente'
] as const;

const schemaTypes = ['CreativeWork', 'TechArticle', 'SoftwareApplication'] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string().max(160),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    github: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
    experienceGroup: z.enum(experienceGroups).optional(),
    experienceGroupLabel: z.string().max(80).optional(),
    experienceRoleSummary: z.string().max(140).optional(),
    role: z.string().max(160).optional(),
    company: z.string().max(120).optional(),
    duration: z.string().max(60).optional(),
    problem: z.string().max(600).optional(),
    solution: z.string().max(600).optional(),
    impactMetrics: z
      .array(
        z.object({
          label: z.string().max(40),
          value: z.string().max(40),
          detail: z.string().max(120).optional()
        })
      )
      .max(6)
      .optional(),
    highlights: z.array(z.string().max(140)).max(8).optional(),
    features: z
      .array(
        z.object({
          title: z.string().max(80),
          description: z.string().max(200)
        })
      )
      .max(8)
      .optional(),
    lessons: z.array(z.string().max(240)).max(8).optional(),
    testimonial: z
      .object({
        quote: z.string().max(280),
        author: z.string().max(80),
        role: z.string().max(80).optional()
      })
      .optional(),
    gallery: z.array(z.string()).max(10).optional(),
    schemaType: z.enum(schemaTypes).optional(),
    cta: z
      .object({
        text: z.string().max(60),
        href: z.string().max(240)
      })
      .optional()
  })
});

export const collections = { projects };
