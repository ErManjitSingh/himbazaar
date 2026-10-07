import { z } from "zod";

export const loginSchema = z.object({
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit mobile number")
    .max(10)
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
});

export const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
});

export const otpSchema = z.object({
  otp: z.string().length(6, "Enter the 6-digit OTP"),
});

export const addressSchema = z.object({
  label: z.string().min(1, "Label is required"),
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid mobile number"),
  line1: z.string().min(5, "Address is required"),
  line2: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().regex(/^\d{6}$/, "Enter a valid 6-digit PIN code"),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const sellerRegistrationSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid mobile number"),
  email: z.string().email("Enter a valid email"),
  village: z.string().min(2, "Village / town is required"),
  district: z.string().min(2, "District is required"),
  category: z.string().min(1, "Select a category"),
  description: z.string().min(20, "Tell us a little about your products"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email"),
});

export const trackOrderSchema = z.object({
  orderNumber: z.string().min(5, "Enter your order number"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter registered mobile number"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type AddressInput = z.infer<typeof addressSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type SellerRegistrationInput = z.infer<typeof sellerRegistrationSchema>;
