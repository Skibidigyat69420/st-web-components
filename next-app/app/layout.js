import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import RouteChangeListener from "./RouteChangeListener";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SoundThesis | Accessible Wealth Management",
  description: "Institutional-grade wealth management powered by accessible research, fiduciary transparency, and behavioral coaching.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <RouteChangeListener />
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js" strategy="afterInteractive" />
        <Script src="/scripts/main.js" strategy="afterInteractive" />
        <Script src="/scripts/faq.js" strategy="lazyOnload" />
        <Script src="/scripts/calculators.js" strategy="lazyOnload" />
        <Script src="/scripts/widgets.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
