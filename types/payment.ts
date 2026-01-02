import { paymentResultSchema } from "@/lib/validators/payment";
import z from "zod";

export type PaymentResult = z.infer<typeof paymentResultSchema>;
