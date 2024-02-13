import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { env } from "@/env"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: {
    template: "devStore - %s",
    default: "devStore",
  },
  description: "The right place for all devs",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ptBR" className={inter.variable}>
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  )
}
