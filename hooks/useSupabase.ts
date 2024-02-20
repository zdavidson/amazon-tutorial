import { supabase } from "@/lib/supabase/products";
import { useState } from "react";

import { Product } from "@/types/supabase";

export const useSupabase = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [singleProduct, setSingleProduct] = useState<Product[]>([]);
  const [clothing, setClothing] = useState<Product[]>([]);
  const [electronics, setElectronics] = useState<Product[]>([]);
  const [jewelry, setJewelry] = useState<Product[]>([]);
  const [womensClothing, setWomensClothing] = useState<Product[]>([]);

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

  const getClothing = async () => {
    const filter = "clothing";
    const { data, error } = await supabase
      .from("products")
      .select()
      .or(
        `title.ilike.%${filter}%, description.ilike.%${filter}%, category.ilike.%${filter}%`
      );

    if (data) {
      setClothing(data);
    }
  };

  const getJewelry = async () => {
    const { data, error } = await supabase
      .from("products")
      .select()
      .ilike("category", "jewelry");

    if (data) {
      setJewelry(data);
    }
  };

  const getWomensClothing = async () => {
    const { data, error } = await supabase
      .from("products")
      .select()
      .ilike("category", "women's clothing");

    if (data) {
      setWomensClothing(data);
    }
  };

  const getElectronics = async () => {
    const { data, error } = await supabase
      .from("products")
      .select()
      .ilike("category", "electronics");

    if (data) {
      setElectronics(data);
    }
  };

  return {
    products,
    getProducts,
    filteredProducts,
    getFilteredProducts,
    singleProduct,
    getSingleProduct,
    clothing,
    getClothing,
    electronics,
    getElectronics,
    jewelry,
    getJewelry,
    womensClothing,
    getWomensClothing,
  };
};
