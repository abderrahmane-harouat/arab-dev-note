import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    domain: z.string(),
    tags: z.array(z.string()).default([]),
    created: z.string(),
    updated: z.string(),
    heroImage: z.string().optional(),
    outdated: z.boolean().default(false),
    outdatedReason: z.string().optional(),
    outdatedAlternative: z.string().optional(),
    stage: z.enum(['seedling', 'budding', 'evergreen']).default('budding'),
    history: z.array(z.object({
      date: z.string(),
      note: z.string(),
    })).optional(),
  }),
});

export const collections = { notes };
