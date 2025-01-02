import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const moneyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export { moneyFormat };

export function formatPrice(price: number): string {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Untuk menghilangkan desimal
  }).format(price);

  // Menghilangkan "IDR" dan menggantinya dengan "Rp."
  return formattedPrice.replace("IDR", "Rp").trim();
}