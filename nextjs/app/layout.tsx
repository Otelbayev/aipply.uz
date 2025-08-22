import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { RootLayoutProps } from "@/types";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aipply Academy",
  description:
    "O‘quv markazimizda Backend, Frontend, Python, Grafik dizayn, Motion dizayn, Interyer va Eksteryer dizayn, Coding Foundation va Kompyuter savodxonligi kurslarini o‘rganing. Karyerangizni bugundan boshlang!",
  icons: {
    icon: "/icon.png",
  },
  keywords:
    "Aipply Academy, IT o‘quv markazi, Sun’iy intellekt kurslari, AI kurslar, Frontend kursi, Backend kursi, Python kursi, Django kursi, React va JavaScript, Grafik dizayn kursi, Motion dizayn kursi, Interyer dizayn, Eksteryer dizayn, Foundation kurslari, Kompyuter savodxonligi, Video montaj kursi, Zamonaviy kasblar, Onlayn ta’lim, O‘zbekiston IT kurslari, Toshkent IT kurslari",
  openGraph: {
    title: "Aipply Academy",
    description:
      "O‘quv markazimizda Backend, Frontend, Python, Grafik dizayn, Motion dizayn, Interyer va Eksteryer dizayn, Coding Foundation va Kompyuter savodxonligi kurslarini o‘rganing. Karyerangizni bugundan boshlang!",
    url: "https://aipply.uz",
    siteName: "Aipply Academy",
    images: [
      {
        url: "https://aipply.uz/share.jpg",
        width: 1200,
        height: 630,
        alt: "Aipply Academy",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aipply Academy",
    description:
      "Aipply Academy - sun'iy intellektga ixtisoslashtirilgan zamonaviy kasblar o'quv markazi!",
    images: ["https://aipply.uz/share.jpg"],
  },
  authors: [{ name: "Aipply Academy" }],
  robots: "index, follow",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={montserrat.className}>{children}</body>
      </html>
    </>
  );
}
