import type { Endpoint } from '@/types';
const API_BASE_URL = import.meta.env.API_BASE_URL;
const API_TOKEN = import.meta.env.API_TOKEN;;

export async function useFetch(
  endpoint: Endpoint,
  queryParams?: string,
  options: RequestInit = {},
  
): Promise<any> {
  
  const url = new URL(`${API_BASE_URL}${endpoint}`);;
  const defaultOptions: RequestInit = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  };

  if (queryParams) {
    url.search = queryParams;
  }
  // console.log(url.toString());
  // console.log({ ...defaultOptions, ...options });
  
  const response = await fetch(url.toString(), { ...defaultOptions, ...options });
  
  if (!response.ok) {
    throw new Error(`HTTP error (useFetch): ${response.status}`);
  }

  return response;
}