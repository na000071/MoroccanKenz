export type Product = {
  id: string;
  name: string;
  slug: string;
  category: "hammam-essentials" | "natural-clays" | "body-oils";
  description: string;
  price?: number;
  image?: string;
  available: boolean;
};

export const products: Product[] = [];
