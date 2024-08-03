import type { Category } from '@/types';
import { useFetch } from "@/utils/useFetch";


export async function getCategories(): Promise<Category[]> {
  try {
    const response = await useFetch('categories');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    
    return data.data.map((item: any) => ({
      id: item.id,
      name: item.attributes.name,
      slug: item.attributes.slug,
      createdAt: item.attributes.createdAt,
      updatedAt: item.attributes.updatedAt,
      publishedAt: item.attributes.publishedAt
    }  as Category));
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}