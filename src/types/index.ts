export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  isFeatured?: boolean;
  software?: string;
  isFree?: boolean;
}