import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../globals.css'
import Footer from './Footer'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zenify Client',
  description: 'An optimized Minecraft PvP Client!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
