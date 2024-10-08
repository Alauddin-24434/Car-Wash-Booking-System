import { boolean, z } from "zod";

const zodUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.string(),
    role: z.enum(["user", "admin"]),
    address: z.string(),
    isDeleted:boolean(),
  }),
});

export const zodUserValidations = {
  zodUserValidationSchema,
};
