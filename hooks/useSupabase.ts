import { supabase } from "@/lib/supabase/products";
import { useState } from "react";

export const useSupabase = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

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
      .ilike("title", `%${filter}%`);

    if (data) {
      setFilteredProducts(data);
    }
  };

  return { products, getProducts, filteredProducts, getFilteredProducts };
};
