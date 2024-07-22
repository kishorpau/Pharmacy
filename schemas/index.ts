import * as z from "zod";
export const ShopSchema = z.object({
  name: z.string(),
  password: z.string(),
});
