import type { Category, Author, Image } from '@/types';
export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  images: Image[];
  category: Category;
  author: Author;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}