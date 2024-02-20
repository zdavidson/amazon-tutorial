import { supabase } from "@/lib/supabase/products";
import { useState } from "react";

import { Product } from "@/types/supabase";

export const useSupabase = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [singleProduct, setSingleProduct] = useState<Product[]>([]);

  const getProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (data) {
      setProducts(data);
    }
    if (error) console.log(error);
  };

  const getFilteredProducts = async (filter: string) => {
    const { data, error } = await supabase
      .from("products")
      .select()
      .or(
        `title.ilike.%${filter}%, description.ilike.%${filter}%, category.ilike.%${filter}%`
      );

    if (data) {
      setFilteredProducts(data);
    }
  };

  const getSingleProduct = async (filter: number) => {
    const { data, error } = await supabase
      .from("products")
      .select()
      .eq("id", `${filter}`);

    if (data) {
      setSingleProduct(data);
    }
  };

  return {
    products,
    getProducts,
    filteredProducts,
    getFilteredProducts,
    singleProduct,
    getSingleProduct,
  };
};
