import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script"; // Importa next/script
import "./globals.css";
import Navbar from "./shared/components/Navbar/Navbar";
import { OpenHomeAnimation } from "./shared/components/OpenHome/OpenModuleAnimation";
import "@/app/shared/components/OpenHome/animation.scss";

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
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Z3HW89X9HZ" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z3HW89X9HZ');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden dark`}
      >
        <Navbar />
        <OpenHomeAnimation />
        {children}
      </body>
    </html>
  );
}
