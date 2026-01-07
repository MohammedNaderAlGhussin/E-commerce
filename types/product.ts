import z from "zod";
import { insertProductSchema } from "@/lib/validators/product";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: number;
  createdAt: Date;
};

export type GetAllProducts = {
  query: string;
  limit?: number;
  page: number;
  category?: string;
  price?: string;
  rating?: string;
  sort?: string;
};
