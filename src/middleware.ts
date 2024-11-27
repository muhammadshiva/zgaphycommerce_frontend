export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/artwork/:id/checkout", "/booking-success/:path*", "/dashboard"],
};