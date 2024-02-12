// import { supabase } from "@/utils/client";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SECRET_KEY!
);

// // List of Products
// export async function getProducts() {
//   const { error, data } = await supabase.from("products").select("*");

//   if (error) {
//     throw new Error();
//   }
//   return data;
// }
