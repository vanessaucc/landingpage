import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crust Pizza Co. — Made-from-Scratch Pizzas",
  description:
    "Home of the Chicago-Style Thin Crust Pizza. Order online or find a location near you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Dancing+Script:wght@600&display=swap"
          rel="stylesheet"
        />

        {/* Flaticon Icons 🔥 */}
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}