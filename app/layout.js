import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

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

export const metadata = {
  title: "NextShad",
  description: "A template repository with the Next.js + ShandCN Scaffolding created for anyone who doesn't want to go through the instillation repeatedly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
            <main className="h-[calc(100vh-94px)] overflow-y-auto">
              {children}
            </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
