import type React from "react"
import "@/app/globals.css"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap", // Improved font loading
})

export const metadata = {
  title: "John Cortés",
  description:
    "Personal portfolio of John Cortés, a developer specializing in Data Science and Artificial Intelligence",
  keywords: "AI, Machine Learning, Data Science, Developer, Portfolio, John Cortés",
  authors: [{ name: "John Cortés" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preload critical assets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/logo_johncp.png" type="image/png" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}