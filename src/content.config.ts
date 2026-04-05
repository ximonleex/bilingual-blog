import { z, defineCollection } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default('AI Side Hustle'),
  image: z.object({
    url: z.string(),
    alt: z.string(),
  }).optional(),
  category: z.enum(['tools', 'freelance', 'passive', 'tutorial', 'strategy']),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
});

export type BlogPost = z.infer<typeof blogSchema>;

export const collections = {
  'blog-en': defineCollection({
    type: 'content',
    schema: blogSchema,
  }),
  'blog-zh': defineCollection({
    type: 'content',
    schema: blogSchema,
  }),
};
