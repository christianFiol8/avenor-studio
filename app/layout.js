import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Avenor Studio — Soluciones digitales para empresas",
  description:
    "Desarrollamos sitios web, aplicaciones, automatizaciones con IA y software a medida para ayudar a los negocios a crecer.",
  openGraph: {
    title: "Avenor Studio — Soluciones digitales para empresas",
    description:
      "Desarrollamos sitios web, aplicaciones, automatizaciones con IA y software a medida para ayudar a los negocios a crecer.",
    url: "https://avenor.studio",
    siteName: "Avenor Studio",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avenor Studio — Soluciones digitales para empresas",
    description:
      "Desarrollamos sitios web, aplicaciones, automatizaciones con IA y software a medida para ayudar a los negocios a crecer.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}