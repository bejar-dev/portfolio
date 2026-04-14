import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string().max(160),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    github: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date()
  })
});

export const collections = { projects };
