import type React from "react"
import { ThemeProvider } from "@/context/theme-context"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import FAQModal from "@/components/faq/faq-modal"
import AIChat from "@/components/ai-chat/ai-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LeastTrust - Guardians of Your Crown Jewels",
  description: "Protect your firm's data from insider threats and data breaches",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
