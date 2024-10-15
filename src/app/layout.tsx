import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./shared/components/Navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lumarsoft | Desarrollo Web a Medida",
  description:
    "Lumarsoft es una empresa especializada en soluciones de desarrollo web a medida para impulsar tu negocio.",
  keywords:
    "desarrollo web, software a medida, soluciones web, aplicaciones web, Lumarsoft",
  robots: "index, follow",
  authors: [{ name: "Lumarsoft" }],
  openGraph: {
    title: "Lumarsoft | Desarrollo Web a Medida",
    description:
      "Descubre las soluciones personalizadas de Lumarsoft para llevar tu presencia digital al siguiente nivel.",
    url: "https://www.lumarsoft.com", // Asegúrate de cambiar a tu dominio real
    siteName: "Lumarsoft",
    images: [
      {
        url: "/logo.png", // Asegúrate de tener una imagen representativa
        width: 800,
        height: 600,
        alt: "Lumarsoft Logo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden dark`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
