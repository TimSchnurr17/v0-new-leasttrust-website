import type React from "react"
import { ThemeProvider } from "@/context/theme-context"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import FAQModal from "@/components/faq/faq-modal"
import AIChat from "@/components/ai-chat/ai-chat"

// Premium Font Configuration
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "LeastTrust - Insider Threat Advisory | Protect Your Crown Jewels",
  description: "Protect the 90% of your data that drives your business. Insider threat maturity assessments, proprietary data protection, and trade secret security for Fortune 500 companies.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  generator: "v0.app",
  keywords: ["insider threat", "trade secret protection", "proprietary data", "IP protection", "CMMI assessment", "data security"],
  openGraph: {
    title: "LeastTrust - Insider Threat Advisory",
    description: "Protect the 90% of your data that drives your business.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorantGaramond.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased bg-ivory-50 text-slate-900`}>
        <ThemeProvider>
          <div className="app app--loaded">
            <Header />
            <main>{children}</main>
            <Footer />
            <FAQModal />
            <AIChat />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
