import type { Metadata, Viewport } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rumbo a Tomorrowland · FAQ",
  description:
    "Las dudas que más se repiten en el grupo Rumbo a TML, respondidas por quienes ya han ido. Tomorrowland Bélgica 2027. Proyecto no oficial.",
};

export const viewport: Viewport = {
  themeColor: "#0b0918",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cinzel.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
