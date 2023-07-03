import { Inter } from "next/font/google"
import "@/styles/globals.css"

import Nav from "@/components/Nav"
import Provider from "@/components/Provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MR",
  description: "MR Notes created by kaiowsz",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"/>
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}