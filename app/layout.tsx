import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnapGrab — Smart Deals, Honest Reviews",
  description: "We find the best Amazon deals and review top products so you save time and money.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script>
          (function(){var a=document.createElement("script");
          a.type="text/javascript";a.async=true;
          a.src="https://ads.alicdn.com/publisher/loader.js?publisherId=1766765304";
          var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(a,s);
          })();
        </script>
        {children}
      </body>
    </html>
  );
}
