import { shippingAddressSchema } from "@/lib/validators/shipping-adress";
import z from "zod";

export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
