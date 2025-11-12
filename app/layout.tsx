import type React from "react"
import { ThemeProvider } from "@/context/theme-context"
import "./globals.css"
import type { Metadata } from "next"
// Temporarily disabled Google Fonts import for build compatibility
// import { Inter } from "next/font/google"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import FAQModal from "@/components/faq/faq-modal"
import AIChat from "@/components/ai-chat/ai-chat"

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LeastTrust - Guardians of Your Crown Jewels",
  description: "Protect your firm's data from insider threats and data breaches",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans">
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
