import type { ImageFormat } from '@/types';
export interface Formats {
  thumbnail: ImageFormat;
  small: ImageFormat;
  [key: string]: ImageFormat;
}