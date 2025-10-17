import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Poiret_One, Cinzel, Dancing_Script, League_Spartan, Cinzel_Decorative } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poiretOne = Poiret_One({
  variable: "--font-poiret-one",
  subsets: ["latin"],
  weight: ["400"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dreamAvenue = localFont({
  src: '../../public/fonts/FontsFree-Net-Dream-Avenue.ttf',
  variable: '--font-dream-avenue',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  variable: '--font-dancing-script',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const spartan = League_Spartan({
  variable: '--font-spartan',
  subsets: ['latin'],
  weight: ['300', '400'],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: '--font-cinzel-decorative',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export const metadata: Metadata = {
  title: "Alishaan",
  description: "Alishaan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${poiretOne.variable} ${cinzel.variable} ${dreamAvenue.variable} ${dancingScript.variable} ${spartan.variable} ${cinzelDecorative.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
