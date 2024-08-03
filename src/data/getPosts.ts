import type { Post, Image } from '@/types';
import { useFetch } from "@/utils/useFetch";


export async function getPosts(category = ''): Promise<Post[]> {
  try {
    const response = await useFetch('posts', new URLSearchParams({populate: '*'}));
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    

    console.log(category);
    
    return data.data.map((item: any) => {
      const images = item.attributes.image.data;
      let imagesArray: Image[] = [];
      if(images) {
        images.map((item: any) => {
          imagesArray.push(item.attributes as Image);
        })
      }      
      return {
        id: item.id,
        title: item.attributes.title,
        content: item.attributes.slug,
        slug: item.attributes.slug,
        images: imagesArray,
        category: item.attributes.category.data?.attributes,
        author: item.attributes.author.data?.attributes,
        createdAt: item.attributes.createdAt,
        updatedAt: item.attributes.updatedAt,
        publishedAt: item.attributes.publishedAt
      } as Post
    });
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}