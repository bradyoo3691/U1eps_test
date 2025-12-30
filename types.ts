
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  colors: string[];
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface SiteConfig {
  heroTitle: string;
  heroSub1: string;
  heroSub2: string;
  brandName: string;
  pointColor: string;
}

export enum Page {
  HOME = 'home',
  PRODUCT = 'product',
  DELIVERY = 'delivery',
  CONTACT = 'contact',
  BLOG = 'blog',
  ADMIN = 'admin'
}
