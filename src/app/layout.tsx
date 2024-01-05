import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Condensed, Rubik } from 'next/font/google'
import localFont from 'next/font/local'

const roboto = Roboto_Condensed({ subsets: ['latin'], variable: "--font-roboto" });
const rubik = Rubik({ subsets: ['latin'], variable: "--font-rubik" });
const pattanakarn = localFont({
  src: [
    {
      path: '../../public/fonts/Pattanakarn-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pattanakarn-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Pattanakarn-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pattanakarn-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: "--font-pattanakarn"
});

export const metadata: Metadata = {
  title: 'Zenify',
  description: 'An optimized Minecraft PvP Client!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${rubik.variable} ${pattanakarn.variable}`}>
        {children}
      </body>
    </html>
  )
}
